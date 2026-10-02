---
title: "DebugNetworkEventStatistics"
description: "DebugNetworkEventStatistics: a public class in TaleWorlds.MountAndBlade; 22 exposed members (11 methods, 4 properties, 1 fields). Source: TaleWorlds.MountAndBlade/Network/DebugNetworkEventStatistics.cs."
---
# DebugNetworkEventStatistics

**Namespace:** `TaleWorlds.MountAndBlade.Network`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class DebugNetworkEventStatistics`
**File:** `TaleWorlds.MountAndBlade/Network/DebugNetworkEventStatistics.cs`

## Overview

DebugNetworkEventStatistics lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Network/DebugNetworkEventStatistics.cs. It is a public class; the inheritance chain is DebugNetworkEventStatistics. It exposes 22 public/protected members: 11 methods, 4 properties, 1 fields, 4 events, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DebugNetworkEventStatistics is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Network) the module directory; inheritance chain DebugNetworkEventStatistics. The surface is method-led (methods 11/22, properties 4/22), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Network/DebugNetworkEventStatistics.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public static event Action<IEnumerable<DebugNetworkEventStatistics.TotalEventData>>OnEventDataUpdated;` | event |
| `Action` | `public static event Action<DebugNetworkEventStatistics.PerSecondEventData>OnPerSecondEventDataUpdated;` | event |
| `Action` | `public static event Action<IEnumerable<float>>OnFPSEventUpdated;` | event |
| `OnOpenExternalMonitor;` | `public static event Action OnOpenExternalMonitor;` | event |
| `SamplesPerSecond` | `public static int SamplesPerSecond` | property |
| `IsActive` | `public static bool IsActive` | property |
| `OpenExternalMonitor` | `public static void OpenExternalMonitor()` | method |
| `ControlActivate` | `public static void ControlActivate()` | method |
| `ControlDeactivate` | `public static void ControlDeactivate()` | method |
| `ControlJustDump` | `public static void ControlJustDump()` | method |
| `ControlDumpAll` | `public static void ControlDumpAll()` | method |
| `ControlClear` | `public static void ControlClear()` | method |
| `ClearNetGraphs` | `public static void ClearNetGraphs()` | method |
| `ClearFpsGraph` | `public static void ClearFpsGraph()` | method |
| `ControlClearAll` | `public static void ControlClearAll()` | method |
| `ControlDumpReplicationData` | `public static void ControlDumpReplicationData()` | method |
| `EndTick` | `public static void EndTick(float dt)` | method |
| `TrackFps` | `public static bool TrackFps` | field |
| `TotalEventData` | `public class TotalEventData` | property |
| `PerSecondEventData` | `public class PerSecondEventData` | property |
| `TotalEventData` | `public class TotalEventData` | nested type |
| `PerSecondEventData` | `public class PerSecondEventData` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
