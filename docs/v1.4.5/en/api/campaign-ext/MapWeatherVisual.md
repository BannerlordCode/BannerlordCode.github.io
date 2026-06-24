<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapWeatherVisual`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapWeatherVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public class MapWeatherVisual : MapEntityVisual<WeatherNode>`
**Base:** `MapEntityVisual<WeatherNode>`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map.Visuals/MapWeatherVisual.cs`

## Overview

`MapWeatherVisual` lives in `SandBox.View.Map.Visuals` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Visuals` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PrefabSpawnOffset` | `public Vec2 PrefabSpawnOffset { get; }` |
| `MaskPixelIndex` | `public int MaskPixelIndex { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### OnMapClick
`public override bool OnMapClick(bool followModifierUsed)`

**Purpose:** Called when the `map click` event is raised.

### OnHover
`public override void OnHover()`

**Purpose:** Called when the `hover` event is raised.

### OnOpenEncyclopedia
`public override void OnOpenEncyclopedia()`

**Purpose:** Called when the `open encyclopedia` event is raised.

### IsVisibleOrFadingOut
`public override bool IsVisibleOrFadingOut()`

**Purpose:** Handles logic related to `is visible or fading out`.

### GetVisualPosition
`public override Vec3 GetVisualPosition()`

**Purpose:** Gets the current value of `visual position`.

## Usage Example

```csharp
var value = new MapWeatherVisual();
value.ToString();
```

## See Also

- [Complete Class Catalog](../catalog)