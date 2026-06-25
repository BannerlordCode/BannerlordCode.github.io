---
title: "StoryModeTutorialBoxCampaignBehavior"
description: "Auto-generated class reference for StoryModeTutorialBoxCampaignBehavior."
---
# StoryModeTutorialBoxCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeTutorialBoxCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `StoryMode/GameComponents/CampaignBehaviors/StoryModeTutorialBoxCampaignBehavior.cs`

## Overview

`StoryModeTutorialBoxCampaignBehavior` lives in `StoryMode.GameComponents.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GameComponents.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AvailableTutorials` | `public MBReadOnlyList<CampaignTutorial> AvailableTutorials { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of StoryModeTutorialBoxCampaignBehavior from the subsystem API first
StoryModeTutorialBoxCampaignBehavior storyModeTutorialBoxCampaignBehavior = ...;
storyModeTutorialBoxCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of StoryModeTutorialBoxCampaignBehavior from the subsystem API first
StoryModeTutorialBoxCampaignBehavior storyModeTutorialBoxCampaignBehavior = ...;
storyModeTutorialBoxCampaignBehavior.SyncData(dataStore);
```

### OnResetAllTutorials
`public void OnResetAllTutorials(ResetAllTutorialsEvent obj)`

**Purpose:** Invoked when the `reset all tutorials` event is raised.

```csharp
// Obtain an instance of StoryModeTutorialBoxCampaignBehavior from the subsystem API first
StoryModeTutorialBoxCampaignBehavior storyModeTutorialBoxCampaignBehavior = ...;
storyModeTutorialBoxCampaignBehavior.OnResetAllTutorials(obj);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StoryModeTutorialBoxCampaignBehavior storyModeTutorialBoxCampaignBehavior = ...;
storyModeTutorialBoxCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)