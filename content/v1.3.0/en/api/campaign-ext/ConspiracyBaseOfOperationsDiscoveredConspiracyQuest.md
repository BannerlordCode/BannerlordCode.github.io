---
title: "ConspiracyBaseOfOperationsDiscoveredConspiracyQuest"
description: "Auto-generated class reference for ConspiracyBaseOfOperationsDiscoveredConspiracyQuest."
---
# ConspiracyBaseOfOperationsDiscoveredConspiracyQuest

**Namespace:** StoryMode.Quests.SecondPhase.ConspiracyQuests
**Module:** StoryMode.Quests
**Type:** `public class ConspiracyBaseOfOperationsDiscoveredConspiracyQuest : ConspiracyQuestBase`
**Base:** `ConspiracyQuestBase`
**File:** `StoryMode/Quests/SecondPhase/ConspiracyQuests/ConspiracyBaseOfOperationsDiscoveredConspiracyQuest.cs`

## Overview

`ConspiracyBaseOfOperationsDiscoveredConspiracyQuest` lives in `StoryMode.Quests.SecondPhase.ConspiracyQuests` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.SecondPhase.ConspiracyQuests` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |
| `SideNotificationText` | `public override TextObject SideNotificationText { get; }` |
| `StartMessageLogFromMentor` | `public override TextObject StartMessageLogFromMentor { get; }` |
| `StartLog` | `public override TextObject StartLog { get; }` |
| `ConspiracyStrengthDecreaseAmount` | `public override float ConspiracyStrengthDecreaseAmount { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ConspiracyBaseOfOperationsDiscoveredConspiracyQuest instance = ...;
```

## See Also

- [Area Index](../)