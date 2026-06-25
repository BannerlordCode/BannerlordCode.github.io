---
title: "GraphicsContext"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GraphicsContext`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GraphicsContext

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class GraphicsContext`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/GraphicsContext.cs`

## 概述

`GraphicsContext` 位于 `TaleWorlds.TwoDimension.Standalone`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Active` | `public static GraphicsContext Active { get; }` |
| `ProjectionMatrix` | `public MatrixFrame ProjectionMatrix { get; set; }` |
| `ViewMatrix` | `public MatrixFrame ViewMatrix { get; set; }` |
| `ModelMatrix` | `public MatrixFrame ModelMatrix { get; }` |

## 主要方法

### CreateContext
`public void CreateContext(ResourceDepot resourceDepot)`

**用途 / Purpose:** 创建一个 `context` 实例或对象。

### SetActive
`public void SetActive()`

**用途 / Purpose:** 设置 `active` 的值或状态。

### BeginFrame
`public void BeginFrame(int width, int height)`

**用途 / Purpose:** 处理 `begin frame` 相关逻辑。

### SwapBuffers
`public void SwapBuffers()`

**用途 / Purpose:** 处理 `swap buffers` 相关逻辑。

### RequestContextReactivation
`public void RequestContextReactivation()`

**用途 / Purpose:** 处理 `request context reactivation` 相关逻辑。

### DestroyContext
`public void DestroyContext()`

**用途 / Purpose:** 处理 `destroy context` 相关逻辑。

### SetScissor
`public void SetScissor(ScissorTestInfo scissorTestInfo)`

**用途 / Purpose:** 设置 `scissor` 的值或状态。

### ResetScissor
`public void ResetScissor()`

**用途 / Purpose:** 将 `scissor` 重置为初始状态。

### GetOrLoadShader
`public Shader GetOrLoadShader(string shaderName)`

**用途 / Purpose:** 获取 `or load shader` 的当前值。

### DrawImage
`public void DrawImage(SimpleMaterial material, in ImageDrawObject drawObject)`

**用途 / Purpose:** 处理 `draw image` 相关逻辑。

### DrawText
`public void DrawText(TextMaterial material, in TextDrawObject drawObject)`

**用途 / Purpose:** 处理 `draw text` 相关逻辑。

### DrawPolygon
`public void DrawPolygon(PrimitivePolygonMaterial material, in ImageDrawObject drawObject)`

**用途 / Purpose:** 处理 `draw polygon` 相关逻辑。

### LoadTextureUsing
`public void LoadTextureUsing(OpenGLTexture texture, ResourceDepot resourceDepot, string name)`

**用途 / Purpose:** 加载 `texture using` 数据。

### LoadTexture
`public OpenGLTexture LoadTexture(ResourceDepot resourceDepot, string name)`

**用途 / Purpose:** 加载 `texture` 数据。

### GetTexture
`public OpenGLTexture GetTexture(string textureName)`

**用途 / Purpose:** 获取 `texture` 的当前值。

### SetBlending
`public void SetBlending(bool enable)`

**用途 / Purpose:** 设置 `blending` 的值或状态。

### SetVertexArrayClientState
`public void SetVertexArrayClientState(bool enable)`

**用途 / Purpose:** 设置 `vertex array client state` 的值或状态。

### SetTextureCoordArrayClientState
`public void SetTextureCoordArrayClientState(bool enable)`

**用途 / Purpose:** 设置 `texture coord array client state` 的值或状态。

## 使用示例

```csharp
var value = new GraphicsContext();
value.CreateContext(resourceDepot);
```

## 参见

- [完整类目录](../catalog)