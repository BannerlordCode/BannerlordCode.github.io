---
title: "Material"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Material`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `default material`.

### GetOutlineMaterial
`public static Material GetOutlineMaterial(Mesh mesh)`

**Purpose:** Gets the current value of `outline material`.

### GetDefaultTableauSampleMaterial
`public static Material GetDefaultTableauSampleMaterial(bool transparency)`

**Purpose:** Gets the current value of `default tableau sample material`.

### CreateTableauMaterial
`public static Material CreateTableauMaterial(RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, Material sampleMaterial, int tableauSizeX, int tableauSizeY, bool continuousTableau = false)`

**Purpose:** Creates a new `tableau material` instance or object.

### CreateCopy
`public Material CreateCopy()`

**Purpose:** Creates a new `copy` instance or object.

### GetFromResource
`public static Material GetFromResource(string materialName)`

**Purpose:** Gets the current value of `from resource`.

### SetShader
`public void SetShader(Shader shader)`

**Purpose:** Sets the value or state of `shader`.

### GetShader
`public Shader GetShader()`

**Purpose:** Gets the current value of `shader`.

### GetShaderFlags
`public ulong GetShaderFlags()`

**Purpose:** Gets the current value of `shader flags`.

### SetShaderFlags
`public void SetShaderFlags(ulong flagEntry)`

**Purpose:** Sets the value or state of `shader flags`.

### SetMeshVectorArgument
`public void SetMeshVectorArgument(float x, float y, float z, float w)`

**Purpose:** Sets the value or state of `mesh vector argument`.

### SetTexture
`public void SetTexture(Material.MBTextureType textureType, Texture texture)`

**Purpose:** Sets the value or state of `texture`.

### SetTextureAtSlot
`public void SetTextureAtSlot(int textureSlot, Texture texture)`

**Purpose:** Sets the value or state of `texture at slot`.

### SetAreaMapScale
`public void SetAreaMapScale(float scale)`

**Purpose:** Sets the value or state of `area map scale`.

### SetEnableSkinning
`public void SetEnableSkinning(bool enable)`

**Purpose:** Sets the value or state of `enable skinning`.

### UsingSkinning
`public bool UsingSkinning()`

**Purpose:** Handles logic related to `using skinning`.

### GetTexture
`public Texture GetTexture(Material.MBTextureType textureType)`

**Purpose:** Gets the current value of `texture`.

### GetTextureWithSlot
`public Texture GetTextureWithSlot(int textureSlot)`

**Purpose:** Gets the current value of `texture with slot`.

### GetAlphaMaskTableauMaterial
`public static Material GetAlphaMaskTableauMaterial()`

**Purpose:** Gets the current value of `alpha mask tableau material`.

### GetAlphaBlendMode
`public Material.MBAlphaBlendMode GetAlphaBlendMode()`

**Purpose:** Gets the current value of `alpha blend mode`.

### SetAlphaBlendMode
`public void SetAlphaBlendMode(Material.MBAlphaBlendMode alphaBlendMode)`

**Purpose:** Sets the value or state of `alpha blend mode`.

### SetAlphaTestValue
`public void SetAlphaTestValue(float alphaTestValue)`

**Purpose:** Sets the value or state of `alpha test value`.

### GetAlphaTestValue
`public float GetAlphaTestValue()`

**Purpose:** Gets the current value of `alpha test value`.

### AddMaterialShaderFlag
`public void AddMaterialShaderFlag(string flagName, bool showErrors)`

**Purpose:** Adds `material shader flag` to the current collection or state.

### RemoveMaterialShaderFlag
`public void RemoveMaterialShaderFlag(string flagName)`

**Purpose:** Removes `material shader flag` from the current collection or state.

## Usage Example

```csharp
Material.GetDefaultMaterial();
```

## See Also

- [Complete Class Catalog](../catalog)