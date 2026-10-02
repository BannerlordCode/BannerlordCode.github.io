---
title: "MissionGauntletOrderOfBattleUIHandler"
description: "MissionGauntletOrderOfBattleUIHandler: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting MissionView; 11 exposed members (10 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletOrderOfBattleUIHandler.cs."
---
# MissionGauntletOrderOfBattleUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletOrderOfBattleUIHandler : MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletOrderOfBattleUIHandler.cs`

## Overview

MissionGauntletOrderOfBattleUIHandler lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletOrderOfBattleUIHandler.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionGauntletOrderOfBattleUIHandler → MissionView. It exposes 11 public/protected members: 10 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletOrderOfBattleUIHandler is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer) the module directory; inheritance chain MissionGauntletOrderOfBattleUIHandler → MissionView. The surface is method-led (methods 10/11, properties 0/11), so it mostly exposes operations. MissionView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletOrderOfBattleUIHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionGauntletOrderOfBattleUIHandler` | `public MissionGauntletOrderOfBattleUIHandler(OrderOfBattleVM dataSource)` | constructor |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `IsReady` | `public override bool IsReady()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnEscape` | `public override bool OnEscape()` | method |
| `OnPhotoModeActivated` | `public override void OnPhotoModeActivated()` | method |
| `OnPhotoModeDeactivated` | `public override void OnPhotoModeDeactivated()` | method |
| `IsOpeningEscapeMenuOnFocusChangeAllowed` | `public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionGauntletAgentLockVisualizerView](../MissionGauntletAgentLockVisualizerView)
- [same namespace MissionGauntletBattleScore](../MissionGauntletBattleScore)
- [same namespace MissionGauntletFormationMarker](../MissionGauntletFormationMarker)
- [same namespace MissionGauntletKillNotificationSingleplayerUIHandler](../MissionGauntletKillNotificationSingleplayerUIHandler)
