---
title: "MissionGauntletCrosshair"
description: "MissionGauntletCrosshair: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting MissionBattleUIBaseView; 9 exposed members (9 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletCrosshair.cs."
---
# MissionGauntletCrosshair

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletCrosshair : MissionBattleUIBaseView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletCrosshair.cs`

## Overview

MissionGauntletCrosshair lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletCrosshair.cs. It is a public class, implementing/inheriting MissionBattleUIBaseView; the inheritance chain is MissionGauntletCrosshair → MissionBattleUIBaseView. It exposes 9 public/protected members: 9 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletCrosshair is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Mission) the module directory; inheritance chain MissionGauntletCrosshair → MissionBattleUIBaseView. The surface is method-led (methods 9/9, properties 0/9), so it mostly exposes operations. MissionBattleUIBaseView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletCrosshair.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnCreateView` | `protected override void OnCreateView()` | method |
| `OnDestroyView` | `protected override void OnDestroyView()` | method |
| `OnSuspendView` | `protected override void OnSuspendView()` | method |
| `OnResumeView` | `protected override void OnResumeView()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `GetShouldArrowsBeVisible` | `protected virtual bool GetShouldArrowsBeVisible()` | method |
| `GetShouldCrosshairBeVisible` | `protected virtual bool GetShouldCrosshairBeVisible()` | method |
| `OnPhotoModeActivated` | `public override void OnPhotoModeActivated()` | method |
| `OnPhotoModeDeactivated` | `public override void OnPhotoModeDeactivated()` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionGauntletAgentStatus](../MissionGauntletAgentStatus)
- [same namespace MissionGauntletBoundaryCrossingView](../MissionGauntletBoundaryCrossingView)
- [same namespace MissionGauntletCategoryLoadManager](../MissionGauntletCategoryLoadManager)
- [same namespace MissionGauntletEscapeMenuBase](../MissionGauntletEscapeMenuBase)
