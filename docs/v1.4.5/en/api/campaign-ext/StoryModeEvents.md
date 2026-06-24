<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeEvents`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeEvents

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class StoryModeEvents : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode/StoryModeEvents.cs`

## Overview

`StoryModeEvents` lives in `StoryMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RemoveListeners
`public override void RemoveListeners(object obj)`

**Purpose:** Removes `listeners` from the current collection or state.

### OnMainStoryLineSideChosen
`public void OnMainStoryLineSideChosen(MainStoryLineSide side)`

**Purpose:** Called when the `main story line side chosen` event is raised.

### OnStoryModeTutorialEnded
`public void OnStoryModeTutorialEnded()`

**Purpose:** Called when the `story mode tutorial ended` event is raised.

### OnStealthTutorialActivated
`public void OnStealthTutorialActivated()`

**Purpose:** Called when the `stealth tutorial activated` event is raised.

### OnBannerPieceCollected
`public void OnBannerPieceCollected()`

**Purpose:** Called when the `banner piece collected` event is raised.

### OnConspiracyActivated
`public void OnConspiracyActivated()`

**Purpose:** Called when the `conspiracy activated` event is raised.

### OnTravelToVillageTutorialQuestStarted
`public void OnTravelToVillageTutorialQuestStarted()`

**Purpose:** Called when the `travel to village tutorial quest started` event is raised.

## Usage Example

```csharp
var value = new StoryModeEvents();
value.RemoveListeners(obj);
```

## See Also

- [Complete Class Catalog](../catalog)