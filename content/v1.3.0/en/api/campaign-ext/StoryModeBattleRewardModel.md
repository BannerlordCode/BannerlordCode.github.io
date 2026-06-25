---
title: "StoryModeBattleRewardModel"
description: "Auto-generated class reference for StoryModeBattleRewardModel."
---
# StoryModeBattleRewardModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeBattleRewardModel : BattleRewardModel`
**Base:** `BattleRewardModel`
**File:** `StoryMode/GameComponents/StoryModeBattleRewardModel.cs`

## Overview

`StoryModeBattleRewardModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeBattleRewardModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateGoldLossAfterDefeat
`public override int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)`

**Purpose:** Calculates the current value or result of gold loss after defeat.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateGoldLossAfterDefeat(partyLeaderHero);
```

### CalculateInfluenceGain
`public override ExplainedNumber CalculateInfluenceGain(PartyBase party, float influenceValueOfBattle, float contributionShare)`

**Purpose:** Calculates the current value or result of influence gain.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateInfluenceGain(party, 0, 0);
```

### CalculateMoraleChangeOnRoundVictory
`public override ExplainedNumber CalculateMoraleChangeOnRoundVictory(PartyBase party, BattleSideEnum partySide, BattleSideEnum roundWinner)`

**Purpose:** Calculates the current value or result of morale change on round victory.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateMoraleChangeOnRoundVictory(party, partySide, roundWinner);
```

### CalculateMoraleGainVictory
`public override ExplainedNumber CalculateMoraleGainVictory(PartyBase party, float renownValueOfBattle, float contributionShare, MapEvent battle)`

**Purpose:** Calculates the current value or result of morale gain victory.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateMoraleGainVictory(party, 0, 0, battle);
```

### CalculatePlunderedGoldAmountFromDefeatedParty
`public override int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)`

**Purpose:** Calculates the current value or result of plundered gold amount from defeated party.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculatePlunderedGoldAmountFromDefeatedParty(defeatedParty);
```

### CalculateRenownGain
`public override ExplainedNumber CalculateRenownGain(PartyBase party, float renownValueOfBattle, float contributionShare)`

**Purpose:** Calculates the current value or result of renown gain.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateRenownGain(party, 0, 0);
```

### CalculateShipDamageAfterDefeat
`public override float CalculateShipDamageAfterDefeat(Ship ship)`

**Purpose:** Calculates the current value or result of ship damage after defeat.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateShipDamageAfterDefeat(ship);
```

### DistributeDefeatedPartyShipsAmongWinners
`public override MBReadOnlyList<KeyValuePair<Ship, MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MBReadOnlyList<Ship> shipsToLoot, MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Executes the DistributeDefeatedPartyShipsAmongWinners logic.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.DistributeDefeatedPartyShipsAmongWinners(shipsToLoot, winnerParties);
```

### GetAITradePenalty
`public override float GetAITradePenalty()`

**Purpose:** Reads and returns the a i trade penalty value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetAITradePenalty();
```

### GetBannerLootChanceFromDefeatedHero
`public override float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)`

**Purpose:** Reads and returns the banner loot chance from defeated hero value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetBannerLootChanceFromDefeatedHero(defeatedHero);
```

### GetBannerRewardForWinningMapEvent
`public override ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)`

**Purpose:** Reads and returns the banner reward for winning map event value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetBannerRewardForWinningMapEvent(mapEvent);
```

### GetExpectedLootedItemValueFromCasualty
`public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)`

**Purpose:** Reads and returns the expected looted item value from casualty value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetExpectedLootedItemValueFromCasualty(winnerPartyLeaderHero, casualtyCharacter);
```

### GetFigureheadLoot
`public override Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties, PartyBase defeatedSideLeaderParty)`

**Purpose:** Reads and returns the figurehead loot value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetFigureheadLoot(defeatedParties, defeatedSideLeaderParty);
```

### GetLootCasualtyChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**Purpose:** Reads and returns the loot casualty chances value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootCasualtyChances(winnerParties, defeatedParty);
```

### GetLootedItemFromTroop
`public override EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)`

**Purpose:** Reads and returns the looted item from troop value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootedItemFromTroop(character, 0);
```

### GetLootGoldChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Reads and returns the loot gold chances value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootGoldChances(winnerParties);
```

### GetLootItemChancesForWinnerParties
`public override MBList<KeyValuePair<MapEventParty, float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**Purpose:** Reads and returns the loot item chances for winner parties value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootItemChancesForWinnerParties(winnerParties, defeatedParty);
```

### GetLootMemberChancesForWinnerParties
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootMemberChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Reads and returns the loot member chances for winner parties value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootMemberChancesForWinnerParties(winnerParties);
```

### GetLootPrisonerChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)`

**Purpose:** Reads and returns the loot prisoner chances value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootPrisonerChances(winnerParties, prisonerElement);
```

### GetMainPartyMemberScatterChance
`public override float GetMainPartyMemberScatterChance()`

**Purpose:** Reads and returns the main party member scatter chance value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetMainPartyMemberScatterChance();
```

### GetPlayerGainedRelationAmount
`public override int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)`

**Purpose:** Reads and returns the player gained relation amount value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetPlayerGainedRelationAmount(mapEvent, hero);
```

### GetShipSiegeEngineHitMoraleEffect
`public override float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)`

**Purpose:** Reads and returns the ship siege engine hit morale effect value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetShipSiegeEngineHitMoraleEffect(ship, siegeEngineType);
```

### GetSunkenShipMoraleEffect
`public override float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)`

**Purpose:** Reads and returns the sunken ship morale effect value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetSunkenShipMoraleEffect(shipOwner, ship);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeBattleRewardModel>(new MyStoryModeBattleRewardModel());
```

## See Also

- [Area Index](../)