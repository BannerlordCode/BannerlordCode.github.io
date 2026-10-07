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

`StoryModeHeroDeathProbabilityCalculationModel` protects one character. `CalculateHeroDeathProbability` (StoryMode/GameComponents/StoryModeHeroDeathProbabilityCalculationModel.cs:12) returns `0f` when the hero is the Elder Brother and the main storyline is unfinished (`:14`, `:16`), and otherwise returns whatever the sandbox model computes (`:18`). There is no other logic in the class — a hero at full health, an old hero, a wounded hero all take the normal sandbox path.

## Mental Model

This is a single-hero identity check, so its scope is exactly as narrow as it looks: the comparison is against `StoryModeHeroes.ElderBrother` by reference, not by name, clan, tier or a protection flag. `Hero.cs:1636` returns the value straight out of the hero's own death-probability property, which means it is consulted wherever the game asks whether a hero may die — including the on-map health check, not only combat resolution. Two consequences follow for a mod. Removing the Elder Brother from the game, or replacing the hero object, makes the condition false and the hero mortal again immediately, because nothing else in this model reacts. And extending protection to a second character requires editing this one method; there is no list of protected heroes to add to. The storyline condition is checked at call time, so the protection disappears the moment the main storyline completes — a save resumed after that point will let the Elder Brother die even from a wound carried through the story.

## Key Methods

### CalculateHeroDeathProbability
`public override float CalculateHeroDeathProbability(Hero hero)`

**Purpose:** Calculates the current value or result of hero death probability.

```csharp
StoryModeHeroDeathProbabilityCalculationModel storyModeHeroDeathProbabilityCalculationModel = ...;
var result = storyModeHeroDeathProbabilityCalculationModel.CalculateHeroDeathProbability(hero);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<HeroDeathProbabilityCalculationModel>(new StoryModeHeroDeathProbabilityCalculationModel());
}
```

`HeroDeathProbabilityCalculationModel` is declared as `MBGameModel<HeroDeathProbabilityCalculationModel>` (`HeroDeathProbabilityCalculationModel.cs:7`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:99`.

## See Also

- [Area Index](../)