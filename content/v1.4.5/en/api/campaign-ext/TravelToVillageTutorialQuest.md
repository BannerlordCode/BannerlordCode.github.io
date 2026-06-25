---
title: "TravelToVillageTutorialQuest"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TravelToVillageTutorialQuest`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TravelToVillageTutorialQuest

**Namespace:** StoryMode.Quests.TutorialPhase
**Module:** StoryMode.Quests
**Type:** `public class TravelToVillageTutorialQuest : StoryModeQuestBase`
**Base:** `StoryModeQuestBase`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.Quests.TutorialPhase/TravelToVillageTutorialQuest.cs`

## Overview

`TravelToVillageTutorialQuest` lives in `StoryMode.Quests.TutorialPhase` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.TutorialPhase` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## Usage Example

```csharp
var value = new TravelToVillageTutorialQuest();
```

## See Also

- [Complete Class Catalog](../catalog)