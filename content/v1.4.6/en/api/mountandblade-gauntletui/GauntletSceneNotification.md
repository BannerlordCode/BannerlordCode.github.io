---
title: "GauntletSceneNotification"
description: "GauntletSceneNotification: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting GlobalLayer; 7 exposed members (5 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/SceneNotification/GauntletSceneNotification.cs."
---
# GauntletSceneNotification

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletSceneNotification : GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/SceneNotification/GauntletSceneNotification.cs`

## Overview

GauntletSceneNotification lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/SceneNotification/GauntletSceneNotification.cs. It is a public class, implementing/inheriting GlobalLayer; the inheritance chain is GauntletSceneNotification → GlobalLayer. It exposes 7 public/protected members: 5 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletSceneNotification is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.SceneNotification) the module directory; inheritance chain GauntletSceneNotification → GlobalLayer. The surface is method-led (methods 5/7, properties 2/7), so it mostly exposes operations. GlobalLayer on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/SceneNotification/GauntletSceneNotification.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static GauntletSceneNotification Current` | property |
| `IsActive` | `public bool IsActive` | property |
| `Initialize` | `public static void Initialize()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnFinalize` | `public void OnFinalize()` | method |
| `RegisterContextProvider` | `public void RegisterContextProvider(ISceneNotificationContextProvider provider)` | method |
| `RemoveContextProvider` | `public bool RemoveContextProvider(ISceneNotificationContextProvider provider)` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace NativeSceneNotificationContextProvider](../NativeSceneNotificationContextProvider)
