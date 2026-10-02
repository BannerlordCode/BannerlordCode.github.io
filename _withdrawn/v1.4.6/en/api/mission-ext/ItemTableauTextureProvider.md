---
title: "ItemTableauTextureProvider"
description: "ItemTableauTextureProvider: a public class in TaleWorlds.MountAndBlade.GauntletUI.TextureProviders, inheriting TextureProvider; 17 exposed members (4 methods, 12 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ItemTableauTextureProvider.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ItemTableauTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class ItemTableauTextureProvider : TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ItemTableauTextureProvider.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ItemTableauTextureProvider lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ItemTableauTextureProvider.cs. It is a public class, implementing/inheriting TextureProvider; the inheritance chain is ItemTableauTextureProvider → TextureProvider. It exposes 17 public/protected members: 4 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemTableauTextureProvider lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`, inheritance chain ItemTableauTextureProvider → TextureProvider. The surface is property-led (properties 12/17, methods 4/17), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ItemTableauTextureProvider.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ItemModifierId` | `public string ItemModifierId` | property |
| `StringId` | `public string StringId` | property |
| `Item` | `public ItemRosterElement Item` | property |
| `Ammo` | `public int Ammo` | property |
| `AverageUnitCost` | `public int AverageUnitCost` | property |
| `BannerCode` | `public string BannerCode` | property |
| `CurrentlyRotating` | `public bool CurrentlyRotating` | property |
| `RotateItemVertical` | `public float RotateItemVertical` | property |
| `RotateItemHorizontal` | `public float RotateItemHorizontal` | property |
| `InitialTiltRotation` | `public float InitialTiltRotation` | property |
| `InitialPanRotation` | `public float InitialPanRotation` | property |
| `CurrentZoom` | `public float CurrentZoom` | property |
| `ItemTableauTextureProvider` | `public ItemTableauTextureProvider()` | constructor |
| `Clear` | `public override void Clear(bool clearNextFrame)` | method |
| `OnGetTextureForRender` | `protected override TaleWorlds.TwoDimension.Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | method |
| `SetTargetSize` | `public override void SetTargetSize(int width, int height)` | method |
| `Tick` | `public override void Tick(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TextureProvider](../../gui/TextureProvider/)
- [same namespace BannerTableauTextureProvider](../BannerTableauTextureProvider/)
- [same namespace BrightnessDemoTextureProvider](../BrightnessDemoTextureProvider/)
- [same namespace CharacterTableauTextureProvider](../CharacterTableauTextureProvider/)
- [same namespace OnlineImageTextureProvider](../OnlineImageTextureProvider/)
