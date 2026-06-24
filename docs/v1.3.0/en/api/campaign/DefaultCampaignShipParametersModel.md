<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCampaignShipParametersModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultCampaignShipParametersModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCampaignShipParametersModel : CampaignShipParametersModel`
**Base:** `CampaignShipParametersModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipParametersModel.cs`

## Overview

`DefaultCampaignShipParametersModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCampaignShipParametersModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetShipSizeWeatherFactor
`public override float GetShipSizeWeatherFactor(ShipHull shipHull)`

**Purpose:** Gets the current value of `ship size weather factor`.

### GetDefaultCombatFactor
`public override float GetDefaultCombatFactor(ShipHull shipHull)`

**Purpose:** Gets the current value of `default combat factor`.

### GetCampaignSpeedBonusFactor
`public override float GetCampaignSpeedBonusFactor(Ship ship)`

**Purpose:** Gets the current value of `campaign speed bonus factor`.

### GetCrewCapacityBonusFactor
`public override float GetCrewCapacityBonusFactor(Ship ship)`

**Purpose:** Gets the current value of `crew capacity bonus factor`.

### GetShipWeightFactor
`public override float GetShipWeightFactor(Ship ship)`

**Purpose:** Gets the current value of `ship weight factor`.

### GetForwardDragFactor
`public override float GetForwardDragFactor(Ship ship)`

**Purpose:** Gets the current value of `forward drag factor`.

### GetCrewShieldHitPointsFactor
`public override float GetCrewShieldHitPointsFactor(Ship ship)`

**Purpose:** Gets the current value of `crew shield hit points factor`.

### GetAdditionalAmmoBonus
`public override int GetAdditionalAmmoBonus(Ship ship)`

**Purpose:** Gets the current value of `additional ammo bonus`.

### GetMaxOarPowerFactor
`public override float GetMaxOarPowerFactor(Ship ship)`

**Purpose:** Gets the current value of `max oar power factor`.

### GetMaxOarForceFactor
`public override float GetMaxOarForceFactor(Ship ship)`

**Purpose:** Gets the current value of `max oar force factor`.

### GetSailForceFactor
`public override float GetSailForceFactor(Ship ship)`

**Purpose:** Gets the current value of `sail force factor`.

### GetCrewMeleeDamageFactor
`public override float GetCrewMeleeDamageFactor(Ship ship)`

**Purpose:** Gets the current value of `crew melee damage factor`.

### GetAdditionalArcherQuivers
`public override int GetAdditionalArcherQuivers(Ship ship)`

**Purpose:** Gets the current value of `additional archer quivers`.

### GetAdditionalThrowingWeaponStack
`public override int GetAdditionalThrowingWeaponStack(Ship ship)`

**Purpose:** Gets the current value of `additional throwing weapon stack`.

### GetSailRotationSpeedFactor
`public override float GetSailRotationSpeedFactor(Ship ship)`

**Purpose:** Gets the current value of `sail rotation speed factor`.

### GetFurlUnfurlSpeedFactor
`public override float GetFurlUnfurlSpeedFactor(Ship ship)`

**Purpose:** Gets the current value of `furl unfurl speed factor`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCampaignShipParametersModel>(new MyDefaultCampaignShipParametersModel());
```

## See Also

- [Complete Class Catalog](../catalog)