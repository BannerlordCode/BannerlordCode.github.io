<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignShipParametersModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignShipParametersModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignShipParametersModel : MBGameModel<CampaignShipParametersModel>`
**Base:** `MBGameModel<CampaignShipParametersModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignShipParametersModel.cs`

## Overview

`CampaignShipParametersModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<CampaignShipParametersModel>(new MyCampaignShipParametersModel())` to change how it computes.

## Key Methods

### GetShipSizeWeatherFactor
```csharp
public abstract float GetShipSizeWeatherFactor(ShipHull shipHull)
```

### GetDefaultCombatFactor
```csharp
public abstract float GetDefaultCombatFactor(ShipHull shipHull)
```

### GetCampaignSpeedBonusFactor
```csharp
public abstract float GetCampaignSpeedBonusFactor(Ship ship)
```

### GetCrewCapacityBonusFactor
```csharp
public abstract float GetCrewCapacityBonusFactor(Ship ship)
```

### GetShipWeightFactor
```csharp
public abstract float GetShipWeightFactor(Ship ship)
```

### GetForwardDragFactor
```csharp
public abstract float GetForwardDragFactor(Ship ship)
```

### GetCrewShieldHitPointsFactor
```csharp
public abstract float GetCrewShieldHitPointsFactor(Ship ship)
```

### GetAdditionalAmmoBonus
```csharp
public abstract int GetAdditionalAmmoBonus(Ship ship)
```

### GetMaxOarPowerFactor
```csharp
public abstract float GetMaxOarPowerFactor(Ship ship)
```

### GetMaxOarForceFactor
```csharp
public abstract float GetMaxOarForceFactor(Ship ship)
```

### GetSailForceFactor
```csharp
public abstract float GetSailForceFactor(Ship ship)
```

### GetCrewMeleeDamageFactor
```csharp
public abstract float GetCrewMeleeDamageFactor(Ship ship)
```

### GetAdditionalArcherQuivers
```csharp
public abstract int GetAdditionalArcherQuivers(Ship ship)
```

### GetAdditionalThrowingWeaponStack
```csharp
public abstract int GetAdditionalThrowingWeaponStack(Ship ship)
```

### GetSailRotationSpeedFactor
```csharp
public abstract float GetSailRotationSpeedFactor(Ship ship)
```

### GetFurlUnfurlSpeedFactor
```csharp
public abstract float GetFurlUnfurlSpeedFactor(Ship ship)
```

## Usage Example

```csharp
// Typical usage of CampaignShipParametersModel (Model)
Game.Current.ReplaceModel<CampaignShipParametersModel>(new MyCampaignShipParametersModel());
```

## See Also

- [Complete Class Catalog](../catalog)