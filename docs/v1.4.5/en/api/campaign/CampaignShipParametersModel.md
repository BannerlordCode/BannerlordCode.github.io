<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignShipParametersModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignShipParametersModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignShipParametersModel : MBGameModel<CampaignShipParametersModel>`
**Base:** `MBGameModel<CampaignShipParametersModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CampaignShipParametersModel.cs`

## Overview

`CampaignShipParametersModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CampaignShipParametersModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetShipSizeWeatherFactor
`public abstract float GetShipSizeWeatherFactor(ShipHull shipHull)`

**Purpose:** Gets the current value of `ship size weather factor`.

### GetDefaultCombatFactor
`public abstract float GetDefaultCombatFactor(ShipHull shipHull)`

**Purpose:** Gets the current value of `default combat factor`.

### GetCampaignSpeedBonusFactor
`public abstract float GetCampaignSpeedBonusFactor(Ship ship)`

**Purpose:** Gets the current value of `campaign speed bonus factor`.

### GetCrewCapacityBonusFactor
`public abstract float GetCrewCapacityBonusFactor(Ship ship)`

**Purpose:** Gets the current value of `crew capacity bonus factor`.

### GetShipWeightFactor
`public abstract float GetShipWeightFactor(Ship ship)`

**Purpose:** Gets the current value of `ship weight factor`.

### GetForwardDragFactor
`public abstract float GetForwardDragFactor(Ship ship)`

**Purpose:** Gets the current value of `forward drag factor`.

### GetCrewShieldHitPointsFactor
`public abstract float GetCrewShieldHitPointsFactor(Ship ship)`

**Purpose:** Gets the current value of `crew shield hit points factor`.

### GetAdditionalAmmoBonus
`public abstract int GetAdditionalAmmoBonus(Ship ship)`

**Purpose:** Gets the current value of `additional ammo bonus`.

### GetMaxOarPowerFactor
`public abstract float GetMaxOarPowerFactor(Ship ship)`

**Purpose:** Gets the current value of `max oar power factor`.

### GetMaxOarForceFactor
`public abstract float GetMaxOarForceFactor(Ship ship)`

**Purpose:** Gets the current value of `max oar force factor`.

### GetSailForceFactor
`public abstract float GetSailForceFactor(Ship ship)`

**Purpose:** Gets the current value of `sail force factor`.

### GetCrewMeleeDamageFactor
`public abstract float GetCrewMeleeDamageFactor(Ship ship)`

**Purpose:** Gets the current value of `crew melee damage factor`.

### GetAdditionalArcherQuivers
`public abstract int GetAdditionalArcherQuivers(Ship ship)`

**Purpose:** Gets the current value of `additional archer quivers`.

### GetAdditionalThrowingWeaponStack
`public abstract int GetAdditionalThrowingWeaponStack(Ship ship)`

**Purpose:** Gets the current value of `additional throwing weapon stack`.

### GetSailRotationSpeedFactor
`public abstract float GetSailRotationSpeedFactor(Ship ship)`

**Purpose:** Gets the current value of `sail rotation speed factor`.

### GetFurlUnfurlSpeedFactor
`public abstract float GetFurlUnfurlSpeedFactor(Ship ship)`

**Purpose:** Gets the current value of `furl unfurl speed factor`.

## Usage Example

```csharp
var implementation = new CustomCampaignShipParametersModel();
```

## See Also

- [Complete Class Catalog](../catalog)