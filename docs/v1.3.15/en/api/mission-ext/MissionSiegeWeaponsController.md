<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSiegeWeaponsController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSiegeWeaponsController

**Namespace:** TaleWorlds.MountAndBlade.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeWeaponsController : IMissionSiegeWeaponsController`
**Base:** `IMissionSiegeWeaponsController`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionSiegeWeaponsController.cs`

## Overview

`MissionSiegeWeaponsController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Methods

### GetMaxDeployableWeaponCount
```csharp
public int GetMaxDeployableWeaponCount(Type t)
```

### GetSiegeWeapons
```csharp
public IEnumerable<IMissionSiegeWeapon> GetSiegeWeapons()
```

### OnWeaponDeployed
```csharp
public void OnWeaponDeployed(SiegeWeapon missionWeapon)
```

### OnWeaponUndeployed
```csharp
public void OnWeaponUndeployed(SiegeWeapon missionWeapon)
```

### GetWeaponType
```csharp
public static Type GetWeaponType(ScriptComponentBehavior weapon)
```

## Usage Example

```csharp
// Typical usage of MissionSiegeWeaponsController (Controller)
Mission.Current.GetMissionBehavior<MissionSiegeWeaponsController>();
```

## See Also

- [Complete Class Catalog](../catalog)