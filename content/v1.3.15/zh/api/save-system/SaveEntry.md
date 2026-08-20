---
title: "SaveEntry"
description: "存档归档里单条记录的原子载体：一个 FolderId、一个带判别符的 EntryId，以及它的原始字节 Data。"
---

# SaveEntry

> **一句话职责：** SaveEntry 是存档归档里不可再分的一条记录，承载某个字段/属性/字符串/对象头的序列化字节，并标明自己属于哪个文件夹、是什么类型。

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** SaveSystem
**类型：** `public class SaveEntry`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/SaveEntry.cs`

## 概述
在序列化时，对象图里的每一个成员最终都会被写成一条 `SaveEntry`：它的 `FolderId` 指向父 `SaveEntryFolder`，`Id` 是一个 `EntryId`（数字编号 + `SaveEntryExtension` 判别符，用来区分这是对象的 Class 头、Field、Property、Key/Value、String 还是 Txt），而 `Data` 是 `BinaryWriter` 写出的原始字节。读取时 `ArchiveDeserializer` 按字节把它们逐个还原成 `SaveEntry`，再交给 `ObjectLoadData` / `MemberLoadData` 装配回对象。它是整个存档格式里最细的颗粒，modder 在自定义序列化流程（如 `IObjectResolver`）里偶尔会接触到它的字节。

## 心智模型
把 SaveEntry 想象成“一张贴了标签的小纸条”。标签由两部分组成：`FolderId` 说明它贴在哪个文件夹（哪个对象/容器/字符串表）下面，`Id` 上的 `SaveEntryExtension` 说明纸条上写的是哪种数据。纸条内容 `Data` 是 `byte[]`，由对应的 `IBasicTypeSerializer` 或 `ObjectSaveData` 写进一个 `BinaryWriter`，再用 `FillFrom` 封口。它诞生在保存阶段、活在 `SaveEntryFolder.ChildEntries` 集合里，归档时由 `ArchiveConcurrentSerializer` 把纸条逐张写入二进制块。加载时它从字节流里被读回，是反序列化的起点之一。它无状态、不可变（数据一旦写入就固定），所有“属于谁”的关系都通过 `FolderId` / `Id` 表达。

## 何时用 / 何时不要用
- **不要用：** 99% 的 modder 不需要手动构造 `SaveEntry`。直接用 `SaveManager.Save` / `SaveManager.Load` 即可，框架会自动把你的 `[Saveable]` 类型拆成 entry。
- **偶尔用：** 只在实现底层 `ISaveDriver`、`IObjectResolver` 或排错“某个字段读出来是空/错位”时，才需要查看 `SaveEntry.Data` 与 `Id.Extension` 来定位问题。

## 依赖图
- 上游：[SaveEntryFolder](../SaveEntryFolder)、[ArchiveDeserializer](../ArchiveDeserializer)、[SaveManager](../SaveManager)
- 下游：[EntryId](../EntryId)、[SaveEntryExtension](../SaveEntryExtension)、[BinaryWriterFactory](../BinaryWriterFactory)
- 相关类型/阶段：[ObjectLoadData](../ObjectLoadData)、[MemberLoadData](../MemberLoadData)

## 风险段
- **Data 不可变语义：** `Data` 在 `FillFrom(BinaryWriter)` 时才被赋值，且通过 `CreateFrom` / `CreateNew` 构造后无法再改。试图在写入后修改 `_data` 会破坏归档一致性。
- **FolderId 必须有效：** `CreateNew(parentFolder, entryId)` 会直接取 `parentFolder.GlobalId` 作为 `FolderId`；如果父文件夹还没加到归档里，这条 entry 在 `ArchiveDeserializer.LoadFrom` 时就找不到归属而丢失。
- **读写顺序：** 必须用同一个 `BinaryWriter` 的写入顺序来 `GetBinaryReader` 读取，否则 `BinaryReader` 偏移错位会抛出或读出垃圾。

## 成员说明
- `byte[] Data`：这条记录的实际序列化字节，只读；由 `FillFrom` 写入。
- `EntryId Id`：记录编号 + 判别符（`SaveEntryExtension`），只读。
- `int FolderId`：所属文件夹的 `GlobalId`，只读。
- `static SaveEntry CreateFrom(int entryFolderId, EntryId entryId, byte[] data)`：从已有字节直接构造一条 entry，常用于反序列化或手动拼装归档。
- `static SaveEntry CreateNew(SaveEntryFolder parentFolder, EntryId entryId)`：在给定父文件夹下新建一条空 entry，其 `FolderId` 取自 `parentFolder.GlobalId`。
- `BinaryReader GetBinaryReader()`：返回一个包在 `Data` 上的 `BinaryReader`，用于按写入顺序读回内容。
- `void FillFrom(BinaryWriter writer)`：把 `writer.GetFinalData()` 写入 `Data`，完成这条记录的封口。

## 示例
```csharp
SaveEntryFolder root = SaveEntryFolder.CreateRootFolder();
SaveEntry entry = root.CreateEntry(new EntryId(0, SaveEntryExtension.Class));
BinaryWriter writer = new BinaryWriter();
writer.WriteInt(1234);
entry.FillFrom(writer);
SaveManager.Save(Game.Current, new MetaData(), "mySlot", new AsyncFileSaveDriver());
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[SaveEntryFolder](../SaveEntryFolder)、[EntryId](../EntryId)、[SaveEntryExtension](../SaveEntryExtension)
- 架构：[存档系统架构](../../../architecture/save-system)
