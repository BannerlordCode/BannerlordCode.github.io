---
title: "MissionAudienceHandler"
description: "MissionAudienceHandler：SandBox.View.Missions 的 public 类，继承 MissionView；公开成员 7 个（方法 6、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox.View/Missions/MissionAudienceHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionAudienceHandler

**Namespace:** `SandBox.View.Missions`
**Module:** `SandBox.View`
**Type:** `public class MissionAudienceHandler : MissionView`
**File:** `SandBox.View/Missions/MissionAudienceHandler.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MissionAudienceHandler 位于 SandBox.View 模块，源文件 SandBox.View/Missions/MissionAudienceHandler.cs。它是一个 public 类，实现/继承 MissionView，继承链为 MissionAudienceHandler → MissionView → MissionBehavior → IMissionBehavior。public/protected 成员共 7 个：6 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionAudienceHandler 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View.Missions`，继承链 MissionAudienceHandler → MissionView → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 6/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Missions/MissionAudienceHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionAudienceHandler` | `public MissionAudienceHandler(float density)` | 构造函数 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `OnInit` | `public void OnInit()` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnMissionModeChange` | `public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)` | 方法 |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionView](../../mission-ext/MissionView/)
- [同命名空间 EavesdroppingMissionCameraView](../EavesdroppingMissionCameraView/)
- [同命名空间 MissionAgentAlarmStateView](../MissionAgentAlarmStateView/)
- [同命名空间 MissionArenaPracticeFightView](../MissionArenaPracticeFightView/)
- [同命名空间 MissionCampaignBattleSpectatorView](../MissionCampaignBattleSpectatorView/)
