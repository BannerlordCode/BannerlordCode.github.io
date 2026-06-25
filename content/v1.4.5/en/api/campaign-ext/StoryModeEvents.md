---
title: "StoryModeEvents"
description: "Auto-generated class reference for StoryModeEvents."
---
# StoryModeEvents

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class StoryModeEvents : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `Modules.StoryMode/StoryMode/StoryMode/StoryModeEvents.cs`

## Overview

`StoryModeEvents` lives in `StoryMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RemoveListeners
`public override void RemoveListeners(object obj)`

**Purpose:** Removes `listeners` from the current collection or state.

```csharp
// Obtain an instance of StoryModeEvents from the subsystem API first
StoryModeEvents storyModeEvents = ...;
storyModeEvents.RemoveListeners(obj);
```

### OnMainStoryLineSideChosen
`public void OnMainStoryLineSideChosen(MainStoryLineSide side)`

**Purpose:** Invoked when the `main story line side chosen` event is raised.

```csharp
// Obtain an instance of StoryModeEvents from the subsystem API first
StoryModeEvents storyModeEvents = ...;
storyModeEvents.OnMainStoryLineSideChosen(side);
```

### OnStoryModeTutorialEnded
`public void OnStoryModeTutorialEnded()`

**Purpose:** Invoked when the `story mode tutorial ended` event is raised.

```csharp
// Obtain an instance of StoryModeEvents from the subsystem API first
StoryModeEvents storyModeEvents = ...;
storyModeEvents.OnStoryModeTutorialEnded();
```

### OnStealthTutorialActivated
`public void OnStealthTutorialActivated()`

**Purpose:** Invoked when the `stealth tutorial activated` event is raised.

```csharp
// Obtain an instance of StoryModeEvents from the subsystem API first
StoryModeEvents storyModeEvents = ...;
storyModeEvents.OnStealthTutorialActivated();
```

### OnBannerPieceCollected
`public void OnBannerPieceCollected()`

**Purpose:** Invoked when the `banner piece collected` event is raised.

```csharp
// Obtain an instance of StoryModeEvents from the subsystem API first
StoryModeEvents storyModeEvents = ...;
storyModeEvents.OnBannerPieceCollected();
```

### OnConspiracyActivated
`public void OnConspiracyActivated()`

**Purpose:** Invoked when the `conspiracy activated` event is raised.

```csharp
// Obtain an instance of StoryModeEvents from the subsystem API first
StoryModeEvents storyModeEvents = ...;
storyModeEvents.OnConspiracyActivated();
```

### OnTravelToVillageTutorialQuestStarted
`public void OnTravelToVillageTutorialQuestStarted()`

**Purpose:** Invoked when the `travel to village tutorial quest started` event is raised.

```csharp
// Obtain an instance of StoryModeEvents from the subsystem API first
StoryModeEvents storyModeEvents = ...;
storyModeEvents.OnTravelToVillageTutorialQuestStarted();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StoryModeEvents storyModeEvents = ...;
storyModeEvents.RemoveListeners(obj);
```

## See Also

- [Area Index](../)