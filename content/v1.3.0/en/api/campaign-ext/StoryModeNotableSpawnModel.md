---
title: "StoryModeNotableSpawnModel"
description: "Auto-generated class reference for StoryModeNotableSpawnModel."
---
# StoryModeNotableSpawnModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeNotableSpawnModel : NotableSpawnModel`
**Base:** `NotableSpawnModel`
**File:** `StoryMode/GameComponents/StoryModeNotableSpawnModel.cs`

## Overview

`StoryModeNotableSpawnModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeNotableSpawnModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTargetNotableCountForSettlement
`public override int GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)`

**Purpose:** **Purpose:** Reads and returns the target notable count for settlement value held by the this instance.

```csharp
// Obtain an instance of StoryModeNotableSpawnModel from the subsystem API first
StoryModeNotableSpawnModel storyModeNotableSpawnModel = ...;
var result = storyModeNotableSpawnModel.GetTargetNotableCountForSettlement(settlement, occupation);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeNotableSpawnModel>(new MyStoryModeNotableSpawnModel());
```

## See Also

- [Area Index](../)