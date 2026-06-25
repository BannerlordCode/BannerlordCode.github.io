---
title: "SimpleMaterial"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SimpleMaterial`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SimpleMaterial

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SimpleMaterial : Material`
**Base:** `Material`
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/SimpleMaterial.cs`

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

**Purpose:** Resets `reset` to its initial state.

### GetCircularMaskingCenter
`public Vec2 GetCircularMaskingCenter()`

**Purpose:** Gets the current value of `circular masking center`.

### GetOverlayStartCoordinate
`public Vec2 GetOverlayStartCoordinate()`

**Purpose:** Gets the current value of `overlay start coordinate`.

### GetOverlaySize
`public Vec2 GetOverlaySize()`

**Purpose:** Gets the current value of `overlay size`.

## Usage Example

```csharp
var value = new SimpleMaterial();
value.Reset(null);
```

## See Also

- [Complete Class Catalog](../catalog)