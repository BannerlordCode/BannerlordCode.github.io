---
title: "MultiplayerBattleMoraleModel"
description: "Auto-generated class reference for MultiplayerBattleMoraleModel."
---
# MultiplayerBattleMoraleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleMoraleModel : BattleMoraleModel`
**Base:** `BattleMoraleModel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerBattleMoraleModel.cs`

## Overview

`MultiplayerBattleMoraleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MultiplayerBattleMoraleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateMoraleChangeToCharacter
`public override float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)`

**Purpose:** Calculates the current value or result of `morale change to character`.

```csharp
// Obtain an instance of MultiplayerBattleMoraleModel from the subsystem API first
MultiplayerBattleMoraleModel multiplayerBattleMoraleModel = ...;
var result = multiplayerBattleMoraleModel.CalculateMoraleChangeToCharacter(agent, 0);
```

### GetEffectiveInitialMorale
`public override float GetEffectiveInitialMorale(Agent agent, float baseMorale)`

**Purpose:** Reads and returns the `effective initial morale` value held by the current object.

```csharp
// Obtain an instance of MultiplayerBattleMoraleModel from the subsystem API first
MultiplayerBattleMoraleModel multiplayerBattleMoraleModel = ...;
var result = multiplayerBattleMoraleModel.GetEffectiveInitialMorale(agent, 0);
```

### CanPanicDueToMorale
`public override bool CanPanicDueToMorale(Agent agent)`

**Purpose:** Checks whether the current object meets the preconditions for `panic due to morale`.

```csharp
// Obtain an instance of MultiplayerBattleMoraleModel from the subsystem API first
MultiplayerBattleMoraleModel multiplayerBattleMoraleModel = ...;
var result = multiplayerBattleMoraleModel.CanPanicDueToMorale(agent);
```

### CalculateCasualtiesFactor
`public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)`

**Purpose:** Calculates the current value or result of `casualties factor`.

```csharp
// Obtain an instance of MultiplayerBattleMoraleModel from the subsystem API first
MultiplayerBattleMoraleModel multiplayerBattleMoraleModel = ...;
var result = multiplayerBattleMoraleModel.CalculateCasualtiesFactor(battleSide);
```

### GetAverageMorale
`public override float GetAverageMorale(Formation formation)`

**Purpose:** Reads and returns the `average morale` value held by the current object.

```csharp
// Obtain an instance of MultiplayerBattleMoraleModel from the subsystem API first
MultiplayerBattleMoraleModel multiplayerBattleMoraleModel = ...;
var result = multiplayerBattleMoraleModel.GetAverageMorale(formation);
```

### CalculateMoraleChangeOnShipSunk
`public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)`

**Purpose:** Calculates the current value or result of `morale change on ship sunk`.

```csharp
// Obtain an instance of MultiplayerBattleMoraleModel from the subsystem API first
MultiplayerBattleMoraleModel multiplayerBattleMoraleModel = ...;
var result = multiplayerBattleMoraleModel.CalculateMoraleChangeOnShipSunk(shipOrigin);
```

### CalculateMoraleOnRamming
`public override float CalculateMoraleOnRamming(Agent agent, IShipOrigin rammingShip, IShipOrigin rammedShip)`

**Purpose:** Calculates the current value or result of `morale on ramming`.

```csharp
// Obtain an instance of MultiplayerBattleMoraleModel from the subsystem API first
MultiplayerBattleMoraleModel multiplayerBattleMoraleModel = ...;
var result = multiplayerBattleMoraleModel.CalculateMoraleOnRamming(agent, rammingShip, rammedShip);
```

### CalculateMoraleOnShipsConnected
`public override float CalculateMoraleOnShipsConnected(Agent agent, IShipOrigin ownerShip, IShipOrigin targetShip)`

**Purpose:** Calculates the current value or result of `morale on ships connected`.

```csharp
// Obtain an instance of MultiplayerBattleMoraleModel from the subsystem API first
MultiplayerBattleMoraleModel multiplayerBattleMoraleModel = ...;
var result = multiplayerBattleMoraleModel.CalculateMoraleOnShipsConnected(agent, ownerShip, targetShip);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<MultiplayerBattleMoraleModel>(new MyMultiplayerBattleMoraleModel());
```

## See Also

- [Area Index](../)