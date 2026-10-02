---
title: "DebugNetworkEventStatistics"
description: "DebugNetworkEventStatistics：TaleWorlds.MountAndBlade 的 public 类；公开成员 22 个（方法 11、属性 4、字段 1）。源文件 TaleWorlds.MountAndBlade/Network/DebugNetworkEventStatistics.cs。"
---
# DebugNetworkEventStatistics

**Namespace:** `TaleWorlds.MountAndBlade.Network`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class DebugNetworkEventStatistics`
**File:** `TaleWorlds.MountAndBlade/Network/DebugNetworkEventStatistics.cs`

## 概述

DebugNetworkEventStatistics 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Network/DebugNetworkEventStatistics.cs。它是一个 public 类，继承链为 DebugNetworkEventStatistics。public/protected 成员共 22 个：11 方法、4 属性、1 字段、4 事件、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DebugNetworkEventStatistics 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.Network），继承链 DebugNetworkEventStatistics。成员构成以方法为主（方法 11/22，属性 4/22），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Network/DebugNetworkEventStatistics.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public static event Action<IEnumerable<DebugNetworkEventStatistics.TotalEventData>>OnEventDataUpdated;` | 事件 |
| `Action` | `public static event Action<DebugNetworkEventStatistics.PerSecondEventData>OnPerSecondEventDataUpdated;` | 事件 |
| `Action` | `public static event Action<IEnumerable<float>>OnFPSEventUpdated;` | 事件 |
| `OnOpenExternalMonitor;` | `public static event Action OnOpenExternalMonitor;` | 事件 |
| `SamplesPerSecond` | `public static int SamplesPerSecond` | 属性 |
| `IsActive` | `public static bool IsActive` | 属性 |
| `OpenExternalMonitor` | `public static void OpenExternalMonitor()` | 方法 |
| `ControlActivate` | `public static void ControlActivate()` | 方法 |
| `ControlDeactivate` | `public static void ControlDeactivate()` | 方法 |
| `ControlJustDump` | `public static void ControlJustDump()` | 方法 |
| `ControlDumpAll` | `public static void ControlDumpAll()` | 方法 |
| `ControlClear` | `public static void ControlClear()` | 方法 |
| `ClearNetGraphs` | `public static void ClearNetGraphs()` | 方法 |
| `ClearFpsGraph` | `public static void ClearFpsGraph()` | 方法 |
| `ControlClearAll` | `public static void ControlClearAll()` | 方法 |
| `ControlDumpReplicationData` | `public static void ControlDumpReplicationData()` | 方法 |
| `EndTick` | `public static void EndTick(float dt)` | 方法 |
| `TrackFps` | `public static bool TrackFps` | 字段 |
| `TotalEventData` | `public class TotalEventData` | 属性 |
| `PerSecondEventData` | `public class PerSecondEventData` | 属性 |
| `TotalEventData` | `public class TotalEventData` | 嵌套类型 |
| `PerSecondEventData` | `public class PerSecondEventData` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
