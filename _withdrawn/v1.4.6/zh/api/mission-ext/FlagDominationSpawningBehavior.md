---
title: "FlagDominationSpawningBehavior"
description: "FlagDominationSpawningBehavior：TaleWorlds.MountAndBlade 的 public 类，继承 SpawningBehaviorBase；公开成员 11 个（方法 10、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/FlagDominationSpawningBehavior.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FlagDominationSpawningBehavior

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FlagDominationSpawningBehavior : SpawningBehaviorBase`
**File:** `TaleWorlds.MountAndBlade/FlagDominationSpawningBehavior.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

FlagDominationSpawningBehavior 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/FlagDominationSpawningBehavior.cs。它是一个 public 类，实现/继承 SpawningBehaviorBase，继承链为 FlagDominationSpawningBehavior → SpawningBehaviorBase。public/protected 成员共 11 个：10 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FlagDominationSpawningBehavior 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 FlagDominationSpawningBehavior → SpawningBehaviorBase。成员构成以方法为主（方法 10/11，属性 0/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/FlagDominationSpawningBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FlagDominationSpawningBehavior` | `public FlagDominationSpawningBehavior()` | 构造函数 |
| `Initialize` | `public override void Initialize(SpawnComponent spawnComponent)` | 方法 |
| `Clear` | `public override void Clear()` | 方法 |
| `OnTick` | `public override void OnTick(float dt)` | 方法 |
| `RequestStartSpawnSession` | `public override void RequestStartSpawnSession()` | 方法 |
| `SpawnAgents` | `protected override void SpawnAgents()` | 方法 |
| `AllowEarlyAgentVisualsDespawning` | `public override bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)` | 方法 |
| `IsRoundInProgress` | `protected override bool IsRoundInProgress()` | 方法 |
| `OnClearScene` | `public override void OnClearScene()` | 方法 |
| `SpawnBotInBotFormation` | `protected void SpawnBotInBotFormation(int visualsIndex, Team agentTeam, BasicCultureObject cultureLimit, BasicCharacterObject character, Formation formation)` | 方法 |
| `SpawnBotVisualsInPlayerFormation` | `protected void SpawnBotVisualsInPlayerFormation(MissionPeer missionPeer, int visualsIndex, Team agentTeam, BasicCultureObject cultureLimit, string troopName, Formation formation, bool updateExistingAgentVisuals, int totalCount, IEnumerable<ValueTuple<EquipmentIndex, EquipmentElement>>alternativeEquipments)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SpawningBehaviorBase](../SpawningBehaviorBase/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
