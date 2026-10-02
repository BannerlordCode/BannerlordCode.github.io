---
title: "MissionGauntletSingleplayerOrderUIHandler"
description: "MissionGauntletSingleplayerOrderUIHandler: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting GauntletOrderUIHandler, ISiegeDeploymentView; 17 exposed members (13 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs."
---
# MissionGauntletSingleplayerOrderUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletSingleplayerOrderUIHandler : GauntletOrderUIHandler, ISiegeDeploymentView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs`

## Overview

MissionGauntletSingleplayerOrderUIHandler lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs. It is a public class, implementing/inheriting GauntletOrderUIHandler, ISiegeDeploymentView; the inheritance chain is MissionGauntletSingleplayerOrderUIHandler → GauntletOrderUIHandler → MissionView. It exposes 17 public/protected members: 13 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletSingleplayerOrderUIHandler is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer) the module directory; inheritance chain MissionGauntletSingleplayerOrderUIHandler → GauntletOrderUIHandler → MissionView. The surface is method-led (methods 13/17, properties 3/17), so it mostly exposes operations. MissionView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsValidForTick` | `public override bool IsValidForTick` | property |
| `CreateDataSource` | `protected virtual MissionOrderVM CreateDataSource(OrderController orderController)` | method |
| `IsDeployment` | `public override bool IsDeployment` | property |
| `IsSiegeDeployment` | `public override bool IsSiegeDeployment` | property |
| `OnConversationBegin` | `public override void OnConversationBegin()` | method |
| `MissionGauntletSingleplayerOrderUIHandler` | `public MissionGauntletSingleplayerOrderUIHandler()` | constructor |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnTransferFinished` | `protected override void OnTransferFinished()` | method |
| `OnAutoDeploy` | `public void OnAutoDeploy()` | method |
| `OnBeginMission` | `public void OnBeginMission()` | method |
| `SetLayerEnabled` | `protected override void SetLayerEnabled(bool isEnabled)` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |
| `OnAfterDeploymentFinished` | `public override void OnAfterDeploymentFinished()` | method |
| `RefreshVisuals` | `protected void RefreshVisuals()` | method |
| `ClearFormationSelection` | `public void ClearFormationSelection()` | method |
| `OnFiltersSet` | `public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration>filterData)` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface GauntletOrderUIHandler](../GauntletOrderUIHandler)
- [same namespace MissionGauntletAgentLockVisualizerView](../MissionGauntletAgentLockVisualizerView)
- [same namespace MissionGauntletBattleScore](../MissionGauntletBattleScore)
- [same namespace MissionGauntletFormationMarker](../MissionGauntletFormationMarker)
- [same namespace MissionGauntletKillNotificationSingleplayerUIHandler](../MissionGauntletKillNotificationSingleplayerUIHandler)
