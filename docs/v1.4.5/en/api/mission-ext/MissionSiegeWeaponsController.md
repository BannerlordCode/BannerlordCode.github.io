<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSiegeWeaponsController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionSiegeWeaponsController

**Namespace:** TaleWorlds.MountAndBlade.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeWeaponsController : IMissionSiegeWeaponsController`
**Base:** `IMissionSiegeWeaponsController`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions/MissionSiegeWeaponsController.cs`

## Overview

`MissionSiegeWeaponsController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `MissionSiegeWeaponsController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMaxDeployableWeaponCount
`public int GetMaxDeployableWeaponCount(Type t)`

**Purpose:** Gets the current value of `max deployable weapon count`.

### GetSiegeWeapons
`public IEnumerable<IMissionSiegeWeapon> GetSiegeWeapons()`

**Purpose:** Gets the current value of `siege weapons`.

### OnWeaponDeployed
`public void OnWeaponDeployed(SiegeWeapon missionWeapon)`

**Purpose:** Called when the `weapon deployed` event is raised.

### OnWeaponUndeployed
`public void OnWeaponUndeployed(SiegeWeapon missionWeapon)`

**Purpose:** Called when the `weapon undeployed` event is raised.

### GetWeaponType
`public static Type GetWeaponType(ScriptComponentBehavior weapon)`

**Purpose:** Gets the current value of `weapon type`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<MissionSiegeWeaponsController>();
```

## See Also

- [Complete Class Catalog](../catalog)