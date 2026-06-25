---
title: "GeneralsAndCaptainsAssignmentLogic"
description: "Auto-generated class reference for GeneralsAndCaptainsAssignmentLogic."
---
# GeneralsAndCaptainsAssignmentLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GeneralsAndCaptainsAssignmentLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/GeneralsAndCaptainsAssignmentLogic.cs`

## Overview

`GeneralsAndCaptainsAssignmentLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `GeneralsAndCaptainsAssignmentLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of GeneralsAndCaptainsAssignmentLogic from the subsystem API first
GeneralsAndCaptainsAssignmentLogic generalsAndCaptainsAssignmentLogic = ...;
generalsAndCaptainsAssignmentLogic.AfterStart();
```

### OnTeamDeployed
`public override void OnTeamDeployed(Team team)`

**Purpose:** **Purpose:** Invoked when the team deployed event is raised.

```csharp
// Obtain an instance of GeneralsAndCaptainsAssignmentLogic from the subsystem API first
GeneralsAndCaptainsAssignmentLogic generalsAndCaptainsAssignmentLogic = ...;
generalsAndCaptainsAssignmentLogic.OnTeamDeployed(team);
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** **Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of GeneralsAndCaptainsAssignmentLogic from the subsystem API first
GeneralsAndCaptainsAssignmentLogic generalsAndCaptainsAssignmentLogic = ...;
generalsAndCaptainsAssignmentLogic.OnDeploymentFinished();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<GeneralsAndCaptainsAssignmentLogic>();
```

## See Also

- [Area Index](../)