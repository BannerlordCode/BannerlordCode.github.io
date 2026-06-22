<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTrainingModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTrainingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTrainingModel : MBGameModel<PartyTrainingModel>`
**Base:** `MBGameModel<PartyTrainingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTrainingModel.cs`

## Overview

`PartyTrainingModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PartyTrainingModel>(new MyPartyTrainingModel())` to change how it computes.

## Key Methods

### GenerateSharedXp
```csharp
public abstract int GenerateSharedXp(CharacterObject troop, int xp, MobileParty mobileParty)
```

### CalculateXpGainFromBattles
```csharp
public abstract ExplainedNumber CalculateXpGainFromBattles(FlattenedTroopRosterElement troopRosterElement, PartyBase party)
```

### GetXpReward
```csharp
public abstract int GetXpReward(CharacterObject character)
```

### GetEffectiveDailyExperience
```csharp
public abstract ExplainedNumber GetEffectiveDailyExperience(MobileParty party, TroopRosterElement troop)
```

## Usage Example

```csharp
// Typical usage of PartyTrainingModel (Model)
Game.Current.ReplaceModel<PartyTrainingModel>(new MyPartyTrainingModel());
```

## See Also

- [Complete Class Catalog](../catalog)