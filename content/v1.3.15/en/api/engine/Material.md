---
title: "Material"
description: "Auto-generated class reference for Material."
---
# Material

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Material : Resource`
**Base:** `Resource`
**File:** `TaleWorlds.Engine/Material.cs`

## Overview

`Material` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `UsingSpecular` | `public bool UsingSpecular { get; set; }` |
| `UsingSpecularMap` | `public bool UsingSpecularMap { get; set; }` |
| `UsingEnvironmentMap` | `public bool UsingEnvironmentMap { get; set; }` |
| `UsingSpecularAlpha` | `public bool UsingSpecularAlpha { get; set; }` |
| `UsingDynamicLight` | `public bool UsingDynamicLight { get; set; }` |
| `UsingSunLight` | `public bool UsingSunLight { get; set; }` |
| `UsingFresnel` | `public bool UsingFresnel { get; set; }` |
| `IsSunShadowReceiver` | `public bool IsSunShadowReceiver { get; set; }` |
| `IsDynamicShadowReceiver` | `public bool IsDynamicShadowReceiver { get; set; }` |
| `UsingDiffuseAlphaMap` | `public bool UsingDiffuseAlphaMap { get; set; }` |
| `UsingParallaxMapping` | `public bool UsingParallaxMapping { get; set; }` |
| `UsingParallaxOcclusion` | `public bool UsingParallaxOcclusion { get; set; }` |
| `Flags` | `public MaterialFlags Flags { get; set; }` |

## Key Methods

### GetDefaultMaterial
`public static Material GetDefaultMaterial()`

**Purpose:** Reads and returns the `default material` value held by the current object.

```csharp
// Static call; no instance required
Material.GetDefaultMaterial();
```

### GetOutlineMaterial
`public static Material GetOutlineMaterial(Mesh mesh)`

**Purpose:** Reads and returns the `outline material` value held by the current object.

```csharp
// Static call; no instance required
Material.GetOutlineMaterial(mesh);
```

### GetDefaultTableauSampleMaterial
`public static Material GetDefaultTableauSampleMaterial(bool transparency)`

**Purpose:** Reads and returns the `default tableau sample material` value held by the current object.

```csharp
// Static call; no instance required
Material.GetDefaultTableauSampleMaterial(false);
```

### CreateTableauMaterial
`public static Material CreateTableauMaterial(RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, Material sampleMaterial, int tableauSizeX, int tableauSizeY, bool continuousTableau = false)`

**Purpose:** Constructs a new `tableau material` entity and returns it to the caller.

```csharp
// Static call; no instance required
Material.CreateTableauMaterial(eventHandler, objectRef, sampleMaterial, 0, 0, false);
```

### CreateCopy
`public Material CreateCopy()`

**Purpose:** Constructs a new `copy` entity and returns it to the caller.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
var result = material.CreateCopy();
```

### GetFromResource
`public static Material GetFromResource(string materialName)`

**Purpose:** Reads and returns the `from resource` value held by the current object.

```csharp
// Static call; no instance required
Material.GetFromResource("example");
```

### SetShader
`public void SetShader(Shader shader)`

**Purpose:** Assigns a new value to `shader` and updates the object's internal state.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
material.SetShader(shader);
```

### GetShader
`public Shader GetShader()`

**Purpose:** Reads and returns the `shader` value held by the current object.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
var result = material.GetShader();
```

### GetShaderFlags
`public ulong GetShaderFlags()`

**Purpose:** Reads and returns the `shader flags` value held by the current object.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
var result = material.GetShaderFlags();
```

### SetShaderFlags
`public void SetShaderFlags(ulong flagEntry)`

**Purpose:** Assigns a new value to `shader flags` and updates the object's internal state.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
material.SetShaderFlags(0);
```

### SetMeshVectorArgument
`public void SetMeshVectorArgument(float x, float y, float z, float w)`

**Purpose:** Assigns a new value to `mesh vector argument` and updates the object's internal state.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
material.SetMeshVectorArgument(0, 0, 0, 0);
```

### SetTexture
`public void SetTexture(Material.MBTextureType textureType, Texture texture)`

**Purpose:** Assigns a new value to `texture` and updates the object's internal state.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
material.SetTexture(textureType, texture);
```

### SetTextureAtSlot
`public void SetTextureAtSlot(int textureSlot, Texture texture)`

**Purpose:** Assigns a new value to `texture at slot` and updates the object's internal state.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
material.SetTextureAtSlot(0, texture);
```

### SetAreaMapScale
`public void SetAreaMapScale(float scale)`

**Purpose:** Assigns a new value to `area map scale` and updates the object's internal state.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
material.SetAreaMapScale(0);
```

### SetEnableSkinning
`public void SetEnableSkinning(bool enable)`

**Purpose:** Assigns a new value to `enable skinning` and updates the object's internal state.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
material.SetEnableSkinning(false);
```

### UsingSkinning
`public bool UsingSkinning()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
var result = material.UsingSkinning();
```

### GetTexture
`public Texture GetTexture(Material.MBTextureType textureType)`

**Purpose:** Reads and returns the `texture` value held by the current object.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
var result = material.GetTexture(textureType);
```

### GetTextureWithSlot
`public Texture GetTextureWithSlot(int textureSlot)`

**Purpose:** Reads and returns the `texture with slot` value held by the current object.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
var result = material.GetTextureWithSlot(0);
```

### GetAlphaMaskTableauMaterial
`public static Material GetAlphaMaskTableauMaterial()`

**Purpose:** Reads and returns the `alpha mask tableau material` value held by the current object.

```csharp
// Static call; no instance required
Material.GetAlphaMaskTableauMaterial();
```

### GetAlphaBlendMode
`public Material.MBAlphaBlendMode GetAlphaBlendMode()`

**Purpose:** Reads and returns the `alpha blend mode` value held by the current object.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
var result = material.GetAlphaBlendMode();
```

### SetAlphaBlendMode
`public void SetAlphaBlendMode(Material.MBAlphaBlendMode alphaBlendMode)`

**Purpose:** Assigns a new value to `alpha blend mode` and updates the object's internal state.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
material.SetAlphaBlendMode(alphaBlendMode);
```

### SetAlphaTestValue
`public void SetAlphaTestValue(float alphaTestValue)`

**Purpose:** Assigns a new value to `alpha test value` and updates the object's internal state.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
material.SetAlphaTestValue(0);
```

### GetAlphaTestValue
`public float GetAlphaTestValue()`

**Purpose:** Reads and returns the `alpha test value` value held by the current object.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
var result = material.GetAlphaTestValue();
```

### AddMaterialShaderFlag
`public void AddMaterialShaderFlag(string flagName, bool showErrors)`

**Purpose:** Adds `material shader flag` to the current collection or state.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
material.AddMaterialShaderFlag("example", false);
```

### RemoveMaterialShaderFlag
`public void RemoveMaterialShaderFlag(string flagName)`

**Purpose:** Removes `material shader flag` from the current collection or state.

```csharp
// Obtain an instance of Material from the subsystem API first
Material material = ...;
material.RemoveMaterialShaderFlag("example");
```

## Usage Example

```csharp
Material.GetDefaultMaterial();
```

## See Also

- [Area Index](../)