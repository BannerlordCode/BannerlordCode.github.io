---
title: "TrainingFieldObjectiveItemVM"
description: "Auto-generated class reference for TrainingFieldObjectiveItemVM."
---
# TrainingFieldObjectiveItemVM

**Namespace:** StoryMode.ViewModelCollection.Missions
**Module:** StoryMode.ViewModelCollection
**Type:** `public class TrainingFieldObjectiveItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.StoryMode/StoryMode.ViewModelCollection/StoryMode.ViewModelCollection.Missions/TrainingFieldObjectiveItemVM.cs`

## Overview

`TrainingFieldObjectiveItemVM` lives in `StoryMode.ViewModelCollection.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.ViewModelCollection.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ObjectiveText` | `public string ObjectiveText { get; set; }` |
| `IsCompleted` | `public bool IsCompleted { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsBackgroundActive` | `public bool IsBackgroundActive { get; set; }` |
| `ObjectiveItems` | `public MBBindingList<TrainingFieldObjectiveItemVM> ObjectiveItems { get; set; }` |
| `ObjectiveKeys` | `public MBBindingList<TrainingObjectiveKeyVM> ObjectiveKeys { get; set; }` |
| `ArrowState` | `public string ArrowState { get; set; }` |

## Key Methods

### UpdateObjective
`public void UpdateObjective(TrainingFieldMissionController.MouseObjectives currentMouseObjective, TrainingFieldMissionController.ObjectivePerformingType currentObjectivePerformingType)`

**Purpose:** Recalculates and stores the latest representation of `objective`.

```csharp
// Obtain an instance of TrainingFieldObjectiveItemVM from the subsystem API first
TrainingFieldObjectiveItemVM trainingFieldObjectiveItemVM = ...;
trainingFieldObjectiveItemVM.UpdateObjective(currentMouseObjective, currentObjectivePerformingType);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of TrainingFieldObjectiveItemVM from the subsystem API first
TrainingFieldObjectiveItemVM trainingFieldObjectiveItemVM = ...;
trainingFieldObjectiveItemVM.RefreshValues();
```

### CreateFromObjective
`public static TrainingFieldObjectiveItemVM CreateFromObjective(TrainingFieldMissionController.TutorialObjective objective)`

**Purpose:** Constructs a new `from objective` entity and returns it to the caller.

```csharp
// Static call; no instance required
TrainingFieldObjectiveItemVM.CreateFromObjective(objective);
```

### CreateDummy
`public static TrainingFieldObjectiveItemVM CreateDummy()`

**Purpose:** Constructs a new `dummy` entity and returns it to the caller.

```csharp
// Static call; no instance required
TrainingFieldObjectiveItemVM.CreateDummy();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TrainingFieldObjectiveItemVM trainingFieldObjectiveItemVM = ...;
trainingFieldObjectiveItemVM.UpdateObjective(currentMouseObjective, currentObjectivePerformingType);
```

## See Also

- [Area Index](../)