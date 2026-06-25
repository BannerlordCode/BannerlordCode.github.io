---
title: "StoryModeViewCreator"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeViewCreator`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeViewCreator

**Namespace:** StoryMode.View
**Module:** StoryMode.View
**Type:** `public static class StoryModeViewCreator`
**Base:** none
**File:** `StoryMode.View/StoryModeViewCreator.cs`

## Overview

`StoryModeViewCreator` lives in `StoryMode.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateTrainingFieldObjectiveView
`public static MissionView CreateTrainingFieldObjectiveView(Mission mission)`

**Purpose:** Creates a new `training field objective view` instance or object.

## Usage Example

```csharp
StoryModeViewCreator.CreateTrainingFieldObjectiveView(mission);
```

## See Also

- [Complete Class Catalog](../catalog)