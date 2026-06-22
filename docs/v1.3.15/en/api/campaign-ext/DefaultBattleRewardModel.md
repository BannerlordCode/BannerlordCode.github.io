<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBattleRewardModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBattleRewardModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBattleRewardModel : BattleRewardModel`
**Base:** `BattleRewardModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBattleRewardModel.cs`

## Overview

`DefaultBattleRewardModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultBattleRewardModel>(new MyDefaultBattleRewardModel())` to change how it computes.

## Key Methods

### GetPlayerGainedRelationAmount
```csharp
public override int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)
```

### CalculateRenownGain
```csharp
public override ExplainedNumber CalculateRenownGain(PartyBase party, float renownValueOfBattle, float contributionShare)
```

### CalculateInfluenceGain
```csharp
public override ExplainedNumber CalculateInfluenceGain(PartyBase party, float influenceValueOfBattle, float contributionShare)
```

### CalculateMoraleGainVictory
```csharp
public override ExplainedNumber CalculateMoraleGainVictory(PartyBase party, float renownValueOfBattle, float contributionShare, MapEvent battle)
```

### CalculateGoldLossAfterDefeat
```csharp
public override int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)
```

### GetLootedItemFromTroop
```csharp
public override EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)
```

### GetExpectedLootedItemValueFromCasualty
```csharp
public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)
```

### GetAITradePenalty
```csharp
public override float GetAITradePenalty()
```

### GetMainPartyMemberScatterChance
```csharp
public override float GetMainPartyMemberScatterChance()
```

### CalculatePlunderedGoldAmountFromDefeatedParty
```csharp
public override int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)
```

### GetLootGoldChances
```csharp
public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)
```

### GetLootMemberChancesForWinnerParties
```csharp
public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootMemberChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties)
```

### GetLootPrisonerChances
```csharp
public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)
```

### GetLootItemChancesForWinnerParties
```csharp
public override MBList<KeyValuePair<MapEventParty, float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)
```

### GetLootCasualtyChances
```csharp
public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)
```

### CalculateShipDamageAfterDefeat
```csharp
public override float CalculateShipDamageAfterDefeat(Ship ship)
```

### DistributeDefeatedPartyShipsAmongWinners
```csharp
public override MBReadOnlyList<KeyValuePair<Ship, MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent, MBReadOnlyList<Ship> shipsToLoot, MBReadOnlyList<MapEventParty> winnerParties)
```

### GetBannerLootChanceFromDefeatedHero
```csharp
public override float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)
```

### GetBannerRewardForWinningMapEvent
```csharp
public override ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)
```

### GetSunkenShipMoraleEffect
```csharp
public override float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)
```

### CalculateMoraleChangeOnRoundVictory
```csharp
public override ExplainedNumber CalculateMoraleChangeOnRoundVictory(PartyBase party, MapEventSide partySide, BattleSideEnum roundWinner)
```

### GetShipSiegeEngineHitMoraleEffect
```csharp
public override float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)
```

### GetFigureheadLoot
```csharp
public override Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties, PartyBase defeatedSideLeaderParty)
```

### GetWinnerPartiesThatCanPlunderGoldFromShips
```csharp
public override MBReadOnlyList<MapEventParty> GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty> winnerParties)
```

## Usage Example

```csharp
// Typical usage of DefaultBattleRewardModel (Model)
Game.Current.ReplaceModel<DefaultBattleRewardModel>(new MyDefaultBattleRewardModel());
```

## See Also

- [Complete Class Catalog](../catalog)