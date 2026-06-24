<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeCutsceneSelectionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeCutsceneSelectionModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeCutsceneSelectionModel : CutsceneSelectionModel`
**Base:** `CutsceneSelectionModel`
**File:** `StoryMode/GameComponents/StoryModeCutsceneSelectionModel.cs`

## Overview

`StoryModeCutsceneSelectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeCutsceneSelectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetKingdomDestroyedSceneNotification
`public override SceneNotificationData GetKingdomDestroyedSceneNotification(Kingdom kingdom)`

**Purpose:** Gets the current value of `kingdom destroyed scene notification`.

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeCutsceneSelectionModel>(new MyStoryModeCutsceneSelectionModel());
```

## See Also

- [Complete Class Catalog](../catalog)