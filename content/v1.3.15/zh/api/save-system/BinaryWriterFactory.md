---
title: "BinaryWriterFactory"
description: "保存期间按线程复用 BinaryWriter 的对象池，降低高频序列化带来的 GC 压力。"
---

# BinaryWriterFactory

> **一句话职责：** 为保存流程提供线程局部的 `BinaryWriter` 池，避免每次写条目都新建缓冲区而产生大量垃圾回收。

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** SaveSystem
**类型：** `static class BinaryWriterFactory`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/BinaryWriterFactory.cs`

## 概述
一次保存要在多线程里写出巨量 `SaveEntry`，如果每个条目都 `new BinaryWriter` 就会瞬间产生海量短命对象、拖垮 GC。`BinaryWriterFactory` 用一个 `ThreadLocal<Stack<BinaryWriter>>` 维护每线程的写入器栈：取用时弹出复用，用完后清空再压回，从而把缓冲区在保存期间循环使用。它是保存序列化阶段的底层供给方，被 `LegacySaveContext` 与各类 `SaveData` 在写字节前调用。

## 心智模型
把它看作一条“毛巾租赁点”：每条工作线程有自己的篮子，要用毛巾就去篮子拿（没有就新发一条），用完洗干净放回篮子给别人用。因为篮子是线程局部的，线程之间不需要加锁就能拿放，速度很快。它存在于整个保存调用的生命周期内——保存开始由 `LegacySaveContext.Save` 调用 `Initialize()` 把篮子建好，结束再 `Release()` 拆掉。modder 不会直接碰它，但理解它能解释为什么保存是“线程局部、池化”的。

## 何时用 / 何时不要用
不要自己调用它来管理 `BinaryWriter`——它是 `internal static`，且必须与 `Initialize`/`Release` 配对。`LegacySaveContext` 已经替你在 `Save` 里管好这一对调用。写模组时直接走 `SaveManager.Save`；只有当你在引擎源码层面改保存管线时才需要考虑它。

## 依赖图
- 上游：[SaveManager](../SaveManager)、[LegacySaveContext](../LegacySaveContext)
- 下游：[ArchiveConcurrentSerializer](../ArchiveConcurrentSerializer)、[ArchiveSerializer](../ArchiveSerializer)
- 相关类型/阶段：[GameData](../GameData)、[SaveEntryFolder](../SaveEntryFolder)

## 风险段
- 顺序错误：`GetBinaryWriter` / `ReleaseBinaryWriter` 之前必须先 `Initialize()`；若在 `Initialize` 之前释放，会打印 “Release used before Get” 且写入器不会入池。
- 生命周期：必须在保存全部结束后调用 `Release()` 释放 `ThreadLocal`，否则线程局部状态会残留。
- 跨线程：`BinaryWriter` 是线程局部的，绝不可把从一个线程取出的写入器交给另一线程使用，否则数据会被错误复用或覆盖。

## 成员说明
- `GetBinaryWriter()`：从当前线程的栈里弹出一个 `BinaryWriter`；若栈空则 `new BinaryWriter(4096)` 新建一个（初始容量 4096 字节）。拿到后用于写若干条目，写完必须归还。
- `ReleaseBinaryWriter(BinaryWriter writer)`：先 `writer.Clear()` 清空内容，再把写入器压回线程局部栈以便复用；若在 `Initialize` 之前调用会打印警告并重建栈。
- `Initialize()`：创建 `ThreadLocal<Stack<BinaryWriter>>`，必须在保存开始时调用一次，是后续 `Get`/`Release` 的前提。
- `Release()`：释放并置空 `ThreadLocal`，应在保存流程整体结束后调用，回收所有线程局部池。

## 示例
```csharp
ISaveDriver driver = new InMemDriver();
MetaData metaData = SaveManager.LoadMetaData("mySlot", driver);
SaveOutput output = SaveManager.Save(Game.Current, metaData, "mySlot", driver);
LoadResult result = SaveManager.Load("mySlot", driver);
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[ArchiveConcurrentSerializer](../ArchiveConcurrentSerializer)、[LegacySaveContext](../LegacySaveContext)
- 架构：[存档系统架构](../../../architecture/save-system)
