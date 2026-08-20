---
title: "StringSerializer"
description: "为 System.String 准备的“空实现”基础类型序列化器——字符串并不内联写出，而是被集中到字符串表去重。"
---

# StringSerializer

> **一句话职责：** StringSerializer 是 `IBasicTypeSerializer` 接口在字符串上的实现，但它故意什么都不做，因为字符串走的是独立的“全局字符串表”去重通道。

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** SaveSystem
**类型：** `internal class StringSerializer : IBasicTypeSerializer`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/Definition/StringSerializer.cs`

## 概述
存档系统里大多数基础类型（int、float、Vec3……）都有对应的 `IBasicTypeSerializer`，负责把值写成字节、再读回来。唯独 `string` 是特殊的：`SaveContext.AddOrGetStringId` 会把所有出现过的字符串收集进一张全局字符串表，写盘时统一放进 `SaveFolderExtension.Strings` 文件夹，对象记录里只保留一个整数 id，而不是把字符串本身重复写进每个对象。于是 `StringSerializer` 的 `Serialize` / `Deserialize` 都是空操作、`GetSizeInBytes` 返回 0——它纯粹是为了满足 `IBasicTypeSerializer` 契约而存在，真正的字符串处理发生在 `LegacySaveContext` 的字符串表里，而不是这里。

## 心智模型
把它想成“挂了个名、其实不干活的占位工”。字符串去重是这个设计里很关键的一环：一个 Mod 里可能成千上万次出现同一个地名、同一个物品名，如果每个都内联写字节，存档会迅速膨胀。所以框架在收集对象图阶段就把字符串抽走、编号、去重，对象里只留 id。读取时再按 id 从字符串表还原。`StringSerializer` 之所以“空”，正是因为它本就不该碰字符串的字节——它的存在只是让类型分发逻辑在面对 `string` 类型时有一个合法的 `IBasicTypeSerializer` 可以拿到。理解这一点，你就不会误以为字符串是被 `StringSerializer` “序列化”进对象记录的。

## 何时用 / 何时不要用
- **不要用：** 不要指望用 `StringSerializer` 去读写字符串，它没有任何实际逻辑；也不要试图替换它来“自定义字符串格式”，那会与字符串表去重机制冲突。
- **正确做法：** 字符串的存取完全由 `LegacySaveContext` 的字符串表与 `SaveFolderExtension.Strings` 文件夹托管，modder 只需正常使用 `string` 字段，框架自动去重。

## 依赖图
- 上游：[IBasicTypeSerializer](../IBasicTypeSerializer)、[SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner)
- 下游：字符串表逻辑（[LegacySaveContext](../LegacySaveContext) 的 `AddOrGetStringId` / `SaveStringTo`）
- 相关类型/阶段：[SaveFolderExtension](../SaveFolderExtension)、[SaveEntryExtension](../SaveEntryExtension)

## 风险段
- **空实现陷阱：** `Deserialize` 直接 `return null`、`GetSizeInBytes` 返回 0。任何以为调用它就能拿到字符串字节的逻辑都会得到空结果。
- **不要绕过去重：** 若在自定义 `ISaveContext` 里绕过字符串表直接内联写字符串，会导致字符串表与对象记录不一致，加载时按 id 查不到字符串。
- **internal 边界：** 该类型 `internal`，无法从模块外注册或替换。

## 成员说明
实现了 `IBasicTypeSerializer` 的三个成员，但均为占位/空操作：
- `void IBasicTypeSerializer.Serialize(IWriter writer, object value)`：显式接口实现，方法体为空——字符串不在这里写出。
- `object IBasicTypeSerializer.Deserialize(IReader reader)`：显式接口实现，直接 `return null`——字符串不在这里读回。
- `int GetSizeInBytes()`：返回 0，表示本序列化器不占用对象记录的字节。

## 示例
```csharp
MetaData metaData = new MetaData();
SaveOutput output = SaveManager.Save(Game.Current, metaData, "mySlot", new AsyncFileSaveDriver());
// 字符串不会被 StringSerializer 直接写出，而是被收集进统一字符串表（SaveFolderExtension.Strings），每条记录只保留整数 id。
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[IBasicTypeSerializer](../IBasicTypeSerializer)、[SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner)、[SaveFolderExtension](../SaveFolderExtension)
- 架构：[存档系统架构](../../../architecture/save-system)
