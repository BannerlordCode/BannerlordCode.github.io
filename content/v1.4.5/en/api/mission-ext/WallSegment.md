---
title: "WallSegment"
description: "Auto-generated class reference for WallSegment."
---
# WallSegment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class WallSegment : SynchedMissionObject, IPointDefendable, ICastleKeyPosition`
**Base:** `SynchedMissionObject`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/WallSegment.cs`

## Overview

`WallSegment` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MiddlePosition` | `public TacticalPosition MiddlePosition { get; }` |
| `WaitPosition` | `public TacticalPosition WaitPosition { get; }` |
| `AttackerWaitPosition` | `public TacticalPosition AttackerWaitPosition { get; }` |
| `AttackerSiegeWeapon` | `public IPrimarySiegeWeapon AttackerSiegeWeapon { get; }` |
| `DefencePoints` | `public IEnumerable<DefencePoint> DefencePoints { get; }` |
| `IsBreachedWall` | `public bool IsBreachedWall { get; }` |
| `MiddleFrame` | `public WorldFrame MiddleFrame { get; }` |
| `DefenseWaitFrame` | `public WorldFrame DefenseWaitFrame { get; }` |
| `AttackerWaitFrame` | `public WorldFrame AttackerWaitFrame { get; }` |
| `DefenseSide` | `public FormationAI.BehaviorSide DefenseSide { get; }` |

## Key Methods

### GetPosition
`public Vec3 GetPosition()`

**Purpose:** **Purpose:** Reads and returns the position value held by the this instance.

```csharp
// Obtain an instance of WallSegment from the subsystem API first
WallSegment wallSegment = ...;
var result = wallSegment.GetPosition();
```

### OnChooseUsedWallSegment
`public void OnChooseUsedWallSegment(bool isBroken)`

**Purpose:** **Purpose:** Invoked when the choose used wall segment event is raised.

```csharp
// Obtain an instance of WallSegment from the subsystem API first
WallSegment wallSegment = ...;
wallSegment.OnChooseUsedWallSegment(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WallSegment wallSegment = ...;
wallSegment.GetPosition();
```

## See Also

- [Area Index](../)