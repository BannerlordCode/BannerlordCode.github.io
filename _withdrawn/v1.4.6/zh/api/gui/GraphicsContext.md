---
title: "GraphicsContext"
description: "GraphicsContext：TaleWorlds.TwoDimension.Standalone 的 public 类；公开成员 25 个（方法 18、属性 5、字段 1）。canonical 桶 gui。源文件 TaleWorlds.TwoDimension.Standalone/GraphicsContext.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GraphicsContext

**Namespace:** `TaleWorlds.TwoDimension.Standalone`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public class GraphicsContext`
**File:** `TaleWorlds.TwoDimension.Standalone/GraphicsContext.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## 概述

GraphicsContext 位于 TaleWorlds.TwoDimension.Standalone 模块，源文件 TaleWorlds.TwoDimension.Standalone/GraphicsContext.cs。它是一个 public 类，继承链为 GraphicsContext。public/protected 成员共 25 个：18 方法、5 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GraphicsContext 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.TwoDimension`），命名空间 `TaleWorlds.TwoDimension.Standalone`，继承链 GraphicsContext。成员构成以方法为主（方法 18/25，属性 5/25），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension.Standalone/GraphicsContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Active` | `public static GraphicsContext Active` | 属性 |
| `ProjectionMatrix` | `public MatrixFrame ProjectionMatrix` | 属性 |
| `ViewMatrix` | `public MatrixFrame ViewMatrix` | 属性 |
| `ModelMatrix` | `public MatrixFrame ModelMatrix` | 属性 |
| `GraphicsContext` | `public GraphicsContext()` | 构造函数 |
| `CreateContext` | `public void CreateContext(ResourceDepot resourceDepot)` | 方法 |
| `SetActive` | `public void SetActive()` | 方法 |
| `BeginFrame` | `public void BeginFrame(int width, int height)` | 方法 |
| `SwapBuffers` | `public void SwapBuffers()` | 方法 |
| `IsActive` | `public bool IsActive` | 属性 |
| `RequestContextReactivation` | `public void RequestContextReactivation()` | 方法 |
| `DestroyContext` | `public void DestroyContext()` | 方法 |
| `SetScissor` | `public void SetScissor(ScissorTestInfo scissorTestInfo)` | 方法 |
| `ResetScissor` | `public void ResetScissor()` | 方法 |
| `GetOrLoadShader` | `public Shader GetOrLoadShader(string shaderName)` | 方法 |
| `DrawImage` | `public void DrawImage(SimpleMaterial material, in ImageDrawObject drawObject)` | 方法 |
| `DrawText` | `public void DrawText(TextMaterial material, in TextDrawObject drawObject)` | 方法 |
| `DrawPolygon` | `public void DrawPolygon(PrimitivePolygonMaterial material, in ImageDrawObject drawObject)` | 方法 |
| `LoadTextureUsing` | `public void LoadTextureUsing(OpenGLTexture texture, ResourceDepot resourceDepot, string name)` | 方法 |
| `LoadTexture` | `public OpenGLTexture LoadTexture(ResourceDepot resourceDepot, string name)` | 方法 |
| `GetTexture` | `public OpenGLTexture GetTexture(string textureName)` | 方法 |
| `SetBlending` | `public void SetBlending(bool enable)` | 方法 |
| `SetVertexArrayClientState` | `public void SetVertexArrayClientState(bool enable)` | 方法 |
| `SetTextureCoordArrayClientState` | `public void SetTextureCoordArrayClientState(bool enable)` | 方法 |
| `MaxFrameRate` | `public const int MaxFrameRate` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 FrameworkDomain](../FrameworkDomain/)
- [同命名空间 GraphicsForm](../GraphicsForm/)
- [同命名空间 IMessageCommunicator](../IMessageCommunicator/)
- [同命名空间 InputData](../InputData/)
