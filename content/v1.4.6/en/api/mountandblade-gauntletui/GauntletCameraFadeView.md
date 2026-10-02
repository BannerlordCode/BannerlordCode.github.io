---
title: "GauntletCameraFadeView"
description: "GauntletCameraFadeView: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting GlobalLayer, IScreenFadeHandler; 7 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/GauntletCameraFadeView.cs."
---
# GauntletCameraFadeView

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletCameraFadeView : GlobalLayer, IScreenFadeHandler`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletCameraFadeView.cs`

## Overview

GauntletCameraFadeView lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/GauntletCameraFadeView.cs. It is a public class, implementing/inheriting GlobalLayer, IScreenFadeHandler; the inheritance chain is GauntletCameraFadeView → GlobalLayer. It exposes 7 public/protected members: 6 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletCameraFadeView is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace matching the module directory; inheritance chain GauntletCameraFadeView → GlobalLayer. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. GlobalLayer on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/GauntletCameraFadeView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletCameraFadeView` | `public GauntletCameraFadeView()` | constructor |
| `Initialize` | `public static void Initialize()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `BeginFadeOutAndIn` | `public void BeginFadeOutAndIn(float fadeOutDuration = 0.5f, float blackOutDuration = 0.5f, float fadeInDuration = 0.5f)` | method |
| `BeginFadeOut` | `public void BeginFadeOut(float fadeOutDuration = 0.5f)` | method |
| `BeginFadeIn` | `public void BeginFadeIn(float fadeInDuration = 0.5f)` | method |
| `GetScreenFadeState` | `public ScreenFadeController.ScreenFadeState GetScreenFadeState()` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen)
- [same namespace GauntletChatLogView](../GauntletChatLogView)
