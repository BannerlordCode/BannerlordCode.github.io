---
title: "GraphicsContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GraphicsContext`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GraphicsContext

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class GraphicsContext`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/GraphicsContext.cs`

## Overview

`GraphicsContext` lives in `TaleWorlds.TwoDimension.Standalone` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Active` | `public static GraphicsContext Active { get; }` |
| `ProjectionMatrix` | `public MatrixFrame ProjectionMatrix { get; set; }` |
| `ViewMatrix` | `public MatrixFrame ViewMatrix { get; set; }` |
| `ModelMatrix` | `public MatrixFrame ModelMatrix { get; }` |

## Key Methods

### CreateContext
`public void CreateContext(ResourceDepot resourceDepot)`

**Purpose:** Creates a new `context` instance or object.

### SetActive
`public void SetActive()`

**Purpose:** Sets the value or state of `active`.

### BeginFrame
`public void BeginFrame(int width, int height)`

**Purpose:** Handles logic related to `begin frame`.

### SwapBuffers
`public void SwapBuffers()`

**Purpose:** Handles logic related to `swap buffers`.

### RequestContextReactivation
`public void RequestContextReactivation()`

**Purpose:** Handles logic related to `request context reactivation`.

### DestroyContext
`public void DestroyContext()`

**Purpose:** Handles logic related to `destroy context`.

### SetScissor
`public void SetScissor(ScissorTestInfo scissorTestInfo)`

**Purpose:** Sets the value or state of `scissor`.

### ResetScissor
`public void ResetScissor()`

**Purpose:** Resets `scissor` to its initial state.

### GetOrLoadShader
`public Shader GetOrLoadShader(string shaderName)`

**Purpose:** Gets the current value of `or load shader`.

### DrawImage
`public void DrawImage(SimpleMaterial material, in ImageDrawObject drawObject)`

**Purpose:** Handles logic related to `draw image`.

### DrawText
`public void DrawText(TextMaterial material, in TextDrawObject drawObject)`

**Purpose:** Handles logic related to `draw text`.

### DrawPolygon
`public void DrawPolygon(PrimitivePolygonMaterial material, in ImageDrawObject drawObject)`

**Purpose:** Handles logic related to `draw polygon`.

### LoadTextureUsing
`public void LoadTextureUsing(OpenGLTexture texture, ResourceDepot resourceDepot, string name)`

**Purpose:** Loads `texture using` data.

### LoadTexture
`public OpenGLTexture LoadTexture(ResourceDepot resourceDepot, string name)`

**Purpose:** Loads `texture` data.

### GetTexture
`public OpenGLTexture GetTexture(string textureName)`

**Purpose:** Gets the current value of `texture`.

### SetBlending
`public void SetBlending(bool enable)`

**Purpose:** Sets the value or state of `blending`.

### SetVertexArrayClientState
`public void SetVertexArrayClientState(bool enable)`

**Purpose:** Sets the value or state of `vertex array client state`.

### SetTextureCoordArrayClientState
`public void SetTextureCoordArrayClientState(bool enable)`

**Purpose:** Sets the value or state of `texture coord array client state`.

## Usage Example

```csharp
var value = new GraphicsContext();
value.CreateContext(resourceDepot);
```

## See Also

- [Complete Class Catalog](../catalog)