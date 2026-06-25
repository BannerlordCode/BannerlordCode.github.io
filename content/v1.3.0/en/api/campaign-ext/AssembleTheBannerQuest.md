---
title: "AssembleTheBannerQuest"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AssembleTheBannerQuest`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Called when the `failed` event is raised.

### OnCanceled
`public override void OnCanceled()`

**Purpose:** Called when the `canceled` event is raised.

## Usage Example

```csharp
var value = new AssembleTheBannerQuest();
value.OnFailed();
```

## See Also

- [Complete Class Catalog](../catalog)