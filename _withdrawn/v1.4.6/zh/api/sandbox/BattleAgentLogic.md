---
title: "BattleAgentLogic"
description: "BattleAgentLogic：SandBox.Missions.MissionLogics 的 public 类，继承 MissionLogic；公开成员 8 个（方法 8、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/Missions/MissionLogics/BattleAgentLogic.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleAgentLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class BattleAgentLogic : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/BattleAgentLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

BattleAgentLogic 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/BattleAgentLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 BattleAgentLogic → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 8 个：8 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BattleAgentLogic 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Missions.MissionLogics`，继承链 BattleAgentLogic → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 8/8，属性 0/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/BattleAgentLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | 方法 |
| `OnAgentHit` | `public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | 方法 |
| `OnAgentTeamChanged` | `public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)` | 方法 |
| `OnScoreHit` | `public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | 方法 |
| `OnAgentFleeing` | `public override void OnAgentFleeing(Agent affectedAgent)` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../../mission-ext/MissionLogic/)
- [同命名空间 BattleSurgeonLogic](../BattleSurgeonLogic/)
- [同命名空间 CampaignMissionComponent](../CampaignMissionComponent/)
- [同命名空间 CampaignSiegeStateHandler](../CampaignSiegeStateHandler/)
- [同命名空间 CombatMissionWithDialogueController](../CombatMissionWithDialogueController/)
