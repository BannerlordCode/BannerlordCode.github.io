---
title: "DefaultTroopSacrificeModel"
description: "Auto-generated class reference for DefaultTroopSacrificeModel."
---
# DefaultTroopSacrificeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTroopSacrificeModel : TroopSacrificeModel`
**Base:** `TroopSacrificeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSacrificeModel.cs`

## Overview

`DefaultTroopSacrificeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultTroopSacrificeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BreakOutArmyLeaderRelationPenalty` | `public override int BreakOutArmyLeaderRelationPenalty { get; }` |
| `BreakOutArmyMemberRelationPenalty` | `public override int BreakOutArmyMemberRelationPenalty { get; }` |

## Key Methods

### GetLostTroopCountForBreakingInBesiegedSettlement
`public override ExplainedNumber GetLostTroopCountForBreakingInBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent)`

**Purpose:** **Purpose:** Reads and returns the lost troop count for breaking in besieged settlement value held by the this instance.

```csharp
// Obtain an instance of DefaultTroopSacrificeModel from the subsystem API first
DefaultTroopSacrificeModel defaultTroopSacrificeModel = ...;
var result = defaultTroopSacrificeModel.GetLostTroopCountForBreakingInBesiegedSettlement(party, siegeEvent);
```

### GetLostTroopCountForBreakingOutOfBesiegedSettlement
`public override ExplainedNumber GetLostTroopCountForBreakingOutOfBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent, bool isBreakingOutFromPort)`

**Purpose:** **Purpose:** Reads and returns the lost troop count for breaking out of besieged settlement value held by the this instance.

```csharp
// Obtain an instance of DefaultTroopSacrificeModel from the subsystem API first
DefaultTroopSacrificeModel defaultTroopSacrificeModel = ...;
var result = defaultTroopSacrificeModel.GetLostTroopCountForBreakingOutOfBesiegedSettlement(party, siegeEvent, false);
```

### GetNumberOfTroopsSacrificedForTryingToGetAway
`public override int GetNumberOfTroopsSacrificedForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent)`

**Purpose:** **Purpose:** Reads and returns the number of troops sacrificed for trying to get away value held by the this instance.

```csharp
// Obtain an instance of DefaultTroopSacrificeModel from the subsystem API first
DefaultTroopSacrificeModel defaultTroopSacrificeModel = ...;
var result = defaultTroopSacrificeModel.GetNumberOfTroopsSacrificedForTryingToGetAway(playerBattleSide, mapEvent);
```

### CanPlayerGetAwayFromEncounter
`public override bool CanPlayerGetAwayFromEncounter(out TextObject explanation)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for player get away from encounter.

```csharp
// Obtain an instance of DefaultTroopSacrificeModel from the subsystem API first
DefaultTroopSacrificeModel defaultTroopSacrificeModel = ...;
var result = defaultTroopSacrificeModel.CanPlayerGetAwayFromEncounter(explanation);
```

### GetShipsToSacrificeForTryingToGetAway
`public override void GetShipsToSacrificeForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent, out MBList<Ship> shipsToCapture, out Ship shipToTakeDamage, out float damageToApplyForLastShip)`

**Purpose:** **Purpose:** Reads and returns the ships to sacrifice for trying to get away value held by the this instance.

```csharp
// Obtain an instance of DefaultTroopSacrificeModel from the subsystem API first
DefaultTroopSacrificeModel defaultTroopSacrificeModel = ...;
defaultTroopSacrificeModel.GetShipsToSacrificeForTryingToGetAway(playerBattleSide, mapEvent, shipsToCapture, shipToTakeDamage, damageToApplyForLastShip);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultTroopSacrificeModel>(new MyDefaultTroopSacrificeModel());
```

## See Also

- [Area Index](../)