---
title: "DebugNetworkEventStatistics"
description: "DebugNetworkEventStatistics 的自动生成类参考。"
---
# DebugNetworkEventStatistics

**Namespace:** TaleWorlds.MountAndBlade.Network
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class DebugNetworkEventStatistics`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Network/DebugNetworkEventStatistics.cs`

## 概述

`DebugNetworkEventStatistics` 位于 `TaleWorlds.MountAndBlade.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SamplesPerSecond` | `public static int SamplesPerSecond { get; }` |
| `IsActive` | `public static bool IsActive { get; }` |

## 主要方法

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 DebugNetworkEventStatistics 实例
DebugNetworkEventStatistics debugNetworkEventStatistics = ...;
var result = debugNetworkEventStatistics.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 DebugNetworkEventStatistics 实例
DebugNetworkEventStatistics debugNetworkEventStatistics = ...;
var result = debugNetworkEventStatistics.GetHashCode();
```

### CompareTo
`public int CompareTo(PerEventData other)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与传入实例比较大小或顺序。

```csharp
// 先通过子系统 API 拿到 DebugNetworkEventStatistics 实例
DebugNetworkEventStatistics debugNetworkEventStatistics = ...;
var result = debugNetworkEventStatistics.CompareTo(other);
```

### OpenExternalMonitor
`public static void OpenExternalMonitor()`

**用途 / Purpose:** **用途 / Purpose:** 打开external monitor对应的资源或界面。

```csharp
// 静态调用，不需要实例
DebugNetworkEventStatistics.OpenExternalMonitor();
```

### ControlActivate
`public static void ControlActivate()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ControlActivate 对应的操作。

```csharp
// 静态调用，不需要实例
DebugNetworkEventStatistics.ControlActivate();
```

### ControlDeactivate
`public static void ControlDeactivate()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ControlDeactivate 对应的操作。

```csharp
// 静态调用，不需要实例
DebugNetworkEventStatistics.ControlDeactivate();
```

### ControlJustDump
`public static void ControlJustDump()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ControlJustDump 对应的操作。

```csharp
// 静态调用，不需要实例
DebugNetworkEventStatistics.ControlJustDump();
```

### ControlDumpAll
`public static void ControlDumpAll()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ControlDumpAll 对应的操作。

```csharp
// 静态调用，不需要实例
DebugNetworkEventStatistics.ControlDumpAll();
```

### ControlClear
`public static void ControlClear()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ControlClear 对应的操作。

```csharp
// 静态调用，不需要实例
DebugNetworkEventStatistics.ControlClear();
```

### ClearNetGraphs
`public static void ClearNetGraphs()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的net graphs。

```csharp
// 静态调用，不需要实例
DebugNetworkEventStatistics.ClearNetGraphs();
```

### ClearFpsGraph
`public static void ClearFpsGraph()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的fps graph。

```csharp
// 静态调用，不需要实例
DebugNetworkEventStatistics.ClearFpsGraph();
```

### ControlClearAll
`public static void ControlClearAll()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ControlClearAll 对应的操作。

```csharp
// 静态调用，不需要实例
DebugNetworkEventStatistics.ControlClearAll();
```

### ControlDumpReplicationData
`public static void ControlDumpReplicationData()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ControlDumpReplicationData 对应的操作。

```csharp
// 静态调用，不需要实例
DebugNetworkEventStatistics.ControlDumpReplicationData();
```

### EndTick
`public static void EndTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EndTick 对应的操作。

```csharp
// 静态调用，不需要实例
DebugNetworkEventStatistics.EndTick(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DebugNetworkEventStatistics debugNetworkEventStatistics = ...;
debugNetworkEventStatistics.Equals(obj);
```

## 参见

- [本区域目录](../)