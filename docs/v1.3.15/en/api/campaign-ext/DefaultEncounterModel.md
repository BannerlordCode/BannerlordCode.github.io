<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultEncounterModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultEncounterModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounterModel : EncounterModel`
**Base:** `EncounterModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterModel.cs`

## Overview

`DefaultEncounterModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultEncounterModel>(new MyDefaultEncounterModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `NeededMaximumDistanceForEncounteringMobileParty` | `public override float NeededMaximumDistanceForEncounteringMobileParty { get; }` |
| `MaximumAllowedDistanceForEncounteringMobilePartyInArmy` | `public override float MaximumAllowedDistanceForEncounteringMobilePartyInArmy { get; }` |
| `NeededMaximumDistanceForEncounteringTown` | `public override float NeededMaximumDistanceForEncounteringTown { get; }` |
| `NeededMaximumDistanceForEncounteringBlockade` | `public override float NeededMaximumDistanceForEncounteringBlockade { get; }` |
| `NeededMaximumDistanceForEncounteringVillage` | `public override float NeededMaximumDistanceForEncounteringVillage { get; }` |
| `GetEncounterJoiningRadius` | `public override float GetEncounterJoiningRadius { get; }` |
| `PlayerParleyDistance` | `public override float PlayerParleyDistance { get; }` |
| `GetSettlementBeingNearFieldBattleRadius` | `public override float GetSettlementBeingNearFieldBattleRadius { get; }` |

## Key Methods

### IsEncounterExemptFromHostileActions
```csharp
public override bool IsEncounterExemptFromHostileActions(PartyBase side1, PartyBase side2)
```

### GetLeaderOfSiegeEvent
```csharp
public override Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent, BattleSideEnum side)
```

### CanMainHeroDoParleyWithParty
```csharp
public override bool CanMainHeroDoParleyWithParty(PartyBase partyBase, out TextObject explanation)
```

### GetLeaderOfMapEvent
```csharp
public override Hero GetLeaderOfMapEvent(MapEvent mapEvent, BattleSideEnum side)
```

### GetCharacterSergeantScore
```csharp
public override int GetCharacterSergeantScore(Hero hero)
```

### GetDefenderPartiesOfSettlement
```csharp
public override IEnumerable<PartyBase> GetDefenderPartiesOfSettlement(Settlement settlement, MapEvent.BattleTypes mapEventType)
```

### GetNextDefenderPartyOfSettlement
```csharp
public override PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement, ref int partyIndex, MapEvent.BattleTypes mapEventType)
```

### CreateMapEventComponentForEncounter
```csharp
public override MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty, PartyBase defenderParty, MapEvent.BattleTypes battleType)
```

### GetSurrenderChance
```csharp
public override float GetSurrenderChance(MobileParty defenderParty, MobileParty attackerParty)
```

### GetBribeChance
```csharp
public override ExplainedNumber GetBribeChance(MobileParty defenderParty, MobileParty attackerParty)
```

### GetMapEventSideRunAwayChance
```csharp
public override float GetMapEventSideRunAwayChance(MapEventSide mapEventSide)
```

### FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter
```csharp
public override void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)
```

### CanPlayerForceBanditsToJoin
```csharp
public override bool CanPlayerForceBanditsToJoin(out TextObject explanation)
```

### IsPartyUnderPlayerCommand
```csharp
public override bool IsPartyUnderPlayerCommand(PartyBase party)
```

## Usage Example

```csharp
// Typical usage of DefaultEncounterModel (Model)
Game.Current.ReplaceModel<DefaultEncounterModel>(new MyDefaultEncounterModel());
```

## See Also

- [Complete Class Catalog](../catalog)