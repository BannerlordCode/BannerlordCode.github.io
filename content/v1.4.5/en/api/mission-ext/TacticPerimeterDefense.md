---
title: "TacticPerimeterDefense"
description: "Auto-generated class reference for TacticPerimeterDefense."
---
# TacticPerimeterDefense

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TacticPerimeterDefense : TacticComponent`
**Base:** `TacticComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TacticPerimeterDefense.cs`

## Overview

`TacticPerimeterDefense` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AggregatePosition` | `public Vec2 AggregatePosition { get; }` |
| `MedianAggregatePosition` | `public WorldPosition MedianAggregatePosition { get; }` |

## Key Methods

### UpdateClusterData
`public void UpdateClusterData()`

**Purpose:** Recalculates and stores the latest representation of `cluster data`.

```csharp
// Obtain an instance of TacticPerimeterDefense from the subsystem API first
TacticPerimeterDefense tacticPerimeterDefense = ...;
tacticPerimeterDefense.UpdateClusterData();
```

### AddToCluster
`public void AddToCluster(Formation formation)`

**Purpose:** Adds `to cluster` to the current collection or state.

```csharp
// Obtain an instance of TacticPerimeterDefense from the subsystem API first
TacticPerimeterDefense tacticPerimeterDefense = ...;
tacticPerimeterDefense.AddToCluster(formation);
```

### RemoveFromCluster
`public void RemoveFromCluster(Formation formation)`

**Purpose:** Removes `from cluster` from the current collection or state.

```csharp
// Obtain an instance of TacticPerimeterDefense from the subsystem API first
TacticPerimeterDefense tacticPerimeterDefense = ...;
tacticPerimeterDefense.RemoveFromCluster(formation);
```

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Advances the `occasionally` state each frame or update cycle.

```csharp
// Obtain an instance of TacticPerimeterDefense from the subsystem API first
TacticPerimeterDefense tacticPerimeterDefense = ...;
tacticPerimeterDefense.TickOccasionally();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TacticPerimeterDefense tacticPerimeterDefense = ...;
tacticPerimeterDefense.UpdateClusterData();
```

## See Also

- [Area Index](../)