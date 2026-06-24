<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PersuasionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PersuasionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PersuasionModel : MBGameModel<PersuasionModel>`
**Base:** `MBGameModel<PersuasionModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PersuasionModel.cs`

## Overview

`PersuasionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PersuasionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSkillXpFromPersuasion
`public abstract int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)`

**Purpose:** Gets the current value of `skill xp from persuasion`.

### GetChances
`public abstract void GetChances(PersuasionOptionArgs optionArgs, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance, float difficultyMultiplier)`

**Purpose:** Gets the current value of `chances`.

### GetEffectChances
`public abstract void GetEffectChances(PersuasionOptionArgs option, out float moveToNextStageChance, out float blockRandomOptionChance, float difficultyMultiplier)`

**Purpose:** Gets the current value of `effect chances`.

### GetArgumentStrengthBasedOnTargetTraits
`public abstract PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character, Tuple<TraitObject, int> traitCorrelation)`

**Purpose:** Gets the current value of `argument strength based on target traits`.

### GetDifficulty
`public abstract float GetDifficulty(PersuasionDifficulty difficulty)`

**Purpose:** Gets the current value of `difficulty`.

### CalculateInitialPersuasionProgress
`public abstract float CalculateInitialPersuasionProgress(CharacterObject character, float goalValue, float successValue)`

**Purpose:** Handles logic related to `calculate initial persuasion progress`.

### CalculatePersuasionGoalValue
`public abstract float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter, float successValue)`

**Purpose:** Handles logic related to `calculate persuasion goal value`.

## Usage Example

```csharp
var implementation = new CustomPersuasionModel();
```

## See Also

- [Complete Class Catalog](../catalog)