---
title: "TeamAISiegeDefender"
description: "Auto-generated class reference for TeamAISiegeDefender."
---
# TeamAISiegeDefender

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamAISiegeDefender : TeamAISiegeComponent`
**Base:** `TeamAISiegeComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TeamAISiegeDefender.cs`

## Overview

`TeamAISiegeDefender` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ArcherPositions` | `public List<ArcherPosition> ArcherPositions { get; }` |

## Key Methods

### OnUnitAddedToFormationForTheFirstTime
`public override void OnUnitAddedToFormationForTheFirstTime(Formation formation)`

**Purpose:** Invoked when the `unit added to formation for the first time` event is raised.

```csharp
// Obtain an instance of TeamAISiegeDefender from the subsystem API first
TeamAISiegeDefender teamAISiegeDefender = ...;
teamAISiegeDefender.OnUnitAddedToFormationForTheFirstTime(formation);
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Invoked when the `deployment finished` event is raised.

```csharp
// Obtain an instance of TeamAISiegeDefender from the subsystem API first
TeamAISiegeDefender teamAISiegeDefender = ...;
teamAISiegeDefender.OnDeploymentFinished();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TeamAISiegeDefender teamAISiegeDefender = ...;
teamAISiegeDefender.OnUnitAddedToFormationForTheFirstTime(formation);
```

## See Also

- [Area Index](../)