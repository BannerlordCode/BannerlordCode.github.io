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

`DefaultBattleRewardModel` is the largest single piece of campaign arithmetic on this list: it computes everything a victorious or defeated battle hands out. Defeat costs the loser 5% of the leader's gold capped at 10000 (`TaleWorlds.CampaignSystem/GameComponents/DefaultBattleRewardModel.cs:92`), and losing on the map instead costs 10% of trade gold, or half of it against bandits (`:205`). Victory is where most of the surface is. The loot tables work by *weights, not probabilities* — `GetLootGoldChances` collects every contributing party except patrols and then normalises each entry by the total (`:217`, `:225`), and `GetLootPrisonerChances` excludes released heroes outright (`:256`) and only lets bandit troops be taken from bandits (`:262`). Renown, influence and morale are each seeded from a base and then multiplied by the party's and leader's perks (`:39`, `:65`, `:77`). Banner rewards roll at 10% in a hideout fight and 50% in an assault (`:384`, `:385`), with the banner's level taken from the town's wall level in the siege case (`:391`).

## Mental Model

The design principle is that most members return an `ExplainedNumber` built with descriptions enabled, so the numbers shown in the results screen and the numbers applied to the campaign are the same object rather than two calculations that can drift. That is why so many overrides return a fresh `ExplainedNumber` instead of a scaled float. Three behaviours are easy to misread and are not bugs. `CalculateShipDamageAfterDefeat`, `GetSunkenShipMoraleEffect` and `GetShipSiegeEngineHitMoraleEffect` all return zero and `GetFigureheadLoot` returns `null` (`:342`, `:408`, `:425`, `:431`) — the base campaign has no naval feature, and the empty ship-distribution list at `:348` is the same story, so those five members exist to be filled in by a naval mod rather than tuned. `GetLootCasualtyChances` and `GetLootItemChancesForWinnerParties` both branch on the defeated side being a settlement, producing different lists rather than an empty one (`:319`, `:281`). And `GetBannerLootChanceFromDefeatedHero` is a rank ladder, not a flat chance: 10% for a kingdom's ruling clan leader, 25% for any other clan leader, 50% otherwise (`:367`, `:372`, `:374`).

## Key Methods

### GetPlayerGainedRelationAmount
`public override int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)`

**Purpose:** Reads and returns the player gained relation amount value held by this instance.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetPlayerGainedRelationAmount(mapEvent, hero);
```

### CalculateRenownGain
`public override ExplainedNumber CalculateRenownGain(PartyBase party, float renownValueOfBattle, float contributionShare)`

**Purpose:** Calculates the current value or result of renown gain.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateRenownGain(party, 0, 0);
```

### CalculateInfluenceGain
`public override ExplainedNumber CalculateInfluenceGain(PartyBase party, float influenceValueOfBattle, float contributionShare)`

**Purpose:** Calculates the current value or result of influence gain.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateInfluenceGain(party, 0, 0);
```

### CalculateMoraleGainVictory
`public override ExplainedNumber CalculateMoraleGainVictory(PartyBase party, float renownValueOfBattle, float contributionShare, MapEvent battle)`

**Purpose:** Calculates the current value or result of morale gain victory.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateMoraleGainVictory(party, 0, 0, battle);
```

### CalculateGoldLossAfterDefeat
`public override int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)`

**Purpose:** Calculates the current value or result of gold loss after defeat.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateGoldLossAfterDefeat(partyLeaderHero);
```

### GetLootedItemFromTroop
`public override EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)`

**Purpose:** Reads and returns the looted item from troop value held by this instance.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetLootedItemFromTroop(character, 0);
```

### GetExpectedLootedItemValueFromCasualty
`public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)`

**Purpose:** Reads and returns the expected looted item value from casualty value held by this instance.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetExpectedLootedItemValueFromCasualty(winnerPartyLeaderHero, casualtyCharacter);
```

### GetAITradePenalty
`public override float GetAITradePenalty()`

**Purpose:** Reads and returns the a i trade penalty value held by this instance.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetAITradePenalty();
```

