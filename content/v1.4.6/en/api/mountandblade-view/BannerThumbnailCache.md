---
title: "BannerThumbnailCache"
description: "BannerThumbnailCache: a public class in TaleWorlds.MountAndBlade.View, inheriting ThumbnailCache<BannerThumbnailCreationData>; 5 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerThumbnailCache.cs."
---
# BannerThumbnailCache

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class BannerThumbnailCache : ThumbnailCache<BannerThumbnailCreationData>`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerThumbnailCache.cs`

## Overview

BannerThumbnailCache lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerThumbnailCache.cs. It is a public class, implementing/inheriting ThumbnailCache<BannerThumbnailCreationData>; the inheritance chain is BannerThumbnailCache → ThumbnailCache → IThumbnailCache. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerThumbnailCache is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails) the module directory; inheritance chain BannerThumbnailCache → ThumbnailCache → IThumbnailCache. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerThumbnailCache.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BannerThumbnailCache` | `public BannerThumbnailCache(int capacity) : base(capacity)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnCreateTexture` | `protected override TextureCreationInfo OnCreateTexture(BannerThumbnailCreationData thumbnailCreationData)` | method |
| `OnReleaseTexture` | `protected override bool OnReleaseTexture(BannerThumbnailCreationData thumbnailCreationData)` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ThumbnailCache](../ThumbnailCache__1)
- [same namespace AvatarThumbnailCache](../AvatarThumbnailCache)
- [same namespace AvatarThumbnailCreationData](../AvatarThumbnailCreationData)
- [same namespace BannerDebugInfo](../BannerDebugInfo)
- [same namespace BannerEditorTextureCache](../BannerEditorTextureCache)
