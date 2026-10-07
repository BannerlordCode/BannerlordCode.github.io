---
title: "DefinitionContext"
description: "存档的类型注册中心：十一阶段收集全部定义，维护十几张按 Type 与 SaveId 双键索引的表，并在读档期按旧编号重定向类型与成员。"
---

# DefinitionContext

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class DefinitionContext`
**Base:** 无
**File:** `TaleWorlds.SaveSystem.Definition/DefinitionContext.cs`

## 概述

存档身份与成员编号分散在三处、各自可证：**类型身份**由 [TypeSaveId](../TypeSaveId) 承载，登记进本类的两张索引表；**成员编号**由 [TypeDefinitionBase](../TypeDefinitionBase) 的 `GetClassLevel` 与 Attribute 上的 `LocalSaveId` 合成（见 [TypeDefinition](../TypeDefinition) 的 `CollectFields`）；**把两者汇到一处并按阶段编排起来的，是本类**。它在 `FillWithCurrentTypes()`（`:186`）里跑**十一个固定阶段**：先找出相关程序集、把非抽象 [SaveableTypeDefiner](../SaveableTypeDefiner) 实例化，然后依次调 `Initialize` → `DefineBasicTypes` → `DefineClassTypes` → `DefineStructTypes` → `DefineInterfaceTypes` → `DefineEnumTypes` → `DefineRootClassTypes` → `DefineGenericStructDefinitions` → `DefineGenericClassDefinitions` → `DefineContainerDefinitions` → `DefineConflictResolvers`（`:196` 到 `:236`），最后才对每个定义收回调与成员。**它同时是「按 Type 查」与「按 SaveId 查」两套索引的持有者**，而这两套索引在读档期可能会给出不同的答案——那正是本类最微妙的地方。

## 心智模型

把它想成**档案馆的登记处**：手上两张目录卡——按「类型是什么」查，和按「存档里写了几号」查——以及一个「旧号怎么翻译成新号」的对照本。推论有六条：

1. **收集范围只有 SaveSystem 自己和引用了它的程序集。** `GetSaveableAssemblies()`（`:267`）先放入 `SaveableRootClassAttribute` 所在的程序集，再遍历 `AppDomain.CurrentDomain.GetAssemblies()`，**只保留引用了它的那些**。所以一个既不引用 SaveSystem、也不被引用它的程序集里的 definer 永远不会被收集。
2. **definer 必须有无参构造器。** `CollectTypes`（`:293`）用 `Activator.CreateInstance(type2)` 实例化每个非抽象 `SaveableTypeDefiner`——**没有无参构造器就会在启动期抛异常**。
3. **重复登记不是覆盖而是抛。** 所有 `Add*Definition`（如 `:94`）用的都是 `Dictionary.Add`，所以同一个 `Type` 或同一个 `SaveId` 登记两次抛 `ArgumentException`。
4. **查 Type 和查 SaveId 在读档期可能分叉。** `GetTypeDefinition(Type)`（`:305`）是纯查表；而 `TryGetTypeDefinition(SaveId)`（`:335`）**第一步就是查冲突 resolver**，命中就把旧号翻译成新号再查。这就是 [IConflictResolver](../IConflictResolver) 唯一的生效入口。
5. **冲突 resolver 只在读档期生效。** `ShouldResolveConflicts()` 返回的是 `SaveManager` 的 `_isLoading`，所以写档时一律走当前定义。`GetConflictedFieldMemberTypeId`（`:152`）与 `GetConflictedPropertyMemberTypeId`（`:162`）**用 `ref` 原地改写成员编号**，返回的 bool 被调用方 [FieldLoadData](../FieldLoadData) 丢弃。
6. **泛型身份是读档时现场造的。** `TryGetTypeDefinition` 遇到 `GenericSaveId` 会逐个解析实参、`MakeGenericType`、现场 `new GenericTypeDefinition` 并收三件套，再按 `IsClassDefinition` 注册进类表或结构表（`:347-372`）。**任一实参解析不出来就返回 null**，不是异常。

## 如何使用

### 怎么拿到它

**三条路径，其中两条是引擎内部做的：**

- **全局缓存**：`SaveManager.InitializeGlobalDefinitionContext()`（`SaveManager.cs`）新建一个并调 `FillWithCurrentTypes()`，存进 `SaveManager._definitionContext`。之后 `SaveManager.Save` 复用它。
- **读档专用**：`SaveManager.Load` **每次都新建一个**（见 [SaveManager](../SaveManager)），不复用保存时的缓存——所以读档用的永远是「当前版本的定义表」。
- **自查**：`SaveManager.CheckSaveableTypes()` 反射扫**全部**程序集，把「带 Saveable Attribute 但类型本身没定义」的收集成 `List<Type>` 返回（**不抛错**）。这是你该用的第一个工具。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem;
using TaleWorlds.SaveSystem.Definition;

// 建表（正规入口，由 SaveManager 内部做）
SaveManager.InitializeGlobalDefinitionContext();

// 自查：哪些带 Attribute 的类型没有定义 —— 返回列表，不抛错
System.Collections.Generic.List<Type> missing = SaveManager.CheckSaveableTypes();
Debug.Print("缺定义的类型数 = " + missing.Count, 0);
foreach (Type t in missing) { Debug.Print("  缺定义: " + t.FullName, 0); }

// 两套索引查同一件事
// 按运行时类型：内部查表，纯查
// 按存档编号：读档期可能先被 resolver 重定向
// TypeDefinitionBase byType = ...GetTypeDefinition(typeof(Hero));
// TypeDefinitionBase byId   = ...TryGetTypeDefinition(new TypeSaveId(330001));

// 冲突 resolver 的两个改写入口都只读档期生效，且是 ref 原地改写
Debug.Print("ShouldResolveConflicts() == _isLoading，所以写档时 resolver 一律不生效", 0);
```

