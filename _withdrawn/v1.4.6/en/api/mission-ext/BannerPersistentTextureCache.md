---
title: "BannerPersistentTextureCache"
description: "BannerPersistentTextureCache: a public class in TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails, inheriting ThumbnailCache<BannerTextureCreationData>; 6 exposed members (4 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerPersistentTextureCache.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerPersistentTextureCache

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class BannerPersistentTextureCache : ThumbnailCache<BannerTextureCreationData>`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerPersistentTextureCache.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BannerPersistentTextureCache lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerPersistentTextureCache.cs. It is a public class, implementing/inheriting ThumbnailCache<BannerTextureCreationData>; the inheritance chain is BannerPersistentTextureCache → ThumbnailCache → IThumbnailCache. It exposes 6 public/protected members: 4 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerPersistentTextureCache lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`, inheritance chain BannerPersistentTextureCache → ThumbnailCache → IThumbnailCache. The surface is method-led (methods 4/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerPersistentTextureCache.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Current` | `public static BannerPersistentTextureCache Current` | property |
| `BannerPersistentTextureCache` | `public BannerPersistentTextureCache() : base(1000)` | constructor |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnCreateTexture` | `protected override TextureCreationInfo OnCreateTexture(BannerTextureCreationData textureCreationData)` | method |
| `OnReleaseTexture` | `protected override bool OnReleaseTexture(BannerTextureCreationData thumbnailCreationData)` | method |
| `FlushCache` | `public void FlushCache()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ThumbnailCache](../ThumbnailCache__1/)
- [same namespace AvatarThumbnailCache](../AvatarThumbnailCache/)
- [same namespace AvatarThumbnailCreationData](../AvatarThumbnailCreationData/)
- [same namespace BannerDebugInfo](../BannerDebugInfo/)
- [same namespace BannerEditorTextureCache](../BannerEditorTextureCache/)
