---
title: "DeploymentHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeploymentHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DeploymentHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DeploymentHandler.cs`

## Overview

`DeploymentHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `DeploymentHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### OnBattleSideDeployed
`public override void OnBattleSideDeployed(BattleSideEnum side)`

**Purpose:** Called when the `battle side deployed` event is raised.

### AutoDeployTeamUsingDeploymentPlan
`public abstract void AutoDeployTeamUsingDeploymentPlan(Team playerTeam)`

**Purpose:** Handles logic related to `auto deploy team using deployment plan`.

### ForceUpdateAllUnits
`public abstract void ForceUpdateAllUnits()`

**Purpose:** Handles logic related to `force update all units`.

### FinishDeployment
`public virtual void FinishDeployment()`

**Purpose:** Handles logic related to `finish deployment`.

### InitializeDeploymentPoints
`public void InitializeDeploymentPoints()`

**Purpose:** Initializes the state, resources, or bindings for `deployment points`.

### OrderController_OnOrderIssued_Aux
`public static void OrderController_OnOrderIssued_Aux(OrderType orderType, MBReadOnlyList<Formation> appliedFormations, OrderController orderController = null, params object delegateParams)`

**Purpose:** Handles logic related to `order controller_ on order issued_ aux`.

## Usage Example

```csharp
var implementation = new CustomDeploymentHandler();
```

## See Also

- [Complete Class Catalog](../catalog)