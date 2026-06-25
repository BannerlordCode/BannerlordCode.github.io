---
title: "DeploymentMissionController"
description: "Auto-generated class reference for DeploymentMissionController."
---
# DeploymentMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DeploymentMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DeploymentMissionController.cs`

## Overview

`DeploymentMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `DeploymentMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TeamSetupOver` | `public bool TeamSetupOver { get; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of DeploymentMissionController from the subsystem API first
DeploymentMissionController deploymentMissionController = ...;
deploymentMissionController.AfterStart();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of DeploymentMissionController from the subsystem API first
DeploymentMissionController deploymentMissionController = ...;
deploymentMissionController.OnBehaviorInitialize();
```

### FinishDeployment
`public void FinishDeployment()`

**Purpose:** Concludes the deployment flow and performs any cleanup.

```csharp
// Obtain an instance of DeploymentMissionController from the subsystem API first
DeploymentMissionController deploymentMissionController = ...;
deploymentMissionController.FinishDeployment();
```

### OnAgentControllerSetToPlayer
`public override void OnAgentControllerSetToPlayer(Agent agent)`

**Purpose:** Invoked when the agent controller set to player event is raised.

```csharp
// Obtain an instance of DeploymentMissionController from the subsystem API first
DeploymentMissionController deploymentMissionController = ...;
deploymentMissionController.OnAgentControllerSetToPlayer(agent);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of DeploymentMissionController from the subsystem API first
DeploymentMissionController deploymentMissionController = ...;
deploymentMissionController.OnMissionTick(0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
DeploymentMissionController instance = ...;
```

## See Also

- [Area Index](../)