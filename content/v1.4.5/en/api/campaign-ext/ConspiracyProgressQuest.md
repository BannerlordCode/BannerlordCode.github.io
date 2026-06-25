---
title: "ConspiracyProgressQuest"
description: "Auto-generated class reference for ConspiracyProgressQuest."
---
# ConspiracyProgressQuest

**Namespace:** StoryMode.Quests.SecondPhase
**Module:** StoryMode.Quests
**Type:** `public class ConspiracyProgressQuest : StoryModeQuestBase`
**Base:** `StoryModeQuestBase`
**File:** `Modules.StoryMode/StoryMode/StoryMode.Quests.SecondPhase/ConspiracyProgressQuest.cs`

## Overview

`ConspiracyProgressQuest` lives in `StoryMode.Quests.SecondPhase` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.SecondPhase` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ConspiracyProgressQuest instance = ...;
```

## See Also

- [Area Index](../)