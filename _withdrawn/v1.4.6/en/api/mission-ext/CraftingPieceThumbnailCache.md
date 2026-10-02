---
title: "CraftingPieceThumbnailCache"
description: "CraftingPieceThumbnailCache: a public class in TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails, inheriting ThumbnailCache<CraftingPieceCreationData>; 5 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CraftingPieceThumbnailCache.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CraftingPieceThumbnailCache

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class CraftingPieceThumbnailCache : ThumbnailCache<CraftingPieceCreationData>`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CraftingPieceThumbnailCache.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CraftingPieceThumbnailCache lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CraftingPieceThumbnailCache.cs. It is a public class, implementing/inheriting ThumbnailCache<CraftingPieceCreationData>; the inheritance chain is CraftingPieceThumbnailCache → ThumbnailCache → IThumbnailCache. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingPieceThumbnailCache lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`, inheritance chain CraftingPieceThumbnailCache → ThumbnailCache → IThumbnailCache. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CraftingPieceThumbnailCache.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CraftingPieceThumbnailCache` | `public CraftingPieceThumbnailCache(int capacity) : base(capacity)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnCreateTexture` | `protected override TextureCreationInfo OnCreateTexture(CraftingPieceCreationData thumbnailCreationData)` | method |
| `OnReleaseTexture` | `protected override bool OnReleaseTexture(CraftingPieceCreationData thumbnailCreationData)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ThumbnailCache](../ThumbnailCache__1/)
- [same namespace AvatarThumbnailCache](../AvatarThumbnailCache/)
- [same namespace AvatarThumbnailCreationData](../AvatarThumbnailCreationData/)
- [same namespace BannerDebugInfo](../BannerDebugInfo/)
- [same namespace BannerEditorTextureCache](../BannerEditorTextureCache/)
