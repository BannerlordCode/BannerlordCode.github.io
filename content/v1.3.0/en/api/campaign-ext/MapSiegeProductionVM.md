---
title: "MapSiegeProductionVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapSiegeProductionVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapSiegeProductionVM

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapSiegeProductionVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/MapSiege/MapSiegeProductionVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

### OnMachineSelection
`public void OnMachineSelection(MapSiegePOIVM poi)`

**Purpose:** Called when the `machine selection` event is raised.

### ExecuteDisable
`public void ExecuteDisable()`

**Purpose:** Executes the `disable` operation or workflow.

## Usage Example

```csharp
var value = new MapSiegeProductionVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)