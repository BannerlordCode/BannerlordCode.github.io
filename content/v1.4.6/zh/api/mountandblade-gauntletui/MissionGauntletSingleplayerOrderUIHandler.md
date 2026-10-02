---
title: "MissionGauntletSingleplayerOrderUIHandler"
description: "MissionGauntletSingleplayerOrderUIHandler：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 GauntletOrderUIHandler、ISiegeDeploymentView；公开成员 17 个（方法 13、属性 3、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs。"
---
# MissionGauntletSingleplayerOrderUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletSingleplayerOrderUIHandler : GauntletOrderUIHandler, ISiegeDeploymentView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs`

## 概述

MissionGauntletSingleplayerOrderUIHandler 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs。它是一个 public 类，实现/继承 GauntletOrderUIHandler、ISiegeDeploymentView，继承链为 MissionGauntletSingleplayerOrderUIHandler → GauntletOrderUIHandler → MissionView。public/protected 成员共 17 个：13 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionGauntletSingleplayerOrderUIHandler 是 TaleWorlds.MountAndBlade.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer），继承链 MissionGauntletSingleplayerOrderUIHandler → GauntletOrderUIHandler → MissionView。成员构成以方法为主（方法 13/17，属性 3/17），对外主要以操作入口暴露。继承链上的 MissionView 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs 的方法体或该类型的深写页确认。

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

- [↑ mountandblade-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 GauntletOrderUIHandler](../GauntletOrderUIHandler)
- [同命名空间 MissionGauntletAgentLockVisualizerView](../MissionGauntletAgentLockVisualizerView)
- [同命名空间 MissionGauntletBattleScore](../MissionGauntletBattleScore)
- [同命名空间 MissionGauntletFormationMarker](../MissionGauntletFormationMarker)
- [同命名空间 MissionGauntletKillNotificationSingleplayerUIHandler](../MissionGauntletKillNotificationSingleplayerUIHandler)
