---
title: "StoryModeHeroDeathProbabilityCalculationModel"
description: "Auto-generated class reference for StoryModeHeroDeathProbabilityCalculationModel."
---
# StoryModeHeroDeathProbabilityCalculationModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeHeroDeathProbabilityCalculationModel : HeroDeathProbabilityCalculationModel`
**Base:** `HeroDeathProbabilityCalculationModel`
**File:** `StoryMode/GameComponents/StoryModeHeroDeathProbabilityCalculationModel.cs`

## Overview

`StoryModeHeroDeathProbabilityCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeHeroDeathProbabilityCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateHeroDeathProbability
`public override float CalculateHeroDeathProbability(Hero hero)`

**Purpose:** **Purpose:** Calculates the current value or result of hero death probability.

```csharp
// Obtain an instance of StoryModeHeroDeathProbabilityCalculationModel from the subsystem API first
StoryModeHeroDeathProbabilityCalculationModel storyModeHeroDeathProbabilityCalculationModel = ...;
var result = storyModeHeroDeathProbabilityCalculationModel.CalculateHeroDeathProbability(hero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeHeroDeathProbabilityCalculationModel>(new MyStoryModeHeroDeathProbabilityCalculationModel());
```

## See Also

- [Area Index](../)