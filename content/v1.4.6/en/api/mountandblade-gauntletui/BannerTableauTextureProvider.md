---
title: "BannerTableauTextureProvider"
description: "BannerTableauTextureProvider: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting TextureProvider; 13 exposed members (4 methods, 8 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BannerTableauTextureProvider.cs."
---
# BannerTableauTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class BannerTableauTextureProvider : TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BannerTableauTextureProvider.cs`

## Overview

BannerTableauTextureProvider lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BannerTableauTextureProvider.cs. It is a public class, implementing/inheriting TextureProvider; the inheritance chain is BannerTableauTextureProvider → TextureProvider. It exposes 13 public/protected members: 4 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerTableauTextureProvider is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.TextureProviders) the module directory; inheritance chain BannerTableauTextureProvider → TextureProvider. The surface is property-led (properties 8/13, methods 4/13), so it mostly exposes state for reading. TextureProvider on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BannerTableauTextureProvider.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BrightnessDemoTextureProvider](../BrightnessDemoTextureProvider)
- [same namespace CharacterTableauTextureProvider](../CharacterTableauTextureProvider)
- [same namespace ItemTableauTextureProvider](../ItemTableauTextureProvider)
- [same namespace OnlineImageTextureProvider](../OnlineImageTextureProvider)
