---
title: "ObjectLoadData"
description: "读档时单个对象的数据容器：四个方法把「读头、建结构体、读槽位、填回字段」分成四步，并提供七个按成员编号查值的入口。"
---

# ObjectLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class ObjectLoadData`
**Base:** 无
**File:** `TaleWorlds.SaveSystem.Load/ObjectLoadData.cs`

## 概述

[ObjectHeaderLoadData](../ObjectHeaderLoadData) 建好空壳之后，本类负责把字节真正填进去。它被 [LoadContext](../LoadContext) 以四步固定顺序驱动（`LoadContext.cs:47-50`）：`InitializeReaders` 从 folder 里读类型身份、建子结构体占位、按 entry 扩展名把属性与字段分成两张表（`:91-125`）；`CreateStruct` 为每个子结构体建壳（`:127-139`）；`Read` 让每个槽位读出原始数据（`:149-165`）；`FillObject` 把值写回字段与属性（`:167-181`）。子结构体在每一步都先被处理，**所以结构体成员比宿主对象早一步就绪**。它是本模块少数 `public` 的读侧类，mod 可以在回调里直接用它的七个查询方法。

## 心智模型

把它想成**一张分两栏的装配图**：左边是属性栏、右边是字段栏，每栏按成员编号登记一个槽位。装配分四步——先按图取料（`InitializeReaders`）、再把料里嵌套的小盒组装好（`CreateStruct`）、然后每个槽位各自读数（`Read`）、最后把数装到对应位置（`FillObject`）。推论有四条：

1. **槽位是按 entry 的扩展名分栏的，不是按声明顺序。** `InitializeReaders` 遍历 `saveEntryFolder.ChildEntries`，`SaveEntryExtension.Property` 的进 `_propertyValues`（`:104`）、`.Field` 的进 `_fieldValues`（`:111`）。所以**两个栏的相对顺序由存档字节里的 entry 顺序决定**。
2. **四个查询方法用 `SingleOrDefault`，重复编号会抛。** `:36`、`:41`、`:46`、`:51`、`:56` 全是 `_xxx.SingleOrDefault(predicate)`——**一旦存档里出现两个同 `LocalSaveId` 的成员，`SingleOrDefault` 抛 `InvalidOperationException`**。想同时按层级和局部号查的只有 `GetMemberValueBySaveId(int, int)`（`:41`）和 `HasMember(int, int)`（`:66`）两个。
3. **`Read` 与 `FillObject` 是两个趟。** `Read`（`:149`）里对 `SavedMemberType.CustomStruct` 的槽位有专门处理（`:158`）——把子结构体的对象灌进去；`FillObject`（`:167`）才真正写字段和属性。所以**在 `Read` 阶段任何一个成员值都还没落到字段上**。
4. **子结构体的处理顺序贯穿四步。** `CreateStruct`（`:135`）、`FillCreatedObject`（`:143`）、`Read`（`:151`）、`FillObject`（`:169`）**每一步开头都先 `foreach` 一遍 `_childStructs`**。这是「结构体成员比宿主早一步就绪」的机制来源，但也意味着**子结构体在宿主成员的同一趟里就已经是完成态**。

## 如何使用

### 怎么拿到它

三个正规入口：

- 读档主线：[LoadContext](../LoadContext) 的静态 `CreateLoadData`（`LoadContext.cs:40`）用 `new ObjectLoadData(header)`（`:45`）——这是**唯一在并行填值阶段用的那个构造器**。
- 回调里：[LoadCallbackInitializator](../LoadCallbackInitializator) 的 `GetObjectLoadData`（`:107`）在签名带 `ObjectLoadData` 时现场造一个并缓存。
- 你自己也可以用另一个构造器 `ObjectLoadData(LoadContext context, int id)`（`:69`）——它**不绑定头**，所以 `TypeDefinition` 与 `Target` 要自己补。模块内部两处在用：`ContainerLoadData.cs:65` 和 `ObjectLoadData.cs:99`。

### 最小可运行片段

```csharp
// ObjectLoadData 是 public，可以在初始化回调里直接收到
using TaleWorlds.SaveSystem;
using TaleWorlds.SaveSystem.Load;

// 回调签名带 ObjectLoadData 就会拿到本对象的数据容器
public void AfterLoaded(MetaData metaData, ObjectLoadData objectLoadData)
{
    // 三个按成员编号查询的入口（SingleOrDefault，重复编号会抛）
    object byMember  = objectLoadData.GetDataBySaveId(3);            // ObjectLoadData.cs:34
    object byField   = objectLoadData.GetFieldValueBySaveId(3);      // :49
    object byProperty= objectLoadData.GetPropertyValueBySaveId(3);   // :54
    bool exists      = objectLoadData.HasMember(3);                  // :59

    // 分层级的那个才是完整身份（TypeLevel + LocalSaveId）
    object precise   = objectLoadData.GetMemberValueBySaveId(3, 1);  // :39
    Debug.Print("字段 " + byField + " / 属性 " + byProperty, 0);
    Debug.Print("成员存在 = " + exists + "，精确查 = " + precise, 0);
}
```

