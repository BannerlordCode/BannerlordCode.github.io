<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEventVisualItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Updates the state or data of `properties`.

### ParallelUpdatePosition
`public void ParallelUpdatePosition()`

**Purpose:** Handles logic related to `parallel update position`.

### DetermineIsVisibleOnMap
`public void DetermineIsVisibleOnMap()`

**Purpose:** Handles logic related to `determine is visible on map`.

### UpdateBindingProperties
`public void UpdateBindingProperties()`

**Purpose:** Updates the state or data of `binding properties`.

## Usage Example

```csharp
var value = new MapEventVisualItemVM();
value.UpdateProperties();
```

## See Also

- [Complete Class Catalog](../catalog)