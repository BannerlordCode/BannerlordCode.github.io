---
title: "BattleDeploymentHandler"
description: "Auto-generated class reference for BattleDeploymentHandler."
---
# BattleDeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleDeploymentHandler : DeploymentHandler`
**Base:** `DeploymentHandler`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.Handlers/BattleDeploymentHandler.cs`

## Overview

`BattleDeploymentHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `BattleDeploymentHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of BattleDeploymentHandler from the subsystem API first
BattleDeploymentHandler battleDeploymentHandler = ...;
battleDeploymentHandler.OnRemoveBehavior();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of BattleDeploymentHandler from the subsystem API first
BattleDeploymentHandler battleDeploymentHandler = ...;
battleDeploymentHandler.AfterStart();
```

### AutoDeployTeamUsingDeploymentPlan
`public override void AutoDeployTeamUsingDeploymentPlan(Team team)`

**Purpose:** Executes the AutoDeployTeamUsingDeploymentPlan logic.

```csharp
// Obtain an instance of BattleDeploymentHandler from the subsystem API first
BattleDeploymentHandler battleDeploymentHandler = ...;
battleDeploymentHandler.AutoDeployTeamUsingDeploymentPlan(team);
```

### ForceUpdateAllUnits
`public override void ForceUpdateAllUnits()`

**Purpose:** Executes the ForceUpdateAllUnits logic.

```csharp
// Obtain an instance of BattleDeploymentHandler from the subsystem API first
BattleDeploymentHandler battleDeploymentHandler = ...;
battleDeploymentHandler.ForceUpdateAllUnits();
```

### SetDefaultFormationOrders
`public void SetDefaultFormationOrders(OrderController orderController)`

**Purpose:** Assigns a new value to default formation orders and updates the object's internal state.

```csharp
// Obtain an instance of BattleDeploymentHandler from the subsystem API first
BattleDeploymentHandler battleDeploymentHandler = ...;
battleDeploymentHandler.SetDefaultFormationOrders(orderController);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleDeploymentHandler>();
```

## See Also

- [Area Index](../)