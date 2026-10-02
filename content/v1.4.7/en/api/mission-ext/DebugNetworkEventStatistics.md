---
title: "DebugNetworkEventStatistics"
description: "DebugNetworkEventStatistics — class in TaleWorlds.MountAndBlade.Network. 19 public members (19 static)."
---

<!-- v147-skeleton -->
# DebugNetworkEventStatistics

**Namespace:** `TaleWorlds.MountAndBlade.Network`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public static class DebugNetworkEventStatistics`  
**Source:** `TaleWorlds.MountAndBlade/Network/DebugNetworkEventStatistics.cs`

## Overview

`DebugNetworkEventStatistics` is a named type in the TaleWorlds.MountAndBlade.Network namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (14): `SamplesPerSecond`, `IsActive`, `OpenExternalMonitor`, `ControlActivate`, `ControlDeactivate`, `ControlJustDump`, ….
- **Data and constants** (5): `OnEventDataUpdated`, `OnPerSecondEventDataUpdated`, `OnFPSEventUpdated`, `OnOpenExternalMonitor`, `MaxGraphPointCount`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ClearFpsGraph` | method (static) | Static entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `ClearNetGraphs` | method (static) | Static entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `ControlActivate` | method (static) | Static entry point. Takes no arguments. |
| `ControlClear` | method (static) | Static entry point. Takes no arguments. |
| `ControlClearAll` | method (static) | Static entry point. Takes no arguments. |
| `ControlDeactivate` | method (static) | Static entry point. Takes no arguments. |
| `ControlDumpAll` | method (static) | Static entry point. Takes no arguments. |
| `ControlDumpReplicationData` | method (static) | Static entry point. Takes no arguments. |
| `ControlJustDump` | method (static) | Static entry point. Takes no arguments. |
| `EndTick` | method (static) | Static entry point. Takes 1 argument: `float dt`. |
| `IsActive` | property (static) | Static entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OpenExternalMonitor` | method (static) | Static entry point. Takes no arguments. |
| `SamplesPerSecond` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `TrackFps` | property (static) | Static entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `MaxGraphPointCount` | field (static) | Static entry point `int` field — direct storage with no validation or notification. |
| `OnEventDataUpdated` | field (static) | Static entry point `Action<IEnumerable<DebugNetworkEventStatistics.TotalEventData>>` field — direct storage with no validation or notification. |
| `OnFPSEventUpdated` | field (static) | Static entry point `Action<IEnumerable<float>>` field — direct storage with no validation or notification. |
| `OnOpenExternalMonitor` | field (static) | Static entry point `Action` field — direct storage with no validation or notification. |
| `OnPerSecondEventDataUpdated` | field (static) | Static entry point `Action<DebugNetworkEventStatistics.PerSecondEventData>` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// Static entry points on DebugNetworkEventStatistics:
DebugNetworkEventStatistics.OpenExternalMonitor();
DebugNetworkEventStatistics.ControlActivate();
DebugNetworkEventStatistics.ControlDeactivate();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade/Network/DebugNetworkEventStatistics.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameNetwork](../GameNetwork/) — `TaleWorlds.MountAndBlade`.
- [Utilities](../../engine/Utilities/) — `TaleWorlds.Engine`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/mission-ext/](../) — the other types in this bucket.
