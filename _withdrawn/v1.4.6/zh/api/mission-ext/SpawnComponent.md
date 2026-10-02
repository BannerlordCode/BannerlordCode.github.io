---
title: "SpawnComponent"
description: "SpawnComponent：TaleWorlds.MountAndBlade 的 public 类，继承 MissionLogic；公开成员 23 个（方法 20、属性 2、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/SpawnComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SpawnComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SpawnComponent : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SpawnComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SpawnComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SpawnComponent.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 SpawnComponent → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 23 个：20 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SpawnComponent 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 SpawnComponent → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 20/23，属性 2/23），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SpawnComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SpawnFrameBehavior` | `public SpawnFrameBehaviorBase SpawnFrameBehavior` | 属性 |
| `SpawningBehavior` | `public SpawningBehaviorBase SpawningBehavior` | 属性 |
| `SpawnComponent` | `public SpawnComponent(SpawnFrameBehaviorBase spawnFrameBehavior, SpawningBehaviorBase spawningBehavior)` | 构造函数 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `AreAgentsSpawning` | `public bool AreAgentsSpawning()` | 方法 |
| `SetNewSpawnFrameBehavior` | `public void SetNewSpawnFrameBehavior(SpawnFrameBehaviorBase spawnFrameBehavior)` | 方法 |
| `SetNewSpawningBehavior` | `public void SetNewSpawningBehavior(SpawningBehaviorBase spawningBehavior)` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `SetSiegeSpawningBehavior` | `public static void SetSiegeSpawningBehavior()` | 方法 |
| `SetFlagDominationSpawningBehavior` | `public static void SetFlagDominationSpawningBehavior()` | 方法 |
| `SetWarmupSpawningBehavior` | `public static void SetWarmupSpawningBehavior()` | 方法 |
| `SetSpawningBehaviorForCurrentGameType` | `public static void SetSpawningBehaviorForCurrentGameType(MultiplayerGameType currentGameType)` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `StartSpawnSession` | `protected void StartSpawnSession()` | 方法 |
| `GetSpawnFrame` | `public MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn = false)` | 方法 |
| `SpawnEquipmentUpdated` | `protected void SpawnEquipmentUpdated(MissionPeer lobbyPeer, Equipment equipment)` | 方法 |
| `SetEarlyAgentVisualsDespawning` | `public void SetEarlyAgentVisualsDespawning(MissionPeer missionPeer, bool canDespawnEarly = true)` | 方法 |
| `ToggleUpdatingSpawnEquipment` | `public void ToggleUpdatingSpawnEquipment(bool canUpdate)` | 方法 |
| `AllowEarlyAgentVisualsDespawning` | `public bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)` | 方法 |
| `GetMaximumReSpawnPeriodForPeer` | `public int GetMaximumReSpawnPeriodForPeer(MissionPeer lobbyPeer)` | 方法 |
| `OnClearScene` | `public override void OnClearScene()` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../MissionLogic/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
