---
title: "DestroyRaidersConspiracyQuest"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DestroyRaidersConspiracyQuest`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DestroyRaidersConspiracyQuest

**Namespace:** StoryMode.Quests.SecondPhase.ConspiracyQuests
**Module:** StoryMode.Quests
**Type:** `public class DestroyRaidersConspiracyQuest : ConspiracyQuestBase`
**Base:** `ConspiracyQuestBase`
**File:** `StoryMode/Quests/SecondPhase/ConspiracyQuests/DestroyRaidersConspiracyQuest.cs`

## Overview

`DestroyRaidersConspiracyQuest` lives in `StoryMode.Quests.SecondPhase.ConspiracyQuests` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.SecondPhase.ConspiracyQuests` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |
| `ConspiracyStrengthDecreaseAmount` | `public override float ConspiracyStrengthDecreaseAmount { get; }` |
| `StartLog` | `public override TextObject StartLog { get; }` |
| `StartMessageLogFromMentor` | `public override TextObject StartMessageLogFromMentor { get; }` |
| `SideNotificationText` | `public override TextObject SideNotificationText { get; }` |

## Usage Example

```csharp
var value = new DestroyRaidersConspiracyQuest();
```

## See Also

- [Complete Class Catalog](../catalog)