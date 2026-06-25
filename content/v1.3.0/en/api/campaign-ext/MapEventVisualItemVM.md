---
title: "MapEventVisualItemVM"
description: "Auto-generated class reference for MapEventVisualItemVM."
---
# MapEventVisualItemVM

**Namespace:** SandBox.ViewModelCollection.Map
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapEventVisualItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Map/MapEventVisualItemVM.cs`

## Overview

`MapEventVisualItemVM` lives in `SandBox.ViewModelCollection.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapEvent` | `public MapEvent MapEvent { get; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `EventType` | `public int EventType { get; set; }` |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap { get; set; }` |

## Key Methods

### UpdateProperties
`public void UpdateProperties()`

**Purpose:** Recalculates and stores the latest representation of properties.

```csharp
// Obtain an instance of MapEventVisualItemVM from the subsystem API first
MapEventVisualItemVM mapEventVisualItemVM = ...;
mapEventVisualItemVM.UpdateProperties();
```

### ParallelUpdatePosition
`public void ParallelUpdatePosition()`

**Purpose:** Executes the ParallelUpdatePosition logic.

```csharp
// Obtain an instance of MapEventVisualItemVM from the subsystem API first
MapEventVisualItemVM mapEventVisualItemVM = ...;
mapEventVisualItemVM.ParallelUpdatePosition();
```

### DetermineIsVisibleOnMap
`public void DetermineIsVisibleOnMap()`

**Purpose:** Determines the result of is visible on map based on the current state.

```csharp
// Obtain an instance of MapEventVisualItemVM from the subsystem API first
MapEventVisualItemVM mapEventVisualItemVM = ...;
mapEventVisualItemVM.DetermineIsVisibleOnMap();
```

### UpdateBindingProperties
`public void UpdateBindingProperties()`

**Purpose:** Recalculates and stores the latest representation of binding properties.

```csharp
// Obtain an instance of MapEventVisualItemVM from the subsystem API first
MapEventVisualItemVM mapEventVisualItemVM = ...;
mapEventVisualItemVM.UpdateBindingProperties();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapEventVisualItemVM mapEventVisualItemVM = ...;
mapEventVisualItemVM.UpdateProperties();
```

## See Also

- [Area Index](../)