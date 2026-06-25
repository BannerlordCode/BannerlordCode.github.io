---
title: "TutorialPhaseCampaignBehavior"
description: "Auto-generated class reference for TutorialPhaseCampaignBehavior."
---
# TutorialPhaseCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode.GameComponents
**Type:** `public class TutorialPhaseCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `StoryMode/GameComponents/CampaignBehaviors/TutorialPhaseCampaignBehavior.cs`

## Overview

`TutorialPhaseCampaignBehavior` lives in `StoryMode.GameComponents.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GameComponents.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of TutorialPhaseCampaignBehavior from the subsystem API first
TutorialPhaseCampaignBehavior tutorialPhaseCampaignBehavior = ...;
tutorialPhaseCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of TutorialPhaseCampaignBehavior from the subsystem API first
TutorialPhaseCampaignBehavior tutorialPhaseCampaignBehavior = ...;
tutorialPhaseCampaignBehavior.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TutorialPhaseCampaignBehavior tutorialPhaseCampaignBehavior = ...;
tutorialPhaseCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)