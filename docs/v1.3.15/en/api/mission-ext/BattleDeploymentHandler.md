<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleDeploymentHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleDeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleDeploymentHandler : DeploymentHandler`
**Base:** `DeploymentHandler`
**File:** `TaleWorlds.MountAndBlade/Missions/Handlers/BattleDeploymentHandler.cs`

## Overview

`BattleDeploymentHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Methods

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### AfterStart
```csharp
public override void AfterStart()
```

### AutoDeployTeamUsingDeploymentPlan
```csharp
public override void AutoDeployTeamUsingDeploymentPlan(Team team)
```

### ForceUpdateAllUnits
```csharp
public override void ForceUpdateAllUnits()
```

### SetDefaultFormationOrders
```csharp
public void SetDefaultFormationOrders(OrderController orderController)
```

## Usage Example

```csharp
// Typical usage of BattleDeploymentHandler (Handler)
Mission.Current.AddMissionBehavior(new BattleDeploymentHandler());
```

## See Also

- [Complete Class Catalog](../catalog)