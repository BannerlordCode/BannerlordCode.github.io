---
title: "MissionGauntletKillNotificationSingleplayerUIHandler"
description: "MissionGauntletKillNotificationSingleplayerUIHandler：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 MissionBattleUIBaseView；公开成员 12 个（方法 10、属性 0、字段 2）。源文件 TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs。"
---
# MissionGauntletKillNotificationSingleplayerUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletKillNotificationSingleplayerUIHandler : MissionBattleUIBaseView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs`

## 概述

MissionGauntletKillNotificationSingleplayerUIHandler 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs。它是一个 public 类，实现/继承 MissionBattleUIBaseView，继承链为 MissionGauntletKillNotificationSingleplayerUIHandler → MissionBattleUIBaseView。public/protected 成员共 12 个：10 方法、2 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionGauntletKillNotificationSingleplayerUIHandler 是 TaleWorlds.MountAndBlade.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer），继承链 MissionGauntletKillNotificationSingleplayerUIHandler → MissionBattleUIBaseView。成员构成以方法为主（方法 10/12，属性 0/12），对外主要以操作入口暴露。继承链上的 MissionBattleUIBaseView 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | 方法 |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |
| `OnCreateView` | `protected override void OnCreateView()` | 方法 |
| `OnDestroyView` | `protected override void OnDestroyView()` | 方法 |
| `OnSuspendView` | `protected override void OnSuspendView()` | 方法 |
| `OnResumeView` | `protected override void OnResumeView()` | 方法 |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | 方法 |
| `OnPhotoModeActivated` | `public override void OnPhotoModeActivated()` | 方法 |
| `OnPhotoModeDeactivated` | `public override void OnPhotoModeDeactivated()` | 方法 |
| `_isGeneralFeedEnabled` | `protected bool _isGeneralFeedEnabled` | 字段 |
| `_isPersonalFeedEnabled` | `protected bool _isPersonalFeedEnabled` | 字段 |

## 参见

- [↑ mountandblade-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionGauntletAgentLockVisualizerView](../MissionGauntletAgentLockVisualizerView)
- [同命名空间 MissionGauntletBattleScore](../MissionGauntletBattleScore)
- [同命名空间 MissionGauntletFormationMarker](../MissionGauntletFormationMarker)
- [同命名空间 MissionGauntletLeaveView](../MissionGauntletLeaveView)
