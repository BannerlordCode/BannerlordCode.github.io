---
title: "Light"
description: "Auto-generated class reference for Light."
---
# Light

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Light : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Light.cs`

## Overview

`Light` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `LightColor` | `public Vec3 LightColor { get; set; }` |
| `Intensity` | `public float Intensity { get; set; }` |
| `Radius` | `public float Radius { get; set; }` |
| `ShadowEnabled` | `public bool ShadowEnabled { get; set; }` |

## Key Methods

### CreatePointLight
`public static Light CreatePointLight(float lightRadius)`

**Purpose:** Constructs a new point light entity and returns it to the caller.

```csharp
// Static call; no instance required
Light.CreatePointLight(0);
```

### SetShadowType
`public void SetShadowType(ShadowType type)`

**Purpose:** Assigns a new value to shadow type and updates the object's internal state.

```csharp
// Obtain an instance of Light from the subsystem API first
Light light = ...;
light.SetShadowType(type);
```

### SetLightFlicker
`public void SetLightFlicker(float magnitude, float interval)`

**Purpose:** Assigns a new value to light flicker and updates the object's internal state.

```csharp
// Obtain an instance of Light from the subsystem API first
Light light = ...;
light.SetLightFlicker(0, 0);
```

### SetVolumetricProperties
`public void SetVolumetricProperties(bool volumetricLightEnabled, float volumeParameters)`

**Purpose:** Assigns a new value to volumetric properties and updates the object's internal state.

```csharp
// Obtain an instance of Light from the subsystem API first
Light light = ...;
light.SetVolumetricProperties(false, 0);
```

### Dispose
`public void Dispose()`

**Purpose:** Releases unmanaged resources held by the this instance.

```csharp
// Obtain an instance of Light from the subsystem API first
Light light = ...;
light.Dispose();
```

### SetVisibility
`public void SetVisibility(bool value)`

**Purpose:** Assigns a new value to visibility and updates the object's internal state.

```csharp
// Obtain an instance of Light from the subsystem API first
Light light = ...;
light.SetVisibility(false);
```

## Usage Example

```csharp
Light.CreatePointLight(0);
```

## See Also

- [Area Index](../)