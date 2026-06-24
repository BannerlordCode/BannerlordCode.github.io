<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Material`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Material

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** `public sealed class Material : Resource`
**Base:** `Resource`
**领域:** campaign-ext

## 概述

`Material` 位于 `TaleWorlds.Engine`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public static Material GetDefaultMaterial()`

**用途 / Purpose:** 获取 `default material` 的当前值。

### GetOutlineMaterial
`public static Material GetOutlineMaterial(Mesh mesh)`

**用途 / Purpose:** 获取 `outline material` 的当前值。

### GetDefaultTableauSampleMaterial
`public static Material GetDefaultTableauSampleMaterial(bool transparency)`

**用途 / Purpose:** 获取 `default tableau sample material` 的当前值。

### CreateTableauMaterial
`public static Material CreateTableauMaterial(RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, Material sampleMaterial, int tableauSizeX, int tableauSizeY, bool continuousTableau = false)`

**用途 / Purpose:** 创建一个 `tableau material` 实例或对象。

### CreateCopy
`public Material CreateCopy()`

**用途 / Purpose:** 创建一个 `copy` 实例或对象。

### GetFromResource
`public static Material GetFromResource(string materialName)`

**用途 / Purpose:** 获取 `from resource` 的当前值。

### SetShader
`public void SetShader(Shader shader)`

**用途 / Purpose:** 设置 `shader` 的值或状态。

### GetShader
`public Shader GetShader()`

**用途 / Purpose:** 获取 `shader` 的当前值。

### GetShaderFlags
`public ulong GetShaderFlags()`

**用途 / Purpose:** 获取 `shader flags` 的当前值。

### SetShaderFlags
`public void SetShaderFlags(ulong flagEntry)`

**用途 / Purpose:** 设置 `shader flags` 的值或状态。

### SetMeshVectorArgument
`public void SetMeshVectorArgument(float x, float y, float z, float w)`

**用途 / Purpose:** 设置 `mesh vector argument` 的值或状态。

### SetTexture
`public void SetTexture(Material.MBTextureType textureType, Texture texture)`

**用途 / Purpose:** 设置 `texture` 的值或状态。

### SetTextureAtSlot
`public void SetTextureAtSlot(int textureSlot, Texture texture)`

**用途 / Purpose:** 设置 `texture at slot` 的值或状态。

### SetAreaMapScale
`public void SetAreaMapScale(float scale)`

**用途 / Purpose:** 设置 `area map scale` 的值或状态。

### SetEnableSkinning
`public void SetEnableSkinning(bool enable)`

**用途 / Purpose:** 设置 `enable skinning` 的值或状态。

### UsingSkinning
`public bool UsingSkinning()`

**用途 / Purpose:** 处理 `using skinning` 相关逻辑。

### GetTexture
`public Texture GetTexture(Material.MBTextureType textureType)`

**用途 / Purpose:** 获取 `texture` 的当前值。

### GetTextureWithSlot
`public Texture GetTextureWithSlot(int textureSlot)`

**用途 / Purpose:** 获取 `texture with slot` 的当前值。

### GetAlphaMaskTableauMaterial
`public static Material GetAlphaMaskTableauMaterial()`

**用途 / Purpose:** 获取 `alpha mask tableau material` 的当前值。

### GetAlphaBlendMode
`public Material.MBAlphaBlendMode GetAlphaBlendMode()`

**用途 / Purpose:** 获取 `alpha blend mode` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
Material.GetDefaultMaterial();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
