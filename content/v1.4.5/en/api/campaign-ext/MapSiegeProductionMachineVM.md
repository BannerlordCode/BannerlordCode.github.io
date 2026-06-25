---
title: "MapSiegeProductionMachineVM"
description: "Auto-generated class reference for MapSiegeProductionMachineVM."
---
# MapSiegeProductionMachineVM

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapSiegeProductionMachineVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.MapSiege/MapSiegeProductionMachineVM.cs`

## Overview

`MapSiegeProductionMachineVM` lives in `SandBox.ViewModelCollection.MapSiege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.MapSiege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Engine` | `public SiegeEngineType Engine { get; set; }` |
| `MachineType` | `public int MachineType { get; set; }` |
| `MachineID` | `public string MachineID { get; set; }` |
| `NumberOfMachines` | `public int NumberOfMachines { get; set; }` |
| `ActionText` | `public string ActionText { get; set; }` |
| `IsReserveOption` | `public bool IsReserveOption { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MapSiegeProductionMachineVM from the subsystem API first
MapSiegeProductionMachineVM mapSiegeProductionMachineVM = ...;
mapSiegeProductionMachineVM.RefreshValues();
```

### OnSelection
`public void OnSelection()`

**Purpose:** Invoked when the selection event is raised.

```csharp
// Obtain an instance of MapSiegeProductionMachineVM from the subsystem API first
MapSiegeProductionMachineVM mapSiegeProductionMachineVM = ...;
mapSiegeProductionMachineVM.OnSelection();
```

### ExecuteShowTooltip
`public void ExecuteShowTooltip()`

**Purpose:** Runs the operation or workflow associated with show tooltip.

```csharp
// Obtain an instance of MapSiegeProductionMachineVM from the subsystem API first
MapSiegeProductionMachineVM mapSiegeProductionMachineVM = ...;
mapSiegeProductionMachineVM.ExecuteShowTooltip();
```

### ExecuteHideTooltip
`public void ExecuteHideTooltip()`

**Purpose:** Runs the operation or workflow associated with hide tooltip.

```csharp
// Obtain an instance of MapSiegeProductionMachineVM from the subsystem API first
MapSiegeProductionMachineVM mapSiegeProductionMachineVM = ...;
mapSiegeProductionMachineVM.ExecuteHideTooltip();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapSiegeProductionMachineVM mapSiegeProductionMachineVM = ...;
mapSiegeProductionMachineVM.RefreshValues();
```

## See Also

- [Area Index](../)