<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PersuasionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PersuasionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PersuasionModel : MBGameModel<PersuasionModel>`
**Base:** `MBGameModel<PersuasionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PersuasionModel.cs`

## Overview

`PersuasionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PersuasionModel>(new MyPersuasionModel())` to change how it computes.

## Key Methods

### GetSkillXpFromPersuasion
```csharp
public abstract int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)
```

### GetChances
```csharp
public abstract void GetChances(PersuasionOptionArgs optionArgs, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance, float difficultyMultiplier)
```

### GetEffectChances
```csharp
public abstract void GetEffectChances(PersuasionOptionArgs option, out float moveToNextStageChance, out float blockRandomOptionChance, float difficultyMultiplier)
```

### GetArgumentStrengthBasedOnTargetTraits
```csharp
public abstract PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character, Tuple<TraitObject, int> traitCorrelation)
```

### GetDifficulty
```csharp
public abstract float GetDifficulty(PersuasionDifficulty difficulty)
```

### CalculateInitialPersuasionProgress
```csharp
public abstract float CalculateInitialPersuasionProgress(CharacterObject character, float goalValue, float successValue)
```

### CalculatePersuasionGoalValue
```csharp
public abstract float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter, float successValue)
```

## Usage Example

```csharp
// Typical usage of PersuasionModel (Model)
Game.Current.ReplaceModel<PersuasionModel>(new MyPersuasionModel());
```

## See Also

- [Complete Class Catalog](../catalog)