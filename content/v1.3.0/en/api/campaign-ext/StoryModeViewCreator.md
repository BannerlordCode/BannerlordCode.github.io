---
title: "StoryModeViewCreator"
description: "Auto-generated class reference for StoryModeViewCreator."
---
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

**Purpose:** Constructs a new `training field objective view` entity and returns it to the caller.

```csharp
// Static call; no instance required
StoryModeViewCreator.CreateTrainingFieldObjectiveView(mission);
```

## Usage Example

```csharp
StoryModeViewCreator.CreateTrainingFieldObjectiveView(mission);
```

## See Also

- [Area Index](../)