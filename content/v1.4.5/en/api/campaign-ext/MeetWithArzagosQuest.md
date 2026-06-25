---
title: "MeetWithArzagosQuest"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MeetWithArzagosQuest`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MeetWithArzagosQuest

**Namespace:** StoryMode.Quests.FirstPhase
**Module:** StoryMode.Quests
**Type:** `public class MeetWithArzagosQuest : StoryModeQuestBase`
**Base:** `StoryModeQuestBase`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.Quests.FirstPhase/MeetWithArzagosQuest.cs`

## Overview

`MeetWithArzagosQuest` lives in `StoryMode.Quests.FirstPhase` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.FirstPhase` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## Usage Example

```csharp
var value = new MeetWithArzagosQuest();
```

## See Also

- [Complete Class Catalog](../catalog)