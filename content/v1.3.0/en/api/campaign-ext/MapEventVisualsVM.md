---
title: "MapEventVisualsVM"
description: "Auto-generated class reference for MapEventVisualsVM."
---
# MapEventVisualsVM

**Namespace:** SandBox.ViewModelCollection.Map
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapEventVisualsVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Map/MapEventVisualsVM.cs`

## Overview

`MapEventVisualsVM` lives in `SandBox.ViewModelCollection.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapEvents` | `public MBBindingList<MapEventVisualItemVM> MapEvents { get; set; }` |

## Key Methods

### Update
`public void Update(float dt)`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of MapEventVisualsVM from the subsystem API first
MapEventVisualsVM mapEventVisualsVM = ...;
mapEventVisualsVM.Update(0);
```

### OnMapEventVisibilityChanged
`public void OnMapEventVisibilityChanged(MapEvent mapEvent)`

**Purpose:** Invoked when the map event visibility changed event is raised.

```csharp
// Obtain an instance of MapEventVisualsVM from the subsystem API first
MapEventVisualsVM mapEventVisualsVM = ...;
mapEventVisualsVM.OnMapEventVisibilityChanged(mapEvent);
```

### OnMapEventStarted
`public void OnMapEventStarted(MapEvent mapEvent)`

**Purpose:** Invoked when the map event started event is raised.

```csharp
// Obtain an instance of MapEventVisualsVM from the subsystem API first
MapEventVisualsVM mapEventVisualsVM = ...;
mapEventVisualsVM.OnMapEventStarted(mapEvent);
```

### OnMapEventEnded
`public void OnMapEventEnded(MapEvent mapEvent)`

**Purpose:** Invoked when the map event ended event is raised.

```csharp
// Obtain an instance of MapEventVisualsVM from the subsystem API first
MapEventVisualsVM mapEventVisualsVM = ...;
mapEventVisualsVM.OnMapEventEnded(mapEvent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapEventVisualsVM mapEventVisualsVM = ...;
mapEventVisualsVM.Update(0);
```

## See Also

- [Area Index](../)