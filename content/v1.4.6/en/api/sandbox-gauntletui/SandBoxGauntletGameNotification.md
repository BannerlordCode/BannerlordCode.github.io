---
title: "SandBoxGauntletGameNotification"
description: "SandBoxGauntletGameNotification: a public class in SandBox.GauntletUI, inheriting GauntletGameNotification; 7 exposed members (7 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/SandBoxGauntletGameNotification.cs."
---
# SandBoxGauntletGameNotification

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class SandBoxGauntletGameNotification : GauntletGameNotification`
**File:** `SandBox.GauntletUI/SandBoxGauntletGameNotification.cs`

## Overview

SandBoxGauntletGameNotification lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/SandBoxGauntletGameNotification.cs. It is a public class, implementing/inheriting GauntletGameNotification; the inheritance chain is SandBoxGauntletGameNotification → GauntletGameNotification. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandBoxGauntletGameNotification is a top-level type in SandBox.GauntletUI, namespace matching the module directory; inheritance chain SandBoxGauntletGameNotification → GauntletGameNotification. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. GauntletGameNotification on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/SandBoxGauntletGameNotification.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `public new static void Initialize()` | method |
| `OnReceiveNewNotification` | `protected override void OnReceiveNewNotification(GameNotificationItemVM notification)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `UnregisterEvents` | `public override void UnregisterEvents()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `GetShouldBeSuspended` | `protected override bool GetShouldBeSuspended()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen)
- [same namespace GauntletClanScreen](../GauntletClanScreen)
- [same namespace GauntletCraftingScreen](../GauntletCraftingScreen)
