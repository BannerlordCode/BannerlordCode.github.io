---
title: "ObjectSaveData"
description: "保存阶段为每个可达对象生成的「序列化快照生产者」：持有 Target 引用与 ObjectId 编号，把成员摊平成 Field/PropertySaveData，去重字符串并递归收集内嵌 struct，最终由 SaveTo 写入字节流。"
---

# ObjectSaveData

**命名空间：** `TaleWorlds.SaveSystem.Save`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class ObjectSaveData`
**基类/Base：** `System.Object`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Save/ObjectSaveData.cs`

## 一句话职责

在 [SaveContext](../SaveContext) 遍历对象图时，为图中的每一个可达对象（类或内嵌 struct）建立一个临时工作台，把它的字段/属性按 [DefinitionContext](../DefinitionContext) 的 schema 收集成可写字节。

## 心智模型

`ObjectSaveData` 是保存系统内部为「单个被序列化对象」建立的临时工作台：当 [SaveContext](../SaveContext) 从 `Campaign.Current` 这样的根对象广度优先遍历对象图时，每碰到一个可达对象（类或内嵌 struct），就会 `new` 一个 `ObjectSaveData` 来持有它的 `Target` 引用、本次保存的 `ObjectId` 编号，以及从 [DefinitionContext](../DefinitionContext) 查到的 `TypeDefinition`。它只在**保存阶段**存在，保存完成后连同 `SaveData` 一起被丢弃；它从不参与加载——加载侧对应的是 `ObjectLoadData`。理解它的关键：它是一个「只写不读」的产出者，负责把对象成员摊平成 `FieldSaveData`/`PropertySaveData`，把字符串交给 context 去重编号，把内嵌 struct 作为子节点递归收集，最后由 `SaveTo` 把头与数据写进字节流。模组几乎永远不应、也不能直接构造它（它是 `internal`），真正要扩展的是 [SaveableTypeDefiner](../SaveableTypeDefiner) 与成员 Attribute。

## 何时用 / 何时不要用

**理解层面使用：** 当你排查「为什么我的字段没存进去」「为什么字符串重复占空间」，或编写自定义序列化逻辑、需要理解保存如何遍历对象图、分配 `ObjectId`、去重字符串时。

**不要使用：**

- 不要在模组运行时 `new ObjectSaveData(...)`——它是 `internal`，由 `SaveContext` 在收集对象图时构造，构造需要 `ISaveContext`（即 [SaveContext](../SaveContext) 实例）。
- 不要在加载阶段期待 `ObjectSaveData` 存在——加载走 `ObjectLoadData`，旧档对象此时尚未重建。
- 不要在 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `Define*` 阶段访问它——那时还没有任何一次保存，context 与对象图都不存在。

## 依赖图

- 上游构造者：[SaveContext](../SaveContext) 在收集对象图时为每个可达对象 `new ObjectSaveData(context, objectId, target, isClass)`。
- 类型 schema：[DefinitionContext](../DefinitionContext) 是 `_typeDefinition` 的来源（`GetClassDefinition`/`GetStructDefinition`）。
- 成员产出：`FieldSaveData` / `PropertySaveData` / `MemberSaveData` 在 `CollectMembers` 中生成。
- 字节写出：头与数据由 [ArchiveSerializer](../ArchiveSerializer) 体系及 `SaveEntryFolder` / `BinaryWriter` 落盘。
- 对称角色：加载侧对应 [ObjectLoadData](../ObjectLoadData)。

## 风险段

- **类型未定义即抛异常。** 构造函数里若 `context.DefinitionContext.GetClassDefinition(Type)`（或 struct 版）返回 `null`，会直接 `throw new Exception("Could not find type definition of type: " + Type)`——通常意味着对应类型漏登记在 [SaveableTypeDefiner](../SaveableTypeDefiner) 中。
- **在错误阶段访问。** `ObjectSaveData` 仅存活于 `SaveManager.Save` 调用期间；加载回调或构造函数里读 `Target`/`Context` 毫无意义，对象尚未进入保存流程。
- **字符串去重是上下文级的。** `CollectStrings` 把字符串交给 `Context.AddOrGetStringId` 去重，跨次保存不共享编号；不要试图在两次保存之间复用 `ObjectId` 或字符串 id。
- **内嵌 struct 是子节点而非引用。** `CollectStructs` 会为成员里的 struct 递归 `new ObjectSaveData(... isClass: false)`；若 struct 的成员又引用未登记类型，会在 `GetStructDefinition` 处失败。

## 成员说明

### 构造与身份

- `ObjectSaveData(ISaveContext context, int objectId, object target, bool isClass)`：唯一构造函数（引擎内部调用）。按 `isClass` 从 `context.DefinitionContext` 取类或 struct 定义；若取不到定义立即抛 `Exception`。同时初始化 `_propertyValues`/`_fieldValues`/`_childStructs` 字典与字符串列表。
- `int ObjectId { get; }`：本次保存中该对象的稳定内部编号，由 `SaveContext.GetObjectId` 之类的枢轴分配，写入字节流的文件夹 id。
- `ISaveContext Context { get; }`：持有它的保存上下文，序列化时凭此查类型定义、去重字符串、分配对象/容器编号。
- `object Target { get; }`：被序列化的运行时实例（通常是 `Campaign`/`Game` 对象图里的某一个）。
- `Type Type { get; }`：由 `target.GetType()` 得出，序列化时据此决定成员布局。
- `bool IsClass { get; }`：区分这是类对象还是内嵌 struct，决定写出时用 `SaveFolderExtension.Object` 还是 `SaveFolderExtension.Struct`。
- `internal int PropertyCount` / `internal int FieldCount` / `internal int ChildCount`：当前已收集的属/字段/子 struct 数量，供计算头部与体积。

