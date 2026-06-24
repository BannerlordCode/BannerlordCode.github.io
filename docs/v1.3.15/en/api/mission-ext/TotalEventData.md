<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TotalEventData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TotalEventData

**Namespace:** TaleWorlds.MountAndBlade.Network
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TotalEventData`
**Area:** mission-ext

## Overview

`TotalEventData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TotalEventData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var value = new TotalEventData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
