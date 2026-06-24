<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionObjectiveMarkersVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionObjectiveMarkersVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionObjectiveMarkersVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkersVM.cs`

## Overview

`MissionObjectiveMarkersVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Targets` | `public MBBindingList<MissionObjectiveMarkerVM> Targets { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### UpdateObjective
`public void UpdateObjective(MissionObjective objective)`

**Purpose:** Updates the state or data of `objective`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### Compare
`public int Compare(MissionObjectiveMarkerVM x, MissionObjectiveMarkerVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new MissionObjectiveMarkersVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)