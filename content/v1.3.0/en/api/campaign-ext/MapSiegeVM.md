---
title: "MapSiegeVM"
description: "Auto-generated class reference for MapSiegeVM."
---
# MapSiegeVM

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapSiegeVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/MapSiege/MapSiegeVM.cs`

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

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MapSiegeVM from the subsystem API first
MapSiegeVM mapSiegeVM = ...;
mapSiegeVM.RefreshValues();
```

### OnSelectionFromScene
`public void OnSelectionFromScene(MatrixFrame frameOfEngine)`

**Purpose:** Invoked when the `selection from scene` event is raised.

```csharp
// Obtain an instance of MapSiegeVM from the subsystem API first
MapSiegeVM mapSiegeVM = ...;
mapSiegeVM.OnSelectionFromScene(frameOfEngine);
```

### Update
`public void Update(float mapCameraDistanceValue)`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Obtain an instance of MapSiegeVM from the subsystem API first
MapSiegeVM mapSiegeVM = ...;
mapSiegeVM.Update(0);
```

### Compare
`public int Compare(MapSiegePOIVM x, MapSiegePOIVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of MapSiegeVM from the subsystem API first
MapSiegeVM mapSiegeVM = ...;
var result = mapSiegeVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapSiegeVM mapSiegeVM = ...;
mapSiegeVM.RefreshValues();
```

## See Also

- [Area Index](../)