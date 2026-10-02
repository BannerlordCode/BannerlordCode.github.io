---
title: "AgentVictoryLogic"
description: "AgentVictoryLogic：TaleWorlds.MountAndBlade 的 public 类，继承 MissionLogic；公开成员 16 个（方法 10、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/AgentVictoryLogic.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentVictoryLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentVictoryLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentVictoryLogic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

AgentVictoryLogic 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/AgentVictoryLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 AgentVictoryLogic → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 16 个：10 方法、4 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentVictoryLogic 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 AgentVictoryLogic → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 10/16，属性 4/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/AgentVictoryLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CheerActionGroup` | `public AgentVictoryLogic.CheerActionGroupEnum CheerActionGroup` | 属性 |
| `CheerReactionTimerData` | `public AgentVictoryLogic.CheerReactionTimeSettings CheerReactionTimerData` | 属性 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `SetCheerActionGroup` | `public void SetCheerActionGroup(AgentVictoryLogic.CheerActionGroupEnum cheerActionGroup = AgentVictoryLogic.CheerActionGroupEnum.None)` | 方法 |
| `SetCheerReactionTimerSettings` | `public void SetCheerReactionTimerSettings(float minDuration = 1f, float maxDuration = 8f)` | 方法 |
| `OnClearScene` | `public override void OnClearScene()` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `SetTimersOfVictoryReactionsOnBattleEnd` | `public void SetTimersOfVictoryReactionsOnBattleEnd(BattleSideEnum side)` | 方法 |
| `SetTimersOfVictoryReactionsOnRetreat` | `public void SetTimersOfVictoryReactionsOnRetreat(BattleSideEnum side)` | 方法 |
| `SetTimersOfVictoryReactionsOnTournamentVictoryForAgent` | `public void SetTimersOfVictoryReactionsOnTournamentVictoryForAgent(Agent agent, float minStartTime, float maxStartTime)` | 方法 |
| `CheerActionGroupEnum` | `public enum CheerActionGroupEnum` | 属性 |
| `CheerReactionTimeSettings` | `public struct CheerReactionTimeSettings` | 属性 |
| `CheerActionGroupEnum` | `public enum CheerActionGroupEnum` | 嵌套类型 |
| `CheerReactionTimeSettings` | `public struct CheerReactionTimeSettings` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../MissionLogic/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
