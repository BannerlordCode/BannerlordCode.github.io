---
title: "PreloadScreen"
description: "PreloadScreen: a public class in SandBox.View, inheriting ScreenBase, IGameStateListener; 3 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox.View/PreloadScreen.cs."
---
# PreloadScreen

**Namespace:** `SandBox.View`
**Module:** `SandBox.View`
**Type:** `public class PreloadScreen : ScreenBase, IGameStateListener`
**File:** `SandBox.View/PreloadScreen.cs`

## Overview

PreloadScreen lives in the SandBox.View module, source file SandBox.View/PreloadScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is PreloadScreen → ScreenBase. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PreloadScreen is a top-level type in SandBox.View, namespace matching the module directory; inheritance chain PreloadScreen → ScreenBase. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/PreloadScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PreloadScreen` | `public PreloadScreen(PreloadState inventoryState)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CampaignMusicHandler](../CampaignMusicHandler)
- [same namespace IChangeableScreen](../IChangeableScreen)
- [same namespace MainHeroSaveVisualSupplier](../MainHeroSaveVisualSupplier)
- [same namespace SandboxView](../SandboxView)
