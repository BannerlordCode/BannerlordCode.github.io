---
title: "GauntletUISubModule"
description: "GauntletUISubModule: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting MBSubModuleBase; 10 exposed members (9 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/GauntletUISubModule.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletUISubModule

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletUISubModule : MBSubModuleBase`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletUISubModule.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GauntletUISubModule lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/GauntletUISubModule.cs. It is a public class, implementing/inheriting MBSubModuleBase; the inheritance chain is GauntletUISubModule → MBSubModuleBase. It exposes 10 public/protected members: 9 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletUISubModule lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI`, inheritance chain GauntletUISubModule → MBSubModuleBase. The surface is method-led (methods 9/10, properties 1/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/GauntletUISubModule.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Instance` | `public static GauntletUISubModule Instance` | property |
| `OnSubModuleLoad` | `protected override void OnSubModuleLoad()` | method |
| `OnNewModuleLoad` | `protected override void OnNewModuleLoad()` | method |
| `OnSubModuleUnloaded` | `protected override void OnSubModuleUnloaded()` | method |
| `OnBeforeInitialModuleScreenSetAsRoot` | `protected override void OnBeforeInitialModuleScreenSetAsRoot()` | method |
| `OnMultiplayerGameStart` | `public override void OnMultiplayerGameStart(Game game, object starterObject)` | method |
| `OnGameEnd` | `public override void OnGameEnd(Game game)` | method |
| `OnApplicationTick` | `protected override void OnApplicationTick(float dt)` | method |
| `ClearChatLog` | `public static string ClearChatLog(List<string>strings)` | method |
| `SetCanFocusWhileInMission` | `public static string SetCanFocusWhileInMission(List<string>strings)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager/)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel/)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen/)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView/)
