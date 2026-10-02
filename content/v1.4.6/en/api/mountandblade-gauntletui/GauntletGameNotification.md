---
title: "GauntletGameNotification"
description: "GauntletGameNotification: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting GlobalLayer; 10 exposed members (7 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/GauntletGameNotification.cs."
---
# GauntletGameNotification

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletGameNotification : GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletGameNotification.cs`

## Overview

GauntletGameNotification lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/GauntletGameNotification.cs. It is a public class, implementing/inheriting GlobalLayer; the inheritance chain is GauntletGameNotification → GlobalLayer. It exposes 10 public/protected members: 7 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletGameNotification is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace matching the module directory; inheritance chain GauntletGameNotification → GlobalLayer. The surface is method-led (methods 7/10, properties 2/10), so it mostly exposes operations. GlobalLayer on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/GauntletGameNotification.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `protected static GauntletGameNotification Current` | property |
| `MovieName` | `protected virtual string MovieName` | property |
| `GauntletGameNotification` | `protected GauntletGameNotification()` | constructor |
| `OnReceiveNewNotification` | `protected virtual void OnReceiveNewNotification(GameNotificationItemVM notification)` | method |
| `Initialize` | `public static void Initialize()` | method |
| `OnFinalize` | `public virtual void OnFinalize()` | method |
| `RegisterEvents` | `public virtual void RegisterEvents()` | method |
| `UnregisterEvents` | `public virtual void UnregisterEvents()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `GetShouldBeSuspended` | `protected virtual bool GetShouldBeSuspended()` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView)
