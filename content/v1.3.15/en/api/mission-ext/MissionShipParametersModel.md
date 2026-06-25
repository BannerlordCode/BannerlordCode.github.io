---
title: "MissionShipParametersModel"
description: "Auto-generated class reference for MissionShipParametersModel."
---
# MissionShipParametersModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionShipParametersModel : MBGameModel<MissionShipParametersModel>`
**Base:** `MBGameModel<MissionShipParametersModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionShipParametersModel.cs`

## Overview

`MissionShipParametersModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MissionShipParametersModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateMainDeckCrewSize
`public abstract int CalculateMainDeckCrewSize(IShipOrigin shipOrigin, Agent captain)`

**Purpose:** Calculates the current value or result of main deck crew size.

```csharp
// Obtain an instance of MissionShipParametersModel from the subsystem API first
MissionShipParametersModel missionShipParametersModel = ...;
var result = missionShipParametersModel.CalculateMainDeckCrewSize(shipOrigin, captain);
```

### CalculateWindBonus
`public abstract float CalculateWindBonus(IShipOrigin shipOrigin, Agent captain, float baseSailForceMagnitude)`

**Purpose:** Calculates the current value or result of wind bonus.

```csharp
// Obtain an instance of MissionShipParametersModel from the subsystem API first
MissionShipParametersModel missionShipParametersModel = ...;
var result = missionShipParametersModel.CalculateWindBonus(shipOrigin, captain, 0);
```

### CalculateOarForceMultiplier
`public abstract float CalculateOarForceMultiplier(Agent pilotAgent, float baseOarForce)`

**Purpose:** Calculates the current value or result of oar force multiplier.

```csharp
// Obtain an instance of MissionShipParametersModel from the subsystem API first
MissionShipParametersModel missionShipParametersModel = ...;
var result = missionShipParametersModel.CalculateOarForceMultiplier(pilotAgent, 0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionShipParametersModel instance = ...;
```

## See Also

- [Area Index](../)