---
title: "CastleGate"
description: "Auto-generated class reference for CastleGate."
---
# CastleGate

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CastleGate : UsableMachine, IPointDefendable, ICastleKeyPosition, ITargetable`
**Base:** `UsableMachine`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CastleGate.cs`

## Overview

`CastleGate` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MiddlePosition` | `public TacticalPosition MiddlePosition { get; }` |
| `WaitPosition` | `public TacticalPosition WaitPosition { get; }` |
| `State` | `public GateState State { get; }` |
| `IsGateOpen` | `public bool IsGateOpen { get; set; }` |
| `AttackerSiegeWeapon` | `public IPrimarySiegeWeapon AttackerSiegeWeapon { get; }` |
| `DefencePoints` | `public IEnumerable<DefencePoint> DefencePoints { get; }` |
| `DefenseSide` | `public FormationAI.BehaviorSide DefenseSide { get; }` |

## Key Methods

### GetPosition
`public Vec3 GetPosition()`

**Purpose:** Reads and returns the position value held by the this instance.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
var result = castleGate.GetPosition();
```

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**Purpose:** Reads and returns the order value held by the this instance.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
var result = castleGate.GetOrder(side);
```

### SetUsableTeam
`public void SetUsableTeam(Team team)`

**Purpose:** Assigns a new value to usable team and updates the object's internal state.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
castleGate.SetUsableTeam(team);
```

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Executes the AfterMissionStart logic.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
castleGate.AfterMissionStart();
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
var result = castleGate.GetDescriptionText(gameEntity);
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Reads and returns the action text for standing point value held by the this instance.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
var result = castleGate.GetActionTextForStandingPoint(usableGameObject);
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Constructs a new a i behavior object entity and returns it to the caller.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
var result = castleGate.CreateAIBehaviorObject();
```

### OpenDoorAndDisableGateForCivilianMission
`public void OpenDoorAndDisableGateForCivilianMission()`

**Purpose:** Opens the resource or UI associated with door and disable gate for civilian mission.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
castleGate.OpenDoorAndDisableGateForCivilianMission();
```

### OpenDoor
`public void OpenDoor()`

**Purpose:** Opens the resource or UI associated with door.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
castleGate.OpenDoor();
```

### CloseDoor
`public void CloseDoor()`

**Purpose:** Closes the resource or UI associated with door.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
castleGate.CloseDoor();
```

### SetAutoOpenState
`public void SetAutoOpenState(bool isEnabled)`

**Purpose:** Assigns a new value to auto open state and updates the object's internal state.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
castleGate.SetAutoOpenState(false);
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
var result = castleGate.GetTickRequirement();
```

### GetTargetFlags
`public TargetFlags GetTargetFlags()`

**Purpose:** Reads and returns the target flags value held by the this instance.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
var result = castleGate.GetTargetFlags();
```

### GetTargetValue
`public float GetTargetValue(List<Vec3> weaponPos)`

**Purpose:** Reads and returns the target value value held by the this instance.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
var result = castleGate.GetTargetValue(weaponPos);
```

### GetTargetEntity
`public WeakGameEntity GetTargetEntity()`

**Purpose:** Reads and returns the target entity value held by the this instance.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
var result = castleGate.GetTargetEntity();
```

### GetSide
`public BattleSideEnum GetSide()`

**Purpose:** Reads and returns the side value held by the this instance.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
var result = castleGate.GetSide();
```

### GetTargetGlobalVelocity
`public Vec3 GetTargetGlobalVelocity()`

**Purpose:** Reads and returns the target global velocity value held by the this instance.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
var result = castleGate.GetTargetGlobalVelocity();
```

### IsDestructable
`public bool IsDestructable()`

**Purpose:** Determines whether the this instance is in the destructable state or condition.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
var result = castleGate.IsDestructable();
```

### Entity
`public WeakGameEntity Entity()`

**Purpose:** Executes the Entity logic.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
var result = castleGate.Entity();
```

### GetTargetingOffset
`public Vec3 GetTargetingOffset()`

**Purpose:** Reads and returns the targeting offset value held by the this instance.

```csharp
// Obtain an instance of CastleGate from the subsystem API first
CastleGate castleGate = ...;
var result = castleGate.GetTargetingOffset();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CastleGate castleGate = ...;
castleGate.GetPosition();
```

## See Also

- [Area Index](../)