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

`DefaultCampaignShipParametersModel` is a seventeen-member table of ship stat modifiers in which every single entry returns zero. Hull-level factors — size under weather, default combat factor — return `0f` (`TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipParametersModel.cs:14`, `:20`), and so do the fourteen ship-level factors covering campaign speed, crew capacity, weight, forward drag, crew shield hit points, maximum oar power and force, sail force, crew melee damage, sail rotation speed and furl/unfurl speed, plus the two integer bonuses for ammunition and extra archer quivers and throwing stacks (`:26`–`:104`). There is no naval feature in the base campaign, and this class is the seam that a naval mod fills.

## Mental Model

Treat every zero as a neutral multiplier the naval engine multiplies into, not as an unconfigured default. That is why the class needs no logic at all: it exists so the ship pipeline can read one place for "what does this hull or ship contribute", and in a campaign without ships the honest answer to all of it is nothing. `Ship.cs:382` shows the intended shape — the crew-capacity factor is returned straight to a caller that will fold it into a capacity figure. The practical consequence is that this is the highest-leverage, lowest-risk page to override for a naval mod: there is no stock behaviour to preserve, no baseline formula to reason about, and each factor is independent of the others, so a mod can implement two or three of them and leave the rest returning zero without producing an inconsistent hybrid. What it cannot do is validate its inputs — nothing here checks that a `ShipHull` or `Ship` is non-null, so this model assumes it is only reached from code paths that already have a real ship.

## Key Methods

### GetShipSizeWeatherFactor
`public override float GetShipSizeWeatherFactor(ShipHull shipHull)`

**Purpose:** Reads and returns the ship size weather factor value held by this instance.

```csharp
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetShipSizeWeatherFactor(shipHull);
```

### GetDefaultCombatFactor
`public override float GetDefaultCombatFactor(ShipHull shipHull)`

**Purpose:** Reads and returns the default combat factor value held by this instance.

```csharp
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetDefaultCombatFactor(shipHull);
```

### GetCampaignSpeedBonusFactor
`public override float GetCampaignSpeedBonusFactor(Ship ship)`

**Purpose:** Reads and returns the campaign speed bonus factor value held by this instance.

```csharp
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetCampaignSpeedBonusFactor(ship);
```

### GetCrewCapacityBonusFactor
`public override float GetCrewCapacityBonusFactor(Ship ship)`

**Purpose:** Reads and returns the crew capacity bonus factor value held by this instance.

```csharp
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetCrewCapacityBonusFactor(ship);
```

### GetShipWeightFactor
`public override float GetShipWeightFactor(Ship ship)`

**Purpose:** Reads and returns the ship weight factor value held by this instance.

```csharp
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetShipWeightFactor(ship);
```

### GetForwardDragFactor
`public override float GetForwardDragFactor(Ship ship)`

**Purpose:** Reads and returns the forward drag factor value held by this instance.

```csharp
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetForwardDragFactor(ship);
```

### GetCrewShieldHitPointsFactor
`public override float GetCrewShieldHitPointsFactor(Ship ship)`

**Purpose:** Reads and returns the crew shield hit points factor value held by this instance.

```csharp
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetCrewShieldHitPointsFactor(ship);
```

### GetAdditionalAmmoBonus
`public override int GetAdditionalAmmoBonus(Ship ship)`

**Purpose:** Reads and returns the additional ammo bonus value held by this instance.

```csharp
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetAdditionalAmmoBonus(ship);
```

### GetMaxOarPowerFactor
`public override float GetMaxOarPowerFactor(Ship ship)`

**Purpose:** Reads and returns the max oar power factor value held by this instance.

```csharp
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetMaxOarPowerFactor(ship);
```

### GetMaxOarForceFactor
`public override float GetMaxOarForceFactor(Ship ship)`

**Purpose:** Reads and returns the max oar force factor value held by this instance.

```csharp
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetMaxOarForceFactor(ship);
```

### GetSailForceFactor
`public override float GetSailForceFactor(Ship ship)`

**Purpose:** Reads and returns the sail force factor value held by this instance.

```csharp
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetSailForceFactor(ship);
```

### GetCrewMeleeDamageFactor
`public override float GetCrewMeleeDamageFactor(Ship ship)`

**Purpose:** Reads and returns the crew melee damage factor value held by this instance.

```csharp
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetCrewMeleeDamageFactor(ship);
```

### GetAdditionalArcherQuivers
`public override int GetAdditionalArcherQuivers(Ship ship)`

**Purpose:** Reads and returns the additional archer quivers value held by this instance.

```csharp
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetAdditionalArcherQuivers(ship);
```

### GetAdditionalThrowingWeaponStack
`public override int GetAdditionalThrowingWeaponStack(Ship ship)`

**Purpose:** Reads and returns the additional throwing weapon stack value held by this instance.

```csharp
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetAdditionalThrowingWeaponStack(ship);
```

### GetSailRotationSpeedFactor
`public override float GetSailRotationSpeedFactor(Ship ship)`

**Purpose:** Reads and returns the sail rotation speed factor value held by this instance.

```csharp
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetSailRotationSpeedFactor(ship);
```

### GetFurlUnfurlSpeedFactor
`public override float GetFurlUnfurlSpeedFactor(Ship ship)`

**Purpose:** Reads and returns the furl unfurl speed factor value held by this instance.

```csharp
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetFurlUnfurlSpeedFactor(ship);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<CampaignShipParametersModel>(new DefaultCampaignShipParametersModel());
}
```

`CampaignShipParametersModel` is declared as `MBGameModel<CampaignShipParametersModel>` (`CampaignShipParametersModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:281`.

## See Also

- [Area Index](../)