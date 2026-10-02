---
title: "GraphicsContext"
description: "GraphicsContext: a public class in TaleWorlds.TwoDimension.Standalone; 25 exposed members (18 methods, 5 properties, 1 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension.Standalone/GraphicsContext.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GraphicsContext

**Namespace:** `TaleWorlds.TwoDimension.Standalone`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public class GraphicsContext`
**File:** `TaleWorlds.TwoDimension.Standalone/GraphicsContext.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

GraphicsContext lives in the TaleWorlds.TwoDimension.Standalone module, source file TaleWorlds.TwoDimension.Standalone/GraphicsContext.cs. It is a public class; the inheritance chain is GraphicsContext. It exposes 25 public/protected members: 18 methods, 5 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GraphicsContext lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension.Standalone`, inheritance chain GraphicsContext. The surface is method-led (methods 18/25, properties 5/25), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension.Standalone/GraphicsContext.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Active` | `public static GraphicsContext Active` | property |
| `ProjectionMatrix` | `public MatrixFrame ProjectionMatrix` | property |
| `ViewMatrix` | `public MatrixFrame ViewMatrix` | property |
| `ModelMatrix` | `public MatrixFrame ModelMatrix` | property |
| `GraphicsContext` | `public GraphicsContext()` | constructor |
| `CreateContext` | `public void CreateContext(ResourceDepot resourceDepot)` | method |
| `SetActive` | `public void SetActive()` | method |
| `BeginFrame` | `public void BeginFrame(int width, int height)` | method |
| `SwapBuffers` | `public void SwapBuffers()` | method |
| `IsActive` | `public bool IsActive` | property |
| `RequestContextReactivation` | `public void RequestContextReactivation()` | method |
| `DestroyContext` | `public void DestroyContext()` | method |
| `SetScissor` | `public void SetScissor(ScissorTestInfo scissorTestInfo)` | method |
| `ResetScissor` | `public void ResetScissor()` | method |
| `GetOrLoadShader` | `public Shader GetOrLoadShader(string shaderName)` | method |
| `DrawImage` | `public void DrawImage(SimpleMaterial material, in ImageDrawObject drawObject)` | method |
| `DrawText` | `public void DrawText(TextMaterial material, in TextDrawObject drawObject)` | method |
| `DrawPolygon` | `public void DrawPolygon(PrimitivePolygonMaterial material, in ImageDrawObject drawObject)` | method |
| `LoadTextureUsing` | `public void LoadTextureUsing(OpenGLTexture texture, ResourceDepot resourceDepot, string name)` | method |
| `LoadTexture` | `public OpenGLTexture LoadTexture(ResourceDepot resourceDepot, string name)` | method |
| `GetTexture` | `public OpenGLTexture GetTexture(string textureName)` | method |
| `SetBlending` | `public void SetBlending(bool enable)` | method |
| `SetVertexArrayClientState` | `public void SetVertexArrayClientState(bool enable)` | method |
| `SetTextureCoordArrayClientState` | `public void SetTextureCoordArrayClientState(bool enable)` | method |
| `MaxFrameRate` | `public const int MaxFrameRate` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace FrameworkDomain](../FrameworkDomain/)
- [same namespace GraphicsForm](../GraphicsForm/)
- [same namespace IMessageCommunicator](../IMessageCommunicator/)
- [same namespace InputData](../InputData/)
