---
title: "DeploymentHandler"
description: "Auto-generated class reference for DeploymentHandler."
---
# DeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DeploymentHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DeploymentHandler.cs`

## Overview

`DeploymentHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `DeploymentHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.OnRemoveBehavior();
```

### OnBattleSideDeployed
`public override void OnBattleSideDeployed(BattleSideEnum side)`

**Purpose:** Invoked when the battle side deployed event is raised.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.OnBattleSideDeployed(side);
```

### AutoDeployTeamUsingDeploymentPlan
`public abstract void AutoDeployTeamUsingDeploymentPlan(Team playerTeam)`

**Purpose:** Executes the AutoDeployTeamUsingDeploymentPlan logic.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.AutoDeployTeamUsingDeploymentPlan(playerTeam);
```

### ForceUpdateAllUnits
`public abstract void ForceUpdateAllUnits()`

**Purpose:** Executes the ForceUpdateAllUnits logic.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.ForceUpdateAllUnits();
```

### FinishDeployment
`public virtual void FinishDeployment()`

**Purpose:** Concludes the deployment flow and performs any cleanup.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.FinishDeployment();
```

### InitializeDeploymentPoints
`public void InitializeDeploymentPoints()`

**Purpose:** Prepares the resources, state, or bindings required by deployment points.

```csharp
// Obtain an instance of DeploymentHandler from the subsystem API first
DeploymentHandler deploymentHandler = ...;
deploymentHandler.InitializeDeploymentPoints();
```

### OrderController_OnOrderIssued_Aux
`public static void OrderController_OnOrderIssued_Aux(OrderType orderType, MBReadOnlyList<Formation> appliedFormations, OrderController orderController = null, params object delegateParams)`

**Purpose:** Executes the OrderController_OnOrderIssued_Aux logic.

```csharp
// Static call; no instance required
DeploymentHandler.OrderController_OnOrderIssued_Aux(orderType, appliedFormations, null, delegateParams);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
DeploymentHandler instance = ...;
```

## See Also

- [Area Index](../)