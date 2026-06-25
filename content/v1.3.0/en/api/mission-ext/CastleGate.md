---
title: "CastleGate"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CastleGate`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CastleGate

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CastleGate : UsableMachine, IPointDefendable, ICastleKeyPosition, ITargetable`
**Base:** `UsableMachine`
**File:** `TaleWorlds.MountAndBlade/CastleGate.cs`

## Overview

`CastleGate` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MiddlePosition` | `public TacticalPosition MiddlePosition { get; }` |
| `WaitPosition` | `public TacticalPosition WaitPosition { get; }` |
| `FocusableObjectType` | `public override FocusableObjectType FocusableObjectType { get; }` |
| `State` | `public CastleGate.GateState State { get; }` |
| `IsGateOpen` | `public bool IsGateOpen { get; set; }` |
| `AttackerSiegeWeapon` | `public IPrimarySiegeWeapon AttackerSiegeWeapon { get; set; }` |
| `DefencePoints` | `public IEnumerable<DefencePoint> DefencePoints { get; set; }` |
| `DefenseSide` | `public FormationAI.BehaviorSide DefenseSide { get; }` |
| `MiddleFrame` | `public WorldFrame MiddleFrame { get; }` |
| `DefenseWaitFrame` | `public WorldFrame DefenseWaitFrame { get; }` |

## Key Methods

### GetPosition
`public Vec3 GetPosition()`

**Purpose:** Gets the current value of `position`.

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**Purpose:** Gets the current value of `order`.

### SetUsableTeam
`public void SetUsableTeam(Team team)`

**Purpose:** Sets the value or state of `usable team`.

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Handles logic related to `after mission start`.

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Gets the current value of `action text for standing point`.

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Creates a new `a i behavior object` instance or object.

### OpenDoorAndDisableGateForCivilianMission
`public void OpenDoorAndDisableGateForCivilianMission()`

**Purpose:** Handles logic related to `open door and disable gate for civilian mission`.

### OpenDoor
`public void OpenDoor()`

**Purpose:** Handles logic related to `open door`.

### CloseDoor
`public void CloseDoor()`

**Purpose:** Handles logic related to `close door`.

### SetAutoOpenState
`public void SetAutoOpenState(bool isEnabled)`

**Purpose:** Sets the value or state of `auto open state`.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### GetTargetFlags
`public TargetFlags GetTargetFlags()`

**Purpose:** Gets the current value of `target flags`.

### GetTargetValue
`public float GetTargetValue(List<Vec3> weaponPos)`

**Purpose:** Gets the current value of `target value`.

### GetTargetEntity
`public WeakGameEntity GetTargetEntity()`

**Purpose:** Gets the current value of `target entity`.

### GetSide
`public BattleSideEnum GetSide()`

**Purpose:** Gets the current value of `side`.

### GetTargetGlobalVelocity
`public Vec3 GetTargetGlobalVelocity()`

**Purpose:** Gets the current value of `target global velocity`.

### IsDestructable
`public bool IsDestructable()`

**Purpose:** Handles logic related to `is destructable`.

### Entity
`public WeakGameEntity Entity()`

**Purpose:** Handles logic related to `entity`.

### GetPhysicsGlobalBoxMax
`public Vec3 GetPhysicsGlobalBoxMax()`

**Purpose:** Gets the current value of `physics global box max`.

### GetPhysicsGlobalBoxMin
`public Vec3 GetPhysicsGlobalBoxMin()`

**Purpose:** Gets the current value of `physics global box min`.

### GetTargetingOffset
`public Vec3 GetTargetingOffset()`

**Purpose:** Gets the current value of `targeting offset`.

## Usage Example

```csharp
var value = new CastleGate();
value.GetPosition();
```

## See Also

- [Complete Class Catalog](../catalog)