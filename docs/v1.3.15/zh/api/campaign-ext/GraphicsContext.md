<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GraphicsContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GraphicsContext

**命名空间:** TaleWorlds.TwoDimension.Standalone
**模块:** TaleWorlds.TwoDimension
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`GraphicsContext` 是 `TaleWorlds.TwoDimension.Standalone` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public void CreateContext(ResourceDepot resourceDepot)
```

### SetActive

```csharp
public void SetActive()
```

### BeginFrame

```csharp
public void BeginFrame(int width, int height)
```

### SwapBuffers

```csharp
public void SwapBuffers()
```

### DestroyContext

```csharp
public void DestroyContext()
```

### SetScissor

```csharp
public void SetScissor(ScissorTestInfo scissorTestInfo)
```

### ResetScissor

```csharp
public void ResetScissor()
```

### GetOrLoadShader

```csharp
public Shader GetOrLoadShader(string shaderName)
```

### DrawImage

```csharp
public void DrawImage(SimpleMaterial material, in ImageDrawObject drawObject)
```

### DrawText

```csharp
public void DrawText(TextMaterial material, in TextDrawObject drawObject)
```

### DrawPolygon

```csharp
public void DrawPolygon(PrimitivePolygonMaterial material, in ImageDrawObject drawObject)
```

### LoadTextureUsing

```csharp
public void LoadTextureUsing(OpenGLTexture texture, ResourceDepot resourceDepot, string name)
```

### LoadTexture

```csharp
public OpenGLTexture LoadTexture(ResourceDepot resourceDepot, string name)
```

### GetTexture

```csharp
public OpenGLTexture GetTexture(string textureName)
```

### SetBlending

```csharp
public void SetBlending(bool enable)
```

### SetVertexArrayClientState

```csharp
public void SetVertexArrayClientState(bool enable)
```

### SetTextureCoordArrayClientState

```csharp
public void SetTextureCoordArrayClientState(bool enable)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)