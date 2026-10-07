---
title: "StoryModeCutsceneSelectionModel"
description: "Auto-generated class reference for StoryModeCutsceneSelectionModel."
---
# StoryModeCutsceneSelectionModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeCutsceneSelectionModel : CutsceneSelectionModel`
**Base:** `CutsceneSelectionModel`
**File:** `StoryMode/GameComponents/StoryModeCutsceneSelectionModel.cs`

## Overview

`StoryModeCutsceneSelectionModel` picks the notification shown when a kingdom falls, and its one override exists to pick a different notification when the player was backing that kingdom. `GetKingdomDestroyedSceneNotification` (`StoryMode/GameComponents/StoryModeCutsceneSelectionModel.cs:13`) compares the destroyed kingdom against `StoryModeManager.Current.MainStoryLine.PlayerSupportedKingdom` and, on a match, returns a `SupportedFactionDefeatedSceneNotificationItem` that also knows whether the player is on the imperial quest line (`:17`). Any other kingdom falls through to the sandbox model's notification unchanged (`:19`).

## Mental Model

The return value is a data object, not a string — the model chooses which `SceneNotificationData` type gets constructed, and the caller only forwards it. `DefaultCutscenesCampaignBehavior.cs:130` wraps the call in `MBInformationManager.ShowSceneNotification`, so the type selected here determines the whole layout of the popup, not just its text. The check is a single reference comparison against the player's supported kingdom, evaluated at the moment the notification is requested, so it reflects whatever the story manager currently reports rather than any history. Two things follow for a mod: the imperial-quest-line flag is baked into the notification when it is constructed (`:17`) and cannot be re-read afterwards, and adding a third notification variant means overriding the method entirely, because the two branches leave no hook to insert between them.

## Key Methods

### GetKingdomDestroyedSceneNotification
`public override SceneNotificationData GetKingdomDestroyedSceneNotification(Kingdom kingdom)`

**Purpose:** Reads and returns the kingdom destroyed scene notification value held by this instance.

```csharp
StoryModeCutsceneSelectionModel storyModeCutsceneSelectionModel = ...;
var result = storyModeCutsceneSelectionModel.GetKingdomDestroyedSceneNotification(kingdom);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<CutsceneSelectionModel>(new StoryModeCutsceneSelectionModel());
}
```

`CutsceneSelectionModel` is declared as `MBGameModel<CutsceneSelectionModel>` (`CutsceneSelectionModel.cs:7`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:105`.

## See Also

- [Area Index](../)