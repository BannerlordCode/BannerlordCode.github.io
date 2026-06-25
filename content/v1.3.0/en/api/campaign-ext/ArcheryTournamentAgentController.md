---
title: "ArcheryTournamentAgentController"
description: "Auto-generated class reference for ArcheryTournamentAgentController."
---
# ArcheryTournamentAgentController

**Namespace:** SandBox.Tournaments.AgentControllers
**Module:** SandBox.Tournaments
**Type:** `public class ArcheryTournamentAgentController : AgentController`
**Base:** `AgentController`
**File:** `SandBox/Tournaments/AgentControllers/ArcheryTournamentAgentController.cs`

## Overview

`ArcheryTournamentAgentController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `ArcheryTournamentAgentController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnInitialize
`public override void OnInitialize()`

**Purpose:** **Purpose:** Invoked when the initialize event is raised.

```csharp
// Obtain an instance of ArcheryTournamentAgentController from the subsystem API first
ArcheryTournamentAgentController archeryTournamentAgentController = ...;
archeryTournamentAgentController.OnInitialize();
```

### OnTick
`public void OnTick()`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of ArcheryTournamentAgentController from the subsystem API first
ArcheryTournamentAgentController archeryTournamentAgentController = ...;
archeryTournamentAgentController.OnTick();
```

### SetTargets
`public void SetTargets(List<DestructableComponent> targetList)`

**Purpose:** **Purpose:** Assigns a new value to targets and updates the object's internal state.

```csharp
// Obtain an instance of ArcheryTournamentAgentController from the subsystem API first
ArcheryTournamentAgentController archeryTournamentAgentController = ...;
archeryTournamentAgentController.SetTargets(targetList);
```

### OnTargetHit
`public void OnTargetHit(Agent agent, DestructableComponent target)`

**Purpose:** **Purpose:** Invoked when the target hit event is raised.

```csharp
// Obtain an instance of ArcheryTournamentAgentController from the subsystem API first
ArcheryTournamentAgentController archeryTournamentAgentController = ...;
archeryTournamentAgentController.OnTargetHit(agent, target);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<ArcheryTournamentAgentController>();
```

## See Also

- [Area Index](../)