### 用它最容易踩的一条

**`GetDataBySaveId` / `GetFieldValueBySaveId` 这些查询用的是 `SingleOrDefault`，不是 `FirstOrDefault`。** 所以**同一个对象里出现两个相同的 `LocalSaveId`（不论 `TypeLevel` 是否相同）就会抛 `InvalidOperationException: Sequence contains more than one matching element`**（`ObjectLoadData.cs:36`、`:41`、`:46`、`:51`、`:56`）。常见触发方式是给同一个类的新旧字段复用了编号——`SaveableField(1)` 和一个基类里的 `SaveableField(1)` 在存档里就是两个 `LocalSaveId == 1` 的成员。**这时应该改编号，而不是改查询方式。** 只有带 `typeLevel` 的两个重载（`:41`、`:66`）能区分层级。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Id` | `public int Id { get; private set; }` | 对象编号，两个构造器都赋（`:71` / `:81` 区间）。用于回调与 `LoadCallbackInitializator` 的缓存键。 |
| `Target` | `public object Target { get; private set; }` | 要被填值的实例。与 [ObjectHeaderLoadData](../ObjectHeaderLoadData) 的 `Target` 指向同一个对象。**`FillObject` 就是往它身上写字段与属性。** |
| `Context` / `TypeDefinition` | `public LoadContext Context { get; private set; }`（`:30`）/ `public TypeDefinition TypeDefinition { get; private set; }`（`:32`） | 读档上下文与类型定义。`CreateStruct` 用 `TypeDefinition != null` 作为是否递归的门槛（`:130`）。**头绑定构造器（`:79`）才会填这两个**。 |
| `_propertyValues` / `_fieldValues` | `private List<PropertyLoadData> _propertyValues;`（`:14`）/ `private List<FieldLoadData> _fieldValues;`（`:16`） | 两张分栏表。`InitializeReaders` 按 entry 扩展名分别填（`:104`、`:111`），`FillObject` 分别遍历写回（`:173`、`:177`）。**这就是「存档里属性的顺序与字段的顺序互不相关」的载体。** |
| `_memberValues` | `private List<MemberLoadData> _memberValues;` | 两栏的合视图，构造时建空表（`:75`、`:87`）。**`GetDataBySaveId` / `GetMemberValueBySaveId` / `HasMember` 三个查的是它**，所以它们对属性与字段一视同仁。 |
| `_childStructs` | `private List<ObjectLoadData> _childStructs;` | 子结构体的数据容器列表。`InitializeReaders` 先按 `_childStructCount` 建占位（`:97`）再在第二个循环里逐个填充（`:119`）。 |
| 构造器 A | `public ObjectLoadData(ObjectHeaderLoadData headerLoadData)` | `:79-89`。**读档主线路径**：从头部继承 `Id`/`Context`/`TypeDefinition`/`Target`，并初始化三张列表。`LoadContext.CreateLoadData` 用的是它（`LoadContext.cs:45`）。 |
| 构造器 B | `public ObjectLoadData(LoadContext context, int id)` | `:69-77`。**不绑定头**，`TypeDefinition` 与 `Target` 留 null，只有 `Id`/`Context` 赋上。模块内部有两处在用：`ContainerLoadData.cs:65`（给容器里的子结构体建）与本类 `:99`（给自己的子结构体占位填壳）。mod 若自己 new 它，**必须自己补 `TypeDefinition` 与 `Target`**，否则 `CreateStruct`（`:130` 判 `TypeDefinition != null`）与 `FillObject`（`:167` 遍历空列表）会静默什么都不做。 |
| `InitializeReaders` | `public void InitializeReaders(SaveEntryFolder saveEntryFolder)` | `:91-125`。读类型身份（`:94`）→ 按 `_childStructCount` 建子结构体占位（`:97`）→ 遍历 `ChildEntries` 按扩展名分栏（`:102`、`:104`、`:111`）→ 第二个循环把子结构体数据灌进占位（`:119`）。**只建结构，不读值。** |
| `CreateStruct` | `public void CreateStruct()` | `:127-139`。`TypeDefinition != null` 才继续（`:130`），然后对每个子结构体建壳（`:135`）。对应写侧 [ObjectSaveData](../ObjectSaveData) 的 `CollectStructs`。 |
| `FillCreatedObject` | `public void FillCreatedObject()` | `:141-147`。只对子结构体做（`:143`）。**宿主对象不需要它**——宿主在 `ObjectHeaderLoadData.CreateObject` 时就建好了。 |
| `Read` | `public void Read()` | `:149-165`。先对每个子结构体 `Read`（`:151`），再遍历 `_memberValues`（`:155`），其中 `SavedMemberType.CustomStruct` 的槽位有专门处理（`:158`）。**这一趟只读出原始数据，不写字段。** |
| `FillObject` | `public void FillObject()` | `:167-181`。先子结构体 `FillObject`（`:169`），再写字段（`:173`）与属性（`:177`）。**这是唯一真正把值写进 `Target` 的一步。** |
| `GetDataBySaveId` | `public object GetDataBySaveId(int localSaveId)` | `:34-37`。`_memberValues.SingleOrDefault(...)` 按局部号找（属性字段一视同仁），命中则 `GetDataToUse()`。**重复编号抛 `InvalidOperationException`。** |
| `GetMemberValueBySaveId(int, int)` | `public object GetMemberValueBySaveId(int localSaveId, int typeLevel)` | `:39-42`。**同时匹配 `LocalSaveId` 与 `TypeLevel`**（`:41`）——这是唯一能跨基类层级的精确查法，对应 [MemberTypeId](../MemberTypeId) 的两级身份。 |
| `GetMemberValueBySaveId(int)` | `public object GetMemberValueBySaveId(int localSaveId)` | `:44-47`。只看局部号的不精确版本，语义与 `GetDataBySaveId` 几乎相同。 |
| `GetFieldValueBySaveId` / `GetPropertyValueBySaveId` | `public object GetFieldValueBySaveId(int localSaveId)`（`:49`）/ `public object GetPropertyValueBySaveId(int localSaveId)`（`:54`） | **分栏查**：只在自己的栏里 `SingleOrDefault`。同名不同栏各有一个，所以「字段 3」和「属性 3」互不干扰。 |
| `HasMember` | `public bool HasMember(int localSaveId)`（`:59`）/ `public bool HasMember(int localSaveId, int typeLevel)`（`:64`） | 存在性检查，用的是 `Any` 而非 `SingleOrDefault`，**所以重复编号不会抛**。想知道「有没有」用这两个，想取值用上面那些。 |

## 真实示例

四步协议与 [LoadContext](../LoadContext) 的调用顺序严格对应（`LoadContext.cs:45-50`）：

```csharp
ObjectLoadData objectLoadData = new ObjectLoadData(header);
SaveEntryFolder childFolder = rootFolder.GetChildFolder(new FolderId(i, SaveFolderExtension.Object));
objectLoadData.InitializeReaders(childFolder);   // 读身份、建子结构体占位、槽位分栏
objectLoadData.FillCreatedObject();              // 子结构体建壳
objectLoadData.Read();                           // 槽位读原始数据
objectLoadData.FillObject();                     // 写回字段与属性
```

按 entry 扩展名分栏（`ObjectLoadData.cs:102-117`）：

```csharp
foreach (SaveEntry childEntry in saveEntryFolder.ChildEntries)
{
    if (childEntry.Id.Extension == SaveEntryExtension.Property)
    {
        // → 进 _propertyValues
    }
    else if (childEntry.Id.Extension == SaveEntryExtension.Field)
    {
        // → 进 _fieldValues
    }
}
```

mod 视角的对照实验——`Any` 与 `SingleOrDefault` 的差别就是「重复编号会不会炸」：

```csharp
// 有两个 LocalSaveId == 3 的成员时：
//   objectLoadData.HasMember(3)              → true（Any，不抛）
//   objectLoadData.GetDataBySaveId(3)        → 抛 InvalidOperationException（SingleOrDefault）
//   objectLoadData.GetMemberValueBySaveId(3, 1) → 只有在 TypeLevel 也唯一时才安全
// 结论：编号冲突时先改编号，不要指望换个查询方法绕过去。
Debug.Print("HasMember 用 Any，查询用 SingleOrDefault —— 冲突时前者不炸后者炸", 0);
```

## 依赖关系

- 驱动者：[LoadContext](../LoadContext) 的 `CreateLoadData`（四步顺序在这里定）
- 宿主与建壳：[ObjectHeaderLoadData](../ObjectHeaderLoadData)（构造器 A 的数据来源，`Target` 同一个对象）
- 字节来源：[ArchiveDeserializer](../ArchiveDeserializer)、[SaveEntryFolder](../SaveEntryFolder)、[SaveEntry](../SaveEntry)、[EntryId](../EntryId)、[FolderId](../FolderId)、[SaveEntryExtension](../SaveEntryExtension)（分栏依据）
- 槽位基类：[VariableLoadData](../VariableLoadData)（`GetDataToUse` 在这里实现）、[MemberLoadData](../MemberLoadData)、[FieldLoadData](../FieldLoadData)、[PropertyLoadData](../PropertyLoadData)
- 标签与身份：[SavedMemberType](../SavedMemberType)（`:158` 判 CustomStruct）、[MemberTypeId](../MemberTypeId)、[SaveId](../SaveId)、[TypeDefinition](../TypeDefinition)
- 回调侧：[LoadCallbackInitializator](../LoadCallbackInitializator)（可能现场造出本类）
- 写侧对偶：[ObjectSaveData](../ObjectSaveData)（`CollectStructs` / `CollectMembers` 与本类四步一一对应）
- 容器侧对偶：[ContainerLoadData](../ContainerLoadData)
- 体系全貌：../../../architecture/save-system