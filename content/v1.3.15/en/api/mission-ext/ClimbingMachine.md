---
title: "ClimbingMachine"
description: "Auto-generated class reference for ClimbingMachine."
---
# ClimbingMachine

**Namespace:** TaleWorlds.MountAndBlade.Objects.Usables
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClimbingMachine : UsableMachine`
**Base:** `UsableMachine`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/ClimbingMachine.cs`

## Overview

`ClimbingMachine` lives in `TaleWorlds.MountAndBlade.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SinkingReferenceOffset` | `public override float SinkingReferenceOffset { get; }` |

## Key Methods

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Reads and returns the action text for standing point value held by the this instance.

```csharp
// Obtain an instance of ClimbingMachine from the subsystem API first
ClimbingMachine climbingMachine = ...;
var result = climbingMachine.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of ClimbingMachine from the subsystem API first
ClimbingMachine climbingMachine = ...;
var result = climbingMachine.GetDescriptionText(gameEntity);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of ClimbingMachine from the subsystem API first
ClimbingMachine climbingMachine = ...;
var result = climbingMachine.GetTickRequirement();
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of ClimbingMachine from the subsystem API first
ClimbingMachine climbingMachine = ...;
climbingMachine.OnDeploymentFinished();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClimbingMachine climbingMachine = ...;
climbingMachine.GetActionTextForStandingPoint(usableGameObject);
```

## See Also

- [Area Index](../)