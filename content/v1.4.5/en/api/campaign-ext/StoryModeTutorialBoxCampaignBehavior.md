---
title: "StoryModeTutorialBoxCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeTutorialBoxCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeTutorialBoxCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeTutorialBoxCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.GameComponents.CampaignBehaviors/StoryModeTutorialBoxCampaignBehavior.cs`

## Overview

`StoryModeTutorialBoxCampaignBehavior` lives in `StoryMode.GameComponents.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GameComponents.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### OnResetAllTutorials
`public void OnResetAllTutorials(ResetAllTutorialsEvent obj)`

**Purpose:** Called when the `reset all tutorials` event is raised.

## Usage Example

```csharp
var value = new StoryModeTutorialBoxCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)