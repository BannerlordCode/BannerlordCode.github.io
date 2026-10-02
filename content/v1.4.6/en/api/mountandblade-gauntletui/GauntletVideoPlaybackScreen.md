---
title: "GauntletVideoPlaybackScreen"
description: "GauntletVideoPlaybackScreen: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting VideoPlaybackScreen; 3 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/GauntletVideoPlaybackScreen.cs."
---
# GauntletVideoPlaybackScreen

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletVideoPlaybackScreen : VideoPlaybackScreen`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletVideoPlaybackScreen.cs`

## Overview

GauntletVideoPlaybackScreen lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/GauntletVideoPlaybackScreen.cs. It is a public class, implementing/inheriting VideoPlaybackScreen; the inheritance chain is GauntletVideoPlaybackScreen → VideoPlaybackScreen. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletVideoPlaybackScreen is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace matching the module directory; inheritance chain GauntletVideoPlaybackScreen → VideoPlaybackScreen. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. VideoPlaybackScreen on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/GauntletVideoPlaybackScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletVideoPlaybackScreen` | `public GauntletVideoPlaybackScreen(VideoPlaybackState videoPlaybackState) : base(videoPlaybackState)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnVideoPlaybackTick` | `protected override void OnVideoPlaybackTick(float dt)` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView)
