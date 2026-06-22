<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeploymentHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DeploymentHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/DeploymentHandler.cs`

## Overview

`DeploymentHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerTeam` | `public Team PlayerTeam { get { return base.Mission.PlayerTeam; }` |

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### EarlyStart
```csharp
public override void EarlyStart()
```

### AfterStart
```csharp
public override void AfterStart()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### OnBattleSideDeployed
```csharp
public override void OnBattleSideDeployed(BattleSideEnum side)
```

### AutoDeployTeamUsingDeploymentPlan
```csharp
public abstract void AutoDeployTeamUsingDeploymentPlan(Team playerTeam)
```

### ForceUpdateAllUnits
```csharp
public abstract void ForceUpdateAllUnits()
```

### FinishDeployment
```csharp
public virtual void FinishDeployment()
```

### InitializeDeploymentPoints
```csharp
public void InitializeDeploymentPoints()
```

## Usage Example

```csharp
// Typical usage of DeploymentHandler (Handler)
Mission.Current.AddMissionBehavior(new DeploymentHandler());
```

## See Also

- [Complete Class Catalog](../catalog)