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

`StoryModeBattleRewardModel` is a large passthrough whose four real edits are all suppressions. Renown is zeroed for the main party until the tutorial is complete, returning a default `ExplainedNumber` (`StoryMode/GameComponents/StoryModeBattleRewardModel.cs:51`); naval damage after defeat is removed outright (`CalculateShipDamageAfterDefeat` returns `0f`, `:61`); and captured ships are never distributed to the winners, with `DistributeDefeatedPartyShipsAmongWinners` returning an empty `MBReadOnlyList` (`:67`). Everything else — gold loss, influence gain, loot chances, prisoner chances, figurehead loot, the AI trade penalty — forwards to `base.BaseModel` untouched.

## Mental Model

Read this as a story campaign's loot policy, not as a reward calculator: the returned collections and `ExplainedNumber`s flow straight into loot dialogs, and the empty ship list is the shape that means "no ship capture UI at all". The consumers are spread across campaign behaviours rather than concentrated in one place — `BannerCampaignBehavior.cs:109` asks for a banner reward, `BannerCampaignBehavior.cs:134` for a banner loot chance, and `EncounterGameMenuBehavior.cs:1984` iterates the ship distribution list, so removing one return value changes an unrelated feature's behaviour. The zeroed renown is scoped to `TutorialPhase.Instance` being present and incomplete (`:51`) and only when `party` is exactly `PartyBase.MainParty`, which is the main party by identity rather than by ownership — a mod that renames or replaces the main party reference will not match the condition and will get renown during the tutorial. The empty ship list is returned unconditionally, so a mod re-enabling naval captures must construct the list rather than delegate to the base model.

## Key Methods

### CalculateGoldLossAfterDefeat
`public override int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)`

**Purpose:** Calculates the current value or result of gold loss after defeat.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateGoldLossAfterDefeat(partyLeaderHero);
```

### CalculateInfluenceGain
`public override ExplainedNumber CalculateInfluenceGain(PartyBase party, float influenceValueOfBattle, float contributionShare)`

**Purpose:** Calculates the current value or result of influence gain.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateInfluenceGain(party, 0, 0);
```

### CalculateMoraleChangeOnRoundVictory
`public override ExplainedNumber CalculateMoraleChangeOnRoundVictory(PartyBase party, BattleSideEnum partySide, BattleSideEnum roundWinner)`

**Purpose:** Calculates the current value or result of morale change on round victory.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateMoraleChangeOnRoundVictory(party, partySide, roundWinner);
```

### CalculateMoraleGainVictory
`public override ExplainedNumber CalculateMoraleGainVictory(PartyBase party, float renownValueOfBattle, float contributionShare, MapEvent battle)`

**Purpose:** Calculates the current value or result of morale gain victory.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateMoraleGainVictory(party, 0, 0, battle);
```

### CalculatePlunderedGoldAmountFromDefeatedParty
`public override int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)`

**Purpose:** Calculates the current value or result of plundered gold amount from defeated party.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculatePlunderedGoldAmountFromDefeatedParty(defeatedParty);
```

### CalculateRenownGain
`public override ExplainedNumber CalculateRenownGain(PartyBase party, float renownValueOfBattle, float contributionShare)`

**Purpose:** Calculates the current value or result of renown gain.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateRenownGain(party, 0, 0);
```

### CalculateShipDamageAfterDefeat
`public override float CalculateShipDamageAfterDefeat(Ship ship)`

**Purpose:** Calculates the current value or result of ship damage after defeat.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateShipDamageAfterDefeat(ship);
```

### DistributeDefeatedPartyShipsAmongWinners
`public override MBReadOnlyList<KeyValuePair<Ship, MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MBReadOnlyList<Ship> shipsToLoot, MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Executes the DistributeDefeatedPartyShipsAmongWinners logic.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.DistributeDefeatedPartyShipsAmongWinners(shipsToLoot, winnerParties);
```

### GetAITradePenalty
`public override float GetAITradePenalty()`

**Purpose:** Reads and returns the a i trade penalty value held by this instance.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetAITradePenalty();
```

### GetBannerLootChanceFromDefeatedHero
`public override float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)`

**Purpose:** Reads and returns the banner loot chance from defeated hero value held by this instance.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetBannerLootChanceFromDefeatedHero(defeatedHero);
```

### GetBannerRewardForWinningMapEvent
`public override ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)`

**Purpose:** Reads and returns the banner reward for winning map event value held by this instance.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetBannerRewardForWinningMapEvent(mapEvent);
```

### GetExpectedLootedItemValueFromCasualty
`public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)`

**Purpose:** Reads and returns the expected looted item value from casualty value held by this instance.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetExpectedLootedItemValueFromCasualty(winnerPartyLeaderHero, casualtyCharacter);
```

### GetFigureheadLoot
`public override Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties, PartyBase defeatedSideLeaderParty)`

**Purpose:** Reads and returns the figurehead loot value held by this instance.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetFigureheadLoot(defeatedParties, defeatedSideLeaderParty);
```

### GetLootCasualtyChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**Purpose:** Reads and returns the loot casualty chances value held by this instance.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootCasualtyChances(winnerParties, defeatedParty);
```

### GetLootedItemFromTroop
`public override EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)`

**Purpose:** Reads and returns the looted item from troop value held by this instance.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootedItemFromTroop(character, 0);
```

### GetLootGoldChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Reads and returns the loot gold chances value held by this instance.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootGoldChances(winnerParties);
```

### GetLootItemChancesForWinnerParties
`public override MBList<KeyValuePair<MapEventParty, float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**Purpose:** Reads and returns the loot item chances for winner parties value held by this instance.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootItemChancesForWinnerParties(winnerParties, defeatedParty);
```

### GetLootMemberChancesForWinnerParties
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootMemberChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Reads and returns the loot member chances for winner parties value held by this instance.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootMemberChancesForWinnerParties(winnerParties);
```

### GetLootPrisonerChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)`

**Purpose:** Reads and returns the loot prisoner chances value held by this instance.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootPrisonerChances(winnerParties, prisonerElement);
```

### GetMainPartyMemberScatterChance
`public override float GetMainPartyMemberScatterChance()`

**Purpose:** Reads and returns the main party member scatter chance value held by this instance.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetMainPartyMemberScatterChance();
```

### GetPlayerGainedRelationAmount
`public override int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)`

**Purpose:** Reads and returns the player gained relation amount value held by this instance.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetPlayerGainedRelationAmount(mapEvent, hero);
```

### GetShipSiegeEngineHitMoraleEffect
`public override float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)`

**Purpose:** Reads and returns the ship siege engine hit morale effect value held by this instance.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetShipSiegeEngineHitMoraleEffect(ship, siegeEngineType);
```

### GetSunkenShipMoraleEffect
`public override float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)`

**Purpose:** Reads and returns the sunken ship morale effect value held by this instance.

```csharp
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetSunkenShipMoraleEffect(shipOwner, ship);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BattleRewardModel>(new StoryModeBattleRewardModel());
}
```

`BattleRewardModel` is declared as `MBGameModel<BattleRewardModel>` (`BattleRewardModel.cs:13`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:92`.

## See Also

- [Area Index](../)