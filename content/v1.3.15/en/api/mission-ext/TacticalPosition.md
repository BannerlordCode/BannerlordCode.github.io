---
title: "TacticalPosition"
description: "Auto-generated class reference for TacticalPosition."
---
# TacticalPosition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TacticalPosition : MissionObject`
**Base:** `MissionObject`
**File:** `TaleWorlds.MountAndBlade/TacticalPosition.cs`

## Overview

`TacticalPosition` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public WorldPosition Position { get; set; }` |
| `Direction` | `public Vec2 Direction { get; set; }` |
| `Width` | `public float Width { get; }` |
| `Slope` | `public float Slope { get; }` |
| `IsInsurmountable` | `public bool IsInsurmountable { get; }` |
| `IsOuterEdge` | `public bool IsOuterEdge { get; set; }` |
| `LinkedTacticalPositions` | `public List<TacticalPosition> LinkedTacticalPositions { get; set; }` |
| `TacticalPositionType` | `public TacticalPosition.TacticalPositionTypeEnum TacticalPositionType { get; }` |
| `TacticalRegionMembership` | `public TacticalRegion.TacticalRegionTypeEnum TacticalRegionMembership { get; }` |
| `TacticalPositionSide` | `public FormationAI.BehaviorSide TacticalPositionSide { get; }` |

## Key Methods

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TacticalPosition from the subsystem API first
TacticalPosition tacticalPosition = ...;
tacticalPosition.AfterMissionStart();
```

### SetWidth
`public void SetWidth(float width)`

**Purpose:** Assigns a new value to `width` and updates the object's internal state.

```csharp
// Obtain an instance of TacticalPosition from the subsystem API first
TacticalPosition tacticalPosition = ...;
tacticalPosition.SetWidth(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TacticalPosition tacticalPosition = ...;
tacticalPosition.AfterMissionStart();
```

## See Also

- [Area Index](../)