<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMapEventVisual`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapEventVisual

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapEventVisual : IMapEventVisual`
**Base:** `IMapEventVisual`
**File:** `SandBox.GauntletUI/Map/GauntletMapEventVisual.cs`

## Overview

`GauntletMapEventVisual` lives in `SandBox.GauntletUI.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapEvent` | `public MapEvent MapEvent { get; }` |
| `WorldPosition` | `public Vec2 WorldPosition { get; }` |
| `IsVisible` | `public bool IsVisible { get; }` |

## Key Methods

### Initialize
`public void Initialize(CampaignVec2 position, int battleSizeValue, bool isVisible)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### OnMapEventEnd
`public void OnMapEventEnd()`

**Purpose:** Called when the `map event end` event is raised.

### SetVisibility
`public void SetVisibility(bool isVisible)`

**Purpose:** Sets the value or state of `visibility`.

## Usage Example

```csharp
var value = new GauntletMapEventVisual();
value.Initialize(position, 0, false);
```

## See Also

- [Complete Class Catalog](../catalog)