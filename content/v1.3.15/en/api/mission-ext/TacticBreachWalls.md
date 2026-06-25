---
title: "TacticBreachWalls"
description: "Auto-generated class reference for TacticBreachWalls."
---
# TacticBreachWalls

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TacticBreachWalls : TacticComponent`
**Base:** `TacticComponent`
**File:** `TaleWorlds.MountAndBlade/TacticBreachWalls.cs`

## Overview

`TacticBreachWalls` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Advances the `occasionally` state each frame or update cycle.

```csharp
// Obtain an instance of TacticBreachWalls from the subsystem API first
TacticBreachWalls tacticBreachWalls = ...;
tacticBreachWalls.TickOccasionally();
```

### GetRetreatThresholdRatio
`public float GetRetreatThresholdRatio(List<SiegeLane> lanes, int insideFormationCount)`

**Purpose:** Reads and returns the `retreat threshold ratio` value held by the current object.

```csharp
// Obtain an instance of TacticBreachWalls from the subsystem API first
TacticBreachWalls tacticBreachWalls = ...;
var result = tacticBreachWalls.GetRetreatThresholdRatio(lanes, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TacticBreachWalls tacticBreachWalls = ...;
tacticBreachWalls.TickOccasionally();
```

## See Also

- [Area Index](../)