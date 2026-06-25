---
title: "CampaignShipParametersModel"
description: "Auto-generated class reference for CampaignShipParametersModel."
---
# CampaignShipParametersModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignShipParametersModel : MBGameModel<CampaignShipParametersModel>`
**Base:** `MBGameModel<CampaignShipParametersModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CampaignShipParametersModel.cs`

## Overview

`CampaignShipParametersModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CampaignShipParametersModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetShipSizeWeatherFactor
`public abstract float GetShipSizeWeatherFactor(ShipHull shipHull)`

**Purpose:** **Purpose:** Reads and returns the ship size weather factor value held by the this instance.

```csharp
// Obtain an instance of CampaignShipParametersModel from the subsystem API first
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetShipSizeWeatherFactor(shipHull);
```

### GetDefaultCombatFactor
`public abstract float GetDefaultCombatFactor(ShipHull shipHull)`

**Purpose:** **Purpose:** Reads and returns the default combat factor value held by the this instance.

```csharp
// Obtain an instance of CampaignShipParametersModel from the subsystem API first
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetDefaultCombatFactor(shipHull);
```

### GetCampaignSpeedBonusFactor
`public abstract float GetCampaignSpeedBonusFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the campaign speed bonus factor value held by the this instance.

```csharp
// Obtain an instance of CampaignShipParametersModel from the subsystem API first
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetCampaignSpeedBonusFactor(ship);
```

### GetCrewCapacityBonusFactor
`public abstract float GetCrewCapacityBonusFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the crew capacity bonus factor value held by the this instance.

```csharp
// Obtain an instance of CampaignShipParametersModel from the subsystem API first
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetCrewCapacityBonusFactor(ship);
```

### GetShipWeightFactor
`public abstract float GetShipWeightFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the ship weight factor value held by the this instance.

```csharp
// Obtain an instance of CampaignShipParametersModel from the subsystem API first
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetShipWeightFactor(ship);
```

### GetForwardDragFactor
`public abstract float GetForwardDragFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the forward drag factor value held by the this instance.

```csharp
// Obtain an instance of CampaignShipParametersModel from the subsystem API first
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetForwardDragFactor(ship);
```

### GetCrewShieldHitPointsFactor
`public abstract float GetCrewShieldHitPointsFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the crew shield hit points factor value held by the this instance.

```csharp
// Obtain an instance of CampaignShipParametersModel from the subsystem API first
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetCrewShieldHitPointsFactor(ship);
```

### GetAdditionalAmmoBonus
`public abstract int GetAdditionalAmmoBonus(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the additional ammo bonus value held by the this instance.

```csharp
// Obtain an instance of CampaignShipParametersModel from the subsystem API first
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetAdditionalAmmoBonus(ship);
```

### GetMaxOarPowerFactor
`public abstract float GetMaxOarPowerFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the max oar power factor value held by the this instance.

```csharp
// Obtain an instance of CampaignShipParametersModel from the subsystem API first
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetMaxOarPowerFactor(ship);
```

### GetMaxOarForceFactor
`public abstract float GetMaxOarForceFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the max oar force factor value held by the this instance.

```csharp
// Obtain an instance of CampaignShipParametersModel from the subsystem API first
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetMaxOarForceFactor(ship);
```

### GetSailForceFactor
`public abstract float GetSailForceFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the sail force factor value held by the this instance.

```csharp
// Obtain an instance of CampaignShipParametersModel from the subsystem API first
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetSailForceFactor(ship);
```

### GetCrewMeleeDamageFactor
`public abstract float GetCrewMeleeDamageFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the crew melee damage factor value held by the this instance.

```csharp
// Obtain an instance of CampaignShipParametersModel from the subsystem API first
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetCrewMeleeDamageFactor(ship);
```

### GetAdditionalArcherQuivers
`public abstract int GetAdditionalArcherQuivers(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the additional archer quivers value held by the this instance.

```csharp
// Obtain an instance of CampaignShipParametersModel from the subsystem API first
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetAdditionalArcherQuivers(ship);
```

### GetAdditionalThrowingWeaponStack
`public abstract int GetAdditionalThrowingWeaponStack(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the additional throwing weapon stack value held by the this instance.

```csharp
// Obtain an instance of CampaignShipParametersModel from the subsystem API first
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetAdditionalThrowingWeaponStack(ship);
```

### GetSailRotationSpeedFactor
`public abstract float GetSailRotationSpeedFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the sail rotation speed factor value held by the this instance.

```csharp
// Obtain an instance of CampaignShipParametersModel from the subsystem API first
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetSailRotationSpeedFactor(ship);
```

### GetFurlUnfurlSpeedFactor
`public abstract float GetFurlUnfurlSpeedFactor(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the furl unfurl speed factor value held by the this instance.

```csharp
// Obtain an instance of CampaignShipParametersModel from the subsystem API first
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetFurlUnfurlSpeedFactor(ship);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CampaignShipParametersModel instance = ...;
```

## See Also

- [Area Index](../)