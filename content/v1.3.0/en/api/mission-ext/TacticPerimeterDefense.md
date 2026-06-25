---
title: "TacticPerimeterDefense"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TacticPerimeterDefense`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TacticPerimeterDefense

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TacticPerimeterDefense : TacticComponent`
**Base:** `TacticComponent`
**File:** `TaleWorlds.MountAndBlade/TacticPerimeterDefense.cs`

## Overview

`TacticPerimeterDefense` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AggregatePosition` | `public Vec2 AggregatePosition { get; }` |
| `MedianAggregatePosition` | `public WorldPosition MedianAggregatePosition { get; }` |
| `EnemyFormations` | `public MBReadOnlyList<Formation> EnemyFormations { get; }` |

## Key Methods

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Handles logic related to `tick occasionally`.

### UpdateClusterData
`public void UpdateClusterData()`

**Purpose:** Updates the state or data of `cluster data`.

### AddToCluster
`public void AddToCluster(Formation formation)`

**Purpose:** Adds `to cluster` to the current collection or state.

### RemoveFromCluster
`public void RemoveFromCluster(Formation formation)`

**Purpose:** Removes `from cluster` from the current collection or state.

## Usage Example

```csharp
var value = new TacticPerimeterDefense();
value.TickOccasionally();
```

## See Also

- [Complete Class Catalog](../catalog)