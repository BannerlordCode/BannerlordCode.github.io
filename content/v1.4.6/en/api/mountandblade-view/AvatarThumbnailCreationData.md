---
title: "AvatarThumbnailCreationData"
description: "AvatarThumbnailCreationData: a public class in TaleWorlds.MountAndBlade.View, inheriting ThumbnailCreationData; 6 exposed members (0 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/AvatarThumbnailCreationData.cs."
---
# AvatarThumbnailCreationData

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class AvatarThumbnailCreationData : ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/AvatarThumbnailCreationData.cs`

## Overview

AvatarThumbnailCreationData lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/AvatarThumbnailCreationData.cs. It is a public class, implementing/inheriting ThumbnailCreationData; the inheritance chain is AvatarThumbnailCreationData → ThumbnailCreationData. It exposes 6 public/protected members: 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AvatarThumbnailCreationData is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails) the module directory; inheritance chain AvatarThumbnailCreationData → ThumbnailCreationData. The surface is property-led (properties 5/6, methods 0/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/AvatarThumbnailCreationData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AvatarID` | `public string AvatarID` | property |
| `byte[]AvatarBytes` | `public byte[]AvatarBytes` | property |
| `Width` | `public uint Width` | property |
| `Height` | `public uint Height` | property |
| `ImageType` | `public AvatarData.ImageType ImageType` | property |
| `AvatarThumbnailCreationData` | `public AvatarThumbnailCreationData(string avatarID, byte[]avatarBytes, uint width, uint height, AvatarData.ImageType imageType) : base(avatarID, null, null)` | constructor |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ThumbnailCreationData](../ThumbnailCreationData)
- [same namespace AvatarThumbnailCache](../AvatarThumbnailCache)
- [same namespace BannerDebugInfo](../BannerDebugInfo)
- [same namespace BannerEditorTextureCache](../BannerEditorTextureCache)
- [same namespace BannerEditorTextureCreationData](../BannerEditorTextureCreationData)
