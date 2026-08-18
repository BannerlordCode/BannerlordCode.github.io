---
title: "ContainerSaveData"
description: "保存阶段为一个容器实例（List/Dictionary/数组/Queue/自定义列表）建立的「序列化节点」：持有 ObjectId、目标对象 Target、容器类型与类型定义，把元素摊平成 ElementSaveData，递归收集内嵌 struct 为子 ObjectSaveData，并算出头部/数据体积后写入 SaveEntryFolder。"
---

# ContainerSaveData

**命名空间：** `TaleWorlds.SaveSystem.Save`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class ContainerSaveData`
**基类/Base：** `System.Object`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Save/ContainerSaveData.cs`

## 一句话职责

保存对象图时，给每一个被序列化的集合实例（List、Dictionary、数组、Queue…）建立一个「节点工作台」：记录它在本次存档里的编号、`Target` 引用与类型定义，把元素摊平成 [ElementSaveData](../ElementSaveData)，递归收集内嵌 struct，并算出它要占多少字节、几个文件夹、几个条目，最后写进存档。

## 概述

`ContainerSaveData` 是保存系统内部为「单个容器实例」建立的临时节点。当 [SaveContext](../SaveContext) 遍历对象图、遇到一个 `List<T>` / `Dictionary<K,V>` / `Array` / `Queue` / 自定义列表字段时，会 `new ContainerSaveData(context, objectId, target, containerType)`：构造函数立刻用 `context.DefinitionContext.GetContainerDefinition(target.GetType())` 取回 [ContainerDefinition](../ContainerDefinition)，取不到就 `throw new Exception("Could not find type definition of container type: " + Type)`。随后三阶段推进——`CollectChildren` 把容器元素包成 `_keys`/`_values` 两组 [ElementSaveData](../ElementSaveData)；`CollectStructs` 把其中 `CustomStruct` 类型的元素递归建子 [ObjectSaveData](../ObjectSaveData)；`CollectStrings` 把所有字符串交给 `context.AddOrGetStringId` 去重。尺寸阶段 `GetHeaderSize`/`GetDataSize`/`GetEntryCount`/`GetFolderCount` 供 [GameData](../GameData) 预分配段大小。写出阶段 `SaveHeaderTo` / `SaveDataFolder` / `SaveTo` 把头与数据写进 `SaveEntryFolder` 与 `BinaryWriter`。它只在保存阶段存在，`internal` 且模组不可构造；加载侧对应 [ContainerLoadData](../ContainerLoadData)。

## 心智模型

把 `ContainerSaveData` 想成存档树里的一个「树枝节点」：整棵对象图是一棵树，根是 `Game`/Campaign，普通对象是树枝，而容器是那种「装着一排子节点的特殊树枝」。它先问定义上下文「我这种容器长啥样、怎么编号」（[ContainerDefinition](../ContainerDefinition)），再把容器里的每个元素包成小包裹（[ElementSaveData](../ElementSaveData)），遇到内嵌 struct 就再分叉出子工作台（[ObjectSaveData](../ObjectSaveData)），最后把自己要占的坑位（字节/文件夹/条目数）报上去，由 [GameData](../GameData) 统一排布后落盘。它是**只写不读**的产出者——保存完即丢弃，不参与加载，也从不持有游戏状态本身（只持有 `Target` 引用）。

**何时用（理解层面）：** 排查「为什么我的 `List<自定义类>` 字段没存进去」「为什么容器体积算错/存档段溢出」「为什么字符串在容器里没去重」时，理解它如何遍历集合、分配编号、递归收集子 struct。

**何时不要用：**
- 不要在模组运行时 `new ContainerSaveData(...)`——它是 `internal`，仅由 [SaveContext](../SaveContext) 在收集对象图时构造，且需要 [ISaveContext](../ISaveContext) 与 `objectId`。
- 不要在加载阶段找它——加载走 [ContainerLoadData](../ContainerLoadData)，旧档容器此时尚未重建。
- 不要在 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `DefineContainerDefinitions` 阶段访问它——那时还没有任何一次保存，context 与对象图都不存在。

## 依赖图

