---
title: "ThumbnailCache<T>"
description: "ThumbnailCache<T>: a public class in TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails, inheriting IThumbnailCache; 19 exposed members (15 methods, 2 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ThumbnailCache.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ThumbnailCache<T>

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public abstract class ThumbnailCache<T>: IThumbnailCache where T : ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ThumbnailCache.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ThumbnailCache<T> lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ThumbnailCache.cs. It is a public class (abstract), implementing/inheriting IThumbnailCache; the inheritance chain is ThumbnailCache → IThumbnailCache. It exposes 19 public/protected members: 15 methods, 2 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ThumbnailCache<T> lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`, inheritance chain ThumbnailCache → IThumbnailCache. The surface is method-led (methods 15/19, properties 2/19), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ThumbnailCache.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Count` | `public int Count` | property |
| `RenderCallbackCount` | `public int RenderCallbackCount` | property |
| `ThumbnailCache` | `public ThumbnailCache(int capacity)` | constructor |
| `OnInitialize` | `protected virtual void OnInitialize()` | method |
| `OnFinalize` | `protected virtual void OnFinalize()` | method |
| `OnTick` | `protected virtual void OnTick(float dt)` | method |
| `OnClear` | `protected virtual void OnClear()` | method |
| `OnImguiTick` | `protected virtual void OnImguiTick()` | method |
| `OnRequestCancelled` | `protected virtual void OnRequestCancelled(string renderId)` | method |
| `OnCreateTexture` | `protected abstract TextureCreationInfo OnCreateTexture(T thumbnailCreationData);` | method |
| `OnReleaseTexture` | `protected abstract bool OnReleaseTexture(T thumbnailCreationData);` | method |
| `CreateTexture` | `public TextureCreationInfo CreateTexture(ThumbnailCreationData thumbnailCreationData)` | method |
| `ReleaseTexture` | `public bool ReleaseTexture(ThumbnailCreationData thumbnailCreationData)` | method |
| `RemoveThumbnailCacheNode` | `protected void RemoveThumbnailCacheNode(ThumbnailCacheNode node, bool releaseTexture = true)` | method |
| `CreateCamera` | `protected static Camera CreateCamera(float left, float right, float bottom, float top, float near, float far)` | method |
| `CreateDebugIdFrom` | `protected static string CreateDebugIdFrom(string renderId, string typeId, string additionalInfo = "")` | method |
| `GetTotalMemorySize` | `protected int GetTotalMemorySize()` | method |
| `ByteWidthToString` | `protected static string ByteWidthToString(int bytes)` | method |
| `_nodeComparer` | `protected NodeComparer _nodeComparer` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IThumbnailCache](../IThumbnailCache/)
- [same namespace AvatarThumbnailCache](../AvatarThumbnailCache/)
- [same namespace AvatarThumbnailCreationData](../AvatarThumbnailCreationData/)
- [same namespace BannerDebugInfo](../BannerDebugInfo/)
- [same namespace BannerEditorTextureCache](../BannerEditorTextureCache/)
