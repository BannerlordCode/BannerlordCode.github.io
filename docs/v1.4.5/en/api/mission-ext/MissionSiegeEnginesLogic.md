<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSiegeEnginesLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionSiegeEnginesLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeEnginesLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionSiegeEnginesLogic.cs`

## Overview

`MissionSiegeEnginesLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionSiegeEnginesLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSiegeWeaponsController
`public IMissionSiegeWeaponsController GetSiegeWeaponsController(BattleSideEnum side)`

**Purpose:** Gets the current value of `siege weapons controller`.

### GetMissionSiegeWeapons
`public void GetMissionSiegeWeapons(out IEnumerable<IMissionSiegeWeapon> defenderSiegeWeapons, out IEnumerable<IMissionSiegeWeapon> attackerSiegeWeapons)`

**Purpose:** Gets the current value of `mission siege weapons`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionSiegeEnginesLogic());
```

## See Also

- [Complete Class Catalog](../catalog)