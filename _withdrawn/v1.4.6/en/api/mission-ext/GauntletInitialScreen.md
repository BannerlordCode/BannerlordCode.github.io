---
title: "GauntletInitialScreen"
description: "GauntletInitialScreen: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting MBInitialScreenBase, IChatLogHandlerScreen; 6 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/GauntletInitialScreen.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletInitialScreen

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletInitialScreen : MBInitialScreenBase, IChatLogHandlerScreen`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletInitialScreen.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GauntletInitialScreen lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/GauntletInitialScreen.cs. It is a public class, implementing/inheriting MBInitialScreenBase, IChatLogHandlerScreen; the inheritance chain is GauntletInitialScreen → MBInitialScreenBase → ScreenBase. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletInitialScreen lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI`, inheritance chain GauntletInitialScreen → MBInitialScreenBase → ScreenBase. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/GauntletInitialScreen.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GauntletInitialScreen` | `public GauntletInitialScreen(InitialState initialState) : base(initialState)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnInitialScreenTick` | `protected override void OnInitialScreenTick(float dt)` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `TryUpdateChatLogLayerParameters` | `public void TryUpdateChatLogLayerParameters(ref bool isTeamChatAvailable, ref bool inputEnabled, ref bool isToggleChatHintAvailable, ref bool isMouseVisible, ref InputContext inputContext)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBInitialScreenBase](../MBInitialScreenBase/)
- [base / interface IChatLogHandlerScreen](../IChatLogHandlerScreen/)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager/)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel/)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen/)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView/)
