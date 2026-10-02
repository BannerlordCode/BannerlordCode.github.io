---
title: "BannerTableauTextureProvider"
description: "BannerTableauTextureProvider: a public class in TaleWorlds.MountAndBlade.GauntletUI.TextureProviders, inheriting TextureProvider; 13 exposed members (4 methods, 8 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BannerTableauTextureProvider.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerTableauTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class BannerTableauTextureProvider : TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BannerTableauTextureProvider.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BannerTableauTextureProvider lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BannerTableauTextureProvider.cs. It is a public class, implementing/inheriting TextureProvider; the inheritance chain is BannerTableauTextureProvider → TextureProvider. It exposes 13 public/protected members: 4 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerTableauTextureProvider lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`, inheritance chain BannerTableauTextureProvider → TextureProvider. The surface is property-led (properties 8/13, methods 4/13), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BannerTableauTextureProvider.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BannerCodeText` | `public string BannerCodeText` | property |
| `IsNineGrid` | `public bool IsNineGrid` | property |
| `CustomRenderScale` | `public float CustomRenderScale` | property |
| `UpdatePositionValueManual` | `public Vec2 UpdatePositionValueManual` | property |
| `UpdateSizeValueManual` | `public Vec2 UpdateSizeValueManual` | property |
| `bool>UpdateRotationValueManualWithMirror` | `public ValueTuple<float, bool>UpdateRotationValueManualWithMirror` | property |
| `MeshIndexToUpdate` | `public int MeshIndexToUpdate` | property |
| `IsHidden` | `public bool IsHidden` | property |
| `BannerTableauTextureProvider` | `public BannerTableauTextureProvider()` | constructor |
| `Clear` | `public override void Clear(bool clearNextFrame)` | method |
| `OnGetTextureForRender` | `protected override TaleWorlds.TwoDimension.Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | method |
| `SetTargetSize` | `public override void SetTargetSize(int width, int height)` | method |
| `Tick` | `public override void Tick(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TextureProvider](../../gui/TextureProvider/)
- [same namespace BrightnessDemoTextureProvider](../BrightnessDemoTextureProvider/)
- [same namespace CharacterTableauTextureProvider](../CharacterTableauTextureProvider/)
- [same namespace ItemTableauTextureProvider](../ItemTableauTextureProvider/)
- [same namespace OnlineImageTextureProvider](../OnlineImageTextureProvider/)
