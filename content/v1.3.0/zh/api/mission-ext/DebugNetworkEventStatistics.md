---
title: "DebugNetworkEventStatistics"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DebugNetworkEventStatistics`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DebugNetworkEventStatistics

**Namespace:** TaleWorlds.MountAndBlade.Network
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class DebugNetworkEventStatistics`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/Network/DebugNetworkEventStatistics.cs`

## 概述

`DebugNetworkEventStatistics` 位于 `TaleWorlds.MountAndBlade.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
DebugNetworkEventStatistics.OpenExternalMonitor();
```

## 参见

- [完整类目录](../catalog)