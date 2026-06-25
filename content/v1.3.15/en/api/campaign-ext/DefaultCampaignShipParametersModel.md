---
title: "DefaultCampaignShipParametersModel"
description: "Auto-generated class reference for DefaultCampaignShipParametersModel."
---
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

**Purpose:** **Purpose:** Reads and returns the ship size weather factor value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipParametersModel from the subsystem API first
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetShipSizeWeatherFactor(shipHull);
```

### GetDefaultCombatFactor
`public override float GetDefaultCombatFactor(ShipHull shipHull)`

**Purpose:** **Purpose:** Reads and returns the default combat factor value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipParametersModel from the subsystem API first
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetDefaultCombatFactor(shipHull);
```

### GetCampaignSpeedBonusFactor
`public override float GetCampaignSpeedBonusFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the campaign speed bonus factor value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipParametersModel from the subsystem API first
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetCampaignSpeedBonusFactor(ship);
```

### GetCrewCapacityBonusFactor
`public override float GetCrewCapacityBonusFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the crew capacity bonus factor value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipParametersModel from the subsystem API first
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetCrewCapacityBonusFactor(ship);
```

### GetShipWeightFactor
`public override float GetShipWeightFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the ship weight factor value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipParametersModel from the subsystem API first
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetShipWeightFactor(ship);
```

### GetForwardDragFactor
`public override float GetForwardDragFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the forward drag factor value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipParametersModel from the subsystem API first
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetForwardDragFactor(ship);
```

### GetCrewShieldHitPointsFactor
`public override float GetCrewShieldHitPointsFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the crew shield hit points factor value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipParametersModel from the subsystem API first
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetCrewShieldHitPointsFactor(ship);
```

### GetAdditionalAmmoBonus
`public override int GetAdditionalAmmoBonus(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the additional ammo bonus value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipParametersModel from the subsystem API first
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetAdditionalAmmoBonus(ship);
```

### GetMaxOarPowerFactor
`public override float GetMaxOarPowerFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the max oar power factor value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipParametersModel from the subsystem API first
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetMaxOarPowerFactor(ship);
```

### GetMaxOarForceFactor
`public override float GetMaxOarForceFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the max oar force factor value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipParametersModel from the subsystem API first
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetMaxOarForceFactor(ship);
```

### GetSailForceFactor
`public override float GetSailForceFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the sail force factor value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipParametersModel from the subsystem API first
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetSailForceFactor(ship);
```

### GetCrewMeleeDamageFactor
`public override float GetCrewMeleeDamageFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the crew melee damage factor value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipParametersModel from the subsystem API first
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetCrewMeleeDamageFactor(ship);
```

### GetAdditionalArcherQuivers
`public override int GetAdditionalArcherQuivers(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the additional archer quivers value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipParametersModel from the subsystem API first
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetAdditionalArcherQuivers(ship);
```

### GetAdditionalThrowingWeaponStack
`public override int GetAdditionalThrowingWeaponStack(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the additional throwing weapon stack value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipParametersModel from the subsystem API first
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetAdditionalThrowingWeaponStack(ship);
```

### GetSailRotationSpeedFactor
`public override float GetSailRotationSpeedFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the sail rotation speed factor value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipParametersModel from the subsystem API first
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetSailRotationSpeedFactor(ship);
```

### GetFurlUnfurlSpeedFactor
`public override float GetFurlUnfurlSpeedFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the furl unfurl speed factor value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipParametersModel from the subsystem API first
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetFurlUnfurlSpeedFactor(ship);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCampaignShipParametersModel>(new MyDefaultCampaignShipParametersModel());
```

## See Also

- [Area Index](../)