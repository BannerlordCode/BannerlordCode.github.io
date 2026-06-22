<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleRewardModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleRewardModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BattleRewardModel : MBGameModel<BattleRewardModel>`
**Base:** `MBGameModel<BattleRewardModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BattleRewardModel.cs`

## Overview

`BattleRewardModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<BattleRewardModel>(new MyBattleRewardModel())` to change how it computes.

## Key Methods

### GetBannerLootChanceFromDefeatedHero
```csharp
public abstract float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)
```

### GetBannerRewardForWinningMapEvent
```csharp
public abstract ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)
```

### GetPlayerGainedRelationAmount
```csharp
public abstract int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)
```

### CalculateRenownGain
```csharp
public abstract ExplainedNumber CalculateRenownGain(PartyBase party, float renownValueOfBattle, float contributionShare)
```

### CalculateInfluenceGain
```csharp
public abstract ExplainedNumber CalculateInfluenceGain(PartyBase party, float influenceValueOfBattle, float contributionShare)
```

### CalculateMoraleGainVictory
```csharp
public abstract ExplainedNumber CalculateMoraleGainVictory(PartyBase party, float renownValueOfBattle, float contributionShare, MapEvent battle)
```

### CalculateMoraleChangeOnRoundVictory
```csharp
public abstract ExplainedNumber CalculateMoraleChangeOnRoundVictory(PartyBase party, MapEventSide partySide, BattleSideEnum roundWinner)
```

### CalculateGoldLossAfterDefeat
```csharp
public abstract int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)
```

### GetLootedItemFromTroop
```csharp
public abstract EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)
```

### GetExpectedLootedItemValueFromCasualty
```csharp
public abstract float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)
```

### CalculatePlunderedGoldAmountFromDefeatedParty
```csharp
public abstract int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)
```

### GetLootGoldChances
```csharp
public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)
```

### GetMainPartyMemberScatterChance
```csharp
public abstract float GetMainPartyMemberScatterChance()
```

### GetAITradePenalty
```csharp
public abstract float GetAITradePenalty()
```

### GetLootMemberChancesForWinnerParties
```csharp
public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootMemberChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties)
```

### GetLootPrisonerChances
```csharp
public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)
```

### GetLootItemChancesForWinnerParties
```csharp
public abstract MBList<KeyValuePair<MapEventParty, float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)
```

### GetLootCasualtyChances
```csharp
public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)
```

### CalculateShipDamageAfterDefeat
```csharp
public abstract float CalculateShipDamageAfterDefeat(Ship ship)
```

### DistributeDefeatedPartyShipsAmongWinners
```csharp
public abstract MBReadOnlyList<KeyValuePair<Ship, MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent, MBReadOnlyList<Ship> shipsToLoot, MBReadOnlyList<MapEventParty> winnerParties)
```

### GetSunkenShipMoraleEffect
```csharp
public abstract float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)
```

### GetShipSiegeEngineHitMoraleEffect
```csharp
public abstract float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)
```

### GetFigureheadLoot
```csharp
public abstract Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties, PartyBase defeatedSideLeaderParty)
```

### GetWinnerPartiesThatCanPlunderGoldFromShips
```csharp
public abstract MBReadOnlyList<MapEventParty> GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty> winnerParties)
```

## Usage Example

```csharp
// Typical usage of BattleRewardModel (Model)
Game.Current.ReplaceModel<BattleRewardModel>(new MyBattleRewardModel());
```

## See Also

- [Complete Class Catalog](../catalog)