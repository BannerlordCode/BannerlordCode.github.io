<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionObjectiveMarkerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionObjectiveMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionObjectiveMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective/MissionObjectiveMarkerVM.cs`

## Overview

`MissionObjectiveMarkerVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Distance` | `public int Distance { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `ObjectiveTypeId` | `public string ObjectiveTypeId { get; set; }` |
| `ObjectiveName` | `public string ObjectiveName { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### UpdateActiveState
`public void UpdateActiveState()`

**Purpose:** Updates the state or data of `active state`.

### UpdatePosition
`public void UpdatePosition(Camera missionCamera)`

**Purpose:** Updates the state or data of `position`.

## Usage Example

```csharp
var value = new MissionObjectiveMarkerVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)