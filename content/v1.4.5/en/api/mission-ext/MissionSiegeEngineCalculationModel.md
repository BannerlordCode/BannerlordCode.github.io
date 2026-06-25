---
title: "MissionSiegeEngineCalculationModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSiegeEngineCalculationModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionSiegeEngineCalculationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionSiegeEngineCalculationModel : MBGameModel<MissionSiegeEngineCalculationModel>`
**Base:** `MBGameModel<MissionSiegeEngineCalculationModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/MissionSiegeEngineCalculationModel.cs`

## Overview

`MissionSiegeEngineCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MissionSiegeEngineCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateReloadSpeed
`public abstract float CalculateReloadSpeed(Agent userAgent, float baseSpeed)`

**Purpose:** Handles logic related to `calculate reload speed`.

### CalculateShipSiegeWeaponAmmoCount
`public abstract int CalculateShipSiegeWeaponAmmoCount(IShipOrigin shipOrigin, Agent captain, RangedSiegeWeapon weapon)`

**Purpose:** Handles logic related to `calculate ship siege weapon ammo count`.

### CalculateDamage
`public abstract int CalculateDamage(Agent attackerAgent, float baseDamage)`

**Purpose:** Handles logic related to `calculate damage`.

## Usage Example

```csharp
var implementation = new CustomMissionSiegeEngineCalculationModel();
```

## See Also

- [Complete Class Catalog](../catalog)