<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeEngineMarkerDistanceComparer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeEngineMarkerDistanceComparer

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeEngineMarkerDistanceComparer : IComparer<MissionSiegeEngineMarkerTargetVM>`
**Base:** `IComparer<MissionSiegeEngineMarkerTargetVM>`
**Area:** mission-ext

## Overview

`SiegeEngineMarkerDistanceComparer` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// First obtain a SiegeEngineMarkerDistanceComparer instance from game state, then call one of its public methods
var value = new SiegeEngineMarkerDistanceComparer();
value.InitializeWith(siegeEngines);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
