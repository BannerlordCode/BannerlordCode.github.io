---
title: "Texture"
description: "Texture 的自动生成类参考。"
---
# Texture

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Texture : Resource`
**Base:** `Resource`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Texture.cs`

## 概述

`Texture` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsReleased` | `public bool IsReleased { get; }` |
| `Name` | `public string Name { get; set; }` |

## 主要方法

### CreateTextureFromPath
`public static Texture CreateTextureFromPath(PlatformFilePath filePath)`

**用途 / Purpose:** 构建一个新的 「texture from path」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Texture.CreateTextureFromPath(filePath);
```

### GetPixelData
`public void GetPixelData(byte bytes)`

**用途 / Purpose:** 读取并返回当前对象中 「pixel data」 的结果。

```csharp
// 先通过子系统 API 拿到 Texture 实例
Texture texture = ...;
texture.GetPixelData(0);
```

### TransformRenderTargetToResource
`public void TransformRenderTargetToResource(string name)`

**用途 / Purpose:** 处理与 「transform render target to resource」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Texture 实例
Texture texture = ...;
texture.TransformRenderTargetToResource("example");
```

### GetFromResource
`public static Texture GetFromResource(string resourceName)`

**用途 / Purpose:** 读取并返回当前对象中 「from resource」 的结果。

```csharp
// 静态调用，不需要实例
Texture.GetFromResource("example");
```

### IsLoaded
`public bool IsLoaded()`

**用途 / Purpose:** 判断当前对象是否处于 「loaded」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Texture 实例
Texture texture = ...;
var result = texture.IsLoaded();
```

### GetSDFBoundingBoxData
`public void GetSDFBoundingBoxData(ref Vec3 min, ref Vec3 max)`

**用途 / Purpose:** 读取并返回当前对象中 「s d f bounding box data」 的结果。

```csharp
// 先通过子系统 API 拿到 Texture 实例
Texture texture = ...;
texture.GetSDFBoundingBoxData(min, max);
```

### CheckAndGetFromResource
`public static Texture CheckAndGetFromResource(string resourceName)`

**用途 / Purpose:** 检查「and get from resource」在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
Texture.CheckAndGetFromResource("example");
```

### ScaleTextureWithRatio
`public static void ScaleTextureWithRatio(ref int tableauSizeX, ref int tableauSizeY)`

**用途 / Purpose:** 处理与 「scale texture with ratio」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Texture.ScaleTextureWithRatio(tableauSizeX, tableauSizeY);
```

### PreloadTexture
`public void PreloadTexture(bool blocking)`

**用途 / Purpose:** 处理与 「preload texture」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Texture 实例
Texture texture = ...;
texture.PreloadTexture(false);
```

### Release
`public void Release()`

**用途 / Purpose:** 处理与 「release」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Texture 实例
Texture texture = ...;
texture.Release();
```

### ReleaseImmediately
`public void ReleaseImmediately()`

**用途 / Purpose:** 处理与 「release immediately」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Texture 实例
Texture texture = ...;
texture.ReleaseImmediately();
```

### ReleaseAfterNumberOfFrames
`public void ReleaseAfterNumberOfFrames(int frameCount)`

**用途 / Purpose:** 处理与 「release after number of frames」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Texture 实例
Texture texture = ...;
texture.ReleaseAfterNumberOfFrames(0);
```

### LoadTextureFromPath
`public static Texture LoadTextureFromPath(string fileName, string folder)`

**用途 / Purpose:** 从持久化存储或流中读取 「texture from path」。

```csharp
// 静态调用，不需要实例
Texture.LoadTextureFromPath("example", "example");
```

### CreateDepthTarget
`public static Texture CreateDepthTarget(string name, int width, int height)`

**用途 / Purpose:** 构建一个新的 「depth target」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Texture.CreateDepthTarget("example", 0, 0);
```

### CreateFromByteArray
`public static Texture CreateFromByteArray(byte data, int width, int height)`

**用途 / Purpose:** 构建一个新的 「from byte array」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Texture.CreateFromByteArray(0, 0, 0);
```

### SaveToFile
`public void SaveToFile(string path, bool isRelativePath)`

**用途 / Purpose:** 将 「to file」 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 Texture 实例
Texture texture = ...;
texture.SaveToFile("example", false);
```

### SetTextureAsAlwaysValid
`public void SetTextureAsAlwaysValid()`

**用途 / Purpose:** 为 「texture as always valid」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Texture 实例
Texture texture = ...;
texture.SetTextureAsAlwaysValid();
```

### CreateFromMemory
`public static Texture CreateFromMemory(byte data)`

**用途 / Purpose:** 构建一个新的 「from memory」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Texture.CreateFromMemory(0);
```

### ReleaseGpuMemories
`public static void ReleaseGpuMemories()`

**用途 / Purpose:** 处理与 「release gpu memories」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Texture.ReleaseGpuMemories();
```

### CreateTableauTexture
`public static Texture CreateTableauTexture(string name, RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, int tableauSizeX, int tableauSizeY)`

**用途 / Purpose:** 构建一个新的 「tableau texture」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Texture.CreateTableauTexture("example", eventHandler, objectRef, 0, 0);
```

### CreateRenderTarget
`public static Texture CreateRenderTarget(string name, int width, int height, bool autoMipmaps, bool isTableau, bool createUninitialized = false, bool always_valid = false)`

**用途 / Purpose:** 构建一个新的 「render target」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Texture.CreateRenderTarget("example", 0, 0, false, false, false, false);
```

## 使用示例

```csharp
Texture.CreateTextureFromPath(filePath);
```

## 参见

- [本区域目录](../)