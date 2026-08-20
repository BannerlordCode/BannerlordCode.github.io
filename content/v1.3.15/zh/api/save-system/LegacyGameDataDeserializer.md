---
title: "LegacyGameDataDeserializer"
description: "把旧版（重构前）.sav 流反序列化为 GameData，用于旧存档的迁移读取。"
---

# LegacyGameDataDeserializer

> **一句话职责：** 读取引擎重构前的旧格式存档流（deflate 压缩 + 二进制记录），重建出 `GameData` 以便把老存档迁移到新格式。

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** SaveSystem
**类型：** `static class LegacyGameDataDeserializer`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/LegacyGameDataDeserializer.cs`

## 概述
早期版本的存档使用 .NET 二进制格式化（`SerializationHeaderRecord`、`ClassWithMembersAndTypes` 等记录）再套一层 Deflate 压缩。`LegacyGameDataDeserializer` 是这段历史的“解码器”：它手动按字节消费那些记录头，从流里抠出 `Header`、`Strings`、`ObjectData`、`ContainerData` 四块字节，拼成现代的 `GameData`。它存在的唯一目的是兼容与迁移老存档，新格式由 `ArchiveDeserializer` 负责。

## 心智模型
把它想成一台“复古读卡器”：插进去的是旧式磁带（旧版二进制记录流），机器一边校验记录头（遇到非预期的记录字节就报错），一边把数据块拷贝到内存里对应的格子，最后吐出现代 `GameData` 交给后续流程。它不认识对象字段含义，只负责把四块原始字节原样搬出来——真正的对象重建发生在更后面的加载阶段。modder 一般不会直接调用它，除非你在写存档迁移/诊断工具。

## 何时用 / 何时不要用
只有当你需要解析“重构前”的旧版 `.sav` 时才用 `LegacyGameDataDeserializer.Deserialize(stream)`。对当前版本存档，请用 `ArchiveDeserializer`（经 `SaveManager.Load` 自动选择）。不要把它当作通用读档入口，它会因新格式的记录头不符而抛 `InvalidDataException`。

## 依赖图
- 上游：[SaveManager](../SaveManager)、[GameData](../GameData)
- 下游：[ArchiveDeserializer](../ArchiveDeserializer)、[MetaDataExtensions](../MetaDataExtensions)
- 相关类型/阶段：[SaveError](../SaveError)、[LoadError](../LoadError)

## 风险段
- 格式强校验：它对每个记录头字节（0、12、5、9 等）做严格断言，任何偏移错误都会抛 `InvalidDataException("Expected ... record")`，说明流不是合法旧版存档。
- 仅限旧格式：新存档用的是分块归档格式，喂给它会立刻在第一条记录就报错。
- 流位置：方法内部会把 `MemoryStream` 解压后从头读取并逐项 `Read`，传入的 `Stream` 必须可读且指向存档开头；传入已部分消费的流会得到错乱结果。

## 成员说明
- `static GameData Deserialize(Stream stream)`：唯一公共成员。先 `DeflateStream` 解压到内存，再用 `BinaryReader` 逐记录消费：校验序列化头与 `GameData` 的 `ClassWithMembersAndTypes` 记录，收集字符串表与按引用编号的对象/容器字节块，最后组装 `Header`/`Strings`/`ObjectData`/`ContainerData` 返回 `GameData`。失败时抛 `InvalidDataException`。

## 示例
```csharp
ISaveDriver driver = new InMemDriver();
MetaData metaData = SaveManager.LoadMetaData("mySlot", driver);
SaveOutput output = SaveManager.Save(Game.Current, metaData, "mySlot", driver);
LoadResult result = SaveManager.Load("mySlot", driver);
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[ArchiveDeserializer](../ArchiveDeserializer)、[GameData](../GameData)
- 架构：[存档系统架构](../../../architecture/save-system)
