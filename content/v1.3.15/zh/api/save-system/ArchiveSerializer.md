---
title: "ArchiveSerializer"
description: "存档二进制写入器：把已编号的对象/容器/字符串成员条目（SaveEntry）与文件夹树（SaveEntryFolder）编码成自描述的字节流，最终拼装为 GameData 的 Header / Strings / ObjectData / ContainerData 四段之一。它是 SaveManager 保存路径上离“.sav 字节”最近的一层。"
---
# ArchiveSerializer

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class ArchiveSerializer : IArchiveContext`
**源文件：** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/ArchiveSerializer.cs`

## 概述

`ArchiveSerializer` 是保存流水线的「二进制落盘器」：它不直接理解任何游戏类型或字段语义，而是把上游 [ObjectSaveData](../ObjectSaveData) / [ContainerSaveData](../ContainerSaveData) 已经按编号准备好的 `SaveEntry`（每个成员一段字节，自带 `EntryId` 与所属 `FolderId`）逐条写入一个 `BinaryWriter`，并在 `FinalizeAndGetBinaryData` 时把整棵文件夹编号树（folder 表）与全部条目字节（entry 表）拼成一份自描述 blob。它只存在于保存阶段，由 [LegacySaveContext](../LegacySaveContext)（或并行版 [ArchiveConcurrentSerializer](../ArchiveConcurrentSerializer)）在 [SaveManager.Save](../SaveManager) 内部为每个对象、每个容器、以及字符串段各 `new` 一个实例来产出 `GameData` 的某一段。

## 心智模型

把 `ArchiveSerializer` 想成「文件夹树 → 扁平字节流」的编码器。上游 `ObjectSaveData.SaveTo(folder, serializer)` 先把一个对象的所有成员（标量、引用、嵌套 struct、嵌套容器）展开成以 `SaveEntryFolder` 为节点的树：每个成员是一条 `SaveEntry`，其 `EntryId`（类型 id + 局部 `LocalSaveId` 经 `MemberTypeId` 算出）与 `FolderId` 决定了它在树中的位置；嵌套结构会调用 `serializer.CreateFolder(...)` 再开一个子文件夹。`ArchiveSerializer` 本身不关心这些编号的含义，它只把每条 entry 编码成固定记录 `[3字节 folderId][3字节 entryId][1字节 extension][2字节 长度][N字节 数据]` 写进底层 writer，并记下 entry 总数。`FinalizeAndGetBinaryData` 再把「folder 表（每个 folder 的 parentGlobalId / globalId / localId / extension）」与「entry 总数」写在前头，随后追加全部 entry 字节，产出的 blob 与 [ArchiveDeserializer](../ArchiveDeserializer) 的读取顺序逐字节对称——这正是存档能 round-trip 的底层保证。注意 folder 的 globalId 由 `CreateFolder` 按调用顺序单调分配（`_folderCount++`），因此最终 blob 里 folder 表的顺序必须与创建顺序一致；在加载侧，这份 folder/entry 树会被 [ContainerHeaderLoadData](../ContainerHeaderLoadData) / [ObjectHeaderLoadData](../ObjectHeaderLoadData) 按编号重新挂接成对象与容器。

## 何时使用 / 何时不要使用

**使用（理解层面）：** 当你在排查「为什么我的自定义字段没存进去」「为什么同一字段在旧档里读不到」时，需要理解字节编码顺序；或在编写存档校验工具、比对两次保存字节差异、确认 `MemberTypeId` 编号是否落盘时。

**不要使用：**

- 不要 `new ArchiveSerializer()`——它是 `internal`，且仅由 [SaveManager](../SaveManager) / [LegacySaveContext](../LegacySaveContext) 在保存内部构造，模组不可达。
- 不要假设它的字节布局与某个具体游戏类型绑定——它编码的是已经编号的 entry，类型语义由 [TypeDefinition](../TypeDefinition) 与 `MemberTypeId` 决定。
- 不要在加载阶段使用——读档走 [ArchiveDeserializer](../ArchiveDeserializer) / [LoadContext](../LoadContext)。

