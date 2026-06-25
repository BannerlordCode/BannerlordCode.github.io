---
title: "DefaultSiegeEngineCalculationModel"
description: "Auto-generated class reference for DefaultSiegeEngineCalculationModel."
---
# DefaultSiegeEngineCalculationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultSiegeEngineCalculationModel : MissionSiegeEngineCalculationModel`
**Base:** `MissionSiegeEngineCalculationModel`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/DefaultSiegeEngineCalculationModel.cs`

## Overview

`DefaultSiegeEngineCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSiegeEngineCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateReloadSpeed
`public override float CalculateReloadSpeed(Agent userAgent, float baseSpeed)`

**Purpose:** **Purpose:** Calculates the current value or result of reload speed.

```csharp
// Obtain an instance of DefaultSiegeEngineCalculationModel from the subsystem API first
DefaultSiegeEngineCalculationModel defaultSiegeEngineCalculationModel = ...;
var result = defaultSiegeEngineCalculationModel.CalculateReloadSpeed(userAgent, 0);
```

### CalculateShipSiegeWeaponAmmoCount
`public override int CalculateShipSiegeWeaponAmmoCount(IShipOrigin shipOrigin, Agent captain, RangedSiegeWeapon weapon)`

**Purpose:** **Purpose:** Calculates the current value or result of ship siege weapon ammo count.

```csharp
// Obtain an instance of DefaultSiegeEngineCalculationModel from the subsystem API first
DefaultSiegeEngineCalculationModel defaultSiegeEngineCalculationModel = ...;
var result = defaultSiegeEngineCalculationModel.CalculateShipSiegeWeaponAmmoCount(shipOrigin, captain, weapon);
```

### CalculateDamage
`public override int CalculateDamage(Agent attackerAgent, float baseDamage)`

**Purpose:** **Purpose:** Calculates the current value or result of damage.

```csharp
// Obtain an instance of DefaultSiegeEngineCalculationModel from the subsystem API first
DefaultSiegeEngineCalculationModel defaultSiegeEngineCalculationModel = ...;
var result = defaultSiegeEngineCalculationModel.CalculateDamage(attackerAgent, 0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSiegeEngineCalculationModel>(new MyDefaultSiegeEngineCalculationModel());
```

## See Also

- [Area Index](../)