---
title: "MissionGauntletBattleScore"
description: "MissionGauntletBattleScore: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting MissionView; 11 exposed members (9 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletBattleScore.cs."
---
# MissionGauntletBattleScore

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletBattleScore : MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletBattleScore.cs`

## Overview

MissionGauntletBattleScore lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletBattleScore.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionGauntletBattleScore → MissionView. It exposes 11 public/protected members: 9 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletBattleScore is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer) the module directory; inheritance chain MissionGauntletBattleScore → MissionView. The surface is method-led (methods 9/11, properties 1/11), so it mostly exposes operations. MissionView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletBattleScore.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DataSource` | `public ScoreboardBaseVM DataSource` | property |
| `MissionGauntletBattleScore` | `public MissionGauntletBattleScore(ScoreboardBaseVM scoreboardVM)` | constructor |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnEscape` | `public override bool OnEscape()` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |
| `OnPhotoModeActivated` | `public override void OnPhotoModeActivated()` | method |
| `OnPhotoModeDeactivated` | `public override void OnPhotoModeDeactivated()` | method |
| `ForceScoreboardToggle` | `public static string ForceScoreboardToggle(List<string>args)` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionGauntletAgentLockVisualizerView](../MissionGauntletAgentLockVisualizerView)
- [same namespace MissionGauntletFormationMarker](../MissionGauntletFormationMarker)
- [same namespace MissionGauntletKillNotificationSingleplayerUIHandler](../MissionGauntletKillNotificationSingleplayerUIHandler)
- [same namespace MissionGauntletLeaveView](../MissionGauntletLeaveView)
