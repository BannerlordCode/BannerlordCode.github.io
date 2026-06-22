<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSiegeEnginesLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSiegeEnginesLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeEnginesLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionSiegeEnginesLogic.cs`

## Overview

`MissionSiegeEnginesLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new MissionSiegeEnginesLogic())`; subclass it to customize.

## Key Methods

### GetSiegeWeaponsController
```csharp
public IMissionSiegeWeaponsController GetSiegeWeaponsController(BattleSideEnum side)
```

### GetMissionSiegeWeapons
```csharp
public void GetMissionSiegeWeapons(out IEnumerable<IMissionSiegeWeapon> defenderSiegeWeapons, out IEnumerable<IMissionSiegeWeapon> attackerSiegeWeapons)
```

## Usage Example

```csharp
// Typical usage of MissionSiegeEnginesLogic (Logic)
Mission.Current.AddMissionBehavior(new MissionSiegeEnginesLogic());
```

## See Also

- [Complete Class Catalog](../catalog)