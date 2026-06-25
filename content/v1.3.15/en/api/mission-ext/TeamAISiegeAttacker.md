---
title: "TeamAISiegeAttacker"
description: "Auto-generated class reference for TeamAISiegeAttacker."
---
# TeamAISiegeAttacker

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamAISiegeAttacker : TeamAISiegeComponent`
**Base:** `TeamAISiegeComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAISiegeAttacker.cs`

## Overview

`TeamAISiegeAttacker` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ArcherPositions` | `public MBReadOnlyList<ArcherPosition> ArcherPositions { get; }` |

## Key Methods

### OnUnitAddedToFormationForTheFirstTime
`public override void OnUnitAddedToFormationForTheFirstTime(Formation formation)`

**Purpose:** **Purpose:** Invoked when the unit added to formation for the first time event is raised.

```csharp
// Obtain an instance of TeamAISiegeAttacker from the subsystem API first
TeamAISiegeAttacker teamAISiegeAttacker = ...;
teamAISiegeAttacker.OnUnitAddedToFormationForTheFirstTime(formation);
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** **Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of TeamAISiegeAttacker from the subsystem API first
TeamAISiegeAttacker teamAISiegeAttacker = ...;
teamAISiegeAttacker.OnDeploymentFinished();
```

### OnFormationFrameChanged
`public override void OnFormationFrameChanged(Agent agent, bool isFrameEnabled, WorldPosition frame)`

**Purpose:** **Purpose:** Invoked when the formation frame changed event is raised.

```csharp
// Obtain an instance of TeamAISiegeAttacker from the subsystem API first
TeamAISiegeAttacker teamAISiegeAttacker = ...;
teamAISiegeAttacker.OnFormationFrameChanged(agent, false, frame);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TeamAISiegeAttacker teamAISiegeAttacker = ...;
teamAISiegeAttacker.OnUnitAddedToFormationForTheFirstTime(formation);
```

## See Also

- [Area Index](../)