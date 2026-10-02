---
title: "GraphicsContext"
description: "GraphicsContext — class in TaleWorlds.TwoDimension.Standalone. 26 public members (1 static)."
---

<!-- v147-skeleton -->
# GraphicsContext

**Namespace:** `TaleWorlds.TwoDimension.Standalone`  
**Module:** `TaleWorlds.TwoDimension.Standalone`  
**Type:** `public class GraphicsContext`  
**Source:** `TaleWorlds.TwoDimension.Standalone/GraphicsContext.cs`

## Overview

`GraphicsContext` is a named type in the TaleWorlds.TwoDimension.Standalone namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GraphicsContext`.
- **Static entry points** (1): `Active`.
- **Instance members** (22): `ProjectionMatrix`, `ViewMatrix`, `ModelMatrix`, `CreateContext`, `SetActive`, `BeginFrame`, ….
- **Data and constants** (2): `MaxFrameRate`, `MaxTimeToRenderOneFrame`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Active` | property (static) | Static entry point `GraphicsContext` property. Read it for current state; a declared setter writes that state in place. |
| `BeginFrame` | method | Instance entry point. Takes 2 arguments: `int width`, `int height`. |
| `CreateContext` | method | Instance entry point. Takes 1 argument: `ResourceDepot resourceDepot`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `DestroyContext` | method | Instance entry point. Takes no arguments. |
| `DrawImage` | method | Instance entry point. Takes 2 arguments: `SimpleMaterial material`, `in ImageDrawObject drawObject`. |
| `DrawPolygon` | method | Instance entry point. Takes 2 arguments: `PrimitivePolygonMaterial material`, `in ImageDrawObject drawObject`. |
| `DrawText` | method | Instance entry point. Takes 2 arguments: `TextMaterial material`, `in TextDrawObject drawObject`. |
| `GetOrLoadShader` | method | Instance entry point. Takes 1 argument: `string shaderName`. Returns `Shader`. Read path: prefer it over reaching for the backing store. |
| `GetTexture` | method | Instance entry point. Takes 1 argument: `string textureName`. Returns `OpenGLTexture`. Read path: prefer it over reaching for the backing store. |
| `IsActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `LoadTexture` | method | Instance entry point. Takes 2 arguments: `ResourceDepot resourceDepot`, `string name`. Returns `OpenGLTexture`. |
| `LoadTextureUsing` | method | Instance entry point. Takes 3 arguments: `OpenGLTexture texture`, `ResourceDepot resourceDepot`, `string name`. |
| `ModelMatrix` | property | Instance entry point `MatrixFrame` property. Read it for current state; a declared setter writes that state in place. |
| `ProjectionMatrix` | property | Instance entry point `MatrixFrame` property. Read it for current state; a declared setter writes that state in place. |
| `RequestContextReactivation` | method | Instance entry point. Takes no arguments. |
| `ResetScissor` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `SetActive` | method | Instance entry point. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetBlending` | method | Instance entry point. Takes 1 argument: `bool enable`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetScissor` | method | Instance entry point. Takes 1 argument: `ScissorTestInfo scissorTestInfo`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetTextureCoordArrayClientState` | method | Instance entry point. Takes 1 argument: `bool enable`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetVertexArrayClientState` | method | Instance entry point. Takes 1 argument: `bool enable`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SwapBuffers` | method | Instance entry point. Takes no arguments. |
| `ViewMatrix` | property | Instance entry point `MatrixFrame` property. Read it for current state; a declared setter writes that state in place. |
| `MaxFrameRate` | const | Instance entry point. Takes no arguments. Returns `int`. |

- Constructed as `public GraphicsContext()`.

2 further public members follow the same patterns.
## Usage Example

```csharp
var graphicsContext = new GraphicsContext();
graphicsContext.CreateContext(resourceDepot);
// Read current state through graphicsContext.ProjectionMatrix.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.TwoDimension.Standalone/GraphicsContext.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [User32](../User32/) — `TaleWorlds.TwoDimension.Standalone.Native.Windows`.
- [AttribueMask](../AttribueMask/) — `TaleWorlds.TwoDimension.Standalone.Native.OpenGL`.
- [Rectangle2D](../Rectangle2D/) — `TaleWorlds.TwoDimension`.
- [AutoPinner](../AutoPinner/) — `TaleWorlds.TwoDimension.Standalone.Native`.
- [BeginMode](../BeginMode/) — `TaleWorlds.TwoDimension.Standalone.Native.OpenGL`.
- [BlendingSourceFactor](../BlendingSourceFactor/) — `TaleWorlds.TwoDimension.Standalone.Native.OpenGL`.
- [BlendingDestinationFactor](../BlendingDestinationFactor/) — `TaleWorlds.TwoDimension.Standalone.Native.OpenGL`.

Section: [api/gui/](../) — the other types in this bucket.
