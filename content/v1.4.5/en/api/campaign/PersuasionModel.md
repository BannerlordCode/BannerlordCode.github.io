---
title: "PersuasionModel"
description: "Auto-generated class reference for PersuasionModel."
---
# PersuasionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PersuasionModel : MBGameModel<PersuasionModel>`
**Base:** `MBGameModel<PersuasionModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PersuasionModel.cs`

## Overview

`PersuasionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PersuasionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSkillXpFromPersuasion
`public abstract int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)`

**Purpose:** Reads and returns the skill xp from persuasion value held by the this instance.

```csharp
// Obtain an instance of PersuasionModel from the subsystem API first
PersuasionModel persuasionModel = ...;
var result = persuasionModel.GetSkillXpFromPersuasion(difficulty, 0);
```

### GetChances
`public abstract void GetChances(PersuasionOptionArgs optionArgs, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance, float difficultyMultiplier)`

**Purpose:** Reads and returns the chances value held by the this instance.

```csharp
// Obtain an instance of PersuasionModel from the subsystem API first
PersuasionModel persuasionModel = ...;
persuasionModel.GetChances(optionArgs, successChance, critSuccessChance, critFailChance, failChance, 0);
```

### GetEffectChances
`public abstract void GetEffectChances(PersuasionOptionArgs option, out float moveToNextStageChance, out float blockRandomOptionChance, float difficultyMultiplier)`

**Purpose:** Reads and returns the effect chances value held by the this instance.

```csharp
// Obtain an instance of PersuasionModel from the subsystem API first
PersuasionModel persuasionModel = ...;
persuasionModel.GetEffectChances(option, moveToNextStageChance, blockRandomOptionChance, 0);
```

### GetArgumentStrengthBasedOnTargetTraits
`public abstract PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character, Tuple<TraitObject, int> traitCorrelation)`

**Purpose:** Reads and returns the argument strength based on target traits value held by the this instance.

```csharp
// Obtain an instance of PersuasionModel from the subsystem API first
PersuasionModel persuasionModel = ...;
var result = persuasionModel.GetArgumentStrengthBasedOnTargetTraits(character, tuple<TraitObject, 0);
```

### GetDifficulty
`public abstract float GetDifficulty(PersuasionDifficulty difficulty)`

**Purpose:** Reads and returns the difficulty value held by the this instance.

```csharp
// Obtain an instance of PersuasionModel from the subsystem API first
PersuasionModel persuasionModel = ...;
var result = persuasionModel.GetDifficulty(difficulty);
```

### CalculateInitialPersuasionProgress
`public abstract float CalculateInitialPersuasionProgress(CharacterObject character, float goalValue, float successValue)`

**Purpose:** Calculates the current value or result of initial persuasion progress.

```csharp
// Obtain an instance of PersuasionModel from the subsystem API first
PersuasionModel persuasionModel = ...;
var result = persuasionModel.CalculateInitialPersuasionProgress(character, 0, 0);
```

### CalculatePersuasionGoalValue
`public abstract float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter, float successValue)`

**Purpose:** Calculates the current value or result of persuasion goal value.

```csharp
// Obtain an instance of PersuasionModel from the subsystem API first
PersuasionModel persuasionModel = ...;
var result = persuasionModel.CalculatePersuasionGoalValue(oneToOneConversationCharacter, 0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PersuasionModel instance = ...;
```

## See Also

- [Area Index](../)