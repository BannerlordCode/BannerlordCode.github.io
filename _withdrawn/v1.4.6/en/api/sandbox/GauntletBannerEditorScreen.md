---
title: "GauntletBannerEditorScreen"
description: "GauntletBannerEditorScreen: a public class in SandBox.GauntletUI.BannerEditor, inheriting ScreenBase, IGameStateListener; 8 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletBannerEditorScreen

**Namespace:** `SandBox.GauntletUI.BannerEditor`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletBannerEditorScreen : ScreenBase, IGameStateListener`
**File:** `SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletBannerEditorScreen lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is GauntletBannerEditorScreen → ScreenBase. It exposes 8 public/protected members: 7 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletBannerEditorScreen lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.BannerEditor`, inheritance chain GauntletBannerEditorScreen → ScreenBase. The surface is method-led (methods 7/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IGameStateListener](../../core-extra/IGameStateListener/)
- [same namespace BannerEditorView](../BannerEditorView/)
