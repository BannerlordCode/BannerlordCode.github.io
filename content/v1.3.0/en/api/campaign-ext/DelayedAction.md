---
title: "DelayedAction"
description: "Auto-generated class reference for DelayedAction."
---
# DelayedAction

**Namespace:** StoryMode.Missions
**Module:** StoryMode.Missions
**Type:** `public struct DelayedAction`
**Base:** none
**File:** `StoryMode/Missions/TrainingFieldMissionController.cs`

## Overview

`DelayedAction` lives in `StoryMode.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Update
`public bool Update()`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of DelayedAction from the subsystem API first
DelayedAction delayedAction = ...;
var result = delayedAction.Update();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DelayedAction delayedAction = ...;
delayedAction.Update();
```

## See Also

- [Area Index](../)