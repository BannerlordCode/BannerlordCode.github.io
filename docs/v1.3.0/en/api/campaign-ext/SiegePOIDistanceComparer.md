<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegePOIDistanceComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SiegePOIDistanceComparer

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public class SiegePOIDistanceComparer : IComparer<MapSiegePOIVM>`
**Base:** `IComparer<MapSiegePOIVM>`
**Area:** campaign-ext

## Overview

`SiegePOIDistanceComparer` lives in `SandBox.ViewModelCollection.MapSiege`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnSelectionFromScene
`public void OnSelectionFromScene(MatrixFrame frameOfEngine)`

**Purpose:** Called when the `selection from scene` event is raised.

### Update
`public void Update(float mapCameraDistanceValue)`

**Purpose:** Updates the state or data of `update`.

### Compare
`public int Compare(MapSiegePOIVM x, MapSiegePOIVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
// First obtain a SiegePOIDistanceComparer instance from game state, then call one of its public methods
var value = new SiegePOIDistanceComparer();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
