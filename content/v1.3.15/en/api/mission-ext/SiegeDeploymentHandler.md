---
title: "SiegeDeploymentHandler"
description: "Auto-generated class reference for SiegeDeploymentHandler."
---
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

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of SiegeDeploymentHandler from the subsystem API first
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

```csharp
// Obtain an instance of SiegeDeploymentHandler from the subsystem API first
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.OnRemoveBehavior();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeDeploymentHandler from the subsystem API first
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.AfterStart();
```

### FinishDeployment
`public override void FinishDeployment()`

**Purpose:** Concludes the `deployment` flow and performs any cleanup.

```csharp
// Obtain an instance of SiegeDeploymentHandler from the subsystem API first
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.FinishDeployment();
```

### DeployAllSiegeWeaponsOfPlayer
`public void DeployAllSiegeWeaponsOfPlayer()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeDeploymentHandler from the subsystem API first
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.DeployAllSiegeWeaponsOfPlayer();
```

### GetMaxDeployableWeaponCountOfPlayer
`public int GetMaxDeployableWeaponCountOfPlayer(Type weapon)`

**Purpose:** Reads and returns the `max deployable weapon count of player` value held by the current object.

```csharp
// Obtain an instance of SiegeDeploymentHandler from the subsystem API first
SiegeDeploymentHandler siegeDeploymentHandler = ...;
var result = siegeDeploymentHandler.GetMaxDeployableWeaponCountOfPlayer(weapon);
```

### DeployAllSiegeWeaponsOfAi
`public void DeployAllSiegeWeaponsOfAi()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeDeploymentHandler from the subsystem API first
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.DeployAllSiegeWeaponsOfAi();
```

### RemoveDeploymentPoints
`public void RemoveDeploymentPoints(BattleSideEnum side)`

**Purpose:** Removes `deployment points` from the current collection or state.

```csharp
// Obtain an instance of SiegeDeploymentHandler from the subsystem API first
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.RemoveDeploymentPoints(side);
```

### RemoveUnavailableDeploymentPoints
`public void RemoveUnavailableDeploymentPoints(BattleSideEnum side)`

**Purpose:** Removes `unavailable deployment points` from the current collection or state.

```csharp
// Obtain an instance of SiegeDeploymentHandler from the subsystem API first
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.RemoveUnavailableDeploymentPoints(side);
```

### UnHideDeploymentPoints
`public void UnHideDeploymentPoints(BattleSideEnum side)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeDeploymentHandler from the subsystem API first
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.UnHideDeploymentPoints(side);
```

### GetDeployableWeaponCountOfPlayer
`public int GetDeployableWeaponCountOfPlayer(Type weapon)`

**Purpose:** Reads and returns the `deployable weapon count of player` value held by the current object.

```csharp
// Obtain an instance of SiegeDeploymentHandler from the subsystem API first
SiegeDeploymentHandler siegeDeploymentHandler = ...;
var result = siegeDeploymentHandler.GetDeployableWeaponCountOfPlayer(weapon);
```

### AutoDeployTeamUsingTeamAI
`public void AutoDeployTeamUsingTeamAI(Team team, bool autoAssignDetachments = true)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeDeploymentHandler from the subsystem API first
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.AutoDeployTeamUsingTeamAI(team, false);
```

### AutoAssignDetachmentsForDeployment
`public void AutoAssignDetachmentsForDeployment(Team team)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeDeploymentHandler from the subsystem API first
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.AutoAssignDetachmentsForDeployment(team);
```

### GetEstimatedAverageDefenderPosition
`public Vec2 GetEstimatedAverageDefenderPosition()`

**Purpose:** Reads and returns the `estimated average defender position` value held by the current object.

```csharp
// Obtain an instance of SiegeDeploymentHandler from the subsystem API first
SiegeDeploymentHandler siegeDeploymentHandler = ...;
var result = siegeDeploymentHandler.GetEstimatedAverageDefenderPosition();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<SiegeDeploymentHandler>();
```

## See Also

- [Area Index](../)