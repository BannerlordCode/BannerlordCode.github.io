<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCampaignShipParametersModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCampaignShipParametersModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCampaignShipParametersModel : CampaignShipParametersModel`
**Base:** `CampaignShipParametersModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipParametersModel.cs`

## Overview

`DefaultCampaignShipParametersModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultCampaignShipParametersModel>(new MyDefaultCampaignShipParametersModel())` to change how it computes.

## Key Methods

### GetShipSizeWeatherFactor
```csharp
public override float GetShipSizeWeatherFactor(ShipHull shipHull)
```

### GetDefaultCombatFactor
```csharp
public override float GetDefaultCombatFactor(ShipHull shipHull)
```

### GetCampaignSpeedBonusFactor
```csharp
public override float GetCampaignSpeedBonusFactor(Ship ship)
```

### GetCrewCapacityBonusFactor
```csharp
public override float GetCrewCapacityBonusFactor(Ship ship)
```

### GetShipWeightFactor
```csharp
public override float GetShipWeightFactor(Ship ship)
```

### GetForwardDragFactor
```csharp
public override float GetForwardDragFactor(Ship ship)
```

### GetCrewShieldHitPointsFactor
```csharp
public override float GetCrewShieldHitPointsFactor(Ship ship)
```

### GetAdditionalAmmoBonus
```csharp
public override int GetAdditionalAmmoBonus(Ship ship)
```

### GetMaxOarPowerFactor
```csharp
public override float GetMaxOarPowerFactor(Ship ship)
```

### GetMaxOarForceFactor
```csharp
public override float GetMaxOarForceFactor(Ship ship)
```

### GetSailForceFactor
```csharp
public override float GetSailForceFactor(Ship ship)
```

### GetCrewMeleeDamageFactor
```csharp
public override float GetCrewMeleeDamageFactor(Ship ship)
```

### GetAdditionalArcherQuivers
```csharp
public override int GetAdditionalArcherQuivers(Ship ship)
```

### GetAdditionalThrowingWeaponStack
```csharp
public override int GetAdditionalThrowingWeaponStack(Ship ship)
```

### GetSailRotationSpeedFactor
```csharp
public override float GetSailRotationSpeedFactor(Ship ship)
```

### GetFurlUnfurlSpeedFactor
```csharp
public override float GetFurlUnfurlSpeedFactor(Ship ship)
```

## Usage Example

```csharp
// Typical usage of DefaultCampaignShipParametersModel (Model)
Game.Current.ReplaceModel<DefaultCampaignShipParametersModel>(new MyDefaultCampaignShipParametersModel());
```

## See Also

- [Complete Class Catalog](../catalog)