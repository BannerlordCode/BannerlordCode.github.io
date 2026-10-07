---
title: "TypeDefinition"
description: "类与结构体定义的真正实现：收集成员、算层级、判重复、收回调，并用 IsClassDefinition 决定一个类型在存档里是「原件」还是「另一个条目里的盒子」。"
---

# TypeDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class TypeDefinition : TypeDefinitionBase`
**Base:** `TypeDefinitionBase`
**File:** `TaleWorlds.SaveSystem.Definition/TypeDefinition.cs`

## 概述

[DefinitionContext](../DefinitionContext) 收集完所有 [SaveableTypeDefiner](../SaveableTypeDefiner) 之后，会对每一个类与结构体定义调本类的三个收集方法：`CollectInitializationCallbacks()` 沿基类链把带 [LoadInitializationCallback](../LoadInitializationCallback) / [LateLoadInitializationCallback](../LateLoadInitializationCallback) 的方法挑出来（`:91-113`）、`CollectProperties()` 把带 [SaveablePropertyAttribute](../SaveablePropertyAttribute) 的属性登记成 [PropertyDefinition](../PropertyDefinition)（`:115-146`）、`CollectFields()` 同样处理字段（`:175-232`）。**这一步决定了「这个类型在存档里长什么样」**，而绝大多数 mod 会忽略它——直到成员保存不下来或读不回来。255 行，是定义层里最实质的一个类。

## 心智模型

把它想成**给一栋楼做登记**：逐层上楼找有标记的房间，给每个房间发一个「层号 + 房号」的牌子，牌子重了就把错误记进一本错题本——**不拆楼，只是记账**。推论有五条：

1. **成员身份取自「声明处」而非「归属类型」。** `CollectProperties` 用 `TypeDefinitionBase.GetClassLevel(propertyInfo.DeclaringType)`（`:124`），`CollectFields` 用 `fieldInfo.DeclaringType`（`:184`）。**所以同一套 `LocalSaveId` 能在基类与子类之间安全复用**——它们的层号不同，[MemberTypeId](../MemberTypeId) 的两级身份不会顶掉。
2. **牌号重了不是异常，是错题。** `_properties.ContainsKey(memberTypeId)`（`:127`）与 `_fields.ContainsKey(memberTypeId)`（`:187`）命中时走 `_errors.Add(...)`。这些错误被 [DefinitionContext](../DefinitionContext) 聚合成 `GotError`，而 [SaveManager](../SaveManager) 一看到它**整个拒绝存档**。**症状是「保存直接失败」，不是「那个字段没保存」。**
3. **回调顺序是「派生类先」。** `CollectInitializationCallbacks` 沿 `BaseType` 往上走（`:94`、`:111`），但每找到一个就用 `Insert(0, methodInfo)`（`:103`、`:107`）插到**最前面**。基类先被收集、后被插到前面，于是最终顺序是**最派生的一层在最前**。这与「基类构造先跑」的直觉相反——[LoadCallbackInitializator](../LoadCallbackInitializator) 按列表顺序调用，所以**派生类的初始化回调先于基类**。
4. **结构体定义不收回调。** [DefinitionContext](../DefinitionContext) 对 root 与 class 定义都调了 `CollectInitializationCallbacks`（`:240`、`:246`），但对结构体定义的并行循环里**只有 `CollectProperties` 与 `CollectFields`**（`:256-257`）。所以**给结构体打初始化回调 Attribute 不会有任何效果**。
5. **`CustomFields` 是第二轮补登记。** 收集字段方法的末尾还有一个独立循环，遍历的正是 `CustomFields`（`TypeDefinition.cs:206`）：按名字把字段找出来（第 210 行）直接用它的 `DeclaringType` 算层级（第 211 行）。**所以给第三方类型登记的私有字段是在带 Attribute 的成员之后处理的。**

## 如何使用

### 怎么拿到它

**不要自己 `new`。** 三个正规入口：

- 登记侧：[SaveableTypeDefiner](../SaveableTypeDefiner) 的 `AddClassDefinition` / `AddStructDefinition`（helper 内部 `new TypeDefinition(type, _saveBaseId + saveId, resolver)`，`:89`）与 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner)。
- 取定义侧：`DefinitionContext.GetClassDefinition(Type)`（`DefinitionContext.cs:314`）与 `GetStructDefinition(Type)`（`:475`）。
- 读档侧：[ObjectHeaderLoadData](../ObjectHeaderLoadData) 的 `CreateObject` 用 `TryGetTypeDefinition(SaveId) as TypeDefinition`（`:42`）。

