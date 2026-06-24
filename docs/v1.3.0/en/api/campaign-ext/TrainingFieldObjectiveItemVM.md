<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TrainingFieldObjectiveItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TrainingFieldObjectiveItemVM

**Namespace:** StoryMode.ViewModelCollection.Missions
**Module:** StoryMode.ViewModelCollection
**Type:** `public class TrainingFieldObjectiveItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `StoryMode.ViewModelCollection/Missions/TrainingFieldObjectiveItemVM.cs`

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
| `ObjectiveItems` | `public MBBindingList<TrainingFieldObjectiveItemVM> ObjectiveItems { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### CreateFromObjective
`public static TrainingFieldObjectiveItemVM CreateFromObjective(TrainingFieldMissionController.TutorialObjective objective)`

**Purpose:** Creates a new `from objective` instance or object.

## Usage Example

```csharp
var value = new TrainingFieldObjectiveItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)