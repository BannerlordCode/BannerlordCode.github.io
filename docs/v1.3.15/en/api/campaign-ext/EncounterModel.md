<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncounterModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncounterModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncounterModel : MBGameModel<EncounterModel>`
**Base:** `MBGameModel<EncounterModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterModel.cs`

## Overview

`EncounterModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<EncounterModel>(new MyEncounterModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `NeededMaximumDistanceForEncounteringMobileParty` | `public abstract float NeededMaximumDistanceForEncounteringMobileParty { get; }` |
| `MaximumAllowedDistanceForEncounteringMobilePartyInArmy` | `public abstract float MaximumAllowedDistanceForEncounteringMobilePartyInArmy { get; }` |
| `NeededMaximumDistanceForEncounteringTown` | `public abstract float NeededMaximumDistanceForEncounteringTown { get; }` |
| `NeededMaximumDistanceForEncounteringBlockade` | `public abstract float NeededMaximumDistanceForEncounteringBlockade { get; }` |
| `NeededMaximumDistanceForEncounteringVillage` | `public abstract float NeededMaximumDistanceForEncounteringVillage { get; }` |
| `GetEncounterJoiningRadius` | `public abstract float GetEncounterJoiningRadius { get; }` |
| `GetSettlementBeingNearFieldBattleRadius` | `public abstract float GetSettlementBeingNearFieldBattleRadius { get; }` |
| `PlayerParleyDistance` | `public abstract float PlayerParleyDistance { get; }` |

## Key Methods

### IsEncounterExemptFromHostileActions
```csharp
public abstract bool IsEncounterExemptFromHostileActions(PartyBase side1, PartyBase side2)
```

### CanMainHeroDoParleyWithParty
```csharp
public abstract bool CanMainHeroDoParleyWithParty(PartyBase partyBase, out TextObject explanation)
```

### GetLeaderOfSiegeEvent
```csharp
public abstract Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent, BattleSideEnum side)
```

### GetLeaderOfMapEvent
```csharp
public abstract Hero GetLeaderOfMapEvent(MapEvent mapEvent, BattleSideEnum side)
```

### GetCharacterSergeantScore
```csharp
public abstract int GetCharacterSergeantScore(Hero hero)
```

### GetDefenderPartiesOfSettlement
```csharp
public abstract IEnumerable<PartyBase> GetDefenderPartiesOfSettlement(Settlement settlement, MapEvent.BattleTypes mapEventType)
```

### GetNextDefenderPartyOfSettlement
```csharp
public abstract PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement, ref int partyIndex, MapEvent.BattleTypes mapEventType)
```

### CreateMapEventComponentForEncounter
```csharp
public abstract MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty, PartyBase defenderParty, MapEvent.BattleTypes battleType)
```

### GetBribeChance
```csharp
public abstract ExplainedNumber GetBribeChance(MobileParty defenderParty, MobileParty attackerParty)
```

### GetSurrenderChance
```csharp
public abstract float GetSurrenderChance(MobileParty defenderParty, MobileParty attackerParty)
```

### GetMapEventSideRunAwayChance
```csharp
public abstract float GetMapEventSideRunAwayChance(MapEventSide mapEventside)
```

### FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter
```csharp
public abstract void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)
```

### CanPlayerForceBanditsToJoin
```csharp
public abstract bool CanPlayerForceBanditsToJoin(out TextObject explanation)
```

### IsPartyUnderPlayerCommand
```csharp
public abstract bool IsPartyUnderPlayerCommand(PartyBase party)
```

## Usage Example

```csharp
// Typical usage of EncounterModel (Model)
Game.Current.ReplaceModel<EncounterModel>(new MyEncounterModel());
```

## See Also

- [Complete Class Catalog](../catalog)