---
title: "ZipExtensions"
description: "ZipArchiveEntry 的扩展方法集，把存档系统的 BinaryWriter/Reader 与 .sav 压缩包里的各个条目对接起来。"
---

# ZipExtensions

> **一句话职责：** ZipExtensions 是 `.sav` 压缩包与内存字节流之间的桥——把每个逻辑块（头/对象/字符串/容器）作为一条 zip 条目读入写出。

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** SaveSystem
**类型：** `internal static class ZipExtensions`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/ZipExtensions.cs`

## 概述
一个 Bannerlord 存档文件本质上是一个 zip 压缩包，里面每条逻辑数据（GameData 头、对象块、字符串块、容器块）各占一条 `ZipArchiveEntry`。`ZipExtensions` 提供四个扩展方法，把系统自有的 `BinaryWriter` / `BinaryReader` 与 .NET 的 `ZipArchiveEntry` 打通：`FillFrom(byte[])` 与 `FillFrom(BinaryWriter)` 把字节写进条目，`GetBinaryReader()` 与 `GetBinaryData()` 把条目读回内存。它们都 `using` 打开条目流、拷贝字节后立即 `Dispose`，调用方不应在方法返回后还持有那个流。这是“内存中的对象图”和“磁盘上的压缩容器”真正的边界。

## 心智模型
把它想成“邮局打包/拆包台”。保存时，驱动为每一块数据 `CreateEntry`，然后 `entry.FillFrom(writer)` 把 `BinaryWriter` 的最终字节封进 zip 条目；加载时，`entry.GetBinaryData()` / `GetBinaryReader()` 把条目解包成字节或 `BinaryReader` 供 `ArchiveDeserializer` / `LegacyGameDataDeserializer` 解析。每个方法内部 `using (Stream stream = entry.Open())` 确保流正确关闭，所以调用方拿到的要么是 `byte[]`、要么是独立的 `BinaryReader`，不会和 zip 流藕合。它是 `internal static`，modder 写自定义 `ISaveDriver` 时才需要直接打交道——标准 `AsyncFileSaveDriver` / `InMemDriver` 已经替你调好了。

## 何时用 / 何时不要用
- **不要用：** 普通 mod 不该直接碰 zip 条目，标准驱动已封装好；手动操作条目写错顺序会破坏 `.sav` 结构。
- **正确做法：** 需要自定义存储后端时实现 `ISaveDriver`，借助这两个扩展方法在 `ZipArchiveEntry` 与 `BinaryWriter` 之间搬运；日常存档调用 `SaveManager.Save` / `SaveManager.Load` 即可。

## 依赖图
- 上游：[ISaveDriver](../ISaveDriver)、[GameData](../GameData)、[ArchiveDeserializer](../ArchiveDeserializer)
- 下游：.NET `System.IO.Compression.ZipArchiveEntry`
- 相关类型/阶段：[SaveManager](../SaveManager)、[LegacyGameDataDeserializer](../LegacyGameDataDeserializer)、[AsyncFileSaveDriver](../AsyncFileSaveDriver)

## 风险段
- **流生命周期：** 方法内部 `using` 已释放 zip 流；`GetBinaryReader()` / `GetBinaryData()` 返回的是独立副本，不要假设原 `ZipArchiveEntry` 流仍打开。
- **整段读入内存：** `GetBinaryData` 会把整个条目 `CopyTo` 到 `MemoryStream` 再 `ToArray`，超大块会一次性占内存，需留意存档块体积。
- **internal 边界：** `internal static`，外部模块不可直接调用，跨模块反射会随版本失效。

## 成员说明
均为 `ZipArchiveEntry` 的扩展方法：
- `void FillFrom(this ZipArchiveEntry entry, byte[] data)`：打开条目流，把给定字节数组整体写入。
- `void FillFrom(this ZipArchiveEntry entry, BinaryWriter writer)`：把 `writer.GetFinalData()` 的字节写入条目，是存档写盘最常用的一招。
- `BinaryReader GetBinaryReader(this ZipArchiveEntry entry)`：把条目内容拷入 `MemoryStream` 后返回包在 `byte[]` 上的 `BinaryReader`，供按写入顺序读回。
- `byte[] GetBinaryData(this ZipArchiveEntry entry)`：把条目内容拷入 `MemoryStream` 并返回 `byte[]`，供反序列化器直接解析。

## 示例
```csharp
using (ZipArchive archive = ZipFile.Open("save.sav", ZipArchiveMode.Update))
{
    ZipArchiveEntry entry = archive.CreateEntry("objects");
    entry.FillFrom(new BinaryWriter().GetFinalData());
    byte[] data = entry.GetBinaryData();
    SaveManager.Save(Game.Current, new MetaData(), "mySlot", new AsyncFileSaveDriver());
}
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[ISaveDriver](../ISaveDriver)、[GameData](../GameData)、[AsyncFileSaveDriver](../AsyncFileSaveDriver)
- 架构：[存档系统架构](../../../architecture/save-system)