### 用它最容易踩的一条

**注册号的唯一性由 `Dictionary.Add` 本身隐式保证**（`_classDefinitionsWithId.Add(classDefinition.SaveId, classDefinition)`，`DefinitionContext.cs:97`），**撞号即在那一行抛重复键异常（`ArgumentException`，由 `Dictionary.Add` 抛出，源码里没有显式写这个类型），而栈里看不出是哪个号撞了哪个号。** 所有 `Add*Definition` 都是 `.Add`，`Type` 与 `SaveId` 两张表各写一次（`:96` 与 `:97` 是一对）。所以 mod 把自己的 `saveBaseId` 选到和官方重叠时，`FillWithCurrentTypes()` 在 `DefineClassTypes` 阶段就炸，错误信息只是「An item with the same key has already been added」——**没有任何一行告诉你冲突的是哪个类型**。相比之下成员编号撞了至少有错题本（[TypeDefinition](../TypeDefinition) 的 `Errors`），**类型编号撞了连错题本都没有**。所以 `saveBaseId` 是一次性选定的永久协议。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GotError` | `public bool GotError => _errors.Count > 0;` | `:57`。**整个存档功能的总闸**：[SaveManager](../SaveManager) 的 `Save` 一看到它就返回 `SaveOutput.CreateFailed`，**一个字节都不写**。错误来源是各 [TypeDefinition](../TypeDefinition) 的 `Errors`（重复成员编号）。 |
| `Errors` | `public IEnumerable<string> Errors => _errors.AsReadOnly();` | `:59`。错题本只读视图。`FillWithCurrentTypes` 里从 root（串行）、class（并行 `:249`）、struct（并行 `:258`）三处汇总。**排查成员编号冲突就看它。** |
| `FillWithCurrentTypes` | `public void FillWithCurrentTypes()` | `:186-265`。**十一阶段的编排者**：取程序集（`:188`）、收集 definer（`:192`）、依次调十一个 `Define*`（`:196`-`:236`）、再收回调与成员（`:240`-`:258`）、最后找并初始化代码生成的 save manager（`:263-264`）。**阶段顺序不可调换**——容器依赖元素类型已定义。 |
| `GetSaveableAssemblies` | `private Assembly[] GetSaveableAssemblies()` | `:267-291`。**只收 SaveSystem 自己 + 引用了它的程序集**。所以「我的程序集没被扫到」的第一嫌疑就是它没引用 SaveSystem。 |
| `CollectTypes` | `private void CollectTypes(Assembly assembly)` | `:293-303`。对每个非抽象 `SaveableTypeDefiner` 调 `Activator.CreateInstance` 实例化（`:299`）。**所以 definer 必须有无参构造器。** |
| `AddConflictResolver` | `internal void AddConflictResolver(TypeSaveId saveId, IConflictResolver conflictResolver)` | `:142-150`。先 `GetClassDefinition(resolver.GetNewType())`，**拿不到就静默不注册**（`:144`）——一个写错的 resolver 会安静地什么都不做。 |
| `GetConflictedFieldMemberTypeId` | `internal bool GetConflictedFieldMemberTypeId(TypeDefinitionBase typeDefinition, ref MemberTypeId memberTypeId)` | `:152-160`。`ShouldResolveConflicts()` 且 resolver 命中时 `memberTypeId = value.GetFieldMemberWithId(memberTypeId)`（`:156`）**原地改写**并返回 true。 |
| `GetConflictedPropertyMemberTypeId` | `internal bool GetConflictedPropertyMemberTypeId(TypeDefinitionBase typeDefinition, ref MemberTypeId memberTypeId)` | `:162-170`。同上，走 `GetPropertyMemberWithId`（`:166`）。**属性与字段各有一份，互不通用。** |
| `GetTypeDefinition` | `internal TypeDefinitionBase GetTypeDefinition(Type type)` | `:305-312`。按运行时类型纯查总表 `_allTypeDefinitions`，查不到返回 `null`。[ObjectSaveData](../ObjectSaveData) 与 [VariableSaveData](../VariableSaveData) 都用它。 |
| `GetClassDefinition` | `internal TypeDefinition GetClassDefinition(Type type)` | `:314-333`。**容器类型直接返回 null**（`:316`），然后依次查 root → 泛型类 → 类三张表。写盘侧拿类定义的正路。 |
| `TryGetTypeDefinition` | `public TypeDefinitionBase TryGetTypeDefinition(SaveId saveId)` | `:335-385`。**读档期的核心反查**：先查 resolver（`:338`）→ 再查 `_allTypeDefinitionsWithId`（`:344`）→ 若是 `GenericSaveId` 则逐个解析实参、现场 `ConstructTypeFrom`（`:362`）、造 `GenericTypeDefinition` 并收三件套（`:365-367`），按 `IsClassDefinition` 注册（`:369-376`）。**任一实参解析不出来返回 null**（`:360-363`）。 |
| `GetStructDefinition` | `internal TypeDefinition GetStructDefinition(Type type)` | `:475-486`。只查泛型结构体与结构体两张表。 |
| `GetInterfaceDefinition` | `internal InterfaceDefinition GetInterfaceDefinition(Type type)` | `:488-492`。接口定义**单独一张表**，与类分开。 |
| `GetEnumDefinition` | `internal EnumDefinition GetEnumDefinition(Type type)` | `:494-498`。枚举定义单独一张表。 |
| `GetContainerDefinition` | `internal ContainerDefinition GetContainerDefinition(Type type)` | `:500-504`。容器定义单独一张表。 |
| `GetBasicTypeDefinition` | `internal BasicTypeDefinition GetBasicTypeDefinition(Type type)` | `:530-534`。基础类型定义单独一张表。 |
| `ConstructContainerDefinition` | `internal ContainerDefinition ConstructContainerDefinition(Type type, Assembly definedAssembly)` | `:417-468`。`IsContainer` 判形状（`:419`），按形状取元素类型身份（`:421-447`），造 `ContainerSaveId`（`:448`）。**命中 `List` 时额外登记 `MBList<>` 与 `MBReadOnlyList<>`**（`:451-457`）。 |
| `ConstructGenericClassDefinition` | `internal GenericTypeDefinition ConstructGenericClassDefinition(Type type)` | `:387-410`。对开类型身份做**硬转换** `(TypeSaveId)classDefinition.SaveId`（`:391`），再把每个泛型实参的身份换算成 `GenericSaveId`（`:399`）。 |
| `HasDefinition` | `internal bool HasDefinition(Type type)` | `:412-415`。总表里有没有这个类型。[SaveManager](../SaveManager) 的 `CheckSaveableTypes` 用它筛出「带 Attribute 但没定义」的类型。 |
| `GenerateCode` | `public void GenerateCode(SaveCodeGenerationContext context)` | `:560-578`。按类型所在程序集把类定义/结构体定义/容器定义分发给 [SaveCodeGenerationContextAssembly](../SaveCodeGenerationContextAssembly)，最后 `context.FillFiles()`。**这是代码生成阶段的入口，与运行时定义收集是两条线。** |

## 真实示例

十一阶段（`TaleWorlds.SaveSystem.Definition/DefinitionContext.cs:188-236`，节选，阶段顺序原样）：

```csharp
_assemblies = GetSaveableAssemblies();                              // :188 只收 SaveSystem + 引用它的
foreach (Assembly assembly in _assemblies) { CollectTypes(assembly); }   // :192 实例化无参构造的 definer
foreach (var d in _saveableTypeDefiners) { d.Initialize(this); }              // :196
foreach (var d in _saveableTypeDefiners) { d.DefineBasicTypes(); }            // :200
foreach (var d in _saveableTypeDefiners) { d.DefineClassTypes(); }            // :204
foreach (var d in _saveableTypeDefiners) { d.DefineStructTypes(); }           // :208
foreach (var d in _saveableTypeDefiners) { d.DefineInterfaceTypes(); }        // :212
foreach (var d in _saveableTypeDefiners) { d.DefineEnumTypes(); }             // :216
foreach (var d in _saveableTypeDefiners) { d.DefineRootClassTypes(); }         // :220
foreach (var d in _saveableTypeDefiners) { d.DefineGenericStructDefinitions(); }// :224
foreach (var d in _saveableTypeDefiners) { d.DefineGenericClassDefinitions(); } // :228
foreach (var d in _saveableTypeDefiners) { d.DefineContainerDefinitions(); }   // :232
foreach (var d in _saveableTypeDefiners) { d.DefineConflictResolvers(); }      // :236
```

读档期的编号重定向（`:335-348`，节选）：

```csharp
public TypeDefinitionBase TryGetTypeDefinition(SaveId saveId)
{
    if (SaveManager.ShouldResolveConflicts() && _conflictResolvers.TryGetValue(saveId, out var value)
        && value.IsApplicable(SaveManager.OperatingVersion))
    {
        return GetTypeDefinition(value.GetNewType());      // 旧号 → 新类型，直接查表返回
    }
    if (_allTypeDefinitionsWithId.TryGetValue(saveId, out var value2)) { return value2; }
    // ... 若是 GenericSaveId 则逐个解析实参并现场构造
    return null;                                          // :384 查不到就是 null，不抛异常
}
```

冲突成员编号的 `ref` 改写（`:152-160`）：

```csharp
internal bool GetConflictedFieldMemberTypeId(TypeDefinitionBase typeDefinition, ref MemberTypeId memberTypeId)
{
    if (SaveManager.ShouldResolveConflicts() && _conflictResolversWithType.TryGetValue(typeDefinition, out var value)
        && value.IsApplicable(SaveManager.OperatingVersion))
    {
        memberTypeId = value.GetFieldMemberWithId(memberTypeId);   // 原地改写
        return true;
    }
    return false;
}
```

mod 视角的对照实验——两种「撞号」的后果差别很大：

```csharp
// A) 类型编号撞号（两个类型用了同一个 SaveId）
//    → DefinitionContext.Add*Definition 的 Dictionary.Add 抛 ArgumentException
//    → 启动期炸，栈里只有 "same key"，看不出是哪个类型
// B) 成员编号撞号（同一类型内两个成员同 LocalSaveId）
//    → TypeDefinition.Collect* 走 _errors.Add
//    → DefinitionContext.GotError == true
//    → SaveManager.Save 整个返回 CreateFailed，不写盘，但有错题本可看

