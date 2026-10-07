---
title: "StoryModeGenericXpModel"
description: "Auto-generated class reference for StoryModeGenericXpModel."
---
# StoryModeGenericXpModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeGenericXpModel : GenericXpModel`
**Base:** `GenericXpModel`
**File:** `StoryMode/GameComponents/StoryModeGenericXpModel.cs`

## Overview

`StoryModeGenericXpModel` scales every point of XP a hero earns, and the whole model is one override that returns zero inside a training field. `GetXpMultiplier` (StoryMode/GameComponents/StoryModeGenericXpModel.cs:12) checks the hero's `CurrentSettlement` for `IsTrainingField()` and returns `0f` when it is one (`:14`, `:16`), otherwise forwarding to the sandbox model (`:18`).

## Mental Model

The value returned is a multiplier applied to raw XP before the gain is applied, not an XP amount — `HeroDeveloper.cs:232` computes `rawXp * GetXpMultiplier(hero)`, so returning `0f` suppresses the entire gain rather than rounding it away. What makes the condition cheap and easy to get wrong is that it is keyed on the hero's current settlement and not on the activity: a hero standing in a training field trains nothing at all, including gains the campaign would otherwise award from quests or encounters, because the settlement lookup is the only test performed. The null-safe pattern at `:14` means a hero with no current settlement falls through to the sandbox multiplier rather than throwing, so a mod adding a second training-ground settlement type must extend this one method — and must be aware that the check happens on every XP grant, not once at quest start.

## Key Methods

### GetXpMultiplier
`public override float GetXpMultiplier(Hero hero)`

**Purpose:** Reads and returns the xp multiplier value held by this instance.

```csharp
StoryModeGenericXpModel storyModeGenericXpModel = ...;
var result = storyModeGenericXpModel.GetXpMultiplier(hero);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<GenericXpModel>(new StoryModeGenericXpModel());
}
```

`GenericXpModel` is declared as `MBGameModel<GenericXpModel>` (`GenericXpModel.cs:7`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:97`.

## See Also

- [Area Index](../)