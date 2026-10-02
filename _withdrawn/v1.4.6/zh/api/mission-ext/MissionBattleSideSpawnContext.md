---
title: "MissionBattleSideSpawnContext"
description: "MissionBattleSideSpawnContext：TaleWorlds.MountAndBlade 的 public 类；公开成员 28 个（方法 13、属性 14、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MissionBattleSideSpawnContext.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionBattleSideSpawnContext

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionBattleSideSpawnContext`
**File:** `TaleWorlds.MountAndBlade/MissionBattleSideSpawnContext.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionBattleSideSpawnContext 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionBattleSideSpawnContext.cs。它是一个 public 类，继承链为 MissionBattleSideSpawnContext。public/protected 成员共 28 个：13 方法、14 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionBattleSideSpawnContext 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MissionBattleSideSpawnContext。成员构成以属性为主（属性 14/28，方法 13/28），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionBattleSideSpawnContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TroopSpawnActive` | `public bool TroopSpawnActive` | 属性 |
| `IsPlayerSide` | `public bool IsPlayerSide` | 属性 |
| `ReinforcementSpawnActive` | `public bool ReinforcementSpawnActive` | 属性 |
| `SpawnWithHorses` | `public bool SpawnWithHorses` | 属性 |
| `ReinforcementsNotifiedOnLastBatch` | `public bool ReinforcementsNotifiedOnLastBatch` | 属性 |
| `NumberOfActiveTroops` | `public int NumberOfActiveTroops` | 属性 |
| `ReinforcementQuotaRequirement` | `public int ReinforcementQuotaRequirement` | 属性 |
| `ReinforcementsSpawnedInLastBatch` | `public int ReinforcementsSpawnedInLastBatch` | 属性 |
| `ReinforcementBatchSize` | `public float ReinforcementBatchSize` | 属性 |
| `HasReservedTroops` | `public bool HasReservedTroops` | 属性 |
| `HasSpawnableReinforcements` | `public bool HasSpawnableReinforcements` | 属性 |
| `ForceSpawnPlayerMounted` | `public bool ForceSpawnPlayerMounted` | 属性 |
| `ReinforcementBatchPriority` | `public float ReinforcementBatchPriority` | 属性 |
| `GetNumberOfPlayerControllableTroops` | `public int GetNumberOfPlayerControllableTroops()` | 方法 |
| `ReservedTroopsCount` | `public int ReservedTroopsCount` | 属性 |
| `MissionBattleSideSpawnContext` | `public MissionBattleSideSpawnContext(IBattleMissionAgentSpawnLogic spawnLogic, BattleSideEnum side, IMissionTroopSupplier troopSupplier, bool isPlayerSide, bool forceSpawnPlayerMounted = true)` | 构造函数 |
| `TryReinforcementSpawn` | `public int TryReinforcementSpawn()` | 方法 |
| `GetTeamFormationsSpawnData` | `public void GetTeamFormationsSpawnData([TupleElementNames(new string[]` | 方法 |
| `ReserveTroops` | `public void ReserveTroops(int number)` | 方法 |
| `GetGeneralCharacter` | `public BasicCharacterObject GetGeneralCharacter()` | 方法 |
| `CheckReinforcementBatch` | `public unsafe bool CheckReinforcementBatch()` | 方法 |
| `IEnumerable` | `public IEnumerable<IAgentOriginBase>GetAllTroops()` | 方法 |
| `SpawnTroops` | `public int SpawnTroops(int number, bool isReinforcement)` | 方法 |
| `SetSpawnWithHorses` | `public void SetSpawnWithHorses(bool spawnWithHorses)` | 方法 |
| `SetBannerBearerLogic` | `public void SetBannerBearerLogic(BannerBearerLogic bannerBearerLogic)` | 方法 |
| `SetReinforcementsNotifiedOnLastBatch` | `public void SetReinforcementsNotifiedOnLastBatch(bool value)` | 方法 |
| `SetSpawnTroops` | `public void SetSpawnTroops(bool spawnTroops)` | 方法 |
| `OnInitialSpawnOver` | `public void OnInitialSpawnOver()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
