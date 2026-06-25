---
title: "TrainingFieldEncounter"
description: "Auto-generated class reference for TrainingFieldEncounter."
---
# TrainingFieldEncounter

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class TrainingFieldEncounter : LocationEncounter`
**Base:** `LocationEncounter`
**File:** `Modules.StoryMode/StoryMode/StoryMode/TrainingFieldEncounter.cs`

## Overview

`TrainingFieldEncounter` lives in `StoryMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateAndOpenMissionController
`public override IMission CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)`

**Purpose:** Constructs a new `and open mission controller` entity and returns it to the caller.

```csharp
// Obtain an instance of TrainingFieldEncounter from the subsystem API first
TrainingFieldEncounter trainingFieldEncounter = ...;
var result = trainingFieldEncounter.CreateAndOpenMissionController(nextLocation, null, null, "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TrainingFieldEncounter trainingFieldEncounter = ...;
trainingFieldEncounter.CreateAndOpenMissionController(nextLocation, null, null, "example");
```

## See Also

- [Area Index](../)