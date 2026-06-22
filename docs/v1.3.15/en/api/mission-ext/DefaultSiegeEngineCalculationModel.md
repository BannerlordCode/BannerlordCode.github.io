<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSiegeEngineCalculationModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSiegeEngineCalculationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultSiegeEngineCalculationModel : MissionSiegeEngineCalculationModel`
**Base:** `MissionSiegeEngineCalculationModel`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/DefaultSiegeEngineCalculationModel.cs`

## Overview

`DefaultSiegeEngineCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSiegeEngineCalculationModel>(new MyDefaultSiegeEngineCalculationModel())` to change how it computes.

## Key Methods

### CalculateReloadSpeed
```csharp
public override float CalculateReloadSpeed(Agent userAgent, float baseSpeed)
```

### CalculateShipSiegeWeaponAmmoCount
```csharp
public override int CalculateShipSiegeWeaponAmmoCount(IShipOrigin shipOrigin, Agent captain, RangedSiegeWeapon weapon)
```

### CalculateDamage
```csharp
public override int CalculateDamage(Agent attackerAgent, float baseDamage)
```

## Usage Example

```csharp
// Typical usage of DefaultSiegeEngineCalculationModel (Model)
Game.Current.ReplaceModel<DefaultSiegeEngineCalculationModel>(new MyDefaultSiegeEngineCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)