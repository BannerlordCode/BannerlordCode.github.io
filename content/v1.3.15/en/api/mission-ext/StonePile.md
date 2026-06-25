---
title: "StonePile"
description: "Auto-generated class reference for StonePile."
---
# StonePile

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StonePile : UsableMachine, IDetachment`
**Base:** `UsableMachine`
**File:** `TaleWorlds.MountAndBlade/StonePile.cs`

## Overview

`StonePile` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AmmoCount` | `public int AmmoCount { get; set; }` |
| `HasThrowingPointUsed` | `public bool HasThrowingPointUsed { get; }` |
| `Side` | `public virtual BattleSideEnum Side { get; }` |
| `MaxUserCount` | `public override int MaxUserCount { get; }` |
| `ReadAmmoCount` | `public int ReadAmmoCount { get; }` |
| `this` | `public StonePile.ThrowingPoint this { get; }` |

## Key Methods

### SetAmmo
`public void SetAmmo(int ammoLeft)`

**Purpose:** **Purpose:** Assigns a new value to ammo and updates the object's internal state.

```csharp
// Obtain an instance of StonePile from the subsystem API first
StonePile stonePile = ...;
stonePile.SetAmmo(0);
```

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** **Purpose:** Executes the AfterMissionStart logic.

```csharp
// Obtain an instance of StonePile from the subsystem API first
StonePile stonePile = ...;
stonePile.AfterMissionStart();
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** **Purpose:** Reads and returns the action text for standing point value held by the this instance.

```csharp
// Obtain an instance of StonePile from the subsystem API first
StonePile stonePile = ...;
var result = stonePile.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** **Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of StonePile from the subsystem API first
StonePile stonePile = ...;
var result = stonePile.GetDescriptionText(gameEntity);
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** **Purpose:** Constructs a new a i behavior object entity and returns it to the caller.

```csharp
// Obtain an instance of StonePile from the subsystem API first
StonePile stonePile = ...;
var result = stonePile.CreateAIBehaviorObject();
```

### IsInRangeToCheckAlternativePoints
`public override bool IsInRangeToCheckAlternativePoints(Agent agent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the in range to check alternative points state or condition.

```csharp
// Obtain an instance of StonePile from the subsystem API first
StonePile stonePile = ...;
var result = stonePile.IsInRangeToCheckAlternativePoints(agent);
```

### GetBestPointAlternativeTo
`public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)`

**Purpose:** **Purpose:** Reads and returns the best point alternative to value held by the this instance.

```csharp
// Obtain an instance of StonePile from the subsystem API first
StonePile stonePile = ...;
var result = stonePile.GetBestPointAlternativeTo(standingPoint, agent);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** **Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of StonePile from the subsystem API first
StonePile stonePile = ...;
var result = stonePile.GetTickRequirement();
```

### WriteToNetwork
`public override void WriteToNetwork()`

**Purpose:** **Purpose:** Writes to network to the target location.

```csharp
// Obtain an instance of StonePile from the subsystem API first
StonePile stonePile = ...;
stonePile.WriteToNetwork();
```

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** **Purpose:** Reads the data or state of from network.

```csharp
// Obtain an instance of StonePile from the subsystem API first
StonePile stonePile = ...;
var result = stonePile.ReadFromNetwork(bufferReadValid);
```

### CanUseAttackEntity
`public bool CanUseAttackEntity()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for use attack entity.

```csharp
// Obtain an instance of StonePile from the subsystem API first
StonePile stonePile = ...;
var result = stonePile.CanUseAttackEntity();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StonePile stonePile = ...;
stonePile.SetAmmo(0);
```

## See Also

- [Area Index](../)