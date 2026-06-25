---
title: "TalkToTheHeadmanTutorialQuest"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TalkToTheHeadmanTutorialQuest`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TalkToTheHeadmanTutorialQuest

**Namespace:** StoryMode.Quests.TutorialPhase
**Module:** StoryMode.Quests
**Type:** `public class TalkToTheHeadmanTutorialQuest : StoryModeQuestBase`
**Base:** `StoryModeQuestBase`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.Quests.TutorialPhase/TalkToTheHeadmanTutorialQuest.cs`

## Overview

`TalkToTheHeadmanTutorialQuest` lives in `StoryMode.Quests.TutorialPhase` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.TutorialPhase` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## Usage Example

```csharp
var value = new TalkToTheHeadmanTutorialQuest();
```

## See Also

- [Complete Class Catalog](../catalog)