**mod 用得最多的是只读属性**：`MemberDefinitions`（`:27`）、`PropertyDefinitions`（`:41`）、`FieldDefinitions`（`:43`）、`IsClassDefinition`（`:35`）、`Errors`（`:33`）、以及两个回调集合（`:29`、`:31`）。

### 最小可运行片段

```csharp
using System;
using System.Reflection;
using TaleWorlds.SaveSystem.Definition;

// ① 层级怎么来的：取自成员的 DeclaringType，不是归属类型
//   同一套 LocalSaveId = 1：
//     基类 A 的字段 → MemberTypeId(2, 1)      ← A 直接继承 object
//     子类 B 的字段 → MemberTypeId(3, 1)      ← B 继承 A
//   所以两个 LocalSaveId 相同也不会撞车。

// ② 查成员定义（读档侧 [FieldLoadData] 走的就是这两个）
// MemberTypeId id = new MemberTypeId(2, 1);
// PropertyDefinition pd = typeDefinition.GetPropertyDefinitionWithId(id);   // 查不到返回 null
// FieldDefinition fd = typeDefinition.GetFieldDefinitionWithId(id);        // 同上

// ③ 判定走哪条存档路线
Debug.Print("类 IsClassDefinition=true  → 槽位写对象/容器引用", 0);
Debug.Print("结构体 IsClassDefinition=false → 槽位只写「另一个条目里的编号」", 0);

// ④ 重复牌号不是异常，是进错题本 → 最终整局拒绝存档
IEnumerable<string> errs = typeDefinition.Errors;
Debug.Print("牌号冲突请看 Errors，不是看异常", 0);
```

### 用它最容易踩的一条

