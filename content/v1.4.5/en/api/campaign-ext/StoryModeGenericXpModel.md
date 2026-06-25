---
title: "StoryModeGenericXpModel"
description: "Auto-generated class reference for StoryModeGenericXpModel."
---
# StoryModeGenericXpModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeGenericXpModel : GenericXpModel`
**Base:** `GenericXpModel`
**File:** `Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeGenericXpModel.cs`

## Overview

`StoryModeGenericXpModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeGenericXpModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetXpMultiplier
`public override float GetXpMultiplier(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the xp multiplier value held by the this instance.

```csharp
// Obtain an instance of StoryModeGenericXpModel from the subsystem API first
StoryModeGenericXpModel storyModeGenericXpModel = ...;
var result = storyModeGenericXpModel.GetXpMultiplier(hero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeGenericXpModel>(new MyStoryModeGenericXpModel());
```

## See Also

- [Area Index](../)