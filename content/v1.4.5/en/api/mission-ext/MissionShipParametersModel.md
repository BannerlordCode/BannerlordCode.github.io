---
title: "MissionShipParametersModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionShipParametersModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionShipParametersModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionShipParametersModel : MBGameModel<MissionShipParametersModel>`
**Base:** `MBGameModel<MissionShipParametersModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/MissionShipParametersModel.cs`

## Overview

`MissionShipParametersModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MissionShipParametersModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateMainDeckCrewSize
`public abstract int CalculateMainDeckCrewSize(IShipOrigin shipOrigin, Agent formationUnit)`

**Purpose:** Handles logic related to `calculate main deck crew size`.

### CalculateWindBonus
`public abstract float CalculateWindBonus(IShipOrigin shipOrigin, Agent captain, float baseSailForceMagnitude)`

**Purpose:** Handles logic related to `calculate wind bonus`.

### CalculateOarForceMultiplier
`public abstract float CalculateOarForceMultiplier(Agent pilotAgent, float baseOarForce)`

**Purpose:** Handles logic related to `calculate oar force multiplier`.

## Usage Example

```csharp
var implementation = new CustomMissionShipParametersModel();
```

## See Also

- [Complete Class Catalog](../catalog)