---
title: "SceneTextureProvider"
description: "SceneTextureProvider: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting TextureProvider; 7 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SceneTextureProvider.cs."
---
# SceneTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class SceneTextureProvider : TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SceneTextureProvider.cs`

## Overview

SceneTextureProvider lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SceneTextureProvider.cs. It is a public class, implementing/inheriting TextureProvider; the inheritance chain is SceneTextureProvider → TextureProvider. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SceneTextureProvider is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.TextureProviders) the module directory; inheritance chain SceneTextureProvider → TextureProvider. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. TextureProvider on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SceneTextureProvider.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WantedScene` | `public Scene WantedScene` | property |
| `IsReady` | `public bool? IsReady` | property |
| `Scene` | `public object Scene` | property |
| `SceneTextureProvider` | `public SceneTextureProvider()` | constructor |
| `Tick` | `public override void Tick(float dt)` | method |
| `SetTargetSize` | `public override void SetTargetSize(int width, int height)` | method |
| `OnGetTextureForRender` | `protected override TaleWorlds.TwoDimension.Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerTableauTextureProvider](../BannerTableauTextureProvider)
- [same namespace BrightnessDemoTextureProvider](../BrightnessDemoTextureProvider)
- [same namespace CharacterTableauTextureProvider](../CharacterTableauTextureProvider)
- [same namespace ItemTableauTextureProvider](../ItemTableauTextureProvider)
