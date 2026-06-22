<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSiegeEngineCalculationModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSiegeEngineCalculationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionSiegeEngineCalculationModel : MBGameModel<MissionSiegeEngineCalculationModel>`
**Base:** `MBGameModel<MissionSiegeEngineCalculationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionSiegeEngineCalculationModel.cs`

## Overview

`MissionSiegeEngineCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<MissionSiegeEngineCalculationModel>(new MyMissionSiegeEngineCalculationModel())` to change how it computes.

## Key Methods

### CalculateReloadSpeed
```csharp
public abstract float CalculateReloadSpeed(Agent userAgent, float baseSpeed)
```

### CalculateShipSiegeWeaponAmmoCount
```csharp
public abstract int CalculateShipSiegeWeaponAmmoCount(IShipOrigin shipOrigin, Agent captain, RangedSiegeWeapon weapon)
```

### CalculateDamage
```csharp
public abstract int CalculateDamage(Agent attackerAgent, float baseDamage)
```

## Usage Example

```csharp
// Typical usage of MissionSiegeEngineCalculationModel (Model)
Game.Current.ReplaceModel<MissionSiegeEngineCalculationModel>(new MyMissionSiegeEngineCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)