---
title: "Material"
description: "Material 的自动生成类参考。"
---
# Material

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Material : Resource`
**Base:** `Resource`
**File:** `TaleWorlds.Engine/Material.cs`

## 概述

`Material` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

**用途 / Purpose:** 读取并返回当前对象中 「default material」 的结果。

```csharp
// 静态调用，不需要实例
Material.GetDefaultMaterial();
```

### GetOutlineMaterial
`public static Material GetOutlineMaterial(Mesh mesh)`

**用途 / Purpose:** 读取并返回当前对象中 「outline material」 的结果。

```csharp
// 静态调用，不需要实例
Material.GetOutlineMaterial(mesh);
```

### GetDefaultTableauSampleMaterial
`public static Material GetDefaultTableauSampleMaterial(bool transparency)`

**用途 / Purpose:** 读取并返回当前对象中 「default tableau sample material」 的结果。

```csharp
// 静态调用，不需要实例
Material.GetDefaultTableauSampleMaterial(false);
```

### CreateTableauMaterial
`public static Material CreateTableauMaterial(RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, Material sampleMaterial, int tableauSizeX, int tableauSizeY, bool continuousTableau = false)`

**用途 / Purpose:** 构建一个新的 「tableau material」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Material.CreateTableauMaterial(eventHandler, objectRef, sampleMaterial, 0, 0, false);
```

### CreateCopy
`public Material CreateCopy()`

**用途 / Purpose:** 构建一个新的 「copy」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
var result = material.CreateCopy();
```

### GetFromResource
`public static Material GetFromResource(string materialName)`

**用途 / Purpose:** 读取并返回当前对象中 「from resource」 的结果。

```csharp
// 静态调用，不需要实例
Material.GetFromResource("example");
```

### SetShader
`public void SetShader(Shader shader)`

**用途 / Purpose:** 为 「shader」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
material.SetShader(shader);
```

### GetShader
`public Shader GetShader()`

**用途 / Purpose:** 读取并返回当前对象中 「shader」 的结果。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
var result = material.GetShader();
```

### GetShaderFlags
`public ulong GetShaderFlags()`

**用途 / Purpose:** 读取并返回当前对象中 「shader flags」 的结果。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
var result = material.GetShaderFlags();
```

### SetShaderFlags
`public void SetShaderFlags(ulong flagEntry)`

**用途 / Purpose:** 为 「shader flags」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
material.SetShaderFlags(0);
```

### SetMeshVectorArgument
`public void SetMeshVectorArgument(float x, float y, float z, float w)`

**用途 / Purpose:** 为 「mesh vector argument」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
material.SetMeshVectorArgument(0, 0, 0, 0);
```

### SetTexture
`public void SetTexture(Material.MBTextureType textureType, Texture texture)`

**用途 / Purpose:** 为 「texture」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
material.SetTexture(textureType, texture);
```

### SetTextureAtSlot
`public void SetTextureAtSlot(int textureSlot, Texture texture)`

**用途 / Purpose:** 为 「texture at slot」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
material.SetTextureAtSlot(0, texture);
```

### SetAreaMapScale
`public void SetAreaMapScale(float scale)`

**用途 / Purpose:** 为 「area map scale」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
material.SetAreaMapScale(0);
```

### SetEnableSkinning
`public void SetEnableSkinning(bool enable)`

**用途 / Purpose:** 为 「enable skinning」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
material.SetEnableSkinning(false);
```

### UsingSkinning
`public bool UsingSkinning()`

**用途 / Purpose:** 处理与 「using skinning」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
var result = material.UsingSkinning();
```

### GetTexture
`public Texture GetTexture(Material.MBTextureType textureType)`

**用途 / Purpose:** 读取并返回当前对象中 「texture」 的结果。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
var result = material.GetTexture(textureType);
```

### GetTextureWithSlot
`public Texture GetTextureWithSlot(int textureSlot)`

**用途 / Purpose:** 读取并返回当前对象中 「texture with slot」 的结果。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
var result = material.GetTextureWithSlot(0);
```

### GetAlphaMaskTableauMaterial
`public static Material GetAlphaMaskTableauMaterial()`

**用途 / Purpose:** 读取并返回当前对象中 「alpha mask tableau material」 的结果。

```csharp
// 静态调用，不需要实例
Material.GetAlphaMaskTableauMaterial();
```

### GetAlphaBlendMode
`public Material.MBAlphaBlendMode GetAlphaBlendMode()`

**用途 / Purpose:** 读取并返回当前对象中 「alpha blend mode」 的结果。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
var result = material.GetAlphaBlendMode();
```

### SetAlphaBlendMode
`public void SetAlphaBlendMode(Material.MBAlphaBlendMode alphaBlendMode)`

**用途 / Purpose:** 为 「alpha blend mode」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
material.SetAlphaBlendMode(alphaBlendMode);
```

### SetAlphaTestValue
`public void SetAlphaTestValue(float alphaTestValue)`

**用途 / Purpose:** 为 「alpha test value」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
material.SetAlphaTestValue(0);
```

### GetAlphaTestValue
`public float GetAlphaTestValue()`

**用途 / Purpose:** 读取并返回当前对象中 「alpha test value」 的结果。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
var result = material.GetAlphaTestValue();
```

### AddMaterialShaderFlag
`public void AddMaterialShaderFlag(string flagName, bool showErrors)`

**用途 / Purpose:** 将 「material shader flag」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
material.AddMaterialShaderFlag("example", false);
```

### RemoveMaterialShaderFlag
`public void RemoveMaterialShaderFlag(string flagName)`

**用途 / Purpose:** 从当前容器或状态中移除 「material shader flag」。

```csharp
// 先通过子系统 API 拿到 Material 实例
Material material = ...;
material.RemoveMaterialShaderFlag("example");
```

## 使用示例

```csharp
Material.GetDefaultMaterial();
```

## 参见

- [本区域目录](../)