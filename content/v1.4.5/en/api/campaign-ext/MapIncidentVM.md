---
title: "MapIncidentVM"
description: "Auto-generated class reference for MapIncidentVM."
---
# MapIncidentVM

**Namespace:** SandBox.ViewModelCollection.Map.Incidents
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapIncidentVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Map.Incidents/MapIncidentVM.cs`

## Overview

`MapIncidentVM` lives in `SandBox.ViewModelCollection.Map.Incidents` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Map.Incidents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CanConfirm` | `public bool CanConfirm { get; set; }` |
| `HasFocusedOption` | `public bool HasFocusedOption { get; set; }` |
| `HasSelectedOption` | `public bool HasSelectedOption { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `ConfirmText` | `public string ConfirmText { get; set; }` |
| `IncidentType` | `public string IncidentType { get; set; }` |
| `ActiveHint` | `public string ActiveHint { get; set; }` |
| `ConfirmHint` | `public HintViewModel ConfirmHint { get; set; }` |
| `FocusedOption` | `public MapIncidentOptionVM FocusedOption { get; set; }` |
| `SelectedOption` | `public MapIncidentOptionVM SelectedOption { get; set; }` |
| `Options` | `public MBBindingList<MapIncidentOptionVM> Options { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MapIncidentVM from the subsystem API first
MapIncidentVM mapIncidentVM = ...;
mapIncidentVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MapIncidentVM from the subsystem API first
MapIncidentVM mapIncidentVM = ...;
mapIncidentVM.OnFinalize();
```

### ExecuteConfirm
`public void ExecuteConfirm()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with confirm.

```csharp
// Obtain an instance of MapIncidentVM from the subsystem API first
MapIncidentVM mapIncidentVM = ...;
mapIncidentVM.ExecuteConfirm();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of MapIncidentVM from the subsystem API first
MapIncidentVM mapIncidentVM = ...;
mapIncidentVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapIncidentVM mapIncidentVM = ...;
mapIncidentVM.RefreshValues();
```

## See Also

- [Area Index](../)