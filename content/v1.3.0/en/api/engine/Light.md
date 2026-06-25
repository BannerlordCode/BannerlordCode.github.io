---
title: "Light"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Light`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Light

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Light : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `TaleWorlds.Engine/Light.cs`

## Overview

`Light` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `LightColor` | `public Vec3 LightColor { get; set; }` |
| `Intensity` | `public float Intensity { get; set; }` |
| `Radius` | `public float Radius { get; set; }` |
| `ShadowEnabled` | `public bool ShadowEnabled { get; set; }` |

## Key Methods

### CreatePointLight
`public static Light CreatePointLight(float lightRadius)`

**Purpose:** Creates a new `point light` instance or object.

### SetShadowType
`public void SetShadowType(Light.ShadowType type)`

**Purpose:** Sets the value or state of `shadow type`.

### SetLightFlicker
`public void SetLightFlicker(float magnitude, float interval)`

**Purpose:** Sets the value or state of `light flicker`.

### SetVolumetricProperties
`public void SetVolumetricProperties(bool volumetricLightEnabled, float volumeParameters)`

**Purpose:** Sets the value or state of `volumetric properties`.

### Dispose
`public void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### SetVisibility
`public void SetVisibility(bool value)`

**Purpose:** Sets the value or state of `visibility`.

## Usage Example

```csharp
Light.CreatePointLight(0);
```

## See Also

- [Complete Class Catalog](../catalog)