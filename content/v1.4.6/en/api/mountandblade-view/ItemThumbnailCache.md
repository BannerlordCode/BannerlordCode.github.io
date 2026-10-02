---
title: "ItemThumbnailCache"
description: "ItemThumbnailCache: a public class in TaleWorlds.MountAndBlade.View, inheriting ThumbnailCache<ItemThumbnailCreationData>; 6 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ItemThumbnailCache.cs."
---
# ItemThumbnailCache

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class ItemThumbnailCache : ThumbnailCache<ItemThumbnailCreationData>`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ItemThumbnailCache.cs`

## Overview

ItemThumbnailCache lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ItemThumbnailCache.cs. It is a public class, implementing/inheriting ThumbnailCache<ItemThumbnailCreationData>; the inheritance chain is ItemThumbnailCache → ThumbnailCache → IThumbnailCache. It exposes 6 public/protected members: 4 methods, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemThumbnailCache is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails) the module directory; inheritance chain ItemThumbnailCache → ThumbnailCache → IThumbnailCache. The surface is method-led (methods 4/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ItemThumbnailCache.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ItemThumbnailCache` | `public ItemThumbnailCache(int capacity) : base(capacity)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnCreateTexture` | `protected override TextureCreationInfo OnCreateTexture(ItemThumbnailCreationData thumbnailCreationData)` | method |
| `OnReleaseTexture` | `protected override bool OnReleaseTexture(ItemThumbnailCreationData thumbnailCreationData)` | method |
| `Alignment` | `public enum Alignment` | nested type |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ThumbnailCache](../ThumbnailCache__1)
- [same namespace AvatarThumbnailCache](../AvatarThumbnailCache)
- [same namespace AvatarThumbnailCreationData](../AvatarThumbnailCreationData)
- [same namespace BannerDebugInfo](../BannerDebugInfo)
- [same namespace BannerEditorTextureCache](../BannerEditorTextureCache)
