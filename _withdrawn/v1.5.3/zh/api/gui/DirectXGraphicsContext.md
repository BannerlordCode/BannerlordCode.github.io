---
title: "DirectXGraphicsContext"
description: "DirectXGraphicsContext 的自动生成类参考。"
---
# DirectXGraphicsContext

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension.Standalone
**Type:** `public class DirectXGraphicsContext : IDisposable `
**Base:** IDisposable
**Source:** TaleWorlds.TwoDimension.Standalone/DirectXGraphicsContext.cs

## 概述

`DirectXGraphicsContext` 的自动生成类参考页面。声明来自 `TaleWorlds.TwoDimension.Standalone/DirectXGraphicsContext.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateContext
`public void CreateContext(IntPtr hwnd,ResourceDepot resourceDepot) `

### BeginFrame
`public void BeginFrame(int width,int height) `

### SwapBuffers
`public void SwapBuffers() `

### DestroyContext
`public void DestroyContext() `

### Dispose
`public void Dispose() `

### ReportDeviceLost
`public void ReportDeviceLost(int triggerHr) `

### GetCurrentBackBuffer
`public IntPtr GetCurrentBackBuffer() `

### SetScissor
`public void SetScissor(ScissorTestInfo scissorTestInfo) `

### ResetScissor
`public void ResetScissor() `

### SetBlending
`public void SetBlending(bool enable) `

### GetOrLoadShader
`public DirectXShader GetOrLoadShader(string shaderName) `

### DrawImage
`public void DrawImage(SimpleMaterial material,in ImageDrawObject drawObject) `

### DrawText
`public void DrawText(TextMaterial material,in TextDrawObject drawObject) `

### DrawPolygon
`public void DrawPolygon(PrimitivePolygonMaterial material,in ImageDrawObject drawObject) `

### LoadTextureUsing
`public void LoadTextureUsing(DirectXTexture texture,ResourceDepot resourceDepot,string name) `

### LoadTexture
`public DirectXTexture LoadTexture(ResourceDepot resourceDepot,string name) `

### GetTexture
`public DirectXTexture GetTexture(string textureName) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
