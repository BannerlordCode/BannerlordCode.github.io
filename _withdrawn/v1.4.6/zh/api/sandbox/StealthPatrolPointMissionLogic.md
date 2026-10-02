---
title: "StealthPatrolPointMissionLogic"
description: "StealthPatrolPointMissionLogic：SandBox.Missions.MissionLogics 的 public 类，继承 MissionLogic、IMissionAgentSpawnLogic；公开成员 17 个（方法 15、属性 1、字段 0）。canonical 桶 sandbox。源文件 SandBox/Missions/MissionLogics/StealthPatrolPointMissionLogic.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StealthPatrolPointMissionLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class StealthPatrolPointMissionLogic : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**File:** `SandBox/Missions/MissionLogics/StealthPatrolPointMissionLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

StealthPatrolPointMissionLogic 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/StealthPatrolPointMissionLogic.cs。它是一个 public 类，实现/继承 MissionLogic、IMissionAgentSpawnLogic、IMissionBehavior，继承链为 StealthPatrolPointMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 17 个：15 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StealthPatrolPointMissionLogic 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Missions.MissionLogics`，继承链 StealthPatrolPointMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 15/17，属性 1/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/StealthPatrolPointMissionLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerSide` | `public BattleSideEnum PlayerSide` | 属性 |
| `StealthPatrolPointMissionLogic` | `public StealthPatrolPointMissionLogic()` | 构造函数 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnLocationCharacterAgentSpawned` | `public void OnLocationCharacterAgentSpawned(LocationCharacterAgentSpawnedMissionEvent locationCharacterAgentSpawnedEvent)` | 方法 |
| `OnAgentInteraction` | `public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `IsThereAgentAction` | `public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)` | 方法 |
| `OnCheckpointLoadedEvent` | `public void OnCheckpointLoadedEvent(CheckpointLoadedMissionEvent checkpointLoadedMissionEvent)` | 方法 |
| `StartSpawner` | `public void StartSpawner(BattleSideEnum side)` | 方法 |
| `StopSpawner` | `public void StopSpawner(BattleSideEnum side)` | 方法 |
| `IsSideSpawnEnabled` | `public bool IsSideSpawnEnabled(BattleSideEnum side)` | 方法 |
| `IsSideDepleted` | `public bool IsSideDepleted(BattleSideEnum side)` | 方法 |
| `GetReinforcementInterval` | `public float GetReinforcementInterval(BattleSideEnum battleSide = BattleSideEnum.None)` | 方法 |
| `IEnumerable` | `public IEnumerable<IAgentOriginBase>GetAllTroopsForSide(BattleSideEnum side)` | 方法 |
| `GetNumberOfPlayerControllableTroops` | `public int GetNumberOfPlayerControllableTroops()` | 方法 |
| `GetSpawnHorses` | `public bool GetSpawnHorses(BattleSideEnum side)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../../mission-ext/MissionLogic/)
- [基类/接口 IMissionAgentSpawnLogic](../../mission-ext/IMissionAgentSpawnLogic/)
- [基类/接口 IMissionBehavior](../../mission-ext/IMissionBehavior/)
- [同命名空间 BattleAgentLogic](../BattleAgentLogic/)
- [同命名空间 BattleSurgeonLogic](../BattleSurgeonLogic/)
- [同命名空间 CampaignMissionComponent](../CampaignMissionComponent/)
- [同命名空间 CampaignSiegeStateHandler](../CampaignSiegeStateHandler/)
