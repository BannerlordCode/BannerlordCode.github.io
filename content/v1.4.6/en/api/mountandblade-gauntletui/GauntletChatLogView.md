---
title: "GauntletChatLogView"
description: "GauntletChatLogView: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting GlobalLayer; 9 exposed members (7 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/GauntletChatLogView.cs."
---
# GauntletChatLogView

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletChatLogView : GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletChatLogView.cs`

## Overview

GauntletChatLogView lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/GauntletChatLogView.cs. It is a public class, implementing/inheriting GlobalLayer; the inheritance chain is GauntletChatLogView → GlobalLayer. It exposes 9 public/protected members: 7 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletChatLogView is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace matching the module directory; inheritance chain GauntletChatLogView → GlobalLayer. The surface is method-led (methods 7/9, properties 1/9), so it mostly exposes operations. GlobalLayer on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/GauntletChatLogView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static GauntletChatLogView Current` | property |
| `GauntletChatLogView` | `public GauntletChatLogView()` | constructor |
| `Initialize` | `public static void Initialize()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnLateTick` | `protected override void OnLateTick(float dt)` | method |
| `SetCanFocusWhileInMission` | `public void SetCanFocusWhileInMission(bool canFocusInMission)` | method |
| `OnSupportedFeaturesReceived` | `public void OnSupportedFeaturesReceived(SupportedFeatures supportedFeatures)` | method |
| `SetEnabled` | `public void SetEnabled(bool isEnabled)` | method |
| `LoadMovie` | `public void LoadMovie(bool forMultiplayer)` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView)
