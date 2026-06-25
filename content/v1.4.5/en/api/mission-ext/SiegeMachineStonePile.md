---
title: "SiegeMachineStonePile"
description: "Auto-generated class reference for SiegeMachineStonePile."
---
# SiegeMachineStonePile

**Namespace:** TaleWorlds.MountAndBlade.Objects.Usables
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeMachineStonePile : UsableMachine, ISpawnable`
**Base:** `UsableMachine`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects.Usables/SiegeMachineStonePile.cs`

## Overview

`SiegeMachineStonePile` lives in `TaleWorlds.MountAndBlade.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** **Purpose:** Reads and returns the action text for standing point value held by the this instance.

```csharp
// Obtain an instance of SiegeMachineStonePile from the subsystem API first
SiegeMachineStonePile siegeMachineStonePile = ...;
var result = siegeMachineStonePile.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** **Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of SiegeMachineStonePile from the subsystem API first
SiegeMachineStonePile siegeMachineStonePile = ...;
var result = siegeMachineStonePile.GetDescriptionText(gameEntity);
```

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

**Purpose:** **Purpose:** Assigns a new value to spawned from spawner and updates the object's internal state.

```csharp
// Obtain an instance of SiegeMachineStonePile from the subsystem API first
SiegeMachineStonePile siegeMachineStonePile = ...;
siegeMachineStonePile.SetSpawnedFromSpawner();
```

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the order value held by the this instance.

```csharp
// Obtain an instance of SiegeMachineStonePile from the subsystem API first
SiegeMachineStonePile siegeMachineStonePile = ...;
var result = siegeMachineStonePile.GetOrder(side);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeMachineStonePile siegeMachineStonePile = ...;
siegeMachineStonePile.GetActionTextForStandingPoint(usableGameObject);
```

## See Also

- [Area Index](../)