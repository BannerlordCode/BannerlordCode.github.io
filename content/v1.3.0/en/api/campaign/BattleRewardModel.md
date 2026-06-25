---
title: "BattleRewardModel"
description: "Auto-generated class reference for BattleRewardModel."
---
# BattleRewardModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BattleRewardModel : MBGameModel<BattleRewardModel>`
**Base:** `MBGameModel<BattleRewardModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BattleRewardModel.cs`

## Overview

`BattleRewardModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BattleRewardModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBannerLootChanceFromDefeatedHero
`public abstract float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)`

**Purpose:** Reads and returns the `banner loot chance from defeated hero` value held by the current object.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetBannerLootChanceFromDefeatedHero(defeatedHero);
```

### GetBannerRewardForWinningMapEvent
`public abstract ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)`

**Purpose:** Reads and returns the `banner reward for winning map event` value held by the current object.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetBannerRewardForWinningMapEvent(mapEvent);
```

### GetPlayerGainedRelationAmount
`public abstract int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)`

**Purpose:** Reads and returns the `player gained relation amount` value held by the current object.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetPlayerGainedRelationAmount(mapEvent, hero);
```

### CalculateRenownGain
`public abstract ExplainedNumber CalculateRenownGain(PartyBase party, float renownValueOfBattle, float contributionShare)`

**Purpose:** Calculates the current value or result of `renown gain`.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.CalculateRenownGain(party, 0, 0);
```

### CalculateInfluenceGain
`public abstract ExplainedNumber CalculateInfluenceGain(PartyBase party, float influenceValueOfBattle, float contributionShare)`

**Purpose:** Calculates the current value or result of `influence gain`.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.CalculateInfluenceGain(party, 0, 0);
```

### CalculateMoraleGainVictory
`public abstract ExplainedNumber CalculateMoraleGainVictory(PartyBase party, float renownValueOfBattle, float contributionShare, MapEvent battle)`

**Purpose:** Calculates the current value or result of `morale gain victory`.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.CalculateMoraleGainVictory(party, 0, 0, battle);
```

### CalculateMoraleChangeOnRoundVictory
`public abstract ExplainedNumber CalculateMoraleChangeOnRoundVictory(PartyBase party, BattleSideEnum partySide, BattleSideEnum roundWinner)`

**Purpose:** Calculates the current value or result of `morale change on round victory`.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.CalculateMoraleChangeOnRoundVictory(party, partySide, roundWinner);
```

### CalculateGoldLossAfterDefeat
`public abstract int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)`

**Purpose:** Calculates the current value or result of `gold loss after defeat`.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.CalculateGoldLossAfterDefeat(partyLeaderHero);
```

### GetLootedItemFromTroop
`public abstract EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)`

**Purpose:** Reads and returns the `looted item from troop` value held by the current object.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetLootedItemFromTroop(character, 0);
```

### GetExpectedLootedItemValueFromCasualty
`public abstract float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)`

**Purpose:** Reads and returns the `expected looted item value from casualty` value held by the current object.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetExpectedLootedItemValueFromCasualty(winnerPartyLeaderHero, casualtyCharacter);
```

### CalculatePlunderedGoldAmountFromDefeatedParty
`public abstract int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)`

**Purpose:** Calculates the current value or result of `plundered gold amount from defeated party`.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.CalculatePlunderedGoldAmountFromDefeatedParty(defeatedParty);
```

### GetLootGoldChances
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Reads and returns the `loot gold chances` value held by the current object.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetLootGoldChances(winnerParties);
```

### GetMainPartyMemberScatterChance
`public abstract float GetMainPartyMemberScatterChance()`

**Purpose:** Reads and returns the `main party member scatter chance` value held by the current object.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetMainPartyMemberScatterChance();
```

### GetAITradePenalty
`public abstract float GetAITradePenalty()`

**Purpose:** Reads and returns the `a i trade penalty` value held by the current object.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetAITradePenalty();
```

### GetLootMemberChancesForWinnerParties
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootMemberChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Reads and returns the `loot member chances for winner parties` value held by the current object.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetLootMemberChancesForWinnerParties(winnerParties);
```

### GetLootPrisonerChances
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)`

**Purpose:** Reads and returns the `loot prisoner chances` value held by the current object.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetLootPrisonerChances(winnerParties, prisonerElement);
```

### GetLootItemChancesForWinnerParties
`public abstract MBList<KeyValuePair<MapEventParty, float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**Purpose:** Reads and returns the `loot item chances for winner parties` value held by the current object.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetLootItemChancesForWinnerParties(winnerParties, defeatedParty);
```

### GetLootCasualtyChances
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**Purpose:** Reads and returns the `loot casualty chances` value held by the current object.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetLootCasualtyChances(winnerParties, defeatedParty);
```

### CalculateShipDamageAfterDefeat
`public abstract float CalculateShipDamageAfterDefeat(Ship ship)`

**Purpose:** Calculates the current value or result of `ship damage after defeat`.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.CalculateShipDamageAfterDefeat(ship);
```

### DistributeDefeatedPartyShipsAmongWinners
`public abstract MBReadOnlyList<KeyValuePair<Ship, MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MBReadOnlyList<Ship> shipsToLoot, MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.DistributeDefeatedPartyShipsAmongWinners(shipsToLoot, winnerParties);
```

### GetSunkenShipMoraleEffect
`public abstract float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)`

**Purpose:** Reads and returns the `sunken ship morale effect` value held by the current object.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetSunkenShipMoraleEffect(shipOwner, ship);
```

### GetShipSiegeEngineHitMoraleEffect
`public abstract float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)`

**Purpose:** Reads and returns the `ship siege engine hit morale effect` value held by the current object.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetShipSiegeEngineHitMoraleEffect(ship, siegeEngineType);
```

### GetFigureheadLoot
`public abstract Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties, PartyBase defeatedSideLeaderParty)`

**Purpose:** Reads and returns the `figurehead loot` value held by the current object.

```csharp
// Obtain an instance of BattleRewardModel from the subsystem API first
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetFigureheadLoot(defeatedParties, defeatedSideLeaderParty);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BattleRewardModel instance = ...;
```

## See Also

- [Area Index](../)