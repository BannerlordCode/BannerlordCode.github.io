---
title: "ArchiveConcurrentSerializer"
description: "保存管线内部使用的并发存档序列化器：按线程分桶写出条目并汇总成最终存档二进制。"
---

# ArchiveConcurrentSerializer

> **一句话职责：** 在保存时把收集好的所有存档条目按文件夹并发地编码成字节流，最后拼成一份完整的存档二进制交给 `GameData`。

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** SaveSystem
**类型：** `class ArchiveConcurrentSerializer : IArchiveContext`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/ArchiveConcurrentSerializer.cs`

## 概述
当 `SaveManager.Save` 驱动一次保存时，收集阶段（`LegacySaveContext`）已经把游戏对象图展平为成百上千个 `SaveEntry`。`ArchiveConcurrentSerializer` 负责真正把这些条目写成二进制：它为每个托管线程维护独立的 `BinaryWriter`，从而允许多线程并行序列化而不互相踩踏，最后再把所有线程的缓冲区与文件夹目录信息汇总成一份 `byte[]` 交给 `GameData`。

## 心智模型
把它想象成一条分拣流水线：每个工作线程领到自己专属的写入桶，独立把负责的条目编码成字节；主线程在收尾阶段先写一张“文件夹目录”（父子关系、全局 id、`SaveFolderExtension` 扩展类型），再依次把各线程的缓冲区拼接起来。它实现 `IArchiveContext`，是整个保存序列化阶段里最靠近“落盘字节”的一环，由 `LegacySaveContext.Save` 在并行循环之后创建并调用。你（modder）永远不会 `new` 它，它是 `SaveManager` 内部保存流程的零件，职责单一且对线程局部状态高度敏感。

## 何时用 / 何时不要用
不要在模组里直接实例化或调用它——它是 `internal` 类型，只服务于引擎保存管线。若要保存游戏，调用 `SaveManager.Save(Game.Current, metaData, slotName, driver)`；若需要自定义某类型的序列化，请实现 `IBasicTypeSerializer` 或在 `SaveableTypeDefiner` 里注册，而不是替换这个序列化器。

## 依赖图
- 上游：[SaveManager](../SaveManager)、[LegacySaveContext](../LegacySaveContext)、[BinaryWriterFactory](../BinaryWriterFactory)
- 下游：[GameData](../GameData)、[SaveEntryFolder](../SaveEntryFolder)、[SaveFolderExtension](../SaveFolderExtension)
- 相关类型/阶段：[ArchiveSerializer](../ArchiveSerializer)、[IArchiveContext](../IArchiveContext)

## 风险段
- 多线程契约：它依赖“每个托管线程一个 `BinaryWriter`”的假设；若在保存期间跨线程复用同一份 `SaveEntry` 数据且外部并发修改，会出现数据竞争与存档损坏。
- 必须配对的初始化：条目写入前 `BinaryWriterFactory.Initialize()` 需已被调用（由 `LegacySaveContext.Save` 负责），否则拿不到写入器。
- `FinalizeAndGetBinaryDataConcurrent()` 只能在所有 `SerializeFolderConcurrent` 调用完成后调用一次；重复调用会得到不完整的字节。

## 成员说明
- `SerializeFolderConcurrent(SaveEntryFolder folder)`：遍历该文件夹下所有条目，用当前线程专属的 `BinaryWriter` 并发编码。先按 `Thread.CurrentThread.ManagedThreadId` 取或建写入器（加锁保证每线程唯一），再逐条写文件夹号、条目号、扩展类型、数据长度与字节。应在并行保存循环里对每个文件夹调用。
- `CreateFolder(SaveEntryFolder parentFolder, FolderId folderId, int entryCount)`：创建一个子 `SaveEntryFolder`，用 `Interlocked.Increment` 分配全局 id，挂到父文件夹并放入内部 `ConcurrentBag`，返回新建文件夹供后续填条目。
- `FinalizeAndGetBinaryDataConcurrent()`：收尾汇总。先写所有文件夹的目录信息（父全局 id、自身全局 id、本地 id、扩展枚举），再写条目总数，最后把每个线程 `BinaryWriter` 的缓冲区依次追加到主写入器并返回最终 `byte[]`。保存流程在并行阶段全部结束后调用一次。

## 示例
```csharp
ISaveDriver driver = new InMemDriver();
MetaData metaData = SaveManager.LoadMetaData("mySlot", driver);
SaveOutput output = SaveManager.Save(Game.Current, metaData, "mySlot", driver);
LoadResult result = SaveManager.Load("mySlot", driver);
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[ArchiveSerializer](../ArchiveSerializer)、[LegacySaveContext](../LegacySaveContext)
- 架构：[存档系统架构](../../../architecture/save-system)
