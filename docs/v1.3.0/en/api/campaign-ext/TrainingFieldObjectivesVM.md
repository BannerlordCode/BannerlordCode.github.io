<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TrainingFieldObjectivesVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Refreshes the display or cache of `values`.

### UpdateObjectivesWith
`public void UpdateObjectivesWith(List<TrainingFieldMissionController.TutorialObjective> objectives)`

**Purpose:** Updates the state or data of `objectives with`.

### UpdateCurrentObjectiveText
`public void UpdateCurrentObjectiveText(TextObject currentObjectiveText)`

**Purpose:** Updates the state or data of `current objective text`.

### UpdateCurrentMouseObjective
`public void UpdateCurrentMouseObjective(TrainingFieldMissionController.MouseObjectives currentMouseObjective)`

**Purpose:** Updates the state or data of `current mouse objective`.

### UpdateTimerText
`public void UpdateTimerText(string timerText)`

**Purpose:** Updates the state or data of `timer text`.

### UpdateIsGamepadActive
`public void UpdateIsGamepadActive()`

**Purpose:** Updates the state or data of `is gamepad active`.

## Usage Example

```csharp
var value = new TrainingFieldObjectivesVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)