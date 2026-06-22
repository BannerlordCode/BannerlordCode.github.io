<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Material`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Material

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`Material` 是 `TaleWorlds.Engine` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)