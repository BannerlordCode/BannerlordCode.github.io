---
title: "VillagersInNeed"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillagersInNeed`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VillagersInNeed

**Namespace:** StoryMode.Quests.TutorialPhase
**Module:** StoryMode.Quests
**Type:** `public class VillagersInNeed : StoryModeQuestBase`
**Base:** `StoryModeQuestBase`
**File:** `StoryMode/Quests/TutorialPhase/VillagersInNeed.cs`

## Overview

`VillagersInNeed` lives in `StoryMode.Quests.TutorialPhase` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.TutorialPhase` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |
| `Headman` | `public CharacterObject Headman { get; }` |

## Key Methods

### OnRescueMissionFailed
`public void OnRescueMissionFailed()`

**Purpose:** Called when the `rescue mission failed` event is raised.

### OnHeadmanRescued
`public void OnHeadmanRescued()`

**Purpose:** Called when the `headman rescued` event is raised.

## Usage Example

```csharp
var value = new VillagersInNeed();
value.OnRescueMissionFailed();
```

## See Also

- [Complete Class Catalog](../catalog)