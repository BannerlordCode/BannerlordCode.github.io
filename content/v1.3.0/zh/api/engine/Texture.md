---
title: "Texture"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Texture`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Texture

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Texture : Resource`
**Base:** `Resource`
**File:** `TaleWorlds.Engine/Texture.cs`

## 概述

`Texture` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Width` | `public int Width { get; }` |
| `Height` | `public int Height { get; }` |
| `MemorySize` | `public int MemorySize { get; }` |
| `IsRenderTarget` | `public bool IsRenderTarget { get; }` |
| `Name` | `public string Name { get; set; }` |
| `RenderTargetComponent` | `public RenderTargetComponent RenderTargetComponent { get; }` |
| `TableauView` | `public TableauView TableauView { get; }` |
| `UserData` | `public object UserData { get; }` |

## 主要方法

### CreateTextureFromPath
`public static Texture CreateTextureFromPath(PlatformFilePath filePath)`

**用途 / Purpose:** 创建一个 `texture from path` 实例或对象。

### GetPixelData
`public void GetPixelData(byte bytes)`

**用途 / Purpose:** 获取 `pixel data` 的当前值。

### TransformRenderTargetToResource
`public void TransformRenderTargetToResource(string name)`

**用途 / Purpose:** 处理 `transform render target to resource` 相关逻辑。

### GetFromResource
`public static Texture GetFromResource(string resourceName)`

**用途 / Purpose:** 获取 `from resource` 的当前值。

### IsLoaded
`public bool IsLoaded()`

**用途 / Purpose:** 处理 `is loaded` 相关逻辑。

### GetSDFBoundingBoxData
`public void GetSDFBoundingBoxData(ref Vec3 min, ref Vec3 max)`

**用途 / Purpose:** 获取 `s d f bounding box data` 的当前值。

### CheckAndGetFromResource
`public static Texture CheckAndGetFromResource(string resourceName)`

**用途 / Purpose:** 处理 `check and get from resource` 相关逻辑。

### ScaleTextureWithRatio
`public static void ScaleTextureWithRatio(ref int tableauSizeX, ref int tableauSizeY)`

**用途 / Purpose:** 处理 `scale texture with ratio` 相关逻辑。

### PreloadTexture
`public void PreloadTexture(bool blocking)`

**用途 / Purpose:** 处理 `preload texture` 相关逻辑。

### Release
`public void Release()`

**用途 / Purpose:** 处理 `release` 相关逻辑。

### ReleaseNextFrame
`public void ReleaseNextFrame()`

**用途 / Purpose:** 处理 `release next frame` 相关逻辑。

### LoadTextureFromPath
`public static Texture LoadTextureFromPath(string fileName, string folder)`

**用途 / Purpose:** 加载 `texture from path` 数据。

### CreateDepthTarget
`public static Texture CreateDepthTarget(string name, int width, int height)`

**用途 / Purpose:** 创建一个 `depth target` 实例或对象。

### CreateFromByteArray
`public static Texture CreateFromByteArray(byte data, int width, int height)`

**用途 / Purpose:** 创建一个 `from byte array` 实例或对象。

### SaveToFile
`public void SaveToFile(string path)`

**用途 / Purpose:** 保存 `to file` 数据。

### SetTextureAsAlwaysValid
`public void SetTextureAsAlwaysValid()`

**用途 / Purpose:** 设置 `texture as always valid` 的值或状态。

### CreateFromMemory
`public static Texture CreateFromMemory(byte data)`

**用途 / Purpose:** 创建一个 `from memory` 实例或对象。

### ReleaseGpuMemories
`public static void ReleaseGpuMemories()`

**用途 / Purpose:** 处理 `release gpu memories` 相关逻辑。

### CreateTableauTexture
`public static Texture CreateTableauTexture(string name, RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, int tableauSizeX, int tableauSizeY)`

**用途 / Purpose:** 创建一个 `tableau texture` 实例或对象。

### CreateRenderTarget
`public static Texture CreateRenderTarget(string name, int width, int height, bool autoMipmaps, bool isTableau, bool createUninitialized = false, bool always_valid = false)`

**用途 / Purpose:** 创建一个 `render target` 实例或对象。

## 使用示例

```csharp
Texture.CreateTextureFromPath(filePath);
```

## 参见

- [完整类目录](../catalog)