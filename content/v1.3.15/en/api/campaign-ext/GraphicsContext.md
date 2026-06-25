---
title: "GraphicsContext"
description: "Auto-generated class reference for GraphicsContext."
---
# GraphicsContext

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class GraphicsContext`
**Base:** none
**File:** `TaleWorlds.TwoDimension.Standalone/GraphicsContext.cs`

## Overview

`GraphicsContext` lives in `TaleWorlds.TwoDimension.Standalone` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public void CreateContext(ResourceDepot resourceDepot)`

**Purpose:** **Purpose:** Constructs a new context entity and returns it to the caller.

```csharp
// Obtain an instance of GraphicsContext from the subsystem API first
GraphicsContext graphicsContext = ...;
graphicsContext.CreateContext(resourceDepot);
```

### SetActive
`public void SetActive()`

**Purpose:** **Purpose:** Assigns a new value to active and updates the object's internal state.

```csharp
// Obtain an instance of GraphicsContext from the subsystem API first
GraphicsContext graphicsContext = ...;
graphicsContext.SetActive();
```

### BeginFrame
`public void BeginFrame(int width, int height)`

**Purpose:** **Purpose:** Executes the BeginFrame logic.

```csharp
// Obtain an instance of GraphicsContext from the subsystem API first
GraphicsContext graphicsContext = ...;
graphicsContext.BeginFrame(0, 0);
```

### SwapBuffers
`public void SwapBuffers()`

**Purpose:** **Purpose:** Executes the SwapBuffers logic.

```csharp
// Obtain an instance of GraphicsContext from the subsystem API first
GraphicsContext graphicsContext = ...;
graphicsContext.SwapBuffers();
```

### DestroyContext
`public void DestroyContext()`

**Purpose:** **Purpose:** Executes the DestroyContext logic.

```csharp
// Obtain an instance of GraphicsContext from the subsystem API first
GraphicsContext graphicsContext = ...;
graphicsContext.DestroyContext();
```

### SetScissor
`public void SetScissor(ScissorTestInfo scissorTestInfo)`

**Purpose:** **Purpose:** Assigns a new value to scissor and updates the object's internal state.

```csharp
// Obtain an instance of GraphicsContext from the subsystem API first
GraphicsContext graphicsContext = ...;
graphicsContext.SetScissor(scissorTestInfo);
```

### ResetScissor
`public void ResetScissor()`

**Purpose:** **Purpose:** Returns scissor to its default or initial condition.

```csharp
// Obtain an instance of GraphicsContext from the subsystem API first
GraphicsContext graphicsContext = ...;
graphicsContext.ResetScissor();
```

### GetOrLoadShader
`public Shader GetOrLoadShader(string shaderName)`

**Purpose:** **Purpose:** Reads and returns the or load shader value held by the this instance.

```csharp
// Obtain an instance of GraphicsContext from the subsystem API first
GraphicsContext graphicsContext = ...;
var result = graphicsContext.GetOrLoadShader("example");
```

### DrawImage
`public void DrawImage(SimpleMaterial material, in ImageDrawObject drawObject)`

**Purpose:** **Purpose:** Executes the DrawImage logic.

```csharp
// Obtain an instance of GraphicsContext from the subsystem API first
GraphicsContext graphicsContext = ...;
graphicsContext.DrawImage(material, drawObject);
```

### DrawText
`public void DrawText(TextMaterial material, in TextDrawObject drawObject)`

**Purpose:** **Purpose:** Executes the DrawText logic.

```csharp
// Obtain an instance of GraphicsContext from the subsystem API first
GraphicsContext graphicsContext = ...;
graphicsContext.DrawText(material, drawObject);
```

### DrawPolygon
`public void DrawPolygon(PrimitivePolygonMaterial material, in ImageDrawObject drawObject)`

**Purpose:** **Purpose:** Executes the DrawPolygon logic.

```csharp
// Obtain an instance of GraphicsContext from the subsystem API first
GraphicsContext graphicsContext = ...;
graphicsContext.DrawPolygon(material, drawObject);
```

### LoadTextureUsing
`public void LoadTextureUsing(OpenGLTexture texture, ResourceDepot resourceDepot, string name)`

**Purpose:** **Purpose:** Reads texture using from persistent storage or a stream.

```csharp
// Obtain an instance of GraphicsContext from the subsystem API first
GraphicsContext graphicsContext = ...;
graphicsContext.LoadTextureUsing(texture, resourceDepot, "example");
```

### LoadTexture
`public OpenGLTexture LoadTexture(ResourceDepot resourceDepot, string name)`

**Purpose:** **Purpose:** Reads texture from persistent storage or a stream.

```csharp
// Obtain an instance of GraphicsContext from the subsystem API first
GraphicsContext graphicsContext = ...;
var result = graphicsContext.LoadTexture(resourceDepot, "example");
```

### GetTexture
`public OpenGLTexture GetTexture(string textureName)`

**Purpose:** **Purpose:** Reads and returns the texture value held by the this instance.

```csharp
// Obtain an instance of GraphicsContext from the subsystem API first
GraphicsContext graphicsContext = ...;
var result = graphicsContext.GetTexture("example");
```

### SetBlending
`public void SetBlending(bool enable)`

**Purpose:** **Purpose:** Assigns a new value to blending and updates the object's internal state.

```csharp
// Obtain an instance of GraphicsContext from the subsystem API first
GraphicsContext graphicsContext = ...;
graphicsContext.SetBlending(false);
```

### SetVertexArrayClientState
`public void SetVertexArrayClientState(bool enable)`

**Purpose:** **Purpose:** Assigns a new value to vertex array client state and updates the object's internal state.

```csharp
// Obtain an instance of GraphicsContext from the subsystem API first
GraphicsContext graphicsContext = ...;
graphicsContext.SetVertexArrayClientState(false);
```

### SetTextureCoordArrayClientState
`public void SetTextureCoordArrayClientState(bool enable)`

**Purpose:** **Purpose:** Assigns a new value to texture coord array client state and updates the object's internal state.

```csharp
// Obtain an instance of GraphicsContext from the subsystem API first
GraphicsContext graphicsContext = ...;
graphicsContext.SetTextureCoordArrayClientState(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GraphicsContext graphicsContext = ...;
graphicsContext.CreateContext(resourceDepot);
```

## See Also

- [Area Index](../)