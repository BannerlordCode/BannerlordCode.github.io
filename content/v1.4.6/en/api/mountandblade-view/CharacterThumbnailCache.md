---
title: "CharacterThumbnailCache"
description: "CharacterThumbnailCache: a public class in TaleWorlds.MountAndBlade.View, inheriting ThumbnailCache<CharacterThumbnailCreationData>; 5 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CharacterThumbnailCache.cs."
---
# CharacterThumbnailCache

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class CharacterThumbnailCache : ThumbnailCache<CharacterThumbnailCreationData>`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CharacterThumbnailCache.cs`

## Overview

CharacterThumbnailCache lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CharacterThumbnailCache.cs. It is a public class, implementing/inheriting ThumbnailCache<CharacterThumbnailCreationData>; the inheritance chain is CharacterThumbnailCache → ThumbnailCache → IThumbnailCache. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterThumbnailCache is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails) the module directory; inheritance chain CharacterThumbnailCache → ThumbnailCache → IThumbnailCache. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CharacterThumbnailCache.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterThumbnailCache` | `public CharacterThumbnailCache(int capacity) : base(capacity)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnCreateTexture` | `protected override TextureCreationInfo OnCreateTexture(CharacterThumbnailCreationData thumbnailCreationData)` | method |
| `OnReleaseTexture` | `protected override bool OnReleaseTexture(CharacterThumbnailCreationData thumbnailCreationData)` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ThumbnailCache](../ThumbnailCache__1)
- [same namespace AvatarThumbnailCache](../AvatarThumbnailCache)
- [same namespace AvatarThumbnailCreationData](../AvatarThumbnailCreationData)
- [same namespace BannerDebugInfo](../BannerDebugInfo)
- [same namespace BannerEditorTextureCache](../BannerEditorTextureCache)
