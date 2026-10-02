---
title: "ThumbnailCache"
description: "Auto-generated class reference for ThumbnailCache."
---
# ThumbnailCache

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade.View
**Type:** `public abstract class ThumbnailCache<T> : IThumbnailCache where T : ThumbnailCreationData `
**Base:** IThumbnailCache
**Source:** TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ThumbnailCache.cs

## Overview

Auto-generated stub for `ThumbnailCache`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnInitialize
`protected virtual void OnInitialize()`

### OnFinalize
`protected virtual void OnFinalize()`

### OnTick
`protected virtual void OnTick(float dt)`

### OnClear
`protected virtual void OnClear()`

### OnImguiTick
`protected virtual void OnImguiTick()`

### OnRequestCancelled
`protected virtual void OnRequestCancelled(string renderId)`

### OnCreateTexture
`protected abstract TextureCreationInfo OnCreateTexture(T thumbnailCreationData)`

### OnReleaseTexture
`protected abstract bool OnReleaseTexture(T thumbnailCreationData)`

### CreateTexture
`public TextureCreationInfo CreateTexture(ThumbnailCreationData thumbnailCreationData)`

### ReleaseTexture
`public bool ReleaseTexture(ThumbnailCreationData thumbnailCreationData)`

### RemoveThumbnailCacheNode
`protected void RemoveThumbnailCacheNode(ThumbnailCacheNode node,bool releaseTexture = true)`

### CreateCamera
`protected static Camera CreateCamera(float left,float right,float bottom,float top,float near,float far)`

### CreateDebugIdFrom
`protected static string CreateDebugIdFrom(string renderId,string typeId,string additionalInfo = "")`

### GetTotalMemorySize
`protected int GetTotalMemorySize()`

### ByteWidthToString
`protected static string ByteWidthToString(int bytes)`

## See Also

- [Section index](../)
