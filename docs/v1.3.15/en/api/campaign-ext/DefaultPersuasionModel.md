<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPersuasionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPersuasionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPersuasionModel : PersuasionModel`
**Base:** `PersuasionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPersuasionModel.cs`

## Overview

`DefaultPersuasionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultPersuasionModel>(new MyDefaultPersuasionModel())` to change how it computes.

## Key Methods

### GetSkillXpFromPersuasion
```csharp
public override int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)
```

### GetChances
```csharp
public override void GetChances(PersuasionOptionArgs optionArgs, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance, float difficultyMultiplier)
```

### GetEffectChances
```csharp
public override void GetEffectChances(PersuasionOptionArgs option, out float moveToNextStageChance, out float blockRandomOptionChance, float difficultyMultiplier)
```

### GetArgumentStrengthBasedOnTargetTraits
```csharp
public override PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character, Tuple<TraitObject, int> traitCorrelations)
```

### CalculateInitialPersuasionProgress
```csharp
public override float CalculateInitialPersuasionProgress(CharacterObject character, float goalValue, float successValue)
```

### CalculatePersuasionGoalValue
```csharp
public override float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter, float successValue)
```

### GetDifficulty
```csharp
public override float GetDifficulty(PersuasionDifficulty difficulty)
```

## Usage Example

```csharp
// Typical usage of DefaultPersuasionModel (Model)
Game.Current.ReplaceModel<DefaultPersuasionModel>(new MyDefaultPersuasionModel());
```

## See Also

- [Complete Class Catalog](../catalog)