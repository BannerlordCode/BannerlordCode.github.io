---
title: "TeamAISallyOutDefender"
description: "Auto-generated class reference for TeamAISallyOutDefender."
---
# TeamAISallyOutDefender

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamAISallyOutDefender : TeamAISiegeComponent`
**Base:** `TeamAISiegeComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAISallyOutDefender.cs`

## Overview

`TeamAISallyOutDefender` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ArcherPositions` | `public List<ArcherPosition> ArcherPositions { get; }` |

## Key Methods

### OnUnitAddedToFormationForTheFirstTime
`public override void OnUnitAddedToFormationForTheFirstTime(Formation formation)`

**Purpose:** Invoked when the unit added to formation for the first time event is raised.

```csharp
// Obtain an instance of TeamAISallyOutDefender from the subsystem API first
TeamAISallyOutDefender teamAISallyOutDefender = ...;
teamAISallyOutDefender.OnUnitAddedToFormationForTheFirstTime(formation);
```

### CalculateSallyOutReferencePosition
`public Vec3 CalculateSallyOutReferencePosition(FormationAI.BehaviorSide side)`

**Purpose:** Calculates the current value or result of sally out reference position.

```csharp
// Obtain an instance of TeamAISallyOutDefender from the subsystem API first
TeamAISallyOutDefender teamAISallyOutDefender = ...;
var result = teamAISallyOutDefender.CalculateSallyOutReferencePosition(side);
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of TeamAISallyOutDefender from the subsystem API first
TeamAISallyOutDefender teamAISallyOutDefender = ...;
teamAISallyOutDefender.OnDeploymentFinished();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TeamAISallyOutDefender teamAISallyOutDefender = ...;
teamAISallyOutDefender.OnUnitAddedToFormationForTheFirstTime(formation);
```

## See Also

- [Area Index](../)