// 所以「先跑 CheckSaveableTypes() 看有没有缺定义」比「先试保存」更有信息量。
Debug.Print("A 会抛且无信息；B 不抛但整局拒存，且有 Errors 可读", 0);
```

## 依赖关系

- 唯一编排入口：[SaveManager](../SaveManager)（`InitializeGlobalDefinitionContext` 建全局缓存；`Load` 每次新建一个；`CheckSaveableTypes` 是 mod 的自查工具）
- 定义内容的所有者：[TypeDefinition](../TypeDefinition)、[StructDefinition](../StructDefinition)、[InterfaceDefinition](../InterfaceDefinition)、[EnumDefinition](../EnumDefinition)、[GenericTypeDefinition](../GenericTypeDefinition)、[ContainerDefinition](../ContainerDefinition)、[BasicTypeDefinition](../BasicTypeDefinition)
- 身份体系：[SaveId](../SaveId)、[TypeSaveId](../TypeSaveId)、[GenericSaveId](../GenericSaveId)、[ContainerSaveId](../ContainerSaveId)、[ContainerType](../ContainerType)
- 登记侧：[SaveableTypeDefiner](../SaveableTypeDefiner)（十一阶段的重写点）、[SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner)（引擎自带号段）
- 形状判定：[TypeExtensions](../TypeExtensions) 的 `IsContainer`、[CustomField](../CustomField)（无 Attribute 成员的补登记）
- 读档期消费：[ObjectHeaderLoadData](../ObjectHeaderLoadData)、[FieldLoadData](../FieldLoadData)、[PropertyLoadData](../PropertyLoadData)、[VariableLoadData](../VariableLoadData)、[VariableSaveData](../VariableSaveData)
- 写盘期消费：[ObjectSaveData](../ObjectSaveData)、[ContainerSaveData](../ContainerSaveData)、[ElementSaveData](../ElementSaveData)
- 冲突：[IConflictResolver](../IConflictResolver)、[IObjectResolver](../IObjectResolver)、[IEnumResolver](../IEnumResolver)
- 代码生成：[SaveCodeGenerationContext](../SaveCodeGenerationContext)、[SaveCodeGenerationContextAssembly](../SaveCodeGenerationContextAssembly)、[AutoGeneratedSaveManager](../AutoGeneratedSaveManager)
- 体系全貌：../../../architecture/save-system