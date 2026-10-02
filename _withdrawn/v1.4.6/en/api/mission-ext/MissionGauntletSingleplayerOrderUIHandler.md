---
title: "MissionGauntletSingleplayerOrderUIHandler"
description: "MissionGauntletSingleplayerOrderUIHandler: a public class in TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer, inheriting GauntletOrderUIHandler, ISiegeDeploymentView; 17 exposed members (13 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionGauntletSingleplayerOrderUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletSingleplayerOrderUIHandler : GauntletOrderUIHandler, ISiegeDeploymentView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionGauntletSingleplayerOrderUIHandler lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs. It is a public class, implementing/inheriting GauntletOrderUIHandler, ISiegeDeploymentView; the inheritance chain is MissionGauntletSingleplayerOrderUIHandler → GauntletOrderUIHandler → MissionView → MissionBehavior → IMissionBehavior. It exposes 17 public/protected members: 13 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletSingleplayerOrderUIHandler lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`, inheritance chain MissionGauntletSingleplayerOrderUIHandler → GauntletOrderUIHandler → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 13/17, properties 3/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GauntletOrderUIHandler](../GauntletOrderUIHandler/)
- [base / interface ISiegeDeploymentView](../ISiegeDeploymentView/)
- [same namespace MissionGauntletAgentLockVisualizerView](../MissionGauntletAgentLockVisualizerView/)
- [same namespace MissionGauntletBattleScore](../MissionGauntletBattleScore/)
- [same namespace MissionGauntletFormationMarker](../MissionGauntletFormationMarker/)
- [same namespace MissionGauntletKillNotificationSingleplayerUIHandler](../MissionGauntletKillNotificationSingleplayerUIHandler/)
