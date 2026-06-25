---
title: "SimpleMaterial"
description: "Auto-generated class reference for SimpleMaterial."
---
# SimpleMaterial

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SimpleMaterial : Material`
**Base:** `Material`
**File:** `TaleWorlds.TwoDimension/SimpleMaterial.cs`

## Overview

`SimpleMaterial` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; set; }` |
| `Color` | `public Color Color { get; set; }` |
| `ColorFactor` | `public float ColorFactor { get; set; }` |
| `AlphaFactor` | `public float AlphaFactor { get; set; }` |
| `HueFactor` | `public float HueFactor { get; set; }` |
| `SaturationFactor` | `public float SaturationFactor { get; set; }` |
| `ValueFactor` | `public float ValueFactor { get; set; }` |
| `CircularMaskingEnabled` | `public bool CircularMaskingEnabled { get; set; }` |
| `CircularMaskingCenter` | `public Vector2 CircularMaskingCenter { get; set; }` |
| `CircularMaskingRadius` | `public float CircularMaskingRadius { get; set; }` |
| `CircularMaskingSmoothingRadius` | `public float CircularMaskingSmoothingRadius { get; set; }` |
| `NinePatchParameters` | `public SpriteNinePatchParameters NinePatchParameters { get; set; }` |
| `OverlayEnabled` | `public bool OverlayEnabled { get; set; }` |
| `StartCoordinate` | `public Vector2 StartCoordinate { get; set; }` |
| `Size` | `public Vector2 Size { get; set; }` |
| `OverlayTexture` | `public Texture OverlayTexture { get; set; }` |
| `UseOverlayAlphaAsMask` | `public bool UseOverlayAlphaAsMask { get; set; }` |
| `Scale` | `public float Scale { get; set; }` |
| `OverlayTextureWidth` | `public float OverlayTextureWidth { get; set; }` |
| `OverlayTextureHeight` | `public float OverlayTextureHeight { get; set; }` |
| `OverlayXOffset` | `public float OverlayXOffset { get; set; }` |
| `OverlayYOffset` | `public float OverlayYOffset { get; set; }` |

## Key Methods

### Reset
`public void Reset(Texture texture = null)`

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of SimpleMaterial from the subsystem API first
SimpleMaterial simpleMaterial = ...;
simpleMaterial.Reset(null);
```

### GetCircularMaskingCenter
`public Vec2 GetCircularMaskingCenter()`

**Purpose:** Reads and returns the circular masking center value held by the this instance.

```csharp
// Obtain an instance of SimpleMaterial from the subsystem API first
SimpleMaterial simpleMaterial = ...;
var result = simpleMaterial.GetCircularMaskingCenter();
```

### GetOverlayStartCoordinate
`public Vec2 GetOverlayStartCoordinate()`

**Purpose:** Reads and returns the overlay start coordinate value held by the this instance.

```csharp
// Obtain an instance of SimpleMaterial from the subsystem API first
SimpleMaterial simpleMaterial = ...;
var result = simpleMaterial.GetOverlayStartCoordinate();
```

### GetOverlaySize
`public Vec2 GetOverlaySize()`

**Purpose:** Reads and returns the overlay size value held by the this instance.

```csharp
// Obtain an instance of SimpleMaterial from the subsystem API first
SimpleMaterial simpleMaterial = ...;
var result = simpleMaterial.GetOverlaySize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SimpleMaterial simpleMaterial = ...;
simpleMaterial.Reset(null);
```

## See Also

- [Area Index](../)