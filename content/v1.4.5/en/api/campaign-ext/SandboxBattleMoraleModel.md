---
title: "SandboxBattleMoraleModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandboxBattleMoraleModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxBattleMoraleModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxBattleMoraleModel : BattleMoraleModel`
**Base:** `BattleMoraleModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.GameComponents/SandboxBattleMoraleModel.cs`

## Overview

`SandboxBattleMoraleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SandboxBattleMoraleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateMoraleChangeToCharacter
`public override float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)`

**Purpose:** Handles logic related to `calculate morale change to character`.

### GetEffectiveInitialMorale
`public override float GetEffectiveInitialMorale(Agent agent, float baseMorale)`

**Purpose:** Gets the current value of `effective initial morale`.

### CanPanicDueToMorale
`public override bool CanPanicDueToMorale(Agent agent)`

**Purpose:** Checks whether the current object can `panic due to morale`.

### CalculateCasualtiesFactor
`public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)`

**Purpose:** Handles logic related to `calculate casualties factor`.

### GetAverageMorale
`public override float GetAverageMorale(Formation formation)`

**Purpose:** Gets the current value of `average morale`.

### CalculateMoraleChangeOnShipSunk
`public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)`

**Purpose:** Handles logic related to `calculate morale change on ship sunk`.

### CalculateMoraleOnRamming
`public override float CalculateMoraleOnRamming(Agent agent, IShipOrigin rammingShip, IShipOrigin rammedShip)`

**Purpose:** Handles logic related to `calculate morale on ramming`.

### CalculateMoraleOnShipsConnected
`public override float CalculateMoraleOnShipsConnected(Agent agent, IShipOrigin ownerShip, IShipOrigin targetShip)`

**Purpose:** Handles logic related to `calculate morale on ships connected`.

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxBattleMoraleModel>(new MySandboxBattleMoraleModel());
```

## See Also

- [Complete Class Catalog](../catalog)