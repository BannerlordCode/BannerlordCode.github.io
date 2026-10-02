---
title: "ThumbnailCache"
description: "ThumbnailCache 的自动生成类参考。"
---
# ThumbnailCache

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade.View
**Type:** `public abstract class ThumbnailCache<T> : IThumbnailCache where T : ThumbnailCreationData `
**Base:** IThumbnailCache
**Source:** TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ThumbnailCache.cs

## 概述

`ThumbnailCache` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ThumbnailCache.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnInitialize
`protected virtual void OnInitialize() `

### OnFinalize
`protected virtual void OnFinalize() `

### OnTick
`protected virtual void OnTick(float dt) `

### OnClear
`protected virtual void OnClear() `

### OnImguiTick
`protected virtual void OnImguiTick() `

### OnRequestCancelled
`protected virtual void OnRequestCancelled(string renderId) `

### OnCreateTexture
`protected abstract TextureCreationInfo OnCreateTexture(T thumbnailCreationData)`

### OnReleaseTexture
`protected abstract bool OnReleaseTexture(T thumbnailCreationData)`

### CreateTexture
`public TextureCreationInfo CreateTexture(ThumbnailCreationData thumbnailCreationData) `

### ReleaseTexture
`public bool ReleaseTexture(ThumbnailCreationData thumbnailCreationData) `

### RemoveThumbnailCacheNode
`protected void RemoveThumbnailCacheNode(ThumbnailCacheNode node,bool releaseTexture = true) `

### CreateCamera
`protected static Camera CreateCamera(float left,float right,float bottom,float top,float near,float far) `

### CreateDebugIdFrom
`protected static string CreateDebugIdFrom(string renderId,string typeId,string additionalInfo = "") `

### GetTotalMemorySize
`protected int GetTotalMemorySize() `

### ByteWidthToString
`protected static string ByteWidthToString(int bytes) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
