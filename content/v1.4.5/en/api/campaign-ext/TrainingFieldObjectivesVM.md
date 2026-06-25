---
title: "TrainingFieldObjectivesVM"
description: "Auto-generated class reference for TrainingFieldObjectivesVM."
---
# TrainingFieldObjectivesVM

**Namespace:** StoryMode.ViewModelCollection.Missions
**Module:** StoryMode.ViewModelCollection
**Type:** `public class TrainingFieldObjectivesVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.StoryMode/StoryMode.ViewModelCollection/StoryMode.ViewModelCollection.Missions/TrainingFieldObjectivesVM.cs`

## Overview

`TrainingFieldObjectivesVM` lives in `StoryMode.ViewModelCollection.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.ViewModelCollection.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LeaveAnyTimeText` | `public string LeaveAnyTimeText { get; set; }` |
| `CurrentObjectiveExplanationText` | `public string CurrentObjectiveExplanationText { get; set; }` |
| `TimerText` | `public string TimerText { get; set; }` |
| `ActiveObjective` | `public TrainingFieldObjectiveItemVM ActiveObjective { get; set; }` |
| `ObjectiveItems` | `public MBBindingList<TrainingFieldObjectiveItemVM> ObjectiveItems { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of TrainingFieldObjectivesVM from the subsystem API first
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.RefreshValues();
```

### UpdateObjectivesWith
`public void UpdateObjectivesWith(List<TrainingFieldMissionController.TutorialObjective> objectives)`

**Purpose:** Recalculates and stores the latest representation of objectives with.

```csharp
// Obtain an instance of TrainingFieldObjectivesVM from the subsystem API first
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.UpdateObjectivesWith(objectives);
```

### UpdateCurrentObjectiveExplanationText
`public void UpdateCurrentObjectiveExplanationText(TextObject currentObjectiveText)`

**Purpose:** Recalculates and stores the latest representation of current objective explanation text.

```csharp
// Obtain an instance of TrainingFieldObjectivesVM from the subsystem API first
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.UpdateCurrentObjectiveExplanationText(currentObjectiveText);
```

### UpdateCurrentMouseObjective
`public void UpdateCurrentMouseObjective(TrainingFieldMissionController.MouseObjectives currentMouseObjective, TrainingFieldMissionController.ObjectivePerformingType currentObjectivePerformingType)`

**Purpose:** Recalculates and stores the latest representation of current mouse objective.

```csharp
// Obtain an instance of TrainingFieldObjectivesVM from the subsystem API first
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.UpdateCurrentMouseObjective(currentMouseObjective, currentObjectivePerformingType);
```

### UpdateTimerText
`public void UpdateTimerText(string timerText)`

**Purpose:** Recalculates and stores the latest representation of timer text.

```csharp
// Obtain an instance of TrainingFieldObjectivesVM from the subsystem API first
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.UpdateTimerText("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.RefreshValues();
```

## See Also

- [Area Index](../)