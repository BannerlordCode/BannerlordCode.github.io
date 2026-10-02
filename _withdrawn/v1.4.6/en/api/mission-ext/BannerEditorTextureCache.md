---
title: "BannerEditorTextureCache"
description: "BannerEditorTextureCache: a public class in TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails, inheriting ThumbnailCache<BannerEditorTextureCreationData>; 6 exposed members (4 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerEditorTextureCache.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerEditorTextureCache

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class BannerEditorTextureCache : ThumbnailCache<BannerEditorTextureCreationData>`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerEditorTextureCache.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BannerEditorTextureCache lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerEditorTextureCache.cs. It is a public class, implementing/inheriting ThumbnailCache<BannerEditorTextureCreationData>; the inheritance chain is BannerEditorTextureCache → ThumbnailCache → IThumbnailCache. It exposes 6 public/protected members: 4 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerEditorTextureCache lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`, inheritance chain BannerEditorTextureCache → ThumbnailCache → IThumbnailCache. The surface is method-led (methods 4/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerEditorTextureCache.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Current` | `public static BannerEditorTextureCache Current` | property |
| `BannerEditorTextureCache` | `public BannerEditorTextureCache(int capacity) : base(capacity)` | constructor |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnCreateTexture` | `protected override TextureCreationInfo OnCreateTexture(BannerEditorTextureCreationData textureCreationData)` | method |
| `OnReleaseTexture` | `protected override bool OnReleaseTexture(BannerEditorTextureCreationData thumbnailCreationData)` | method |
| `FlushCache` | `public void FlushCache()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ThumbnailCache](../ThumbnailCache__1/)
- [same namespace AvatarThumbnailCache](../AvatarThumbnailCache/)
- [same namespace AvatarThumbnailCreationData](../AvatarThumbnailCreationData/)
- [same namespace BannerDebugInfo](../BannerDebugInfo/)
- [same namespace BannerEditorTextureCreationData](../BannerEditorTextureCreationData/)
