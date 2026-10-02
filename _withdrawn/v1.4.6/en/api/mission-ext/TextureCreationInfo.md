---
title: "TextureCreationInfo"
description: "TextureCreationInfo: a public struct in TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails; 5 exposed members (3 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/TextureCreationInfo.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TextureCreationInfo

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public struct TextureCreationInfo`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/TextureCreationInfo.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TextureCreationInfo lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/TextureCreationInfo.cs. It is a public struct; the inheritance chain is TextureCreationInfo. It exposes 5 public/protected members: 3 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TextureCreationInfo lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`, inheritance chain TextureCreationInfo. The surface is method-led (methods 3/5, properties 2/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/TextureCreationInfo.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsSuccess` | `public bool IsSuccess` | property |
| `IsFail` | `public bool IsFail` | property |
| `WithNewTexture` | `public static TextureCreationInfo WithNewTexture(Texture texture = null)` | method |
| `WithExistingTexture` | `public static TextureCreationInfo WithExistingTexture(Texture texture)` | method |
| `Fail` | `public static TextureCreationInfo Fail()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AvatarThumbnailCache](../AvatarThumbnailCache/)
- [same namespace AvatarThumbnailCreationData](../AvatarThumbnailCreationData/)
- [same namespace BannerDebugInfo](../BannerDebugInfo/)
- [same namespace BannerEditorTextureCache](../BannerEditorTextureCache/)
