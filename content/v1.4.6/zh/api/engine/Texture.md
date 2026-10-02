---
title: "Texture"
description: "Texture：TaleWorlds.Engine 的 public 类，继承 Resource；公开成员 30 个（方法 21、属性 9、字段 0）。源文件 TaleWorlds.Engine/Texture.cs。"
---
# Texture

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Texture : Resource`
**File:** `TaleWorlds.Engine/Texture.cs`

## 概述

Texture 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Texture.cs。它是一个 public 类（sealed），实现/继承 Resource，继承链为 Texture → Resource → NativeObject。public/protected 成员共 30 个：21 方法、9 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Texture 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 Texture → Resource → NativeObject。成员构成以方法为主（方法 21/30，属性 9/30），对外主要以操作入口暴露。继承链上的 NativeObject 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Texture.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsReleased` | `public bool IsReleased` | 属性 |
| `Width` | `public int Width` | 属性 |
| `Height` | `public int Height` | 属性 |
| `MemorySize` | `public int MemorySize` | 属性 |
| `IsRenderTarget` | `public bool IsRenderTarget` | 属性 |
| `CreateTextureFromPath` | `public static Texture CreateTextureFromPath(PlatformFilePath filePath)` | 方法 |
| `GetPixelData` | `public void GetPixelData(byte[]bytes)` | 方法 |
| `Name` | `public string Name` | 属性 |
| `TransformRenderTargetToResource` | `public void TransformRenderTargetToResource(string name)` | 方法 |
| `GetFromResource` | `public static Texture GetFromResource(string resourceName)` | 方法 |
| `IsLoaded` | `public bool IsLoaded()` | 方法 |
| `GetSDFBoundingBoxData` | `public void GetSDFBoundingBoxData(ref Vec3 min, ref Vec3 max)` | 方法 |
| `CheckAndGetFromResource` | `public static Texture CheckAndGetFromResource(string resourceName)` | 方法 |
| `ScaleTextureWithRatio` | `public static void ScaleTextureWithRatio(ref int tableauSizeX, ref int tableauSizeY)` | 方法 |
| `PreloadTexture` | `public void PreloadTexture(bool blocking)` | 方法 |
| `Release` | `public void Release()` | 方法 |
| `ReleaseImmediately` | `public void ReleaseImmediately()` | 方法 |
| `ReleaseAfterNumberOfFrames` | `public void ReleaseAfterNumberOfFrames(int frameCount)` | 方法 |
| `LoadTextureFromPath` | `public static Texture LoadTextureFromPath(string fileName, string folder)` | 方法 |
| `CreateDepthTarget` | `public static Texture CreateDepthTarget(string name, int width, int height)` | 方法 |
| `CreateFromByteArray` | `public static Texture CreateFromByteArray(byte[]data, int width, int height)` | 方法 |
| `SaveToFile` | `public void SaveToFile(string path, bool isRelativePath)` | 方法 |
| `SetTextureAsAlwaysValid` | `public void SetTextureAsAlwaysValid()` | 方法 |
| `CreateFromMemory` | `public static Texture CreateFromMemory(byte[]data)` | 方法 |
| `ReleaseGpuMemories` | `public static void ReleaseGpuMemories()` | 方法 |
| `RenderTargetComponent` | `public RenderTargetComponent RenderTargetComponent` | 属性 |
| `TableauView` | `public TableauView TableauView` | 属性 |
| `UserData` | `public object UserData` | 属性 |
| `CreateTableauTexture` | `public static Texture CreateTableauTexture(string name, RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, int tableauSizeX, int tableauSizeY)` | 方法 |
| `CreateRenderTarget` | `public static Texture CreateRenderTarget(string name, int width, int height, bool autoMipmaps, bool isTableau, bool createUninitialized = false, bool always_valid = false)` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 Resource](../Resource)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
