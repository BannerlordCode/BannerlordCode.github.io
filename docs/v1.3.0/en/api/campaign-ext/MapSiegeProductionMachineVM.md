<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapSiegeProductionMachineVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapSiegeProductionMachineVM

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapSiegeProductionMachineVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/MapSiege/MapSiegeProductionMachineVM.cs`

## Overview

`MapSiegeProductionMachineVM` lives in `SandBox.ViewModelCollection.MapSiege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.MapSiege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Engine` | `public SiegeEngineType Engine { get; }` |
| `MachineType` | `public int MachineType { get; set; }` |
| `MachineID` | `public string MachineID { get; set; }` |
| `NumberOfMachines` | `public int NumberOfMachines { get; set; }` |
| `ActionText` | `public string ActionText { get; set; }` |
| `IsReserveOption` | `public bool IsReserveOption { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnSelection
`public void OnSelection()`

**Purpose:** Called when the `selection` event is raised.

### ExecuteShowTooltip
`public void ExecuteShowTooltip()`

**Purpose:** Executes the `show tooltip` operation or workflow.

### ExecuteHideTooltip
`public void ExecuteHideTooltip()`

**Purpose:** Executes the `hide tooltip` operation or workflow.

## Usage Example

```csharp
var value = new MapSiegeProductionMachineVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)