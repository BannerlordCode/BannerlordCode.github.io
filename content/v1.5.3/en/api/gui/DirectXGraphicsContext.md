---
title: "DirectXGraphicsContext"
description: "Auto-generated class reference for DirectXGraphicsContext."
---
# DirectXGraphicsContext

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension.Standalone
**Type:** `public class DirectXGraphicsContext : IDisposable `
**Base:** IDisposable
**Source:** TaleWorlds.TwoDimension.Standalone/DirectXGraphicsContext.cs

## Overview

Auto-generated stub for `DirectXGraphicsContext`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CreateContext
`public void CreateContext(IntPtr hwnd,ResourceDepot resourceDepot)`

### BeginFrame
`public void BeginFrame(int width,int height)`

### SwapBuffers
`public void SwapBuffers()`

### DestroyContext
`public void DestroyContext()`

### Dispose
`public void Dispose()`

### ReportDeviceLost
`public void ReportDeviceLost(int triggerHr)`

### GetCurrentBackBuffer
`public IntPtr GetCurrentBackBuffer()`

### SetScissor
`public void SetScissor(ScissorTestInfo scissorTestInfo)`

### ResetScissor
`public void ResetScissor()`

### SetBlending
`public void SetBlending(bool enable)`

### GetOrLoadShader
`public DirectXShader GetOrLoadShader(string shaderName)`

### DrawImage
`public void DrawImage(SimpleMaterial material,in ImageDrawObject drawObject)`

### DrawText
`public void DrawText(TextMaterial material,in TextDrawObject drawObject)`

### DrawPolygon
`public void DrawPolygon(PrimitivePolygonMaterial material,in ImageDrawObject drawObject)`

### LoadTextureUsing
`public void LoadTextureUsing(DirectXTexture texture,ResourceDepot resourceDepot,string name)`

### LoadTexture
`public DirectXTexture LoadTexture(ResourceDepot resourceDepot,string name)`

### GetTexture
`public DirectXTexture GetTexture(string textureName)`

## See Also

- [Section index](../)
