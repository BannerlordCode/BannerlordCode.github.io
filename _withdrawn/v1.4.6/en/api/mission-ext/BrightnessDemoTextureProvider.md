---
title: "BrightnessDemoTextureProvider"
description: "BrightnessDemoTextureProvider: a public class in TaleWorlds.MountAndBlade.GauntletUI.TextureProviders, inheriting TextureProvider; 6 exposed members (4 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BrightnessDemoTextureProvider.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BrightnessDemoTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class BrightnessDemoTextureProvider : TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BrightnessDemoTextureProvider.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BrightnessDemoTextureProvider lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BrightnessDemoTextureProvider.cs. It is a public class, implementing/inheriting TextureProvider; the inheritance chain is BrightnessDemoTextureProvider → TextureProvider. It exposes 6 public/protected members: 4 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BrightnessDemoTextureProvider lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`, inheritance chain BrightnessDemoTextureProvider → TextureProvider. The surface is method-led (methods 4/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BrightnessDemoTextureProvider.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DemoType` | `public int DemoType` | property |
| `BrightnessDemoTextureProvider` | `public BrightnessDemoTextureProvider()` | constructor |
| `Tick` | `public override void Tick(float dt)` | method |
| `Clear` | `public override void Clear(bool clearNextFrame)` | method |
| `SetTargetSize` | `public override void SetTargetSize(int width, int height)` | method |
| `OnGetTextureForRender` | `protected override TaleWorlds.TwoDimension.Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TextureProvider](../../gui/TextureProvider/)
- [same namespace BannerTableauTextureProvider](../BannerTableauTextureProvider/)
- [same namespace CharacterTableauTextureProvider](../CharacterTableauTextureProvider/)
- [same namespace ItemTableauTextureProvider](../ItemTableauTextureProvider/)
- [same namespace OnlineImageTextureProvider](../OnlineImageTextureProvider/)