**给基类与子类用了同一个 `LocalSaveId`，正常；但如果两个成员声明在**同一个**类型里用了同一个 `LocalSaveId，整局存档功能会失效——不是那一个字段的问题。** `CollectFields` 发现重复后只 `_errors.Add`（`:187-198`），然后 [DefinitionContext](../DefinitionContext) 把它收进 `Errors`，[SaveManager](../SaveManager) 的 `Save` 一看到 `GotError` 就直接返回 `SaveOutput.CreateFailed`、**一个字节都不写**。而且 `_errors` 是静态收集的、不抛异常，所以你在保存代码里找不到任何线索。**正确排查姿势：启动后先枚举 `DefinitionContext.Errors`，它为空再说别的。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `IsClassDefinition` | `public bool IsClassDefinition => _isClass;` | `:35`。**全存档系统最常被判断的一个值**：`is TypeDefinition { IsClassDefinition: false }` 出现在写侧 [ObjectSaveData](../ObjectSaveData) `:108` 与 [ElementSaveData](../ElementSaveData) `:22`。它在构造器里由 `base.Type.IsClass` 定死（`:48`）——**代表结构体的定义必然为 false，代表类的必然为 true**。 |
| `MemberDefinitions` | `public List<MemberDefinition> MemberDefinitions { get; private set; }` | `:27`。属性与字段的合集，按收集顺序追加（`:142`、`:202`、`:229`）。[ObjectSaveData](../ObjectSaveData) 的 `CollectStructs` / `CollectMembers` 遍历它，容器侧也是。 |
| `PropertyDefinitions` / `FieldDefinitions` | `public Dictionary<MemberTypeId, PropertyDefinition>.ValueCollection PropertyDefinitions => _properties.Values;`（`:41`）/ `... FieldDefinitions => _fields.Values;`（`:43`） | 两个**只读集合视图**，不给索引器也不给 `Add`。`[ObjectSaveData](../ObjectSaveData)` 的构造器只用它们的 `.Count` 定字典容量（`:64-65`）。真正的按编号查表在 `GetPropertyDefinitionWithId` / `GetFieldDefinitionWithId`。 |
| `Errors` | `public IEnumerable<string> Errors => _errors.AsReadOnly();` | `:33`。**定义期错题本**。重复编号往里写字符串（`:129`、`:189`、`:216`）。最终被 [DefinitionContext](../DefinitionContext) 聚合、被 [SaveManager](../SaveManager) 用来拒绝存档。 |
| `CustomFields` | `public List<CustomField> CustomFields { get; private set; }` | `:37`。给无 Attribute 成员的映射表。`AddCustomField`（`:234`）只往里加一条；真正生效是在收集字段方法的第二个循环里（`TypeDefinition.cs:206`）。并会被闭泛型定义复制过去（`DefinitionContext.cs:401`）。 |
| `CollectObjectsMethod` | `public CollectObjectsDelegate CollectObjectsMethod { get; private set; }` | `:39`。**代码生成注入的子对象收集委托**，由 `InitializeForAutoGeneration` 赋值（`:251-253`）。有它时 [ObjectSaveData](../ObjectSaveData) 的 `GetChildObjects` 直接调它并 return（`ObjectSaveData.cs:363-366`），**跳过反射遍历**。 |
| `InitializationCallbacks` / `LateInitializationCallbacks` | `public IEnumerable<MethodInfo> InitializationCallbacks => _initializationCallbacks;`（`:29`）/ `...LateInitializationCallbacks`（`:31`） | 两个回调集合，[LoadCallbackInitializator](../LoadCallbackInitializator) 读的就是这两个属性（`:37`、`:75`）。**它们不在本类里被调用**，只被读；调用时的签名分档在 [LoadCallbackInitializator](../LoadCallbackInitializator)。 |
| `CheckIfRequiresAdvancedResolving` | `public bool CheckIfRequiresAdvancedResolving(object originalObject)` | `:64-71`。有 resolver 就问它要不要「高级解析」（`:68`），没有就 `false`（`:70`）。[LoadContext](../LoadContext) 的 `Resolve Objects` 阶段用它二选一（`LoadContext.cs:156`）。 |
| `ResolveObject` | `public object ResolveObject(object originalObject)` | `:73-80`。普通解析：有 resolver 就交给它（`:77`），否则原样返回（`:79`）。返回值直接赋给 [ObjectHeaderLoadData](../ObjectHeaderLoadData) 的 `Target`——**所以它可以换实例**，换完之后 `Target != LoadedObject`。 |
| `AdvancedResolveObject` | `public object AdvancedResolveObject(object originalObject, MetaData metaData, ObjectLoadData objectLoadData)` | `:82-89`。高级解析：多拿到 `MetaData` 与本对象的 [ObjectLoadData](../ObjectLoadData)（`:86`），同样可以被换掉实例。 |
| `CollectInitializationCallbacks` | `public void CollectInitializationCallbacks()` | `:91-113`。沿基类链（`:94`、`:111`）逐层取实例方法，只收 `DeclaringType == type` 的（`:99`，避免重复），按两个 Attribute 分进两个列表，**都用 `Insert(0, ...)`**（`:103`、`:107`）。 |
| `CollectProperties` | `public void CollectProperties()` | `:115-146`。取本类型实例属性（`:117`），挑带 Attribute 的（`:121`），按 `DeclaringType` 算层级造 `MemberTypeId`（`:124-125`），**重复则记错（`:127-138`），否则登记并追加到 `MemberDefinitions`（`:141-142`）**。 |
| `CollectFields` | `public void CollectFields()` | `:175-232`。第一轮用 `GetFieldsOfType` 的结果处理带 Attribute 的字段（`:177`、`:181`、`:184-186`，重复记错 `:187`）；**第二轮遍历 `CustomFields` 按名字补登记**（`TypeDefinition.cs:206`）。 |
| `GetFieldsOfType` | `private static IEnumerable<FieldInfo> GetFieldsOfType(Type type)` | `:148-173`。**两趟扫描**：第一趟取本类型的非私有实例字段（`:150`、`:154`）；第二趟沿基类链（`:160`、`:171`）只取 `IsPrivate` 的（`:166`）。**所以基类的私有字段会被收进来，而基类的 protected/internal 不会**（它们属于基类自己的定义）。 |
| `AddCustomField` | `public void AddCustomField(string fieldName, short saveId)` | `:234-237`。只往 `CustomFields` 里加一条记录，**不立即解析名字**。解析发生在 `CollectFields` 第二轮。 |
| `GetPropertyDefinitionWithId` | `public PropertyDefinition GetPropertyDefinitionWithId(MemberTypeId id)` | `:239-243`。`TryGetValue` 查不到返回 `null`。[PropertyLoadData](../PropertyLoadData) 的 `FillObject` 用它，**查不到就整个方法静默跳过**。 |
| `GetFieldDefinitionWithId` | `public FieldDefinition GetFieldDefinitionWithId(MemberTypeId id)` | `:245-249`。同上。[FieldLoadData](../FieldLoadData) 的 `FillObject` 用它。 |

## 真实示例

成员身份取自声明处（`TaleWorlds.SaveSystem.Definition/TypeDefinition.cs:184-186`）：

```csharp
byte classLevel = TypeDefinitionBase.GetClassLevel(fieldInfo.DeclaringType);   // ← DeclaringType
MemberTypeId memberTypeId = new MemberTypeId(classLevel, saveableFieldAttribute.LocalSaveId);
FieldDefinition fieldDefinition = new FieldDefinition(fieldInfo, memberTypeId);
```

牌号重了只记账不抛（`:187-198`）：

```csharp
if (_fields.ContainsKey(memberTypeId))
{
    _errors.Add(string.Concat(new object[6]
    {
        "SaveId ", memberTypeId, " of field ", fieldDefinition.FieldInfo,
        " is already defined in type ", base.Type.FullName
    }));
}
else
{
    _fields.Add(memberTypeId, fieldDefinition);
    MemberDefinitions.Add(fieldDefinition);
}
```

回调用 `Insert(0, ...)` 所以派生的在前（`:94`、`:99`、`:103`）：

```csharp
Type type = base.Type;
while (type != typeof(object))
{
    MethodInfo[] methods = type.GetMethods(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
    foreach (MethodInfo methodInfo in methods)
    {
        if (methodInfo.DeclaringType == type)                    // 避免基类重复收
        {
            if (methodInfo.GetCustomAttributesSafe(typeof(LoadInitializationCallback)).ToArray().Length != 0)
            { _initializationCallbacks.Insert(0, methodInfo); }  // ← 插到最前 ⇒ 最终派生在前
        }
    }
    type = type.BaseType;
}
```

`CustomFields` 第二轮补登记（第 210-212 行，**注意没有判 `field` 为 null**）：

```csharp
FieldInfo? field = base.Type.GetField(name, BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
byte classLevel2 = TypeDefinitionBase.GetClassLevel(field.DeclaringType);   // ← 名字写错会在这里空引用
MemberTypeId memberTypeId2 = new MemberTypeId(classLevel2, saveId);
```

mod 视角的对照实验——三条最容易踩的边界：

```csharp
// ① 基类与子类同 LocalSaveId → 不冲突（层号不同）
// ② 同类型内重复 LocalSaveId → 不抛异常，但整局拒绝存档（看 Errors，不看异常）
// ③ 给结构体打初始化回调 Attribute → 无效（DefinitionContext 对结构体不调 CollectInitializationCallbacks）
Debug.Print("冲突分两种：跨层级安全，同层级致命", 0);
```

## 依赖关系

- 基类：[TypeDefinitionBase](../TypeDefinitionBase)（`Type` / `SaveId` / `TypeLevel` 与 `GetClassLevel`）
- 子类：[StructDefinition](../StructDefinition) 与 [GenericTypeDefinition](../GenericTypeDefinition) —— **两个**，两者都直接继承本类（`StructDefinition.cs:6` 与 `GenericTypeDefinition.cs:5`）；兄弟定义 [InterfaceDefinition](../InterfaceDefinition)、[EnumDefinition](../EnumDefinition)、[GenericTypeDefinition](../GenericTypeDefinition)
- 成员定义产物：[PropertyDefinition](../PropertyDefinition)、[FieldDefinition](../FieldDefinition)、[MemberDefinition](../MemberDefinition)、[MemberTypeId](../MemberTypeId)、[CustomField](../CustomField)
- Attribute 来源：[SaveablePropertyAttribute](../SaveablePropertyAttribute)、[SaveableFieldAttribute](../SaveableFieldAttribute)、[LoadInitializationCallback](../LoadInitializationCallback)、[LateLoadInitializationCallback](../LateLoadInitializationCallback)
- 读档侧消费者：[FieldLoadData](../FieldLoadData)、[PropertyLoadData](../PropertyLoadData)、[ObjectHeaderLoadData](../ObjectHeaderLoadData)、[LoadCallbackInitializator](../LoadCallbackInitializator)、[LoadData](../LoadData) 只持有 `ObjectLoadData`
- 写盘侧消费者：[ObjectSaveData](../ObjectSaveData)（`CollectStructs` / `CollectMembers` / `CollectObjects`）
- 收集时机：[DefinitionContext](../DefinitionContext) 的 `FillWithCurrentTypes`（`:240`、`:246`、`:256`）
- 错误后果：[SaveManager](../SaveManager) 的 `GotError` → `SaveOutput.CreateFailed`
- resolver：[IObjectResolver](../IObjectResolver)（读档期换实例）
- 代码生成：[AutoGeneratedSaveManager](../AutoGeneratedSaveManager)、`InitializeForAutoGeneration`（`:251`）
- 体系全貌：../../../architecture/save-system