---
title: "GauntletBannerBuilderScreen"
description: "GauntletBannerBuilderScreen: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting ScreenBase, IGameStateListener; 6 exposed members (4 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/GauntletBannerBuilderScreen.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletBannerBuilderScreen

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletBannerBuilderScreen : ScreenBase, IGameStateListener`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletBannerBuilderScreen.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GauntletBannerBuilderScreen lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/GauntletBannerBuilderScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is GauntletBannerBuilderScreen → ScreenBase. It exposes 6 public/protected members: 4 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletBannerBuilderScreen lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI`, inheritance chain GauntletBannerBuilderScreen → ScreenBase. The surface is method-led (methods 4/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/GauntletBannerBuilderScreen.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SceneLayer` | `public SceneLayer SceneLayer` | property |
| `GauntletBannerBuilderScreen` | `public GauntletBannerBuilderScreen(BannerBuilderState state)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `Exit` | `public void Exit(bool isCancel)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IGameStateListener](../../core-extra/IGameStateListener/)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager/)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel/)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView/)
- [same namespace GauntletChatLogView](../GauntletChatLogView/)
