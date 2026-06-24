<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionFormationMarkerVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionFormationMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFormationMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionFormationMarkerVM.cs`

## Overview

`MissionFormationMarkerVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsFormationTargetRelevant` | `public bool IsFormationTargetRelevant { get; set; }` |
| `ShowDistanceTexts` | `public bool ShowDistanceTexts { get; set; }` |
| `Targets` | `public MBBindingList<MissionFormationMarkerTargetVM> Targets { get; set; }` |

## Key Methods

### RefreshFormationMarkers
`public void RefreshFormationMarkers()`

**Purpose:** Refreshes the display or cache of `formation markers`.

### Compare
`public int Compare(MissionFormationMarkerTargetVM x, MissionFormationMarkerTargetVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new MissionFormationMarkerVM();
value.RefreshFormationMarkers();
```

## See Also

- [Complete Class Catalog](../catalog)