---
title: "BannerVisual"
description: "BannerVisual 的自动生成类参考。"
---
# BannerVisual

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerVisual : IBannerVisual`
**Base:** `IBannerVisual`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/BannerVisual.cs`

## 概述

`BannerVisual` 位于 `TaleWorlds.MountAndBlade.View`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Banner` | `public Banner Banner { get; }` |

## 主要方法

### ValidateCreateTableauTextures
`public void ValidateCreateTableauTextures()`

**用途 / Purpose:** **用途 / Purpose:** 检查create tableau textures是否满足约束条件，通常返回布尔值。

```csharp
// 先通过子系统 API 拿到 BannerVisual 实例
BannerVisual bannerVisual = ...;
bannerVisual.ValidateCreateTableauTextures();
```

### GetTableauTextureSmall
`public Texture GetTableauTextureSmall(in BannerDebugInfo debugInfo, Action<Texture> setAction, bool isTableauOrNineGrid = true)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tableau texture small 的结果。

```csharp
// 先通过子系统 API 拿到 BannerVisual 实例
BannerVisual bannerVisual = ...;
var result = bannerVisual.GetTableauTextureSmall(debugInfo, setAction, false);
```

### GetTableauTextureLarge
`public Texture GetTableauTextureLarge(in BannerDebugInfo debugInfo, Action<Texture> setAction, bool isTableauOrNineGrid = true)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tableau texture large 的结果。

```csharp
// 先通过子系统 API 拿到 BannerVisual 实例
BannerVisual bannerVisual = ...;
var result = bannerVisual.GetTableauTextureLarge(debugInfo, setAction, false);
```

### GetTableauTextureLarge
`public Texture GetTableauTextureLarge(in BannerDebugInfo debugInfo, Action<Texture> setAction, out BannerTextureCreationData creationData, bool isTableauOrNineGrid = true)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tableau texture large 的结果。

```csharp
// 先通过子系统 API 拿到 BannerVisual 实例
BannerVisual bannerVisual = ...;
var result = bannerVisual.GetTableauTextureLarge(debugInfo, setAction, creationData, false);
```

### GetMeshMatrix
`public static MatrixFrame GetMeshMatrix(ref Mesh mesh, float marginLeft, float marginTop, float width, float height, bool mirrored, float rotation, float deltaZ)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mesh matrix 的结果。

```csharp
// 静态调用，不需要实例
BannerVisual.GetMeshMatrix(mesh, 0, 0, 0, 0, false, 0, 0);
```

### ConvertToMultiMesh
`public MetaMesh ConvertToMultiMesh()`

**用途 / Purpose:** **用途 / Purpose:** 把to multi mesh转换为另一种表示或类型。

```csharp
// 先通过子系统 API 拿到 BannerVisual 实例
BannerVisual bannerVisual = ...;
var result = bannerVisual.ConvertToMultiMesh();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BannerVisual bannerVisual = ...;
bannerVisual.ValidateCreateTableauTextures();
```

## 参见

- [本区域目录](../)