---
title: "MapEventVisualsVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEventVisualsVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapEventVisualsVM

**Namespace:** SandBox.ViewModelCollection.Map
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapEventVisualsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Map/MapEventVisualsVM.cs`

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

**Purpose:** Updates the state or data of `update`.

### OnMapEventVisibilityChanged
`public void OnMapEventVisibilityChanged(MapEvent mapEvent)`

**Purpose:** Called when the `map event visibility changed` event is raised.

### OnMapEventStarted
`public void OnMapEventStarted(MapEvent mapEvent)`

**Purpose:** Called when the `map event started` event is raised.

### OnMapEventEnded
`public void OnMapEventEnded(MapEvent mapEvent)`

**Purpose:** Called when the `map event ended` event is raised.

## Usage Example

```csharp
var value = new MapEventVisualsVM();
value.Update(0);
```

## See Also

- [Complete Class Catalog](../catalog)