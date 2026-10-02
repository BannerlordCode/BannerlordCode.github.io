---
title: "BaseBattleMissionController"
description: "BaseBattleMissionController：TaleWorlds.MountAndBlade.Source.Missions 的 public 类，继承 MissionLogic；公开成员 17 个（方法 16、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Source/Missions/BaseBattleMissionController.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BaseBattleMissionController

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BaseBattleMissionController : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/BaseBattleMissionController.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BaseBattleMissionController 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Source/Missions/BaseBattleMissionController.cs。它是一个 public 类（abstract），实现/继承 MissionLogic，继承链为 BaseBattleMissionController → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 17 个：16 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BaseBattleMissionController 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Source.Missions`，继承链 BaseBattleMissionController → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 16/17，属性 0/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Source/Missions/BaseBattleMissionController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BaseBattleMissionController` | `protected BaseBattleMissionController(bool isPlayerAttacker)` | 构造函数 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `SetupTeam` | `protected virtual void SetupTeam(Team team)` | 方法 |
| `CreateDefenderTroops` | `protected abstract void CreateDefenderTroops();` | 方法 |
| `CreateAttackerTroops` | `protected abstract void CreateAttackerTroops();` | 方法 |
| `GetTeamAI` | `public virtual TeamAIComponent GetTeamAI(Team team, float thinkTimerTime = 5f, float applyTimerTime = 1f)` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `IsPlayerDead` | `protected bool IsPlayerDead()` | 方法 |
| `MissionEnded` | `public override bool MissionEnded(ref MissionResult missionResult)` | 方法 |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | 方法 |
| `IncrementDeploymedTroops` | `protected void IncrementDeploymedTroops(BattleSideEnum side)` | 方法 |
| `CreatePlayer` | `protected virtual void CreatePlayer()` | 方法 |
| `BecomeEnemy` | `protected void BecomeEnemy()` | 方法 |
| `BecomePlayer` | `protected void BecomePlayer()` | 方法 |
| `SwapTeams` | `protected void SwapTeams()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../MissionLogic/)
- [同命名空间 BattleSpawnLogic](../BattleSpawnLogic/)
- [同命名空间 CaravanBattleMissionHandler](../CaravanBattleMissionHandler/)
- [同命名空间 DebugAgentTeleporterMissionController](../DebugAgentTeleporterMissionController/)
- [同命名空间 DebugObjectDestroyerMissionController](../DebugObjectDestroyerMissionController/)