### GetMainPartyMemberScatterChance
`public override float GetMainPartyMemberScatterChance()`

**Purpose:** Reads and returns the main party member scatter chance value held by this instance.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetMainPartyMemberScatterChance();
```

### CalculatePlunderedGoldAmountFromDefeatedParty
`public override int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)`

**Purpose:** Calculates the current value or result of plundered gold amount from defeated party.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculatePlunderedGoldAmountFromDefeatedParty(defeatedParty);
```

### GetLootGoldChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Reads and returns the loot gold chances value held by this instance.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetLootGoldChances(winnerParties);
```

### GetLootMemberChancesForWinnerParties
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootMemberChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Reads and returns the loot member chances for winner parties value held by this instance.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetLootMemberChancesForWinnerParties(winnerParties);
```

### GetLootPrisonerChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)`

**Purpose:** Reads and returns the loot prisoner chances value held by this instance.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetLootPrisonerChances(winnerParties, prisonerElement);
```

### GetLootItemChancesForWinnerParties
`public override MBList<KeyValuePair<MapEventParty, float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**Purpose:** Reads and returns the loot item chances for winner parties value held by this instance.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetLootItemChancesForWinnerParties(winnerParties, defeatedParty);
```

### GetLootCasualtyChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**Purpose:** Reads and returns the loot casualty chances value held by this instance.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetLootCasualtyChances(winnerParties, defeatedParty);
```

### CalculateShipDamageAfterDefeat
`public override float CalculateShipDamageAfterDefeat(Ship ship)`

**Purpose:** Calculates the current value or result of ship damage after defeat.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateShipDamageAfterDefeat(ship);
```

### DistributeDefeatedPartyShipsAmongWinners
`public override MBReadOnlyList<KeyValuePair<Ship, MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MBReadOnlyList<Ship> shipsToLoot, MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Executes the DistributeDefeatedPartyShipsAmongWinners logic.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.DistributeDefeatedPartyShipsAmongWinners(shipsToLoot, winnerParties);
```

### GetBannerLootChanceFromDefeatedHero
`public override float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)`

**Purpose:** Reads and returns the banner loot chance from defeated hero value held by this instance.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetBannerLootChanceFromDefeatedHero(defeatedHero);
```

### GetBannerRewardForWinningMapEvent
`public override ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)`

**Purpose:** Reads and returns the banner reward for winning map event value held by this instance.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetBannerRewardForWinningMapEvent(mapEvent);
```

### GetSunkenShipMoraleEffect
`public override float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)`

**Purpose:** Reads and returns the sunken ship morale effect value held by this instance.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetSunkenShipMoraleEffect(shipOwner, ship);
```

### CalculateMoraleChangeOnRoundVictory
`public override ExplainedNumber CalculateMoraleChangeOnRoundVictory(PartyBase party, BattleSideEnum partySide, BattleSideEnum roundWinner)`

**Purpose:** Calculates the current value or result of morale change on round victory.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateMoraleChangeOnRoundVictory(party, partySide, roundWinner);
```

### GetShipSiegeEngineHitMoraleEffect
`public override float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)`

**Purpose:** Reads and returns the ship siege engine hit morale effect value held by this instance.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetShipSiegeEngineHitMoraleEffect(ship, siegeEngineType);
```

### GetFigureheadLoot
`public override Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties, PartyBase defeatedSideLeaderParty)`

**Purpose:** Reads and returns the figurehead loot value held by this instance.

```csharp
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetFigureheadLoot(defeatedParties, defeatedSideLeaderParty);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BattleRewardModel>(new DefaultBattleRewardModel());
}
```

`BattleRewardModel` is declared as `MBGameModel<BattleRewardModel>` (`BattleRewardModel.cs:13`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:265`.

## See Also

- [Area Index](../)