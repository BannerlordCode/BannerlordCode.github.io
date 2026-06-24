<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapSiegeVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapSiegeVM

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapSiegeVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.MapSiege/MapSiegeVM.cs`

## Overview

`MapSiegeVM` lives in `SandBox.ViewModelCollection.MapSiege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.MapSiege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PreparationProgress` | `public float PreparationProgress { get; set; }` |
| `IsPreparationsCompleted` | `public bool IsPreparationsCompleted { get; set; }` |
| `PreparationTitleText` | `public string PreparationTitleText { get; set; }` |
| `ProductionController` | `public MapSiegeProductionVM ProductionController { get; set; }` |
| `PointsOfInterest` | `public MBBindingList<MapSiegePOIVM> PointsOfInterest { get; set; }` |

## Key Methods

### Compare
`public int Compare(MapSiegePOIVM x, MapSiegePOIVM y)`

**Purpose:** Handles logic related to `compare`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnSelectionFromScene
`public void OnSelectionFromScene(MatrixFrame frameOfEngine)`

**Purpose:** Called when the `selection from scene` event is raised.

### Update
`public void Update(float mapCameraDistanceValue)`

**Purpose:** Updates the state or data of `update`.

## Usage Example

```csharp
var value = new MapSiegeVM();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)