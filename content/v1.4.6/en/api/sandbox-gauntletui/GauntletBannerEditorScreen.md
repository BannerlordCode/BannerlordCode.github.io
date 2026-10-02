---
title: "GauntletBannerEditorScreen"
description: "GauntletBannerEditorScreen: a public class in SandBox.GauntletUI, inheriting ScreenBase, IGameStateListener; 8 exposed members (7 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs."
---
# GauntletBannerEditorScreen

**Namespace:** `SandBox.GauntletUI.BannerEditor`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletBannerEditorScreen : ScreenBase, IGameStateListener`
**File:** `SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs`

## Overview

GauntletBannerEditorScreen lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is GauntletBannerEditorScreen → ScreenBase. It exposes 8 public/protected members: 7 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletBannerEditorScreen is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.BannerEditor) the module directory; inheritance chain GauntletBannerEditorScreen → ScreenBase. The surface is method-led (methods 7/8, properties 0/8), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletBannerEditorScreen` | `public GauntletBannerEditorScreen(BannerEditorState bannerEditorState)` | constructor |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnDone` | `public void OnDone()` | method |
| `OnCancel` | `public void OnCancel()` | method |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerEditorView](../BannerEditorView)
