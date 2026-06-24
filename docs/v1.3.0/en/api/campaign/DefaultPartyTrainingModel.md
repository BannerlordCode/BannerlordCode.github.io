<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyTrainingModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartyTrainingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTrainingModel : PartyTrainingModel`
**Base:** `PartyTrainingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTrainingModel.cs`

## Overview

`DefaultPartyTrainingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyTrainingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetXpReward
`public override int GetXpReward(CharacterObject character)`

**Purpose:** Gets the current value of `xp reward`.

### GetEffectiveDailyExperience
`public override ExplainedNumber GetEffectiveDailyExperience(MobileParty mobileParty, TroopRosterElement troop)`

**Purpose:** Gets the current value of `effective daily experience`.

### GenerateSharedXp
`public override int GenerateSharedXp(CharacterObject troop, int xp, MobileParty mobileParty)`

**Purpose:** Handles logic related to `generate shared xp`.

### CalculateXpGainFromBattles
`public override ExplainedNumber CalculateXpGainFromBattles(FlattenedTroopRosterElement troopRosterElement, PartyBase party)`

**Purpose:** Handles logic related to `calculate xp gain from battles`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyTrainingModel>(new MyDefaultPartyTrainingModel());
```

## See Also

- [Complete Class Catalog](../catalog)