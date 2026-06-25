---
title: "BattleDeploymentHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleDeploymentHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleDeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleDeploymentHandler : DeploymentHandler`
**Base:** `DeploymentHandler`
**File:** `TaleWorlds.MountAndBlade/Missions/Handlers/BattleDeploymentHandler.cs`

## Overview

`BattleDeploymentHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `BattleDeploymentHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### AutoDeployTeamUsingDeploymentPlan
`public override void AutoDeployTeamUsingDeploymentPlan(Team team)`

**Purpose:** Handles logic related to `auto deploy team using deployment plan`.

### ForceUpdateAllUnits
`public override void ForceUpdateAllUnits()`

**Purpose:** Handles logic related to `force update all units`.

### SetDefaultFormationOrders
`public void SetDefaultFormationOrders(OrderController orderController)`

**Purpose:** Sets the value or state of `default formation orders`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new BattleDeploymentHandler());
```

## See Also

- [Complete Class Catalog](../catalog)