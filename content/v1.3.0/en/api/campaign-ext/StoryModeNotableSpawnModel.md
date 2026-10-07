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

`StoryModeNotableSpawnModel` controls how many notables a settlement should have, and the story uses it to keep one tutorial village empty. `GetTargetNotableCountForSettlement` (StoryMode/GameComponents/StoryModeNotableSpawnModel.cs:12) returns `0` while the tutorial phase is unfinished and the settlement's string id is `village_ES3_2` (`:14`, `:16`); every other settlement and occupation falls through to the sandbox target count (`:18`).

## Mental Model

This is a target count, not a spawn instruction — the campaign behaviour asks the model what a settlement *should* hold and then adds or removes notables to match, so returning `0` means the behaviour actively clears the village rather than simply never populating it. That is why the condition is a hard equality on the settlement string id (`:14`): the tutorial village is identified by id, not by type or proximity, so a mod that renames or relocates that village loses the suppression and the tutorial village fills with notables at the normal rate. `NotablesCampaignBehavior.cs:406` is the general consumer, but the tutorial behaviour reads the same model for the same method with the artisan occupation at `TutorialPhaseCampaignBehavior.cs:545`, so an override of this one method changes both the ordinary notable upkeep and the tutorial's own village-filling step. Returning a target is also the only lever: there is no separate method here for choosing *which* notables appear.

## Key Methods

### GetTargetNotableCountForSettlement
`public override int GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)`

**Purpose:** Reads and returns the target notable count for settlement value held by this instance.

```csharp
StoryModeNotableSpawnModel storyModeNotableSpawnModel = ...;
var result = storyModeNotableSpawnModel.GetTargetNotableCountForSettlement(settlement, occupation);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<NotableSpawnModel>(new StoryModeNotableSpawnModel());
}
```

`NotableSpawnModel` is declared as `MBGameModel<NotableSpawnModel>` (`NotableSpawnModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:98`.

## See Also

- [Area Index](../)