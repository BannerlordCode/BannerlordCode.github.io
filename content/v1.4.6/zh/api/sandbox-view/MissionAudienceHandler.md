---
title: "MissionAudienceHandler"
description: "MissionAudienceHandler：SandBox.View 的 public 类，继承 MissionView；公开成员 7 个（方法 6、属性 0、字段 0）。源文件 SandBox.View/Missions/MissionAudienceHandler.cs。"
---
# MissionAudienceHandler

**Namespace:** `SandBox.View.Missions`
**Module:** `SandBox.View`
**Type:** `public class MissionAudienceHandler : MissionView`
**File:** `SandBox.View/Missions/MissionAudienceHandler.cs`

## 概述

MissionAudienceHandler 位于 SandBox.View 模块，源文件 SandBox.View/Missions/MissionAudienceHandler.cs。它是一个 public 类，实现/继承 MissionView，继承链为 MissionAudienceHandler → MissionView。public/protected 成员共 7 个：6 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionAudienceHandler 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Missions），继承链 MissionAudienceHandler → MissionView。成员构成以方法为主（方法 6/7，属性 0/7），对外主要以操作入口暴露。继承链上的 MissionView 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Missions/MissionAudienceHandler.cs 的方法体或该类型的深写页确认。

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

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EavesdroppingMissionCameraView](../EavesdroppingMissionCameraView)
- [同命名空间 MissionAgentAlarmStateView](../MissionAgentAlarmStateView)
- [同命名空间 MissionArenaPracticeFightView](../MissionArenaPracticeFightView)
- [同命名空间 MissionCampaignBattleSpectatorView](../MissionCampaignBattleSpectatorView)
