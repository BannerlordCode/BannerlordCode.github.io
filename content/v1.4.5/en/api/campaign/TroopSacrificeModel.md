---
title: "TroopSacrificeModel"
description: "Auto-generated class reference for TroopSacrificeModel."
---
# TroopSacrificeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TroopSacrificeModel : MBGameModel<TroopSacrificeModel>`
**Base:** `MBGameModel<TroopSacrificeModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/TroopSacrificeModel.cs`

## Overview

`TroopSacrificeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `TroopSacrificeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BreakOutArmyLeaderRelationPenalty` | `public abstract int BreakOutArmyLeaderRelationPenalty { get; }` |
| `BreakOutArmyMemberRelationPenalty` | `public abstract int BreakOutArmyMemberRelationPenalty { get; }` |

## Key Methods

### GetLostTroopCountForBreakingInBesiegedSettlement
`public abstract ExplainedNumber GetLostTroopCountForBreakingInBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent)`

**Purpose:** Reads and returns the lost troop count for breaking in besieged settlement value held by the this instance.

```csharp
// Obtain an instance of TroopSacrificeModel from the subsystem API first
TroopSacrificeModel troopSacrificeModel = ...;
var result = troopSacrificeModel.GetLostTroopCountForBreakingInBesiegedSettlement(party, siegeEvent);
```

### GetLostTroopCountForBreakingOutOfBesiegedSettlement
`public abstract ExplainedNumber GetLostTroopCountForBreakingOutOfBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent, bool isBreakingOutFromPort)`

**Purpose:** Reads and returns the lost troop count for breaking out of besieged settlement value held by the this instance.

```csharp
// Obtain an instance of TroopSacrificeModel from the subsystem API first
TroopSacrificeModel troopSacrificeModel = ...;
var result = troopSacrificeModel.GetLostTroopCountForBreakingOutOfBesiegedSettlement(party, siegeEvent, false);
```

### GetNumberOfTroopsSacrificedForTryingToGetAway
`public abstract int GetNumberOfTroopsSacrificedForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent)`

**Purpose:** Reads and returns the number of troops sacrificed for trying to get away value held by the this instance.

```csharp
// Obtain an instance of TroopSacrificeModel from the subsystem API first
TroopSacrificeModel troopSacrificeModel = ...;
var result = troopSacrificeModel.GetNumberOfTroopsSacrificedForTryingToGetAway(playerBattleSide, mapEvent);
```

### GetShipsToSacrificeForTryingToGetAway
`public abstract void GetShipsToSacrificeForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent, out MBList<Ship> shipsToCapture, out Ship shipToTakeDamage, out float damageToApplyForLastShip)`

**Purpose:** Reads and returns the ships to sacrifice for trying to get away value held by the this instance.

```csharp
// Obtain an instance of TroopSacrificeModel from the subsystem API first
TroopSacrificeModel troopSacrificeModel = ...;
troopSacrificeModel.GetShipsToSacrificeForTryingToGetAway(playerBattleSide, mapEvent, shipsToCapture, shipToTakeDamage, damageToApplyForLastShip);
```

### CanPlayerGetAwayFromEncounter
`public abstract bool CanPlayerGetAwayFromEncounter(out TextObject explanation)`

**Purpose:** Checks whether the this instance meets the preconditions for player get away from encounter.

```csharp
// Obtain an instance of TroopSacrificeModel from the subsystem API first
TroopSacrificeModel troopSacrificeModel = ...;
var result = troopSacrificeModel.CanPlayerGetAwayFromEncounter(explanation);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
TroopSacrificeModel instance = ...;
```

## See Also

- [Area Index](../)