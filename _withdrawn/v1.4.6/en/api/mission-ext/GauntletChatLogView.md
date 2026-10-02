---
title: "GauntletChatLogView"
description: "GauntletChatLogView: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting GlobalLayer; 9 exposed members (7 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/GauntletChatLogView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletChatLogView

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletChatLogView : GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletChatLogView.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GauntletChatLogView lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/GauntletChatLogView.cs. It is a public class, implementing/inheriting GlobalLayer; the inheritance chain is GauntletChatLogView → GlobalLayer → IComparable. It exposes 9 public/protected members: 7 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletChatLogView lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI`, inheritance chain GauntletChatLogView → GlobalLayer → IComparable. The surface is method-led (methods 7/9, properties 1/9), so it mostly exposes operations. IComparable on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/GauntletChatLogView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GlobalLayer](../../gui/GlobalLayer/)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager/)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel/)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen/)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView/)
