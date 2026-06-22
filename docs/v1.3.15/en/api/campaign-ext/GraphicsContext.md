<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GraphicsContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GraphicsContext

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `GraphicsContext` is a class in the `TaleWorlds.TwoDimension.Standalone` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Active` | `public static GraphicsContext Active { get; }` |
| `ProjectionMatrix` | `public Matrix4x4 ProjectionMatrix { get; set; }` |
| `ViewMatrix` | `public Matrix4x4 ViewMatrix { get; set; }` |
| `ModelMatrix` | `public Matrix4x4 ModelMatrix { get; set; }` |
| `IsActive` | `public bool IsActive { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)