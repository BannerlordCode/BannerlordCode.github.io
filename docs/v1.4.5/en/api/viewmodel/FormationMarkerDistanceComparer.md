<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormationMarkerDistanceComparer`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FormationMarkerDistanceComparer

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationMarkerDistanceComparer : IComparer<MissionFormationMarkerTargetVM>`
**Base:** `IComparer<MissionFormationMarkerTargetVM>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker/MissionFormationMarkerVM.cs`

## Overview

`FormationMarkerDistanceComparer` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(MissionFormationMarkerTargetVM x, MissionFormationMarkerTargetVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new FormationMarkerDistanceComparer();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)