---
title: "BrightnessDemoTextureProvider"
description: "BrightnessDemoTextureProvider: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting TextureProvider; 6 exposed members (4 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BrightnessDemoTextureProvider.cs."
---
# BrightnessDemoTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class BrightnessDemoTextureProvider : TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BrightnessDemoTextureProvider.cs`

## Overview

BrightnessDemoTextureProvider lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BrightnessDemoTextureProvider.cs. It is a public class, implementing/inheriting TextureProvider; the inheritance chain is BrightnessDemoTextureProvider → TextureProvider. It exposes 6 public/protected members: 4 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BrightnessDemoTextureProvider is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.TextureProviders) the module directory; inheritance chain BrightnessDemoTextureProvider → TextureProvider. The surface is method-led (methods 4/6, properties 1/6), so it mostly exposes operations. TextureProvider on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BrightnessDemoTextureProvider.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DemoType` | `public int DemoType` | property |
| `BrightnessDemoTextureProvider` | `public BrightnessDemoTextureProvider()` | constructor |
| `Tick` | `public override void Tick(float dt)` | method |
| `Clear` | `public override void Clear(bool clearNextFrame)` | method |
| `SetTargetSize` | `public override void SetTargetSize(int width, int height)` | method |
| `OnGetTextureForRender` | `protected override TaleWorlds.TwoDimension.Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerTableauTextureProvider](../BannerTableauTextureProvider)
- [same namespace CharacterTableauTextureProvider](../CharacterTableauTextureProvider)
- [same namespace ItemTableauTextureProvider](../ItemTableauTextureProvider)
- [same namespace OnlineImageTextureProvider](../OnlineImageTextureProvider)
