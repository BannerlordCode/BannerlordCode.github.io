---
title: "GraphicsContext"
description: "GraphicsContext 的自动生成类参考。"
---
# GraphicsContext

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class GraphicsContext`
**Base:** 无
**File:** `TaleWorlds.TwoDimension.Standalone/GraphicsContext.cs`

## 概述

`GraphicsContext` 位于 `TaleWorlds.TwoDimension.Standalone`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Active` | `public static GraphicsContext Active { get; }` |
| `ProjectionMatrix` | `public Matrix4x4 ProjectionMatrix { get; set; }` |
| `ViewMatrix` | `public Matrix4x4 ViewMatrix { get; set; }` |
| `ModelMatrix` | `public Matrix4x4 ModelMatrix { get; set; }` |
| `IsActive` | `public bool IsActive { get; }` |

## 主要方法

### CreateContext
`public void CreateContext(ResourceDepot resourceDepot)`

**用途 / Purpose:** 构建一个新的 「context」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 GraphicsContext 实例
GraphicsContext graphicsContext = ...;
graphicsContext.CreateContext(resourceDepot);
```

### SetActive
`public void SetActive()`

**用途 / Purpose:** 为 「active」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GraphicsContext 实例
GraphicsContext graphicsContext = ...;
graphicsContext.SetActive();
```

### BeginFrame
`public void BeginFrame(int width, int height)`

**用途 / Purpose:** 处理与 「begin frame」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsContext 实例
GraphicsContext graphicsContext = ...;
graphicsContext.BeginFrame(0, 0);
```

### SwapBuffers
`public void SwapBuffers()`

**用途 / Purpose:** 处理与 「swap buffers」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsContext 实例
GraphicsContext graphicsContext = ...;
graphicsContext.SwapBuffers();
```

### DestroyContext
`public void DestroyContext()`

**用途 / Purpose:** 获取或维护 「destroy context」 数据。

```csharp
// 先通过子系统 API 拿到 GraphicsContext 实例
GraphicsContext graphicsContext = ...;
graphicsContext.DestroyContext();
```

### SetScissor
`public void SetScissor(ScissorTestInfo scissorTestInfo)`

**用途 / Purpose:** 为 「scissor」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GraphicsContext 实例
GraphicsContext graphicsContext = ...;
graphicsContext.SetScissor(scissorTestInfo);
```

### ResetScissor
`public void ResetScissor()`

**用途 / Purpose:** 将 「scissor」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 GraphicsContext 实例
GraphicsContext graphicsContext = ...;
graphicsContext.ResetScissor();
```

### GetOrLoadShader
`public Shader GetOrLoadShader(string shaderName)`

**用途 / Purpose:** 读取并返回当前对象中 「or load shader」 的结果。

```csharp
// 先通过子系统 API 拿到 GraphicsContext 实例
GraphicsContext graphicsContext = ...;
var result = graphicsContext.GetOrLoadShader("example");
```

### DrawImage
`public void DrawImage(SimpleMaterial material, in ImageDrawObject drawObject)`

**用途 / Purpose:** 处理与 「draw image」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsContext 实例
GraphicsContext graphicsContext = ...;
graphicsContext.DrawImage(material, drawObject);
```

### DrawText
`public void DrawText(TextMaterial material, in TextDrawObject drawObject)`

**用途 / Purpose:** 处理与 「draw text」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsContext 实例
GraphicsContext graphicsContext = ...;
graphicsContext.DrawText(material, drawObject);
```

### DrawPolygon
`public void DrawPolygon(PrimitivePolygonMaterial material, in ImageDrawObject drawObject)`

**用途 / Purpose:** 处理与 「draw polygon」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsContext 实例
GraphicsContext graphicsContext = ...;
graphicsContext.DrawPolygon(material, drawObject);
```

### LoadTextureUsing
`public void LoadTextureUsing(OpenGLTexture texture, ResourceDepot resourceDepot, string name)`

**用途 / Purpose:** 从持久化存储或流中读取 「texture using」。

```csharp
// 先通过子系统 API 拿到 GraphicsContext 实例
GraphicsContext graphicsContext = ...;
graphicsContext.LoadTextureUsing(texture, resourceDepot, "example");
```

### LoadTexture
`public OpenGLTexture LoadTexture(ResourceDepot resourceDepot, string name)`

**用途 / Purpose:** 从持久化存储或流中读取 「texture」。

```csharp
// 先通过子系统 API 拿到 GraphicsContext 实例
GraphicsContext graphicsContext = ...;
var result = graphicsContext.LoadTexture(resourceDepot, "example");
```

### GetTexture
`public OpenGLTexture GetTexture(string textureName)`

**用途 / Purpose:** 读取并返回当前对象中 「texture」 的结果。

```csharp
// 先通过子系统 API 拿到 GraphicsContext 实例
GraphicsContext graphicsContext = ...;
var result = graphicsContext.GetTexture("example");
```

### SetBlending
`public void SetBlending(bool enable)`

**用途 / Purpose:** 为 「blending」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GraphicsContext 实例
GraphicsContext graphicsContext = ...;
graphicsContext.SetBlending(false);
```

### SetVertexArrayClientState
`public void SetVertexArrayClientState(bool enable)`

**用途 / Purpose:** 为 「vertex array client state」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GraphicsContext 实例
GraphicsContext graphicsContext = ...;
graphicsContext.SetVertexArrayClientState(false);
```

### SetTextureCoordArrayClientState
`public void SetTextureCoordArrayClientState(bool enable)`

**用途 / Purpose:** 为 「texture coord array client state」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GraphicsContext 实例
GraphicsContext graphicsContext = ...;
graphicsContext.SetTextureCoordArrayClientState(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GraphicsContext graphicsContext = ...;
graphicsContext.CreateContext(resourceDepot);
```

## 参见

- [本区域目录](../)