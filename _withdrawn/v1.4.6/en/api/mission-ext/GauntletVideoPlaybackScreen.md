---
title: "GauntletVideoPlaybackScreen"
description: "GauntletVideoPlaybackScreen: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting VideoPlaybackScreen; 3 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/GauntletVideoPlaybackScreen.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletVideoPlaybackScreen

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletVideoPlaybackScreen : VideoPlaybackScreen`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletVideoPlaybackScreen.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GauntletVideoPlaybackScreen lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/GauntletVideoPlaybackScreen.cs. It is a public class, implementing/inheriting VideoPlaybackScreen; the inheritance chain is GauntletVideoPlaybackScreen → VideoPlaybackScreen → ScreenBase. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletVideoPlaybackScreen lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI`, inheritance chain GauntletVideoPlaybackScreen → VideoPlaybackScreen → ScreenBase. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/GauntletVideoPlaybackScreen.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GauntletVideoPlaybackScreen` | `public GauntletVideoPlaybackScreen(VideoPlaybackState videoPlaybackState) : base(videoPlaybackState)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnVideoPlaybackTick` | `protected override void OnVideoPlaybackTick(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface VideoPlaybackScreen](../VideoPlaybackScreen/)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager/)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel/)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen/)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView/)
