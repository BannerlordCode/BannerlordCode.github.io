---
title: "StoryModeCutsceneSelectionModel"
description: "Auto-generated class reference for StoryModeCutsceneSelectionModel."
---
# StoryModeCutsceneSelectionModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeCutsceneSelectionModel : CutsceneSelectionModel`
**Base:** `CutsceneSelectionModel`
**File:** `Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeCutsceneSelectionModel.cs`

## Overview

`StoryModeCutsceneSelectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeCutsceneSelectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetKingdomDestroyedSceneNotification
`public override SceneNotificationData GetKingdomDestroyedSceneNotification(Kingdom kingdom)`

**Purpose:** **Purpose:** Reads and returns the kingdom destroyed scene notification value held by the this instance.

```csharp
// Obtain an instance of StoryModeCutsceneSelectionModel from the subsystem API first
StoryModeCutsceneSelectionModel storyModeCutsceneSelectionModel = ...;
var result = storyModeCutsceneSelectionModel.GetKingdomDestroyedSceneNotification(kingdom);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeCutsceneSelectionModel>(new MyStoryModeCutsceneSelectionModel());
```

## See Also

- [Area Index](../)