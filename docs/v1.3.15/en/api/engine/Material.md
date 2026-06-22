<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Material`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Material

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `Material` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public static Material GetDefaultMaterial()
```

### GetOutlineMaterial

```csharp
public static Material GetOutlineMaterial(Mesh mesh)
```

### GetDefaultTableauSampleMaterial

```csharp
public static Material GetDefaultTableauSampleMaterial(bool transparency)
```

### CreateTableauMaterial

```csharp
public static Material CreateTableauMaterial(RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, Material sampleMaterial, int tableauSizeX, int tableauSizeY, bool continuousTableau = false)
```

### CreateCopy

```csharp
public Material CreateCopy()
```

### GetFromResource

```csharp
public static Material GetFromResource(string materialName)
```

### SetShader

```csharp
public void SetShader(Shader shader)
```

### GetShader

```csharp
public Shader GetShader()
```

### GetShaderFlags

```csharp
public ulong GetShaderFlags()
```

### SetShaderFlags

```csharp
public void SetShaderFlags(ulong flagEntry)
```

### SetMeshVectorArgument

```csharp
public void SetMeshVectorArgument(float x, float y, float z, float w)
```

### SetTexture

```csharp
public void SetTexture(Material.MBTextureType textureType, Texture texture)
```

### SetTextureAtSlot

```csharp
public void SetTextureAtSlot(int textureSlot, Texture texture)
```

### SetAreaMapScale

```csharp
public void SetAreaMapScale(float scale)
```

### SetEnableSkinning

```csharp
public void SetEnableSkinning(bool enable)
```

### UsingSkinning

```csharp
public bool UsingSkinning()
```

### GetTexture

```csharp
public Texture GetTexture(Material.MBTextureType textureType)
```

### GetTextureWithSlot

```csharp
public Texture GetTextureWithSlot(int textureSlot)
```

### GetAlphaMaskTableauMaterial

```csharp
public static Material GetAlphaMaskTableauMaterial()
```

### GetAlphaBlendMode

```csharp
public Material.MBAlphaBlendMode GetAlphaBlendMode()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)