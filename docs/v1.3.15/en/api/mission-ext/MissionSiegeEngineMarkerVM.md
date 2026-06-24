<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSiegeEngineMarkerVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSiegeEngineMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeEngineMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerVM.cs`

## Overview

`MissionSiegeEngineMarkerVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Targets` | `public MBBindingList<MissionSiegeEngineMarkerTargetVM> Targets { get; set; }` |

## Key Methods

### InitializeWith
`public void InitializeWith(List<SiegeWeapon> siegeEngines)`

**Purpose:** Initializes the state, resources, or bindings for `with`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Compare
`public int Compare(MissionSiegeEngineMarkerTargetVM x, MissionSiegeEngineMarkerTargetVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new MissionSiegeEngineMarkerVM();
value.InitializeWith(siegeEngines);
```

## See Also

- [Complete Class Catalog](../catalog)