---
title: "MapSiegeProductionVM"
description: "Auto-generated class reference for MapSiegeProductionVM."
---
# MapSiegeProductionVM

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapSiegeProductionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.MapSiege/MapSiegeProductionVM.cs`

## Overview

`MapSiegeProductionVM` lives in `SandBox.ViewModelCollection.MapSiege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.MapSiege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LatestSelectedPOI` | `public MapSiegePOIVM LatestSelectedPOI { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `PossibleProductionMachines` | `public MBBindingList<MapSiegeProductionMachineVM> PossibleProductionMachines { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MapSiegeProductionVM from the subsystem API first
MapSiegeProductionVM mapSiegeProductionVM = ...;
mapSiegeProductionVM.RefreshValues();
```

### Update
`public void Update()`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Obtain an instance of MapSiegeProductionVM from the subsystem API first
MapSiegeProductionVM mapSiegeProductionVM = ...;
mapSiegeProductionVM.Update();
```

### OnMachineSelection
`public void OnMachineSelection(MapSiegePOIVM poi)`

**Purpose:** Invoked when the `machine selection` event is raised.

```csharp
// Obtain an instance of MapSiegeProductionVM from the subsystem API first
MapSiegeProductionVM mapSiegeProductionVM = ...;
mapSiegeProductionVM.OnMachineSelection(poi);
```

### ExecuteDisable
`public void ExecuteDisable()`

**Purpose:** Runs the operation or workflow associated with `disable`.

```csharp
// Obtain an instance of MapSiegeProductionVM from the subsystem API first
MapSiegeProductionVM mapSiegeProductionVM = ...;
mapSiegeProductionVM.ExecuteDisable();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapSiegeProductionVM mapSiegeProductionVM = ...;
mapSiegeProductionVM.RefreshValues();
```

## See Also

- [Area Index](../)