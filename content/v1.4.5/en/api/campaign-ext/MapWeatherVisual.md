---
title: "MapWeatherVisual"
description: "Auto-generated class reference for MapWeatherVisual."
---
# MapWeatherVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public class MapWeatherVisual : MapEntityVisual<WeatherNode>`
**Base:** `MapEntityVisual<WeatherNode>`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Visuals/MapWeatherVisual.cs`

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

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of MapWeatherVisual from the subsystem API first
MapWeatherVisual mapWeatherVisual = ...;
var result = mapWeatherVisual.ToString();
```

### Tick
`public void Tick()`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MapWeatherVisual from the subsystem API first
MapWeatherVisual mapWeatherVisual = ...;
mapWeatherVisual.Tick();
```

### OnMapClick
`public override bool OnMapClick(bool followModifierUsed)`

**Purpose:** Invoked when the map click event is raised.

```csharp
// Obtain an instance of MapWeatherVisual from the subsystem API first
MapWeatherVisual mapWeatherVisual = ...;
var result = mapWeatherVisual.OnMapClick(false);
```

### OnHover
`public override void OnHover()`

**Purpose:** Invoked when the hover event is raised.

```csharp
// Obtain an instance of MapWeatherVisual from the subsystem API first
MapWeatherVisual mapWeatherVisual = ...;
mapWeatherVisual.OnHover();
```

### OnOpenEncyclopedia
`public override void OnOpenEncyclopedia()`

**Purpose:** Invoked when the open encyclopedia event is raised.

```csharp
// Obtain an instance of MapWeatherVisual from the subsystem API first
MapWeatherVisual mapWeatherVisual = ...;
mapWeatherVisual.OnOpenEncyclopedia();
```

### IsVisibleOrFadingOut
`public override bool IsVisibleOrFadingOut()`

**Purpose:** Determines whether the this instance is in the visible or fading out state or condition.

```csharp
// Obtain an instance of MapWeatherVisual from the subsystem API first
MapWeatherVisual mapWeatherVisual = ...;
var result = mapWeatherVisual.IsVisibleOrFadingOut();
```

### GetVisualPosition
`public override Vec3 GetVisualPosition()`

**Purpose:** Reads and returns the visual position value held by the this instance.

```csharp
// Obtain an instance of MapWeatherVisual from the subsystem API first
MapWeatherVisual mapWeatherVisual = ...;
var result = mapWeatherVisual.GetVisualPosition();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapWeatherVisual mapWeatherVisual = ...;
mapWeatherVisual.ToString();
```

## See Also

- [Area Index](../)