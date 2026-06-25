---
title: "TutorialObjective"
description: "Auto-generated class reference for TutorialObjective."
---
# TutorialObjective

**Namespace:** StoryMode.Missions
**Module:** StoryMode.Missions
**Type:** `public class TutorialObjective`
**Base:** none
**File:** `Modules.StoryMode/StoryMode/Storymode.Missions/TrainingFieldMissionController.cs`

## Overview

`TutorialObjective` lives in `StoryMode.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `IsFinished` | `public bool IsFinished { get; }` |
| `HasBackground` | `public bool HasBackground { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `SubTasks` | `public List<TutorialObjective> SubTasks { get; }` |
| `Score` | `public float Score { get; }` |

## Key Methods

### SetTextVariableOfName
`public void SetTextVariableOfName(string tag, int variable)`

**Purpose:** Assigns a new value to text variable of name and updates the object's internal state.

```csharp
// Obtain an instance of TutorialObjective from the subsystem API first
TutorialObjective tutorialObjective = ...;
tutorialObjective.SetTextVariableOfName("example", 0);
```

### GetNameString
`public string GetNameString()`

**Purpose:** Reads and returns the name string value held by the this instance.

```csharp
// Obtain an instance of TutorialObjective from the subsystem API first
TutorialObjective tutorialObjective = ...;
var result = tutorialObjective.GetNameString();
```

### SetActive
`public bool SetActive(bool isActive)`

**Purpose:** Assigns a new value to active and updates the object's internal state.

```csharp
// Obtain an instance of TutorialObjective from the subsystem API first
TutorialObjective tutorialObjective = ...;
var result = tutorialObjective.SetActive(false);
```

### FinishTask
`public bool FinishTask()`

**Purpose:** Concludes the task flow and performs any cleanup.

```csharp
// Obtain an instance of TutorialObjective from the subsystem API first
TutorialObjective tutorialObjective = ...;
var result = tutorialObjective.FinishTask();
```

### FinishSubTask
`public void FinishSubTask(string subTaskName, float score)`

**Purpose:** Concludes the sub task flow and performs any cleanup.

```csharp
// Obtain an instance of TutorialObjective from the subsystem API first
TutorialObjective tutorialObjective = ...;
tutorialObjective.FinishSubTask("example", 0);
```

### SetAllSubTasksInactive
`public bool SetAllSubTasksInactive()`

**Purpose:** Assigns a new value to all sub tasks inactive and updates the object's internal state.

```csharp
// Obtain an instance of TutorialObjective from the subsystem API first
TutorialObjective tutorialObjective = ...;
var result = tutorialObjective.SetAllSubTasksInactive();
```

### AddSubTask
`public void AddSubTask(TutorialObjective newSubTask)`

**Purpose:** Adds sub task to the current collection or state.

```csharp
// Obtain an instance of TutorialObjective from the subsystem API first
TutorialObjective tutorialObjective = ...;
tutorialObjective.AddSubTask(newSubTask);
```

### RestoreScoreFromSave
`public void RestoreScoreFromSave(float score)`

**Purpose:** Executes the RestoreScoreFromSave logic.

```csharp
// Obtain an instance of TutorialObjective from the subsystem API first
TutorialObjective tutorialObjective = ...;
tutorialObjective.RestoreScoreFromSave(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TutorialObjective tutorialObjective = ...;
tutorialObjective.SetTextVariableOfName("example", 0);
```

## See Also

- [Area Index](../)