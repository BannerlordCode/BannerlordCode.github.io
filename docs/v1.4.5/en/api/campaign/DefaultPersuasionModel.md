<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPersuasionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPersuasionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPersuasionModel : PersuasionModel`
**Base:** `PersuasionModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPersuasionModel.cs`

## Overview

`DefaultPersuasionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPersuasionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSkillXpFromPersuasion
`public override int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)`

**Purpose:** Gets the current value of `skill xp from persuasion`.

### GetChances
`public override void GetChances(PersuasionOptionArgs optionArgs, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance, float difficultyMultiplier)`

**Purpose:** Gets the current value of `chances`.

### GetEffectChances
`public override void GetEffectChances(PersuasionOptionArgs option, out float moveToNextStageChance, out float blockRandomOptionChance, float difficultyMultiplier)`

**Purpose:** Gets the current value of `effect chances`.

### GetArgumentStrengthBasedOnTargetTraits
`public override PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character, Tuple<TraitObject, int> traitCorrelations)`

**Purpose:** Gets the current value of `argument strength based on target traits`.

### CalculateInitialPersuasionProgress
`public override float CalculateInitialPersuasionProgress(CharacterObject character, float goalValue, float successValue)`

**Purpose:** Handles logic related to `calculate initial persuasion progress`.

### CalculatePersuasionGoalValue
`public override float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter, float successValue)`

**Purpose:** Handles logic related to `calculate persuasion goal value`.

### GetDifficulty
`public override float GetDifficulty(PersuasionDifficulty difficulty)`

**Purpose:** Gets the current value of `difficulty`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPersuasionModel>(new MyDefaultPersuasionModel());
```

## See Also

- [Complete Class Catalog](../catalog)