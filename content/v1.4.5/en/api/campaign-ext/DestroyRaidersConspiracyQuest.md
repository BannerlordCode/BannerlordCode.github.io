---
title: "DestroyRaidersConspiracyQuest"
description: "Auto-generated class reference for DestroyRaidersConspiracyQuest."
---
# DestroyRaidersConspiracyQuest

**Namespace:** StoryMode.Quests.SecondPhase.ConspiracyQuests
**Module:** StoryMode.Quests
**Type:** `public class DestroyRaidersConspiracyQuest : ConspiracyQuestBase`
**Base:** `ConspiracyQuestBase`
**File:** `Modules.StoryMode/StoryMode/StoryMode.Quests.SecondPhase.ConspiracyQuests/DestroyRaidersConspiracyQuest.cs`

## Overview

`DestroyRaidersConspiracyQuest` lives in `StoryMode.Quests.SecondPhase.ConspiracyQuests` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.SecondPhase.ConspiracyQuests` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StartLog` | `public override TextObject StartLog { get; }` |
| `StartMessageLogFromMentor` | `public override TextObject StartMessageLogFromMentor { get; }` |
| `SideNotificationText` | `public override TextObject SideNotificationText { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DestroyRaidersConspiracyQuest instance = ...;
```

## See Also

- [Area Index](../)