---
title: "DefaultBattleRewardModel"
description: "Auto-generated class reference for DefaultBattleRewardModel."
---
# DefaultBattleRewardModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBattleRewardModel : BattleRewardModel`
**Base:** `BattleRewardModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBattleRewardModel.cs`

## Overview

`DefaultBattleRewardModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultBattleRewardModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPlayerGainedRelationAmount
`public override int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)`

**Purpose:** Reads and returns the player gained relation amount value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetPlayerGainedRelationAmount(mapEvent, hero);
```

### CalculateRenownGain
`public override ExplainedNumber CalculateRenownGain(PartyBase party, float renownValueOfBattle, float contributionShare)`

**Purpose:** Calculates the current value or result of renown gain.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateRenownGain(party, 0, 0);
```

### CalculateInfluenceGain
`public override ExplainedNumber CalculateInfluenceGain(PartyBase party, float influenceValueOfBattle, float contributionShare)`

**Purpose:** Calculates the current value or result of influence gain.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateInfluenceGain(party, 0, 0);
```

### CalculateMoraleGainVictory
`public override ExplainedNumber CalculateMoraleGainVictory(PartyBase party, float renownValueOfBattle, float contributionShare, MapEvent battle)`

**Purpose:** Calculates the current value or result of morale gain victory.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateMoraleGainVictory(party, 0, 0, battle);
```

### CalculateGoldLossAfterDefeat
`public override int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)`

**Purpose:** Calculates the current value or result of gold loss after defeat.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateGoldLossAfterDefeat(partyLeaderHero);
```

### GetLootedItemFromTroop
`public override EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)`

**Purpose:** Reads and returns the looted item from troop value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetLootedItemFromTroop(character, 0);
```

### GetExpectedLootedItemValueFromCasualty
`public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)`

**Purpose:** Reads and returns the expected looted item value from casualty value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetExpectedLootedItemValueFromCasualty(winnerPartyLeaderHero, casualtyCharacter);
```

### GetAITradePenalty
`public override float GetAITradePenalty()`

**Purpose:** Reads and returns the a i trade penalty value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetAITradePenalty();
```

### GetMainPartyMemberScatterChance
`public override float GetMainPartyMemberScatterChance()`

**Purpose:** Reads and returns the main party member scatter chance value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetMainPartyMemberScatterChance();
```

### CalculatePlunderedGoldAmountFromDefeatedParty
`public override int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)`

**Purpose:** Calculates the current value or result of plundered gold amount from defeated party.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculatePlunderedGoldAmountFromDefeatedParty(defeatedParty);
```

### GetLootGoldChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Reads and returns the loot gold chances value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetLootGoldChances(winnerParties);
```

### GetLootMemberChancesForWinnerParties
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootMemberChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Reads and returns the loot member chances for winner parties value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetLootMemberChancesForWinnerParties(winnerParties);
```

### GetLootPrisonerChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)`

**Purpose:** Reads and returns the loot prisoner chances value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetLootPrisonerChances(winnerParties, prisonerElement);
```

### GetLootItemChancesForWinnerParties
`public override MBList<KeyValuePair<MapEventParty, float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**Purpose:** Reads and returns the loot item chances for winner parties value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetLootItemChancesForWinnerParties(winnerParties, defeatedParty);
```

### GetLootCasualtyChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**Purpose:** Reads and returns the loot casualty chances value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetLootCasualtyChances(winnerParties, defeatedParty);
```

### CalculateShipDamageAfterDefeat
`public override float CalculateShipDamageAfterDefeat(Ship ship)`

**Purpose:** Calculates the current value or result of ship damage after defeat.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateShipDamageAfterDefeat(ship);
```

### DistributeDefeatedPartyShipsAmongWinners
`public override MBReadOnlyList<KeyValuePair<Ship, MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MBReadOnlyList<Ship> shipsToLoot, MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Executes the DistributeDefeatedPartyShipsAmongWinners logic.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.DistributeDefeatedPartyShipsAmongWinners(shipsToLoot, winnerParties);
```

### GetBannerLootChanceFromDefeatedHero
`public override float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)`

**Purpose:** Reads and returns the banner loot chance from defeated hero value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetBannerLootChanceFromDefeatedHero(defeatedHero);
```

### GetBannerRewardForWinningMapEvent
`public override ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)`

**Purpose:** Reads and returns the banner reward for winning map event value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetBannerRewardForWinningMapEvent(mapEvent);
```

### GetSunkenShipMoraleEffect
`public override float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)`

**Purpose:** Reads and returns the sunken ship morale effect value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetSunkenShipMoraleEffect(shipOwner, ship);
```

### CalculateMoraleChangeOnRoundVictory
`public override ExplainedNumber CalculateMoraleChangeOnRoundVictory(PartyBase party, BattleSideEnum partySide, BattleSideEnum roundWinner)`

**Purpose:** Calculates the current value or result of morale change on round victory.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateMoraleChangeOnRoundVictory(party, partySide, roundWinner);
```

### GetShipSiegeEngineHitMoraleEffect
`public override float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)`

**Purpose:** Reads and returns the ship siege engine hit morale effect value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetShipSiegeEngineHitMoraleEffect(ship, siegeEngineType);
```

### GetFigureheadLoot
`public override Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties, PartyBase defeatedSideLeaderParty)`

**Purpose:** Reads and returns the figurehead loot value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleRewardModel from the subsystem API first
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetFigureheadLoot(defeatedParties, defeatedSideLeaderParty);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBattleRewardModel>(new MyDefaultBattleRewardModel());
```

## See Also

- [Area Index](../)