### 收集阶段

- `void CollectMembers()`：遍历 `_typeDefinition.MemberDefinitions`，对每个属性建 `PropertySaveData`、每个字段建 `FieldSaveData` 并登记；若成员类型是「非类的 struct」，则把它作为子节点调用 `InitializeAsCustomStruct`；字符串成员归入 `_stringMembers`。随后递归收集子 struct 的 `CollectMembers`。
- `void CollectStrings()`：把 `_stringMembers` 中每个字符串值交给 `Context.AddOrGetStringId` 做去重编号，再递归子 struct。
- `void CollectStringsInto(List<string> collection)`：把本对象及其子 struct 的所有字符串值收集进外部列表（用于统计/预写）。
- `void CollectStructs()`：扫描成员类型，凡在 `DefinitionContext` 里有 struct 定义的，取 `memberDefinition.GetValue(Target)` 后 `new ObjectSaveData(Context, index, value, false)` 作为子节点，递归进行。

### 写入阶段

- `void SaveHeaderTo(SaveEntryFolder parentFolder, IArchiveContext archiveContext)`：在父文件夹下创建以 `ObjectId` 命名的子文件夹，写入类型 `SaveId`、属性数与子 struct 数作为 Basics 条目。
- `void SaveHeaderFolderTo(BinaryWriter headerWriter, int folderId)` / `void SaveHeaderDataTo(BinaryWriter headerWriter, int folderId)`：分别把文件夹头/数据头（含 `ObjectId`、`SaveFolderExtension`、类型 `SaveId`、属性与子 struct 计数）写入线性字节流。
- `int GetHeaderSize()` / `int GetDataSize()`：估算该对象头部与数据的字节体积，供 [GameData](../GameData) 分配段大小。
- `void SaveDataFolder(BinaryWriter writer, int parentFolderId, ref int folderId)` / `void SaveTo(BinaryWriter writer, ref int folderId)`：把数据文件夹骨架与字段/属性条目递归写入 `BinaryWriter`，`folderId` 由引用传参递增。
- `void SaveTo(SaveEntryFolder parentFolder, IArchiveContext archiveContext)`：把本对象的头、字段条目、属性条目及子 struct 一并写入 `SaveEntryFolder`（`SaveEntryExtension.Field`/`Property`）。

### 子对象遍历

- `IEnumerable<object> GetChildObjects()`：返回本对象直接/间接可达的所有子对象（类与 struct 成员），用于对象图铺平。
- `static void GetChildObjects(ISaveContext context, TypeDefinition typeDefinition, object target, List<object> collectedObjects)`：静态版遍历；若 `typeDefinition.CollectObjectsMethod` 非空（由 `InitializeForAutoGeneration` 注入）走自定义收集委托，否则逐成员递归 `GetChildObjectFrom`。
- `static void GetChildObjectFrom(ISaveContext context, object target, MemberDefinition memberDefinition, List<object> collectedObjects)`：判断成员类型是类/接口（非 string）则加入其运行时值，或是 struct 则递归展开其成员。
- `int GetFolderCount()` / `int GetEntryCount()`：统计本节点及其递归子 struct 的文件夹数与条目数（含自身 + 属性 + 字段 + 子节点）。

## 最小真实示例

`ObjectSaveData` 是 `internal`，由 `SaveContext` 在保存阶段为对象图中的每个可达对象构造。下面复刻引擎内部的收集流程——根对象通常是 `Campaign.Current`：

```csharp
// SaveContext 在收集对象图时，为 Campaign.Current 这样的根对象构造 ObjectSaveData：
TypeDefinition def = context.DefinitionContext.GetClassDefinition(Campaign.Current.GetType());
ObjectSaveData saveData = new ObjectSaveData(context, objectId, Campaign.Current, isClass: true);
saveData.CollectMembers();   // 摊平属性/字段为 PropertySaveData / FieldSaveData
saveData.CollectStrings();   // 字符串交给 context.AddOrGetStringId 去重编号
saveData.CollectStructs();   // 递归收集成员里的内嵌 struct
```

注意：模组不应自己 `new ObjectSaveData`；要让自定义字段进入这套流程，正确做法是写 [SaveableTypeDefiner](../SaveableTypeDefiner) 并用 [SaveableFieldAttribute](../SaveableFieldAttribute) / [SaveablePropertyAttribute](../SaveablePropertyAttribute) 标注成员。

## 导航块

- 父级：[存档系统 API 索引](../)
- 同级：[ObjectLoadData](../ObjectLoadData) · [TypeDefinition](../TypeDefinition)
- 相关：[SaveContext](../SaveContext) · [DefinitionContext](../DefinitionContext) · [ArchiveSerializer](../ArchiveSerializer) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [GameData](../GameData)
