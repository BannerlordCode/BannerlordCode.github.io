---
title: "GauntletInitialScreen"
description: "GauntletInitialScreen: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting MBInitialScreenBase, IChatLogHandlerScreen; 6 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/GauntletInitialScreen.cs."
---
# GauntletInitialScreen

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletInitialScreen : MBInitialScreenBase, IChatLogHandlerScreen`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletInitialScreen.cs`

## Overview

GauntletInitialScreen lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/GauntletInitialScreen.cs. It is a public class, implementing/inheriting MBInitialScreenBase, IChatLogHandlerScreen; the inheritance chain is GauntletInitialScreen → MBInitialScreenBase. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletInitialScreen is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace matching the module directory; inheritance chain GauntletInitialScreen → MBInitialScreenBase. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. MBInitialScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/GauntletInitialScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletInitialScreen` | `public GauntletInitialScreen(InitialState initialState) : base(initialState)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnInitialScreenTick` | `protected override void OnInitialScreenTick(float dt)` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `TryUpdateChatLogLayerParameters` | `public void TryUpdateChatLogLayerParameters(ref bool isTeamChatAvailable, ref bool inputEnabled, ref bool isToggleChatHintAvailable, ref bool isMouseVisible, ref InputContext inputContext)` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView)