## 依赖图

- 上游写入者：[ObjectSaveData](../ObjectSaveData) 与 [ContainerSaveData](../ContainerSaveData) 调用 `serializer.CreateFolder(...)` 与 `serializer.SerializeEntry(...)` 把成员字节落盘；它们的编号来自 [TypeDefinition](../TypeDefinition) 解析出的 `MemberTypeId`。
- 调度者：[LegacySaveContext](../LegacySaveContext) 在 `SaveSingleObject` / `SaveSingleContainer` / `Save` 中为每个对象、容器、字符串段各 `new ArchiveSerializer()` 并最终 `FinalizeAndGetBinaryData()`，把结果装箱进 [GameData](../GameData) 的 `ObjectData` / `ContainerData` / `Strings` 段。
- 并行等价物：[ArchiveConcurrentSerializer](../ArchiveConcurrentSerializer) 写出完全相同布局的字节（逐 entry 记录 + folder 表 + entry 表），与读侧 [ArchiveDeserializer](../ArchiveDeserializer) 对称，可互证格式稳定。
- 契约接口：[IArchiveContext](../IArchiveContext) 仅声明 `CreateFolder`，是 `ArchiveSerializer` 与 `ArchiveConcurrentSerializer` 共享的最小契约。
- 数据结构：[SaveEntry](../SaveEntry)（单条成员字节 + `EntryId`）、[SaveEntryFolder](../SaveEntryFolder)（folder 树节点）、[FolderId](../FolderId) / [SaveFolderExtension](../SaveFolderExtension) / [SaveEntryExtension](../SaveEntryExtension) 决定每条记录在树中的位置。
- 类型 schema：[SaveableTypeDefiner](../SaveableTypeDefiner) 决定成员如何被编号，最终影响 entry 的 `EntryId`；[MemberTypeId](../MemberTypeId) 是编号的载体。

## 风险

- **folder 创建顺序即全局 id 顺序。** `_folderCount` 在 `CreateFolder` 里自增，blob 中 folder 表按此顺序写出；若上游在 `SaveTo` 之外自行乱序创建 folder，或 `CreateFolder` 与 `SerializeFolder` 不匹配，加载侧按 globalId 重建树时会挂错父子关系。
- **entry 字节自带长度前缀，长度错即整段错位。** 每条 entry 有 2 字节长度；若数据被截断或长度写错，`BinaryReader` 在 [ArchiveDeserializer](../ArchiveDeserializer) 读取时会把后续所有 entry 往后偏移，造成大面积坏档。
- **folderId / entryId 是 3 字节整数。** 编号上限约 16M；类型或成员编号若超出此范围（理论上由 [DefinitionContext](../DefinitionContext) 约束）会静默截断。
- **`GetBinaryDataDebug` 不释放底层 writer。** 它与 `FinalizeAndGetBinaryData` 字节布局一致，但不会 `ReleaseBinaryWriter(_writer)`，调试路径可能泄漏池中的 `BinaryWriter`；正式保存务必走 `FinalizeAndGetBinaryData`。
- **它只编码、不校验语义。** 类型未定义或字段漏登记时，错误会先在 [SaveContext](../SaveContext) / [LegacySaveContext](../LegacySaveContext) 的 `CollectObjects` 阶段抛出，而不是在序列化阶段；序列化期收到的是已经编号好的 entry。
- **版本漂移在更上层。** 改 `LocalSaveId` / 类型 `saveBaseId` 会让 `EntryId` 变化，加载侧按旧编号找不到成员——这是 [SaveableTypeDefiner](../SaveableTypeDefiner) 的稳定契约要守住的，序列化器自身无法感知。

## 成员说明

### 构造函数

- `ArchiveSerializer()`：internal 构造。从 `BinaryWriterFactory.GetBinaryWriter()` 取一个 `BinaryWriter` 作为 entry 字节累积器，并初始化 `_folders` 列表与 `_entryCount` / `_folderCount` 计数。由引擎在保存内部调用，模组不可达。

