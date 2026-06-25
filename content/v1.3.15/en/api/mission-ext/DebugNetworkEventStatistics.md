---
title: "DebugNetworkEventStatistics"
description: "Auto-generated class reference for DebugNetworkEventStatistics."
---
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

**Purpose:** Opens the resource or UI associated with `external monitor`.

```csharp
// Static call; no instance required
DebugNetworkEventStatistics.OpenExternalMonitor();
```

### ControlActivate
`public static void ControlActivate()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
DebugNetworkEventStatistics.ControlActivate();
```

### ControlDeactivate
`public static void ControlDeactivate()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
DebugNetworkEventStatistics.ControlDeactivate();
```

### ControlJustDump
`public static void ControlJustDump()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
DebugNetworkEventStatistics.ControlJustDump();
```

### ControlDumpAll
`public static void ControlDumpAll()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
DebugNetworkEventStatistics.ControlDumpAll();
```

### ControlClear
`public static void ControlClear()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
DebugNetworkEventStatistics.ControlClear();
```

### ClearNetGraphs
`public static void ClearNetGraphs()`

**Purpose:** Removes all `net graphs` from the current object.

```csharp
// Static call; no instance required
DebugNetworkEventStatistics.ClearNetGraphs();
```

### ClearFpsGraph
`public static void ClearFpsGraph()`

**Purpose:** Removes all `fps graph` from the current object.

```csharp
// Static call; no instance required
DebugNetworkEventStatistics.ClearFpsGraph();
```

### ControlClearAll
`public static void ControlClearAll()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
DebugNetworkEventStatistics.ControlClearAll();
```

### ControlDumpReplicationData
`public static void ControlDumpReplicationData()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
DebugNetworkEventStatistics.ControlDumpReplicationData();
```

### EndTick
`public static void EndTick(float dt)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
DebugNetworkEventStatistics.EndTick(0);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of DebugNetworkEventStatistics from the subsystem API first
DebugNetworkEventStatistics debugNetworkEventStatistics = ...;
var result = debugNetworkEventStatistics.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of DebugNetworkEventStatistics from the subsystem API first
DebugNetworkEventStatistics debugNetworkEventStatistics = ...;
var result = debugNetworkEventStatistics.GetHashCode();
```

### CompareTo
`public int CompareTo(DebugNetworkEventStatistics.PerEventData other)`

**Purpose:** Compares the current object with the supplied instance for ordering.

```csharp
// Obtain an instance of DebugNetworkEventStatistics from the subsystem API first
DebugNetworkEventStatistics debugNetworkEventStatistics = ...;
var result = debugNetworkEventStatistics.CompareTo(other);
```

## Usage Example

```csharp
DebugNetworkEventStatistics.OpenExternalMonitor();
```

## See Also

- [Area Index](../)