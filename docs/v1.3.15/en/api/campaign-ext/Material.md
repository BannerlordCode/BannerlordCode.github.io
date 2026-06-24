<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Material`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Material

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Material : Resource`
**Base:** `Resource`
**Area:** campaign-ext

## Overview

`Material` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Material.GetDefaultMaterial();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
