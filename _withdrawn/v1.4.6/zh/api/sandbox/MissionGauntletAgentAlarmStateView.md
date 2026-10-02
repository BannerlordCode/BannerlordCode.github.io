---
title: "MissionGauntletAgentAlarmStateView"
description: "MissionGauntletAgentAlarmStateView：SandBox.GauntletUI.Missions 的 public 类，继承 MissionAgentAlarmStateView；公开成员 9 个（方法 8、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox.GauntletUI/Missions/MissionGauntletAgentAlarmStateView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionGauntletAgentAlarmStateView

**Namespace:** `SandBox.GauntletUI.Missions`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MissionGauntletAgentAlarmStateView : MissionAgentAlarmStateView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletAgentAlarmStateView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MissionGauntletAgentAlarmStateView 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Missions/MissionGauntletAgentAlarmStateView.cs。它是一个 public 类，实现/继承 MissionAgentAlarmStateView，继承链为 MissionGauntletAgentAlarmStateView → MissionAgentAlarmStateView → MissionView → MissionBehavior → IMissionBehavior。public/protected 成员共 9 个：8 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionGauntletAgentAlarmStateView 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.GauntletUI.Missions`，继承链 MissionGauntletAgentAlarmStateView → MissionAgentAlarmStateView → MissionView → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 8/9，属性 0/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Missions/MissionGauntletAgentAlarmStateView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionGauntletAgentAlarmStateView` | `public MissionGauntletAgentAlarmStateView()` | 构造函数 |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | 方法 |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | 方法 |
| `OnAgentTeamChanged` | `public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | 方法 |
| `OnResumeView` | `protected override void OnResumeView()` | 方法 |
| `OnSuspendView` | `protected override void OnSuspendView()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionAgentAlarmStateView](../MissionAgentAlarmStateView/)
- [同命名空间 MissionGauntletArenaPracticeFightView](../MissionGauntletArenaPracticeFightView/)
- [同命名空间 MissionGauntletBarterView](../MissionGauntletBarterView/)
- [同命名空间 MissionGauntletBoardGameView](../MissionGauntletBoardGameView/)
- [同命名空间 MissionGauntletCheatView](../MissionGauntletCheatView/)
