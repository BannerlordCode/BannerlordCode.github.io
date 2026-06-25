---
title: "DefaultPersuasionModel"
description: "Auto-generated class reference for DefaultPersuasionModel."
---
# DefaultPersuasionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPersuasionModel : PersuasionModel`
**Base:** `PersuasionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPersuasionModel.cs`

## Overview

`DefaultPersuasionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPersuasionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSkillXpFromPersuasion
`public override int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)`

**Purpose:** Reads and returns the `skill xp from persuasion` value held by the current object.

```csharp
// Obtain an instance of DefaultPersuasionModel from the subsystem API first
DefaultPersuasionModel defaultPersuasionModel = ...;
var result = defaultPersuasionModel.GetSkillXpFromPersuasion(difficulty, 0);
```

### GetChances
`public override void GetChances(PersuasionOptionArgs optionArgs, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance, float difficultyMultiplier)`

**Purpose:** Reads and returns the `chances` value held by the current object.

```csharp
// Obtain an instance of DefaultPersuasionModel from the subsystem API first
DefaultPersuasionModel defaultPersuasionModel = ...;
defaultPersuasionModel.GetChances(optionArgs, successChance, critSuccessChance, critFailChance, failChance, 0);
```

### GetEffectChances
`public override void GetEffectChances(PersuasionOptionArgs option, out float moveToNextStageChance, out float blockRandomOptionChance, float difficultyMultiplier)`

**Purpose:** Reads and returns the `effect chances` value held by the current object.

```csharp
// Obtain an instance of DefaultPersuasionModel from the subsystem API first
DefaultPersuasionModel defaultPersuasionModel = ...;
defaultPersuasionModel.GetEffectChances(option, moveToNextStageChance, blockRandomOptionChance, 0);
```

### GetArgumentStrengthBasedOnTargetTraits
`public override PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character, Tuple<TraitObject, int> traitCorrelations)`

**Purpose:** Reads and returns the `argument strength based on target traits` value held by the current object.

```csharp
// Obtain an instance of DefaultPersuasionModel from the subsystem API first
DefaultPersuasionModel defaultPersuasionModel = ...;
var result = defaultPersuasionModel.GetArgumentStrengthBasedOnTargetTraits(character, tuple<TraitObject, 0);
```

### CalculateInitialPersuasionProgress
`public override float CalculateInitialPersuasionProgress(CharacterObject character, float goalValue, float successValue)`

**Purpose:** Calculates the current value or result of `initial persuasion progress`.

```csharp
// Obtain an instance of DefaultPersuasionModel from the subsystem API first
DefaultPersuasionModel defaultPersuasionModel = ...;
var result = defaultPersuasionModel.CalculateInitialPersuasionProgress(character, 0, 0);
```

### CalculatePersuasionGoalValue
`public override float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter, float successValue)`

**Purpose:** Calculates the current value or result of `persuasion goal value`.

```csharp
// Obtain an instance of DefaultPersuasionModel from the subsystem API first
DefaultPersuasionModel defaultPersuasionModel = ...;
var result = defaultPersuasionModel.CalculatePersuasionGoalValue(oneToOneConversationCharacter, 0);
```

### GetDifficulty
`public override float GetDifficulty(PersuasionDifficulty difficulty)`

**Purpose:** Reads and returns the `difficulty` value held by the current object.

```csharp
// Obtain an instance of DefaultPersuasionModel from the subsystem API first
DefaultPersuasionModel defaultPersuasionModel = ...;
var result = defaultPersuasionModel.GetDifficulty(difficulty);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPersuasionModel>(new MyDefaultPersuasionModel());
```

## See Also

- [Area Index](../)