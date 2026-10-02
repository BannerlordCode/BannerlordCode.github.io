---
title: "ThumbnailCreatorView"
description: "ThumbnailCreatorView 的自动生成类参考。"
---
# ThumbnailCreatorView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ThumbnailCreatorView : View `
**Base:** View
**Source:** TaleWorlds.Engine/ThumbnailCreatorView.cs

## 概述

`ThumbnailCreatorView` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/ThumbnailCreatorView.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateThumbnailCreatorView
`public static ThumbnailCreatorView CreateThumbnailCreatorView() `

### RegisterScene
`public void RegisterScene(Scene scene,bool usePostFx = true) `

### RegisterCachedEntity
`public void RegisterCachedEntity(Scene scene,GameEntity entity,string cacheId) `

### UnregisterCachedEntity
`public void UnregisterCachedEntity(string cacheId) `

### RegisterRenderRequest
`public void RegisterRenderRequest(ref ThumbnailRenderRequest request) `

### ClearRequests
`public void ClearRequests() `

### CancelRequest
`public void CancelRequest(string renderID) `

### GetNumberOfPendingRequests
`public int GetNumberOfPendingRequests() `

### IsMemoryCleared
`public bool IsMemoryCleared() `

### OnThumbnailRenderCompleteDelegate
`public delegate void OnThumbnailRenderCompleteDelegate(string renderId,Texture renderTarget)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
