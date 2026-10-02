---
title: "MissionGauntletKillNotificationSingleplayerUIHandler"
description: "MissionGauntletKillNotificationSingleplayerUIHandler：TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer 的 public 类，继承 MissionBattleUIBaseView；公开成员 12 个（方法 10、属性 0、字段 2）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionGauntletKillNotificationSingleplayerUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletKillNotificationSingleplayerUIHandler : MissionBattleUIBaseView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionGauntletKillNotificationSingleplayerUIHandler 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs。它是一个 public 类，实现/继承 MissionBattleUIBaseView，继承链为 MissionGauntletKillNotificationSingleplayerUIHandler → MissionBattleUIBaseView → MissionView → MissionBehavior → IMissionBehavior。public/protected 成员共 12 个：10 方法、2 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionGauntletKillNotificationSingleplayerUIHandler 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`，继承链 MissionGauntletKillNotificationSingleplayerUIHandler → MissionBattleUIBaseView → MissionView → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 10/12，属性 0/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionBattleUIBaseView](../MissionBattleUIBaseView/)
- [同命名空间 MissionGauntletAgentLockVisualizerView](../MissionGauntletAgentLockVisualizerView/)
- [同命名空间 MissionGauntletBattleScore](../MissionGauntletBattleScore/)
- [同命名空间 MissionGauntletFormationMarker](../MissionGauntletFormationMarker/)
- [同命名空间 MissionGauntletLeaveView](../MissionGauntletLeaveView/)