- 上游构造者：[SaveContext](../SaveContext) 在遍历对象图、遇到容器字段/属性时 `new ContainerSaveData(context, objectId, target, containerType)`。
- 类型 schema：[DefinitionContext](../DefinitionContext) 经 `GetContainerDefinition(Type)` 返回 [ContainerDefinition](../ContainerDefinition)，提供 `ContainerSaveId`、`CollectObjectsMethod`、`HasNoChildObject`。
- 元素与子节点：[ElementSaveData](../ElementSaveData)（`_keys`/`_values`）与 [ObjectSaveData](../ObjectSaveData)（`_childStructs`，内嵌 struct）。
- 字节出口：[SaveEntryFolder](../SaveEntryFolder) / `BinaryWriter` 承载头与数据；体积统计由 [GameData](../GameData) 与 [SaveStatistics](../SaveStatistics) 消费。
- 对称角色：加载侧对应 [ContainerLoadData](../ContainerLoadData)；整条管线见 [存档系统总览](../../../architecture/save-system)。

## 风险段

- **容器类型漏登记即抛异常中止保存。** 构造函数里 `GetContainerDefinition(Type)` 返回 `null` 会立刻 `throw new Exception(...)`；这通常意味着对应集合类型没在 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `DefineContainerDefinitions` 里 `ConstructContainerDefinition`，结果整次保存失败、[SaveOutput](../SaveOutput) 进入 `GeneralFailure`。
- **`CollectChildren` 直接强转 `Target`。** 按 `ContainerType` 把 `Target` 强转为 `IDictionary`/`IList`/`Array`/`ICollection`；若 `Target` 为 `null` 或实际类型与声明的 `ContainerType` 不符（例如运行时类型被替换），会 `InvalidCastException` 或 `NullReferenceException`。
- **自定义 `CollectObjectsMethod` 静默丢子对象。** `GetChildObjects` 优先走 [ContainerDefinition](../ContainerDefinition) 的 `CollectObjectsMethod` 委托；若委托实现漏收某些子对象，它们不会进对象图、也不会报错——表现为**静默数据丢失**（坏档但无异常）。
- **元素计数不匹配导致加载越界。** `_elementCount` 由 `GetElementCount()` 在构造时定死并写进头部；若保存与加载两侧对该容器的元素数理解不一致（类型演进、自定义列表语义变化），加载侧 [ContainerLoadData](../ContainerLoadData) 的 `FillObject` 会出现索引错位。
- **字符串去重是上下文级的。** `CollectStrings` 把字符串交给 `context.AddOrGetStringId` 去重，编号只在本轮保存内有效；不要试图跨次保存复用字符串 id 或 `ObjectId`。

## 成员说明

### 构造与身份

- `ContainerSaveData(ISaveContext context, int objectId, object target, ContainerType containerType)`：唯一构造函数（引擎内部）。记录 `ObjectId`、[ISaveContext](../ISaveContext)、`Target`，由 `target.GetType()` 得 `Type`，调 `context.DefinitionContext.GetContainerDefinition(Type)` 取类型定义（取不到即抛）。初始化 `_childStructs` 与 `_elementCount`。
- `int ObjectId { get; }`：本次保存中该容器节点的稳定内部编号，写进字节流的文件夹 id。
- `ISaveContext Context { get; }`：持有它的保存上下文，用于查类型定义、去重字符串、分配编号。
- `object Target { get; }`：被序列化的运行时容器实例。
- `Type Type { get; }`：由 `target.GetType()` 得出。
- `internal int ElementPropertyCount` / `internal int ElementFieldCount`：取第一个子 struct（`_childStructs[0]`）的属性/字段计数；无子 struct 时返回 0。

### 收集阶段

- `void CollectChildren()`：按 `ContainerType` 把 `Target` 的元素包成 [ElementSaveData](../ElementSaveData)，Dictionary 同时建 `_keys` 与 `_values`，其余只建 `_values`。
- `void CollectStructs()`：扫描元素，凡 `MemberType == SavedMemberType.CustomStruct` 的，取运行时值 `new ObjectSaveData(Context, index, value, false)` 加入 `_childStructs`，并递归其子 struct。
- `void CollectMembers()`：仅递归子 struct 的 `CollectMembers`。
- `void CollectStrings()`：收集本节点字符串经 `Context.AddOrGetStringId` 去重，并递归子 struct。
- `void CollectStringsInto(List<string> collection)`：把本节点字符串追加到外部列表（供统计）。
- `IEnumerable<object> GetChildElements()` / `static IEnumerable<object> GetChildElements(ContainerType, object target)`：按容器类型枚举非空子元素。
- `IEnumerable<object> GetChildObjects(ISaveContext)` / `static void GetChildObjects(...)`：收集容器内所有应纳入对象图的子对象（类/接口非 string，或 struct 递归展开）；优先用 `CollectObjectsMethod` 委托。

