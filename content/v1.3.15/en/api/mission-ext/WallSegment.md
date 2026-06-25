---
title: "WallSegment"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WallSegment`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WallSegment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class WallSegment : SynchedMissionObject, IPointDefendable, ICastleKeyPosition`
**Base:** `SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/WallSegment.cs`

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

**Purpose:** Gets the current value of `position`.

### OnChooseUsedWallSegment
`public void OnChooseUsedWallSegment(bool isBroken)`

**Purpose:** Called when the `choose used wall segment` event is raised.

## Usage Example

```csharp
var value = new WallSegment();
value.GetPosition();
```

## See Also

- [Complete Class Catalog](../catalog)