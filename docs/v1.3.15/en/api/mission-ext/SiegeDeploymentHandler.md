<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeDeploymentHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeDeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeDeploymentHandler : BattleDeploymentHandler`
**Base:** `BattleDeploymentHandler`
**File:** `TaleWorlds.MountAndBlade/Missions/Handlers/SiegeDeploymentHandler.cs`

## Overview

`SiegeDeploymentHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerDeploymentPoints` | `public IEnumerable<DeploymentPoint> PlayerDeploymentPoints { get; }` |
| `AllDeploymentPoints` | `public IEnumerable<DeploymentPoint> AllDeploymentPoints { get; }` |

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### AfterStart
```csharp
public override void AfterStart()
```

### FinishDeployment
```csharp
public override void FinishDeployment()
```

### DeployAllSiegeWeaponsOfPlayer
```csharp
public void DeployAllSiegeWeaponsOfPlayer()
```

### GetMaxDeployableWeaponCountOfPlayer
```csharp
public int GetMaxDeployableWeaponCountOfPlayer(Type weapon)
```

### DeployAllSiegeWeaponsOfAi
```csharp
public void DeployAllSiegeWeaponsOfAi()
```

### RemoveDeploymentPoints
```csharp
public void RemoveDeploymentPoints(BattleSideEnum side)
```

### RemoveUnavailableDeploymentPoints
```csharp
public void RemoveUnavailableDeploymentPoints(BattleSideEnum side)
```

### UnHideDeploymentPoints
```csharp
public void UnHideDeploymentPoints(BattleSideEnum side)
```

### GetDeployableWeaponCountOfPlayer
```csharp
public int GetDeployableWeaponCountOfPlayer(Type weapon)
```

### AutoDeployTeamUsingTeamAI
```csharp
public void AutoDeployTeamUsingTeamAI(Team team, bool autoAssignDetachments = true)
```

### AutoAssignDetachmentsForDeployment
```csharp
public void AutoAssignDetachmentsForDeployment(Team team)
```

### GetEstimatedAverageDefenderPosition
```csharp
public Vec2 GetEstimatedAverageDefenderPosition()
```

## Usage Example

```csharp
// Typical usage of SiegeDeploymentHandler (Handler)
Mission.Current.AddMissionBehavior(new SiegeDeploymentHandler());
```

## See Also

- [Complete Class Catalog](../catalog)