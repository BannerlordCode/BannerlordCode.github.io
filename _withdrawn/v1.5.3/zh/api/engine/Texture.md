---
title: "Texture"
description: "Texture 的自动生成类参考。"
---
# Texture

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Texture : Resource `
**Base:** Resource
**Source:** TaleWorlds.Engine/Texture.cs

## 概述

`Texture` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/Texture.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateTextureFromPath
`public static Texture CreateTextureFromPath(PlatformFilePath filePath) `

### GetPixelData
`public void GetPixelData(byte[] bytes) `

### TransformRenderTargetToResource
`public void TransformRenderTargetToResource(string name) `

### GetFromResource
`public static Texture GetFromResource(string resourceName) `

### IsLoaded
`public bool IsLoaded() `

### GetSDFBoundingBoxData
`public void GetSDFBoundingBoxData(ref Vec3 min,ref Vec3 max) `

### CheckAndGetFromResource
`public static Texture CheckAndGetFromResource(string resourceName) `

### ScaleTextureWithRatio
`public static void ScaleTextureWithRatio(ref int tableauSizeX,ref int tableauSizeY) `

### PreloadTexture
`public void PreloadTexture(bool blocking) `

### Release
`public void Release() `

### ReleaseImmediately
`public void ReleaseImmediately() `

### ReleaseAfterNumberOfFrames
`public void ReleaseAfterNumberOfFrames(int frameCount) `

### LoadTextureFromPath
`public static Texture LoadTextureFromPath(string fileName,string folder) `

### CreateDepthTarget
`public static Texture CreateDepthTarget(string name,int width,int height) `

### CreateFromByteArray
`public static Texture CreateFromByteArray(byte[] data,int width,int height) `

### SaveToFile
`public void SaveToFile(string path,bool isRelativePath) `

### SetTextureAsAlwaysValid
`public void SetTextureAsAlwaysValid() `

### CreateFromMemory
`public static Texture CreateFromMemory(byte[] data) `

### ReleaseGpuMemories
`public static void ReleaseGpuMemories() `

### CreateTableauTexture
`public static Texture CreateTableauTexture(string name,RenderTargetComponent.TextureUpdateEventHandler eventHandler,object objectRef,int tableauSizeX,int tableauSizeY) `

### CreateRenderTarget
`public static Texture CreateRenderTarget(string name,int width,int height,bool autoMipmaps,bool isTableau,bool createUninitialized = false,bool always_valid = false) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
