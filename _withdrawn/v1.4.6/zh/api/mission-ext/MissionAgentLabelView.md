---
title: "MissionAgentLabelView"
description: "MissionAgentLabelView：TaleWorlds.MountAndBlade.View.MissionViews 的 public 类，继承 MissionView；公开成员 16 个（方法 15、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentLabelView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionAgentLabelView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionAgentLabelView : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentLabelView.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionAgentLabelView 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentLabelView.cs。它是一个 public 类，实现/继承 MissionView，继承链为 MissionAgentLabelView → MissionView → MissionBehavior → IMissionBehavior。public/protected 成员共 16 个：15 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionAgentLabelView 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View.MissionViews`，继承链 MissionAgentLabelView → MissionView → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 15/16，属性 0/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentLabelView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionAgentLabelView` | `public MissionAgentLabelView()` | 构造函数 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | 方法 |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | 方法 |
| `OnAssignPlayerAsSergeantOfFormation` | `public override void OnAssignPlayerAsSergeantOfFormation(Agent agent)` | 方法 |
| `OnClearScene` | `public override void OnClearScene()` | 方法 |
| `OnMissionModeChange` | `public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)` | 方法 |
| `OnAgentTeamChanged` | `public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)` | 方法 |
| `OnPhotoModeActivated` | `public override void OnPhotoModeActivated()` | 方法 |
| `OnPhotoModeDeactivated` | `public override void OnPhotoModeDeactivated()` | 方法 |
| `OnSuspendView` | `protected override void OnSuspendView()` | 方法 |
| `OnResumeView` | `protected override void OnResumeView()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionView](../MissionView/)
- [同命名空间 MissionAgentContourControllerView](../MissionAgentContourControllerView/)
- [同命名空间 MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler/)
- [同命名空间 MissionBattleUIBaseView](../MissionBattleUIBaseView/)
- [同命名空间 MissionBoundaryCrossingView](../MissionBoundaryCrossingView/)
