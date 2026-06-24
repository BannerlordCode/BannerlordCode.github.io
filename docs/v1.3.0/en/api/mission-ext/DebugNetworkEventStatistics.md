<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DebugNetworkEventStatistics`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DebugNetworkEventStatistics

**Namespace:** TaleWorlds.MountAndBlade.Network
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class DebugNetworkEventStatistics`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Network/DebugNetworkEventStatistics.cs`

## Overview

`DebugNetworkEventStatistics` lives in `TaleWorlds.MountAndBlade.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SamplesPerSecond` | `public static int SamplesPerSecond { get; set; }` |
| `IsActive` | `public static bool IsActive { get; }` |
| `HasData` | `public bool HasData { get; }` |

## Key Methods

### OpenExternalMonitor
`public static void OpenExternalMonitor()`

**Purpose:** Handles logic related to `open external monitor`.

### ControlActivate
`public static void ControlActivate()`

**Purpose:** Handles logic related to `control activate`.

### ControlDeactivate
`public static void ControlDeactivate()`

**Purpose:** Handles logic related to `control deactivate`.

### ControlJustDump
`public static void ControlJustDump()`

**Purpose:** Handles logic related to `control just dump`.

### ControlDumpAll
`public static void ControlDumpAll()`

**Purpose:** Handles logic related to `control dump all`.

### ControlClear
`public static void ControlClear()`

**Purpose:** Handles logic related to `control clear`.

### ClearNetGraphs
`public static void ClearNetGraphs()`

**Purpose:** Handles logic related to `clear net graphs`.

### ClearFpsGraph
`public static void ClearFpsGraph()`

**Purpose:** Handles logic related to `clear fps graph`.

### ControlClearAll
`public static void ControlClearAll()`

**Purpose:** Handles logic related to `control clear all`.

### ControlDumpReplicationData
`public static void ControlDumpReplicationData()`

**Purpose:** Handles logic related to `control dump replication data`.

### EndTick
`public static void EndTick(float dt)`

**Purpose:** Handles logic related to `end tick`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### CompareTo
`public int CompareTo(DebugNetworkEventStatistics.PerEventData other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
DebugNetworkEventStatistics.OpenExternalMonitor();
```

## See Also

- [Complete Class Catalog](../catalog)