---
title: "MapTrackerCollectionVM"
description: "Auto-generated class reference for MapTrackerCollectionVM."
---
# MapTrackerCollectionVM

**Namespace:** SandBox.ViewModelCollection.Map.Tracker
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapTrackerCollectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Map.Tracker/MapTrackerCollectionVM.cs`

## Overview

`MapTrackerCollectionVM` lives in `SandBox.ViewModelCollection.Map.Tracker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Map.Tracker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Trackers` | `public MBBindingList<MapTrackerItemVM> Trackers { get; set; }` |

## Key Methods

### Tick
`public void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MapTrackerCollectionVM from the subsystem API first
MapTrackerCollectionVM mapTrackerCollectionVM = ...;
mapTrackerCollectionVM.Tick(0);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MapTrackerCollectionVM from the subsystem API first
MapTrackerCollectionVM mapTrackerCollectionVM = ...;
mapTrackerCollectionVM.OnFinalize();
```

### UpdateProperties
`public void UpdateProperties()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of properties.

```csharp
// Obtain an instance of MapTrackerCollectionVM from the subsystem API first
MapTrackerCollectionVM mapTrackerCollectionVM = ...;
mapTrackerCollectionVM.UpdateProperties();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapTrackerCollectionVM mapTrackerCollectionVM = ...;
mapTrackerCollectionVM.Tick(0);
```

## See Also

- [Area Index](../)