---
title: "StoryModeBattleRewardModel"
description: "Auto-generated class reference for StoryModeBattleRewardModel."
---
# StoryModeBattleRewardModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeBattleRewardModel : BattleRewardModel`
**Base:** `BattleRewardModel`
**File:** `Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeBattleRewardModel.cs`

## Overview

`StoryModeBattleRewardModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeBattleRewardModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateGoldLossAfterDefeat
`public override int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)`

**Purpose:** **Purpose:** Calculates the current value or result of gold loss after defeat.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateGoldLossAfterDefeat(partyLeaderHero);
```

### CalculateInfluenceGain
`public override ExplainedNumber CalculateInfluenceGain(PartyBase winnerParty, float influenceValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float influenceMultiplierForWinnerSide, bool includeDescriptions)`

**Purpose:** **Purpose:** Calculates the current value or result of influence gain.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateInfluenceGain(winnerParty, 0, 0, 0, false);
```

### CalculateMoraleChangeOnRoundVictory
`public override float CalculateMoraleChangeOnRoundVictory(PartyBase party, MapEventSide partySide, BattleSideEnum roundWinner)`

**Purpose:** **Purpose:** Calculates the current value or result of morale change on round victory.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateMoraleChangeOnRoundVictory(party, partySide, roundWinner);
```

### CalculateMoraleGainVictory
`public override ExplainedNumber CalculateMoraleGainVictory(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, bool includeDescriptions)`

**Purpose:** **Purpose:** Calculates the current value or result of morale gain victory.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateMoraleGainVictory(winnerParty, 0, 0, false);
```

### CalculatePlunderedGoldAmountFromDefeatedParty
`public override int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)`

**Purpose:** **Purpose:** Calculates the current value or result of plundered gold amount from defeated party.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculatePlunderedGoldAmountFromDefeatedParty(defeatedParty);
```

### CalculateRenownGain
`public override ExplainedNumber CalculateRenownGain(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float renownMultiplierForWinnerSide, bool includeDescriptions)`

**Purpose:** **Purpose:** Calculates the current value or result of renown gain.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateRenownGain(winnerParty, 0, 0, 0, false);
```

### CalculateShipDamageAfterDefeat
`public override float CalculateShipDamageAfterDefeat(Ship ship)`

**Purpose:** **Purpose:** Calculates the current value or result of ship damage after defeat.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateShipDamageAfterDefeat(ship);
```

### DistributeDefeatedPartyShipsAmongWinners
`public override MBReadOnlyList<KeyValuePair<Ship, MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent, MBReadOnlyList<Ship> shipsToLoot, MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** **Purpose:** Executes the DistributeDefeatedPartyShipsAmongWinners logic.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.DistributeDefeatedPartyShipsAmongWinners(mapEvent, shipsToLoot, winnerParties);
```

### GetAITradePenalty
`public override float GetAITradePenalty()`

**Purpose:** **Purpose:** Reads and returns the a i trade penalty value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetAITradePenalty();
```

### GetBannerLootChanceFromDefeatedHero
`public override float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)`

**Purpose:** **Purpose:** Reads and returns the banner loot chance from defeated hero value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetBannerLootChanceFromDefeatedHero(defeatedHero);
```

### GetBannerRewardForWinningMapEvent
`public override ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)`

**Purpose:** **Purpose:** Reads and returns the banner reward for winning map event value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetBannerRewardForWinningMapEvent(mapEvent);
```

### GetExpectedLootedItemValueFromCasualty
`public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)`

**Purpose:** **Purpose:** Reads and returns the expected looted item value from casualty value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetExpectedLootedItemValueFromCasualty(winnerPartyLeaderHero, casualtyCharacter);
```

### GetFigureheadLoot
`public override Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties, PartyBase defeatedSideLeaderParty)`

**Purpose:** **Purpose:** Reads and returns the figurehead loot value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetFigureheadLoot(defeatedParties, defeatedSideLeaderParty);
```

### GetLootCasualtyChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**Purpose:** **Purpose:** Reads and returns the loot casualty chances value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootCasualtyChances(winnerParties, defeatedParty);
```

### GetLootedItemFromTroop
`public override EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)`

**Purpose:** **Purpose:** Reads and returns the looted item from troop value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootedItemFromTroop(character, 0);
```

### GetLootGoldChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** **Purpose:** Reads and returns the loot gold chances value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootGoldChances(winnerParties);
```

### GetLootItemChancesForWinnerParties
`public override MBList<KeyValuePair<MapEventParty, float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**Purpose:** **Purpose:** Reads and returns the loot item chances for winner parties value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootItemChancesForWinnerParties(winnerParties, defeatedParty);
```

### GetCaptureMemberChancesForWinnerParties
`public override void GetCaptureMemberChancesForWinnerParties(MapEvent endedMapEvent, MBReadOnlyList<MapEventParty> winnerParties, out MBList<KeyValuePair<MapEventParty, float>> woundedMemberChances, out MBList<KeyValuePair<MapEventParty, float>> healthyMemberChances)`

**Purpose:** **Purpose:** Reads and returns the capture member chances for winner parties value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
storyModeBattleRewardModel.GetCaptureMemberChancesForWinnerParties(endedMapEvent, winnerParties, mBList<KeyValuePair<MapEventParty, 0, mBList<KeyValuePair<MapEventParty, 0);
```

### GetLootPrisonerChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)`

**Purpose:** **Purpose:** Reads and returns the loot prisoner chances value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootPrisonerChances(winnerParties, prisonerElement);
```

### GetMainPartyMemberScatterChance
`public override float GetMainPartyMemberScatterChance()`

**Purpose:** **Purpose:** Reads and returns the main party member scatter chance value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetMainPartyMemberScatterChance();
```

### GetPlayerGainedRelationAmount
`public override int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)`

**Purpose:** **Purpose:** Reads and returns the player gained relation amount value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetPlayerGainedRelationAmount(mapEvent, hero);
```

### GetShipSiegeEngineHitMoraleEffect
`public override float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)`

**Purpose:** **Purpose:** Reads and returns the ship siege engine hit morale effect value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetShipSiegeEngineHitMoraleEffect(ship, siegeEngineType);
```

### GetSunkenShipMoraleEffect
`public override float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)`

**Purpose:** **Purpose:** Reads and returns the sunken ship morale effect value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetSunkenShipMoraleEffect(shipOwner, ship);
```

### GetWinnerPartiesThatCanPlunderGoldFromShips
`public override MBReadOnlyList<MapEventParty> GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** **Purpose:** Reads and returns the winner parties that can plunder gold from ships value held by the this instance.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetWinnerPartiesThatCanPlunderGoldFromShips(winnerParties);
```

### CanTroopBeTakenPrisoner
`public override bool CanTroopBeTakenPrisoner(CharacterObject troop)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for troop be taken prisoner.

```csharp
// Obtain an instance of StoryModeBattleRewardModel from the subsystem API first
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CanTroopBeTakenPrisoner(troop);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeBattleRewardModel>(new MyStoryModeBattleRewardModel());
```

## See Also

- [Area Index](../)