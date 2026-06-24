<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TrainingFieldObjectivesVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TrainingFieldObjectivesVM

**Namespace:** StoryMode.ViewModelCollection.Missions
**Module:** StoryMode.ViewModelCollection
**Type:** `public class TrainingFieldObjectivesVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode.ViewModelCollection/StoryMode.ViewModelCollection.Missions/TrainingFieldObjectivesVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### UpdateObjectivesWith
`public void UpdateObjectivesWith(List<TrainingFieldMissionController.TutorialObjective> objectives)`

**Purpose:** Updates the state or data of `objectives with`.

### UpdateCurrentObjectiveExplanationText
`public void UpdateCurrentObjectiveExplanationText(TextObject currentObjectiveText)`

**Purpose:** Updates the state or data of `current objective explanation text`.

### UpdateCurrentMouseObjective
`public void UpdateCurrentMouseObjective(TrainingFieldMissionController.MouseObjectives currentMouseObjective, TrainingFieldMissionController.ObjectivePerformingType currentObjectivePerformingType)`

**Purpose:** Updates the state or data of `current mouse objective`.

### UpdateTimerText
`public void UpdateTimerText(string timerText)`

**Purpose:** Updates the state or data of `timer text`.

## Usage Example

```csharp
var value = new TrainingFieldObjectivesVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)