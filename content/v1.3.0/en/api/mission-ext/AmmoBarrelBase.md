---
title: "AmmoBarrelBase"
description: "Auto-generated class reference for AmmoBarrelBase."
---
# AmmoBarrelBase

**Namespace:** TaleWorlds.MountAndBlade.Objects.Usables
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AmmoBarrelBase : UsableMachine`
**Base:** `UsableMachine`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/AmmoBarrelBase.cs`

## Overview

`AmmoBarrelBase` lives in `TaleWorlds.MountAndBlade.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Invoked when the `deployment finished` event is raised.

```csharp
// Obtain an instance of AmmoBarrelBase from the subsystem API first
AmmoBarrelBase ammoBarrelBase = ...;
ammoBarrelBase.OnDeploymentFinished();
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Reads and returns the `action text for standing point` value held by the current object.

```csharp
// Obtain an instance of AmmoBarrelBase from the subsystem API first
AmmoBarrelBase ammoBarrelBase = ...;
var result = ammoBarrelBase.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public abstract override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `description text` value held by the current object.

```csharp
// Obtain an instance of AmmoBarrelBase from the subsystem API first
AmmoBarrelBase ammoBarrelBase = ...;
var result = ammoBarrelBase.GetDescriptionText(gameEntity);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the `tick requirement` value held by the current object.

```csharp
// Obtain an instance of AmmoBarrelBase from the subsystem API first
AmmoBarrelBase ammoBarrelBase = ...;
var result = ammoBarrelBase.GetTickRequirement();
```

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**Purpose:** Reads and returns the `order` value held by the current object.

```csharp
// Obtain an instance of AmmoBarrelBase from the subsystem API first
AmmoBarrelBase ammoBarrelBase = ...;
var result = ammoBarrelBase.GetOrder(side);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
AmmoBarrelBase instance = ...;
```

## See Also

- [Area Index](../)