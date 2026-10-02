---
title: "SaveLoadHeroTableauTextureProvider"
description: "SaveLoadHeroTableauTextureProvider: a public class in TaleWorlds.MountAndBlade.GauntletUI.TextureProviders, inheriting TextureProvider; 9 exposed members (4 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SaveLoadHeroTableauTextureProvider.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SaveLoadHeroTableauTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class SaveLoadHeroTableauTextureProvider : TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SaveLoadHeroTableauTextureProvider.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SaveLoadHeroTableauTextureProvider lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SaveLoadHeroTableauTextureProvider.cs. It is a public class, implementing/inheriting TextureProvider; the inheritance chain is SaveLoadHeroTableauTextureProvider → TextureProvider. It exposes 9 public/protected members: 4 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SaveLoadHeroTableauTextureProvider lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`, inheritance chain SaveLoadHeroTableauTextureProvider → TextureProvider. The surface is method-led (methods 4/9, properties 4/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SaveLoadHeroTableauTextureProvider.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `HeroVisualCode` | `public string HeroVisualCode` | property |
| `BannerCode` | `public string BannerCode` | property |
| `IsVersionCompatible` | `public bool IsVersionCompatible` | property |
| `CurrentlyRotating` | `public bool CurrentlyRotating` | property |
| `SaveLoadHeroTableauTextureProvider` | `public SaveLoadHeroTableauTextureProvider()` | constructor |
| `Tick` | `public override void Tick(float dt)` | method |
| `SetTargetSize` | `public override void SetTargetSize(int width, int height)` | method |
| `Clear` | `public override void Clear(bool clearNextFrame)` | method |
| `OnGetTextureForRender` | `protected override TaleWorlds.TwoDimension.Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TextureProvider](../../gui/TextureProvider/)
- [same namespace BannerTableauTextureProvider](../BannerTableauTextureProvider/)
- [same namespace BrightnessDemoTextureProvider](../BrightnessDemoTextureProvider/)
- [same namespace CharacterTableauTextureProvider](../CharacterTableauTextureProvider/)
- [same namespace ItemTableauTextureProvider](../ItemTableauTextureProvider/)
