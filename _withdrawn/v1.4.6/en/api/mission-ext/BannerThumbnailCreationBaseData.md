---
title: "BannerThumbnailCreationBaseData"
description: "BannerThumbnailCreationBaseData: a public class in TaleWorlds.MountAndBlade.View.Tableaus, inheriting ThumbnailCreationData; 5 exposed members (0 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerThumbnailCreationBaseData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerThumbnailCreationBaseData

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public abstract class BannerThumbnailCreationBaseData : ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerThumbnailCreationBaseData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BannerThumbnailCreationBaseData lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerThumbnailCreationBaseData.cs. It is a public class (abstract), implementing/inheriting ThumbnailCreationData; the inheritance chain is BannerThumbnailCreationBaseData → ThumbnailCreationData. It exposes 5 public/protected members: 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerThumbnailCreationBaseData lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.Tableaus`, inheritance chain BannerThumbnailCreationBaseData → ThumbnailCreationData. The surface is property-led (properties 4/5, methods 0/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerThumbnailCreationBaseData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Banner` | `public Banner Banner` | property |
| `DebugInfo` | `public BannerDebugInfo DebugInfo` | property |
| `IsTableauOrNineGrid` | `public bool IsTableauOrNineGrid` | property |
| `IsLarge` | `public bool IsLarge` | property |
| `BannerThumbnailCreationBaseData` | `public BannerThumbnailCreationBaseData(Banner banner, Action<Texture>setAction, Action cancelAction, BannerDebugInfo debugInfo, bool isTableauOrNineGrid, bool isLarge) : base("", setAction, cancelAction)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ThumbnailCreationData](../ThumbnailCreationData/)
- [same namespace BannerTableau](../BannerTableau/)
- [same namespace BasicCharacterTableau](../BasicCharacterTableau/)
- [same namespace BrightnessDemoTableau](../BrightnessDemoTableau/)
- [same namespace CharacterTableau](../CharacterTableau/)
