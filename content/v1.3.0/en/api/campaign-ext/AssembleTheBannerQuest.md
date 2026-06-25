---
title: "AssembleTheBannerQuest"
description: "Auto-generated class reference for AssembleTheBannerQuest."
---
# AssembleTheBannerQuest

**Namespace:** StoryMode.Quests.FirstPhase
**Module:** StoryMode.Quests
**Type:** `public class AssembleTheBannerQuest : StoryModeQuestBase`
**Base:** `StoryModeQuestBase`
**File:** `StoryMode/Quests/FirstPhase/AssembleTheBannerQuest.cs`

## Overview

`AssembleTheBannerQuest` lives in `StoryMode.Quests.FirstPhase` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.FirstPhase` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### OnFailed
`public override void OnFailed()`

**Purpose:** **Purpose:** Invoked when the failed event is raised.

```csharp
// Obtain an instance of AssembleTheBannerQuest from the subsystem API first
AssembleTheBannerQuest assembleTheBannerQuest = ...;
assembleTheBannerQuest.OnFailed();
```

### OnCanceled
`public override void OnCanceled()`

**Purpose:** **Purpose:** Invoked when the canceled event is raised.

```csharp
// Obtain an instance of AssembleTheBannerQuest from the subsystem API first
AssembleTheBannerQuest assembleTheBannerQuest = ...;
assembleTheBannerQuest.OnCanceled();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AssembleTheBannerQuest assembleTheBannerQuest = ...;
assembleTheBannerQuest.OnFailed();
```

## See Also

- [Area Index](../)