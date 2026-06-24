<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionFormationMarkerTargetVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionFormationMarkerTargetVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFormationMarkerTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker/MissionFormationMarkerTargetVM.cs`

## Overview

`MissionFormationMarkerTargetVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Formation` | `public Formation Formation { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsCenterOfFocus` | `public bool IsCenterOfFocus { get; set; }` |
| `IsFormationTargetRelevant` | `public bool IsFormationTargetRelevant { get; set; }` |
| `IsTargetingAFormation` | `public bool IsTargetingAFormation { get; set; }` |
| `ShowDistanceTexts` | `public bool ShowDistanceTexts { get; set; }` |
| `FormationType` | `public string FormationType { get; set; }` |
| `TeamType` | `public int TeamType { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `Distance` | `public float Distance { get; set; }` |
| `DistanceText` | `public string DistanceText { get; set; }` |
| `Size` | `public int Size { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |

## Key Methods

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### SetTargetedState
`public void SetTargetedState(bool isFocused, bool isTargetingAFormation)`

**Purpose:** Sets the value or state of `targeted state`.

### GetFormationType
`public static string GetFormationType(FormationClass formationType)`

**Purpose:** Gets the current value of `formation type`.

## Usage Example

```csharp
var value = new MissionFormationMarkerTargetVM();
value.Refresh();
```

## See Also

- [Complete Class Catalog](../catalog)