### 体积计算（供 GameData 排布）

- `int GetHeaderSize()` / `int GetDataSize()` / `int GetEntryCount()` / `int GetFolderCount()`：分别估算该节点头部字节、数据字节、条目数、文件夹数（含自身与递归子 struct，并对 `ISavedStruct.IsDefault()` 的默认 struct 做跳过优化）。

### 写出阶段

- `void SaveHeaderTo(SaveEntryFolder parentFolder, IArchiveContext archiveContext)`：在父文件夹下创建以 `ObjectId` 命名的容器子文件夹，写入 `ContainerSaveId`、容器类型与元素数。
- `void SaveHeaderDataTo(BinaryWriter, int folderId)` / `void SaveHeaderFolderTo(BinaryWriter, int folderId)`：把数据头/文件夹头（含类型 `SaveId`、容器类型、元素数）写入线性字节流。
- `void SaveDataFolder(BinaryWriter writer, ref int folderId)` / `void SaveTo(BinaryWriter writer, ref int folderId)`：递归写出数据骨架与元素/子 struct 条目，`folderId` 引用传参递增。
- `void SaveTo(SaveEntryFolder parentFolder, IArchiveContext archiveContext)`：把元素条目（[SaveEntryExtension](../SaveEntryExtension) Value/Key）与子 struct 一并写进 `SaveEntryFolder`。

## 真实示例

`ContainerSaveData` 是 `internal`，由 [SaveContext](../SaveContext) 在保存阶段为对象图里的每个容器构造。真正的获取路径是 [SaveManager](../SaveManager) 的 `Save`——下面复刻引擎内部「遇到容器字段时建节点」的流程，根对象通常是 `Game.Current`：

```csharp
MetaData metaData = new MetaData();
ISaveDriver driver = new SaveGameFileInfo();

// 真实获取路径：SaveManager.Save 触发的对象图遍历内部产生 ContainerSaveData
SaveOutput output = SaveManager.Save(Game.Current, metaData, "MySave_001", driver);

// 引擎内部（示意，非模组代码）：SaveContext 遇到 List<MyStruct> 字段时
ContainerDefinition def = context.DefinitionContext.GetContainerDefinition(typeof(List<MyStruct>));
if (def == null)
    throw new Exception("Could not find type definition of container type: " + typeof(List<MyStruct>));
ContainerSaveData node = new ContainerSaveData(context, objectId, myList, ContainerType.List);
node.CollectChildren();   // 把每个元素包成 ElementSaveData
node.CollectStructs();    // 递归收集内嵌 struct 为子 ObjectSaveData
node.CollectStrings();    // 字符串交给 context 去重
// 之后 GetDataSize / SaveTo 写入字节流
```

注意：模组不应自己 `new ContainerSaveData`；要让自定义容器进流程，正确做法是在 [SaveableTypeDefiner](../SaveableTypeDefiner) 里 `ConstructContainerDefinition(typeof(...))` 登记，并用成员 Attribute 标注。

## 导航块

- 父级：[存档系统 API 索引](../)
- 同级：[ContainerLoadData](../ContainerLoadData) · [ObjectSaveData](../ObjectSaveData) · [ElementSaveData](../ElementSaveData)
- 相关：[SaveContext](../SaveContext) · [ISaveContext](../ISaveContext) · [DefinitionContext](../DefinitionContext) · [ContainerDefinition](../ContainerDefinition) · [GameData](../GameData) · [SaveEntryFolder](../SaveEntryFolder)

## 参见

- 模块索引：[存档系统 API 索引](../)
- 上游枢纽：[SaveManager](../SaveManager)
- 关联类型：[ContainerDefinition](../ContainerDefinition) · [ObjectSaveData](../ObjectSaveData) · [ContainerLoadData](../ContainerLoadData) · [SaveOutput](../SaveOutput)
