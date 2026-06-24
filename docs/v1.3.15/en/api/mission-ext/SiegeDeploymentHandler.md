<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeDeploymentHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeDeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeDeploymentHandler : BattleDeploymentHandler`
**Base:** `BattleDeploymentHandler`
**File:** `TaleWorlds.MountAndBlade/Missions/Handlers/SiegeDeploymentHandler.cs`

## Overview

`SiegeDeploymentHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `SiegeDeploymentHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerDeploymentPoints` | `public IEnumerable<DeploymentPoint> PlayerDeploymentPoints { get; }` |
| `AllDeploymentPoints` | `public IEnumerable<DeploymentPoint> AllDeploymentPoints { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### FinishDeployment
`public override void FinishDeployment()`

**Purpose:** Handles logic related to `finish deployment`.

### DeployAllSiegeWeaponsOfPlayer
`public void DeployAllSiegeWeaponsOfPlayer()`

**Purpose:** Handles logic related to `deploy all siege weapons of player`.

### GetMaxDeployableWeaponCountOfPlayer
`public int GetMaxDeployableWeaponCountOfPlayer(Type weapon)`

**Purpose:** Gets the current value of `max deployable weapon count of player`.

### DeployAllSiegeWeaponsOfAi
`public void DeployAllSiegeWeaponsOfAi()`

**Purpose:** Handles logic related to `deploy all siege weapons of ai`.

### RemoveDeploymentPoints
`public void RemoveDeploymentPoints(BattleSideEnum side)`

**Purpose:** Removes `deployment points` from the current collection or state.

### RemoveUnavailableDeploymentPoints
`public void RemoveUnavailableDeploymentPoints(BattleSideEnum side)`

**Purpose:** Removes `unavailable deployment points` from the current collection or state.

### UnHideDeploymentPoints
`public void UnHideDeploymentPoints(BattleSideEnum side)`

**Purpose:** Handles logic related to `un hide deployment points`.

### GetDeployableWeaponCountOfPlayer
`public int GetDeployableWeaponCountOfPlayer(Type weapon)`

**Purpose:** Gets the current value of `deployable weapon count of player`.

### AutoDeployTeamUsingTeamAI
`public void AutoDeployTeamUsingTeamAI(Team team, bool autoAssignDetachments = true)`

**Purpose:** Handles logic related to `auto deploy team using team a i`.

### AutoAssignDetachmentsForDeployment
`public void AutoAssignDetachmentsForDeployment(Team team)`

**Purpose:** Handles logic related to `auto assign detachments for deployment`.

### GetEstimatedAverageDefenderPosition
`public Vec2 GetEstimatedAverageDefenderPosition()`

**Purpose:** Gets the current value of `estimated average defender position`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new SiegeDeploymentHandler());
```

## See Also

- [Complete Class Catalog](../catalog)