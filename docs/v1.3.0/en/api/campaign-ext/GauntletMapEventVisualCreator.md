<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMapEventVisualCreator`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapEventVisualCreator

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapEventVisualCreator : IMapEventVisualCreator`
**Base:** `IMapEventVisualCreator`
**File:** `SandBox.GauntletUI/Map/GauntletMapEventVisualCreator.cs`

## Overview

`GauntletMapEventVisualCreator` lives in `SandBox.GauntletUI.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateMapEventVisual
`public IMapEventVisual CreateMapEventVisual(MapEvent mapEvent)`

**Purpose:** Creates a new `map event visual` instance or object.

### GetCurrentEvents
`public IEnumerable<GauntletMapEventVisual> GetCurrentEvents()`

**Purpose:** Gets the current value of `current events`.

## Usage Example

```csharp
var value = new GauntletMapEventVisualCreator();
value.CreateMapEventVisual(mapEvent);
```

## See Also

- [Complete Class Catalog](../catalog)