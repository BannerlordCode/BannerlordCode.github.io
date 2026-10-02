---
title: "MissionGauntletSingleplayerOrderUIHandler"
description: "MissionGauntletSingleplayerOrderUIHandler：TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer 的 public 类，继承 GauntletOrderUIHandler、ISiegeDeploymentView；公开成员 17 个（方法 13、属性 3、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionGauntletSingleplayerOrderUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletSingleplayerOrderUIHandler : GauntletOrderUIHandler, ISiegeDeploymentView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionGauntletSingleplayerOrderUIHandler 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs。它是一个 public 类，实现/继承 GauntletOrderUIHandler、ISiegeDeploymentView，继承链为 MissionGauntletSingleplayerOrderUIHandler → GauntletOrderUIHandler → MissionView → MissionBehavior → IMissionBehavior。public/protected 成员共 17 个：13 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionGauntletSingleplayerOrderUIHandler 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`，继承链 MissionGauntletSingleplayerOrderUIHandler → GauntletOrderUIHandler → MissionView → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 13/17，属性 3/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsValidForTick` | `public override bool IsValidForTick` | 属性 |
| `CreateDataSource` | `protected virtual MissionOrderVM CreateDataSource(OrderController orderController)` | 方法 |
| `IsDeployment` | `public override bool IsDeployment` | 属性 |
| `IsSiegeDeployment` | `public override bool IsSiegeDeployment` | 属性 |
| `OnConversationBegin` | `public override void OnConversationBegin()` | 方法 |
| `MissionGauntletSingleplayerOrderUIHandler` | `public MissionGauntletSingleplayerOrderUIHandler()` | 构造函数 |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | 方法 |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |
| `OnTransferFinished` | `protected override void OnTransferFinished()` | 方法 |
| `OnAutoDeploy` | `public void OnAutoDeploy()` | 方法 |
| `OnBeginMission` | `public void OnBeginMission()` | 方法 |
| `SetLayerEnabled` | `protected override void SetLayerEnabled(bool isEnabled)` | 方法 |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | 方法 |
| `OnAfterDeploymentFinished` | `public override void OnAfterDeploymentFinished()` | 方法 |
| `RefreshVisuals` | `protected void RefreshVisuals()` | 方法 |
| `ClearFormationSelection` | `public void ClearFormationSelection()` | 方法 |
| `OnFiltersSet` | `public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration>filterData)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GauntletOrderUIHandler](../GauntletOrderUIHandler/)
- [基类/接口 ISiegeDeploymentView](../ISiegeDeploymentView/)
- [同命名空间 MissionGauntletAgentLockVisualizerView](../MissionGauntletAgentLockVisualizerView/)
- [同命名空间 MissionGauntletBattleScore](../MissionGauntletBattleScore/)
- [同命名空间 MissionGauntletFormationMarker](../MissionGauntletFormationMarker/)
- [同命名空间 MissionGauntletKillNotificationSingleplayerUIHandler](../MissionGauntletKillNotificationSingleplayerUIHandler/)
