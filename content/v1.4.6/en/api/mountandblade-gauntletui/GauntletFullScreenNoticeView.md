---
title: "GauntletFullScreenNoticeView"
description: "GauntletFullScreenNoticeView: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting GlobalLayer; 5 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/GauntletFullScreenNoticeView.cs."
---
# GauntletFullScreenNoticeView

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletFullScreenNoticeView : GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletFullScreenNoticeView.cs`

## Overview

GauntletFullScreenNoticeView lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/GauntletFullScreenNoticeView.cs. It is a public class, implementing/inheriting GlobalLayer; the inheritance chain is GauntletFullScreenNoticeView → GlobalLayer. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletFullScreenNoticeView is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace matching the module directory; inheritance chain GauntletFullScreenNoticeView → GlobalLayer. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. GlobalLayer on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/GauntletFullScreenNoticeView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static GauntletFullScreenNoticeView Current` | property |
| `GauntletFullScreenNoticeView` | `public GauntletFullScreenNoticeView()` | constructor |
| `Initialize` | `public static void Initialize()` | method |
| `SkipNotice` | `public static void SkipNotice()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView)
