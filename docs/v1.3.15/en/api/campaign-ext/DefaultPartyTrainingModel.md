<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyTrainingModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyTrainingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTrainingModel : PartyTrainingModel`
**Base:** `PartyTrainingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTrainingModel.cs`

## Overview

`DefaultPartyTrainingModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultPartyTrainingModel>(new MyDefaultPartyTrainingModel())` to change how it computes.

## Key Methods

### GetXpReward
```csharp
public override int GetXpReward(CharacterObject character)
```

### GetEffectiveDailyExperience
```csharp
public override ExplainedNumber GetEffectiveDailyExperience(MobileParty mobileParty, TroopRosterElement troop)
```

### GenerateSharedXp
```csharp
public override int GenerateSharedXp(CharacterObject troop, int xp, MobileParty mobileParty)
```

### CalculateXpGainFromBattles
```csharp
public override ExplainedNumber CalculateXpGainFromBattles(FlattenedTroopRosterElement troopRosterElement, PartyBase party)
```

## Usage Example

```csharp
// Typical usage of DefaultPartyTrainingModel (Model)
Game.Current.ReplaceModel<DefaultPartyTrainingModel>(new MyDefaultPartyTrainingModel());
```

## See Also

- [Complete Class Catalog](../catalog)