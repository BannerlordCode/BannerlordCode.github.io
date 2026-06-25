---
title: "MissionSiegeWeaponsController"
description: "Auto-generated class reference for MissionSiegeWeaponsController."
---
# MissionSiegeWeaponsController

**Namespace:** TaleWorlds.MountAndBlade.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeWeaponsController : IMissionSiegeWeaponsController`
**Base:** `IMissionSiegeWeaponsController`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionSiegeWeaponsController.cs`

## Overview

`MissionSiegeWeaponsController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `MissionSiegeWeaponsController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMaxDeployableWeaponCount
`public int GetMaxDeployableWeaponCount(Type t)`

**Purpose:** **Purpose:** Reads and returns the max deployable weapon count value held by the this instance.

```csharp
// Obtain an instance of MissionSiegeWeaponsController from the subsystem API first
MissionSiegeWeaponsController missionSiegeWeaponsController = ...;
var result = missionSiegeWeaponsController.GetMaxDeployableWeaponCount(t);
```

### GetSiegeWeapons
`public IEnumerable<IMissionSiegeWeapon> GetSiegeWeapons()`

**Purpose:** **Purpose:** Reads and returns the siege weapons value held by the this instance.

```csharp
// Obtain an instance of MissionSiegeWeaponsController from the subsystem API first
MissionSiegeWeaponsController missionSiegeWeaponsController = ...;
var result = missionSiegeWeaponsController.GetSiegeWeapons();
```

### OnWeaponDeployed
`public void OnWeaponDeployed(SiegeWeapon missionWeapon)`

**Purpose:** **Purpose:** Invoked when the weapon deployed event is raised.

```csharp
// Obtain an instance of MissionSiegeWeaponsController from the subsystem API first
MissionSiegeWeaponsController missionSiegeWeaponsController = ...;
missionSiegeWeaponsController.OnWeaponDeployed(missionWeapon);
```

### OnWeaponUndeployed
`public void OnWeaponUndeployed(SiegeWeapon missionWeapon)`

**Purpose:** **Purpose:** Invoked when the weapon undeployed event is raised.

```csharp
// Obtain an instance of MissionSiegeWeaponsController from the subsystem API first
MissionSiegeWeaponsController missionSiegeWeaponsController = ...;
missionSiegeWeaponsController.OnWeaponUndeployed(missionWeapon);
```

### GetWeaponType
`public static Type GetWeaponType(ScriptComponentBehavior weapon)`

**Purpose:** **Purpose:** Reads and returns the weapon type value held by the this instance.

```csharp
// Static call; no instance required
MissionSiegeWeaponsController.GetWeaponType(weapon);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<MissionSiegeWeaponsController>();
```

## See Also

- [Area Index](../)