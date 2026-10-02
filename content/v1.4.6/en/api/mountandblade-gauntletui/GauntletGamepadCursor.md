---
title: "GauntletGamepadCursor"
description: "GauntletGamepadCursor: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting GlobalLayer; 3 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/GauntletGamepadCursor.cs."
---
# GauntletGamepadCursor

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletGamepadCursor : GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletGamepadCursor.cs`

## Overview

GauntletGamepadCursor lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/GauntletGamepadCursor.cs. It is a public class, implementing/inheriting GlobalLayer; the inheritance chain is GauntletGamepadCursor → GlobalLayer. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletGamepadCursor is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace matching the module directory; inheritance chain GauntletGamepadCursor → GlobalLayer. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. GlobalLayer on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/GauntletGamepadCursor.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletGamepadCursor` | `public GauntletGamepadCursor()` | constructor |
| `Initialize` | `public static void Initialize()` | method |
| `OnLateTick` | `protected override void OnLateTick(float dt)` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView)
