---
title: "MapIncidentOptionVM"
description: "Auto-generated class reference for MapIncidentOptionVM."
---
# MapIncidentOptionVM

**Namespace:** SandBox.ViewModelCollection.Map.Incidents
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapIncidentOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Map/Incidents/MapIncidentOptionVM.cs`

## Overview

`MapIncidentOptionVM` lives in `SandBox.ViewModelCollection.Map.Incidents` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Map.Incidents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `Hint` | `public string Hint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MapIncidentOptionVM from the subsystem API first
MapIncidentOptionVM mapIncidentOptionVM = ...;
mapIncidentOptionVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MapIncidentOptionVM from the subsystem API first
MapIncidentOptionVM mapIncidentOptionVM = ...;
mapIncidentOptionVM.OnFinalize();
```

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with select.

```csharp
// Obtain an instance of MapIncidentOptionVM from the subsystem API first
MapIncidentOptionVM mapIncidentOptionVM = ...;
mapIncidentOptionVM.ExecuteSelect();
```

### ExecuteFocus
`public void ExecuteFocus()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with focus.

```csharp
// Obtain an instance of MapIncidentOptionVM from the subsystem API first
MapIncidentOptionVM mapIncidentOptionVM = ...;
mapIncidentOptionVM.ExecuteFocus();
```

### ExecuteUnfocus
`public void ExecuteUnfocus()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with unfocus.

```csharp
// Obtain an instance of MapIncidentOptionVM from the subsystem API first
MapIncidentOptionVM mapIncidentOptionVM = ...;
mapIncidentOptionVM.ExecuteUnfocus();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapIncidentOptionVM mapIncidentOptionVM = ...;
mapIncidentOptionVM.RefreshValues();
```

## See Also

- [Area Index](../)