---
title: "VillagersInNeed"
description: "Auto-generated class reference for VillagersInNeed."
---
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

**Purpose:** Invoked when the rescue mission failed event is raised.

```csharp
// Obtain an instance of VillagersInNeed from the subsystem API first
VillagersInNeed villagersInNeed = ...;
villagersInNeed.OnRescueMissionFailed();
```

### OnHeadmanRescued
`public void OnHeadmanRescued()`

**Purpose:** Invoked when the headman rescued event is raised.

```csharp
// Obtain an instance of VillagersInNeed from the subsystem API first
VillagersInNeed villagersInNeed = ...;
villagersInNeed.OnHeadmanRescued();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VillagersInNeed villagersInNeed = ...;
villagersInNeed.OnRescueMissionFailed();
```

## See Also

- [Area Index](../)