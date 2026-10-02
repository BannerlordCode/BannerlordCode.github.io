---
title: "ItemThumbnailCreationData"
description: "ItemThumbnailCreationData: a public class in TaleWorlds.MountAndBlade.View, inheriting ThumbnailCreationData; 3 exposed members (0 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ItemThumbnailCreationData.cs."
---
# ItemThumbnailCreationData

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class ItemThumbnailCreationData : ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ItemThumbnailCreationData.cs`

## Overview

ItemThumbnailCreationData lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ItemThumbnailCreationData.cs. It is a public class, implementing/inheriting ThumbnailCreationData; the inheritance chain is ItemThumbnailCreationData → ThumbnailCreationData. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemThumbnailCreationData is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails) the module directory; inheritance chain ItemThumbnailCreationData → ThumbnailCreationData. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ItemThumbnailCreationData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ItemObject` | `public ItemObject ItemObject` | property |
| `AdditionalArgs` | `public string AdditionalArgs` | property |
| `ItemThumbnailCreationData` | `public ItemThumbnailCreationData(ItemObject itemObject, string additionalArgs, Action<Texture>setAction, Action cancelAction) : base(itemObject.StringId, setAction, cancelAction)` | constructor |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ThumbnailCreationData](../ThumbnailCreationData)
- [same namespace AvatarThumbnailCache](../AvatarThumbnailCache)
- [same namespace AvatarThumbnailCreationData](../AvatarThumbnailCreationData)
- [same namespace BannerDebugInfo](../BannerDebugInfo)
- [same namespace BannerEditorTextureCache](../BannerEditorTextureCache)
