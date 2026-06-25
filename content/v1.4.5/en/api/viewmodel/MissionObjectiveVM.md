---
title: "MissionObjectiveVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionObjectiveVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionObjectiveVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionObjectiveVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective/MissionObjectiveVM.cs`

## Overview

`MissionObjectiveVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `ProgressText` | `public string ProgressText { get; set; }` |
| `ObjectiveGiverName` | `public string ObjectiveGiverName { get; set; }` |
| `HasObjectiveGiver` | `public bool HasObjectiveGiver { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `HasTitle` | `public bool HasTitle { get; set; }` |
| `HasDescription` | `public bool HasDescription { get; set; }` |
| `HasProgress` | `public bool HasProgress { get; set; }` |
| `CurrentProgress` | `public int CurrentProgress { get; set; }` |
| `RequiredProgress` | `public int RequiredProgress { get; set; }` |
| `ObjectiveGiverIdentifier` | `public CharacterImageIdentifierVM ObjectiveGiverIdentifier { get; set; }` |
| `Markers` | `public MissionObjectiveMarkersVM Markers { get; set; }` |

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

## Usage Example

```csharp
var value = new MissionObjectiveVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)