### 文件夹树构建

- `SaveEntryFolder CreateFolder(SaveEntryFolder parentFolder, FolderId folderId, int entryCount)`：当前唯一的 [IArchiveContext](../IArchiveContext) 契约方法。给新文件夹分配一个单调递增全局 id（`_folderCount++`），构造 `SaveEntryFolder(parentFolder, globalId, folderId, entryCount)`，挂到父 folder 的子节点并加入内部 `_folders` 列表，返回给调用方。上游在展开嵌套 struct / 容器成员时反复调用它，从而把对象图编码成树；最终 `FinalizeAndGetBinaryData` 正是按 `_folders` 的顺序写出 folder 表。

### 条目写入

- `void SerializeEntry(SaveEntry entry)`：把单条 `SaveEntry` 写进 entry 流。依次写出 `entry.FolderId`（3 字节）、`entry.Id.Id`（3 字节）、`entry.Id.Extension`（1 字节）、`entry.Data.Length`（2 字节 short）、`entry.Data`（原始字节），并 `_entryCount++`。这是 blob 中每条记录的精确格式。
- `void SerializeFolder(SaveEntryFolder folder)`：遍历 `folder.GetAllEntries()`（递归收集该 folder 及其子 folder 的所有 entry），逐条调用 `SerializeEntry`。上游对每个对象 / 容器调用一次，把整棵成员树压平进 entry 流。

### 收尾与产出

- `byte[] FinalizeAndGetBinaryData()`：把累积的 folder 树与 entry 流拼成最终 blob 并返回。先写 `folderCount`（4 字节 int），再按 `_folders` 创建顺序每个写 `parentGlobalId`（3 字节）、`globalId`（3 字节）、`localId`（3 字节）、`extension`（1 字节）；然后写 `entryCount`（4 字节 int），最后 `AppendData(_writer)` 追加全部 entry 字节。调用后释放两个 `BinaryWriter` 并把 `_writer` 置 `null`——本实例此后不可再用。
- `byte[] GetBinaryDataDebug()`：与 `FinalizeAndGetBinaryData` 布局完全一致，但**不**释放 `_writer`（仅置 `null`）。用于调试期需要保留 entry 字节复查的场景；正式保存不要依赖它，以免池中 writer 泄漏。

## 示例

```csharp
// 模组侧只调用 SaveManager，传入存档根（Campaign）；引擎内部为每个对象/容器/字符串段各 new 一个 ArchiveSerializer
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Campaign.Current, metaData, saveName, driver);

// ArchiveSerializer 产出的字节最终装箱进 GameData 的四段（示意引擎内部流程）：
GameData data = output.GameData;          // Header / Strings / ObjectData / ContainerData
byte[] objectBytes  = data.ObjectData[0]; // 来自某个 ArchiveSerializer.FinalizeAndGetBinaryData()
byte[] stringsBytes = data.Strings;        // 来自字符串段的 ArchiveSerializer
```

真实调用位置（可在源码中核对）：`LegacySaveContext.SaveSingleObject` 对每个对象 `new ArchiveSerializer()` 并 `FinalizeAndGetBinaryData()` → `GameData.ObjectData[id]`；`LegacySaveContext.SaveSingleContainer` 对每个容器走同一路径 → `GameData.ContainerData[id]`；`LegacySaveContext.Save` 再单独 `new ArchiveSerializer()` 产出字符串段 → `GameData.Strings`。并行版 `ArchiveConcurrentSerializer` 写出完全相同的字节布局。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[ArchiveDeserializer](../ArchiveDeserializer) · [ArchiveConcurrentSerializer](../ArchiveConcurrentSerializer) · [LegacySaveContext](../LegacySaveContext) · [ObjectSaveData](../ObjectSaveData) · [ContainerSaveData](../ContainerSaveData) · [GameData](../GameData) · [SaveManager](../SaveManager) · [IArchiveContext](../IArchiveContext) · [MemberTypeId](../MemberTypeId)
