---
title: "GauntletProfileSelectionScreen"
description: "GauntletProfileSelectionScreen: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting MBProfileSelectionScreenBase; 5 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/GauntletProfileSelectionScreen.cs."
---
# GauntletProfileSelectionScreen

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletProfileSelectionScreen : MBProfileSelectionScreenBase`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletProfileSelectionScreen.cs`

## Overview

GauntletProfileSelectionScreen lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/GauntletProfileSelectionScreen.cs. It is a public class, implementing/inheriting MBProfileSelectionScreenBase; the inheritance chain is GauntletProfileSelectionScreen → MBProfileSelectionScreenBase. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletProfileSelectionScreen is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace matching the module directory; inheritance chain GauntletProfileSelectionScreen → MBProfileSelectionScreenBase. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. MBProfileSelectionScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/GauntletProfileSelectionScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletProfileSelectionScreen` | `public GauntletProfileSelectionScreen(ProfileSelectionState state) : base(state)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnProfileSelectionTick` | `protected override void OnProfileSelectionTick(float dt)` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView)
