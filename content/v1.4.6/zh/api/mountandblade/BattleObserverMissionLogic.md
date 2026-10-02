---
title: "BattleObserverMissionLogic"
description: "BattleObserverMissionLogic：TaleWorlds.MountAndBlade 的 public 类，继承 MissionLogic；公开成员 8 个（方法 7、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade/BattleObserverMissionLogic.cs。"
---
# BattleObserverMissionLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleObserverMissionLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleObserverMissionLogic.cs`

## 概述

BattleObserverMissionLogic 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/BattleObserverMissionLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 BattleObserverMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 8 个：7 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BattleObserverMissionLogic 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 BattleObserverMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 7/8，属性 1/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/BattleObserverMissionLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BattleObserver` | `public IBattleObserver BattleObserver` | 属性 |
| `SetObserver` | `public void SetObserver(IBattleObserver observer)` | 方法 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `OnAgentTeamChanged` | `public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)` | 方法 |
| `OnMissionResultReady` | `public override void OnMissionResultReady(MissionResult missionResult)` | 方法 |
| `GetDeathToBuiltAgentRatioForSide` | `public float GetDeathToBuiltAgentRatioForSide(BattleSideEnum side)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionLogic](../MissionLogic)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
