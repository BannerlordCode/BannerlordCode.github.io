---
title: "ThumbnailCreatorView"
description: "Auto-generated class reference for ThumbnailCreatorView."
---
# ThumbnailCreatorView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ThumbnailCreatorView : View `
**Base:** View
**Source:** TaleWorlds.Engine/ThumbnailCreatorView.cs

## Overview

Auto-generated stub for `ThumbnailCreatorView`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CreateThumbnailCreatorView
`public static ThumbnailCreatorView CreateThumbnailCreatorView()`

### RegisterScene
`public void RegisterScene(Scene scene,bool usePostFx = true)`

### RegisterCachedEntity
`public void RegisterCachedEntity(Scene scene,GameEntity entity,string cacheId)`

### UnregisterCachedEntity
`public void UnregisterCachedEntity(string cacheId)`

### RegisterRenderRequest
`public void RegisterRenderRequest(ref ThumbnailRenderRequest request)`

### ClearRequests
`public void ClearRequests()`

### CancelRequest
`public void CancelRequest(string renderID)`

### GetNumberOfPendingRequests
`public int GetNumberOfPendingRequests()`

### IsMemoryCleared
`public bool IsMemoryCleared()`

### OnThumbnailRenderCompleteDelegate
`public delegate void OnThumbnailRenderCompleteDelegate(string renderId,Texture renderTarget)`

## See Also

- [Section index](../)
