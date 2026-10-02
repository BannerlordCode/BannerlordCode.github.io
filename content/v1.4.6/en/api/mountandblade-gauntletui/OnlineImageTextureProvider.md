---
title: "OnlineImageTextureProvider"
description: "OnlineImageTextureProvider: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting TextureProvider; 4 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/OnlineImageTextureProvider.cs."
---
# OnlineImageTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class OnlineImageTextureProvider : TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/OnlineImageTextureProvider.cs`

## Overview

OnlineImageTextureProvider lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/OnlineImageTextureProvider.cs. It is a public class, implementing/inheriting TextureProvider; the inheritance chain is OnlineImageTextureProvider → TextureProvider. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OnlineImageTextureProvider is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.TextureProviders) the module directory; inheritance chain OnlineImageTextureProvider → TextureProvider. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. TextureProvider on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/OnlineImageTextureProvider.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnlineSourceUrl` | `public string OnlineSourceUrl` | property |
| `OnlineImageTextureProvider` | `public OnlineImageTextureProvider()` | constructor |
| `Tick` | `public override void Tick(float dt)` | method |
| `OnGetTextureForRender` | `protected override TaleWorlds.TwoDimension.Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerTableauTextureProvider](../BannerTableauTextureProvider)
- [same namespace BrightnessDemoTextureProvider](../BrightnessDemoTextureProvider)
- [same namespace CharacterTableauTextureProvider](../CharacterTableauTextureProvider)
- [same namespace ItemTableauTextureProvider](../ItemTableauTextureProvider)
