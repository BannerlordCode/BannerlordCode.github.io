<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerVisual`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerVisual

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerVisual : IBannerVisual`
**Base:** `IBannerVisual`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisual.cs`

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

**用途 / Purpose:** 处理 `validate create tableau textures` 相关逻辑。

### GetTableauTextureSmall
`public Texture GetTableauTextureSmall(Action<Texture> setAction, bool isTableauOrNineGrid = true)`

**用途 / Purpose:** 获取 `tableau texture small` 的当前值。

### GetTableauTextureLarge
`public Texture GetTableauTextureLarge(Action<Texture> setAction, bool isTableauOrNineGrid = true)`

**用途 / Purpose:** 获取 `tableau texture large` 的当前值。

### GetTableauTextureLarge
`public Texture GetTableauTextureLarge(Action<Texture> setAction, out BannerThumbnailCreationData creationData, bool isTableauOrNineGrid = true)`

**用途 / Purpose:** 获取 `tableau texture large` 的当前值。

### GetMeshMatrix
`public static MatrixFrame GetMeshMatrix(ref Mesh mesh, float marginLeft, float marginTop, float width, float height, bool mirrored, float rotation, float deltaZ)`

**用途 / Purpose:** 获取 `mesh matrix` 的当前值。

### ConvertToMultiMesh
`public MetaMesh ConvertToMultiMesh()`

**用途 / Purpose:** 处理 `convert to multi mesh` 相关逻辑。

## 使用示例

```csharp
var value = new BannerVisual();
value.ValidateCreateTableauTextures();
```

## 参见

- [完整类目录](../catalog)