---
title: "TotalEventData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TotalEventData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TotalEventData

**命名空间:** TaleWorlds.MountAndBlade.Network
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class TotalEventData`
**领域:** mission-ext

## 概述

`TotalEventData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `TotalEventData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SamplesPerSecond` | `public static int SamplesPerSecond { get; set; }` |
| `IsActive` | `public static bool IsActive { get; }` |
| `HasData` | `public bool HasData { get; }` |

## 主要方法

### OpenExternalMonitor
`public static void OpenExternalMonitor()`

**用途 / Purpose:** 处理 `open external monitor` 相关逻辑。

### ControlActivate
`public static void ControlActivate()`

**用途 / Purpose:** 处理 `control activate` 相关逻辑。

### ControlDeactivate
`public static void ControlDeactivate()`

**用途 / Purpose:** 处理 `control deactivate` 相关逻辑。

### ControlJustDump
`public static void ControlJustDump()`

**用途 / Purpose:** 处理 `control just dump` 相关逻辑。

### ControlDumpAll
`public static void ControlDumpAll()`

**用途 / Purpose:** 处理 `control dump all` 相关逻辑。

### ControlClear
`public static void ControlClear()`

**用途 / Purpose:** 处理 `control clear` 相关逻辑。

### ClearNetGraphs
`public static void ClearNetGraphs()`

**用途 / Purpose:** 处理 `clear net graphs` 相关逻辑。

### ClearFpsGraph
`public static void ClearFpsGraph()`

**用途 / Purpose:** 处理 `clear fps graph` 相关逻辑。

### ControlClearAll
`public static void ControlClearAll()`

**用途 / Purpose:** 处理 `control clear all` 相关逻辑。

### ControlDumpReplicationData
`public static void ControlDumpReplicationData()`

**用途 / Purpose:** 处理 `control dump replication data` 相关逻辑。

### EndTick
`public static void EndTick(float dt)`

**用途 / Purpose:** 处理 `end tick` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### CompareTo
`public int CompareTo(DebugNetworkEventStatistics.PerEventData other)`

**用途 / Purpose:** 处理 `compare to` 相关逻辑。

## 使用示例

```csharp
var value = new TotalEventData();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
