---
title: "GauntletGameVersionView"
description: "GauntletGameVersionView: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting GlobalLayer; 7 exposed members (5 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/GauntletGameVersionView.cs."
---
# GauntletGameVersionView

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletGameVersionView : GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletGameVersionView.cs`

## Overview

GauntletGameVersionView lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/GauntletGameVersionView.cs. It is a public class, implementing/inheriting GlobalLayer; the inheritance chain is GauntletGameVersionView → GlobalLayer. It exposes 7 public/protected members: 5 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletGameVersionView is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace matching the module directory; inheritance chain GauntletGameVersionView → GlobalLayer. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. GlobalLayer on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/GauntletGameVersionView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static GauntletGameVersionView Current` | property |
| `GauntletGameVersionView` | `public GauntletGameVersionView()` | constructor |
| `Initialize` | `public static void Initialize()` | method |
| `Refresh` | `public static void Refresh()` | method |
| `AddModuleVersionInfo` | `public static void AddModuleVersionInfo(string title, string versionStr)` | method |
| `RemoveModuleVersionInfo` | `public static void RemoveModuleVersionInfo(string title)` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView)
