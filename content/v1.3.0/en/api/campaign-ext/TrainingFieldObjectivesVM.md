---
title: "TrainingFieldObjectivesVM"
description: "Auto-generated class reference for TrainingFieldObjectivesVM."
---
# TrainingFieldObjectivesVM

**Namespace:** StoryMode.ViewModelCollection.Missions
**Module:** StoryMode.ViewModelCollection
**Type:** `public class TrainingFieldObjectivesVM : ViewModel`
**Base:** `ViewModel`
**File:** `StoryMode.ViewModelCollection/Missions/TrainingFieldObjectivesVM.cs`

## Overview

`TrainingFieldObjectivesVM` lives in `StoryMode.ViewModelCollection.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.ViewModelCollection.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ObjectiveItems` | `public MBBindingList<TrainingFieldObjectiveItemVM> ObjectiveItems { get; set; }` |
| `CurrentObjectiveText` | `public string CurrentObjectiveText { get; set; }` |
| `TimerText` | `public string TimerText { get; set; }` |
| `LeaveAnyTimeText` | `public string LeaveAnyTimeText { get; set; }` |
| `CurrentMouseObjective` | `public int CurrentMouseObjective { get; set; }` |
| `RightStickAbbreviatedText` | `public string RightStickAbbreviatedText { get; set; }` |
| `IsGamepadActive` | `public bool IsGamepadActive { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of TrainingFieldObjectivesVM from the subsystem API first
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.RefreshValues();
```

### UpdateObjectivesWith
`public void UpdateObjectivesWith(List<TrainingFieldMissionController.TutorialObjective> objectives)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of objectives with.

```csharp
// Obtain an instance of TrainingFieldObjectivesVM from the subsystem API first
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.UpdateObjectivesWith(objectives);
```

### UpdateCurrentObjectiveText
`public void UpdateCurrentObjectiveText(TextObject currentObjectiveText)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of current objective text.

```csharp
// Obtain an instance of TrainingFieldObjectivesVM from the subsystem API first
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.UpdateCurrentObjectiveText(currentObjectiveText);
```

### UpdateCurrentMouseObjective
`public void UpdateCurrentMouseObjective(TrainingFieldMissionController.MouseObjectives currentMouseObjective)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of current mouse objective.

```csharp
// Obtain an instance of TrainingFieldObjectivesVM from the subsystem API first
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.UpdateCurrentMouseObjective(currentMouseObjective);
```

### UpdateTimerText
`public void UpdateTimerText(string timerText)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of timer text.

```csharp
// Obtain an instance of TrainingFieldObjectivesVM from the subsystem API first
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.UpdateTimerText("example");
```

### UpdateIsGamepadActive
`public void UpdateIsGamepadActive()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of is gamepad active.

```csharp
// Obtain an instance of TrainingFieldObjectivesVM from the subsystem API first
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.UpdateIsGamepadActive();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.RefreshValues();
```

## See Also

- [Area Index](../)