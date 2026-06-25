---
title: "MissionSiegeEngineCalculationModel"
description: "Auto-generated class reference for MissionSiegeEngineCalculationModel."
---
# MissionSiegeEngineCalculationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionSiegeEngineCalculationModel : MBGameModel<MissionSiegeEngineCalculationModel>`
**Base:** `MBGameModel<MissionSiegeEngineCalculationModel>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/MissionSiegeEngineCalculationModel.cs`

## Overview

`MissionSiegeEngineCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MissionSiegeEngineCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateReloadSpeed
`public abstract float CalculateReloadSpeed(Agent userAgent, float baseSpeed)`

**Purpose:** Calculates the current value or result of `reload speed`.

```csharp
// Obtain an instance of MissionSiegeEngineCalculationModel from the subsystem API first
MissionSiegeEngineCalculationModel missionSiegeEngineCalculationModel = ...;
var result = missionSiegeEngineCalculationModel.CalculateReloadSpeed(userAgent, 0);
```

### CalculateShipSiegeWeaponAmmoCount
`public abstract int CalculateShipSiegeWeaponAmmoCount(IShipOrigin shipOrigin, Agent captain, RangedSiegeWeapon weapon)`

**Purpose:** Calculates the current value or result of `ship siege weapon ammo count`.

```csharp
// Obtain an instance of MissionSiegeEngineCalculationModel from the subsystem API first
MissionSiegeEngineCalculationModel missionSiegeEngineCalculationModel = ...;
var result = missionSiegeEngineCalculationModel.CalculateShipSiegeWeaponAmmoCount(shipOrigin, captain, weapon);
```

### CalculateDamage
`public abstract int CalculateDamage(Agent attackerAgent, float baseDamage)`

**Purpose:** Calculates the current value or result of `damage`.

```csharp
// Obtain an instance of MissionSiegeEngineCalculationModel from the subsystem API first
MissionSiegeEngineCalculationModel missionSiegeEngineCalculationModel = ...;
var result = missionSiegeEngineCalculationModel.CalculateDamage(attackerAgent, 0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionSiegeEngineCalculationModel instance = ...;
```

## See Also

- [Area Index](../)