---
title: "DefaultBattleMissionAgentSpawnLogic"
description: "DefaultBattleMissionAgentSpawnLogic：TaleWorlds.MountAndBlade 的 public 类，继承 MissionLogic、IBattleMissionAgentSpawnLogic；公开成员 45 个（方法 24、属性 17、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/DefaultBattleMissionAgentSpawnLogic.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultBattleMissionAgentSpawnLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefaultBattleMissionAgentSpawnLogic : MissionLogic, IBattleMissionAgentSpawnLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/DefaultBattleMissionAgentSpawnLogic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

DefaultBattleMissionAgentSpawnLogic 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/DefaultBattleMissionAgentSpawnLogic.cs。它是一个 public 类，实现/继承 MissionLogic、IBattleMissionAgentSpawnLogic、IMissionAgentSpawnLogic、IMissionBehavior，继承链为 DefaultBattleMissionAgentSpawnLogic → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 45 个：24 方法、17 属性、2 事件、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultBattleMissionAgentSpawnLogic 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 DefaultBattleMissionAgentSpawnLogic → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 24/45，属性 17/45），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/DefaultBattleMissionAgentSpawnLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxNumberOfAgentsForMission` | `public static int MaxNumberOfAgentsForMission` | 属性 |
| `MaxNumberOfTroopsForMission` | `public static int MaxNumberOfTroopsForMission` | 属性 |
| `int>OnReinforcementsSpawned;` | `public event Action<BattleSideEnum, int>OnReinforcementsSpawned;` | 事件 |
| `int>OnInitialTroopsSpawned;` | `public event Action<BattleSideEnum, int>OnInitialTroopsSpawned;` | 事件 |
| `NumberOfRemainingTroops` | `public int NumberOfRemainingTroops` | 属性 |
| `NumberOfActiveDefenderTroops` | `public int NumberOfActiveDefenderTroops` | 属性 |
| `NumberOfActiveAttackerTroops` | `public int NumberOfActiveAttackerTroops` | 属性 |
| `NumberOfRemainingDefenderTroops` | `public int NumberOfRemainingDefenderTroops` | 属性 |
| `NumberOfRemainingAttackerTroops` | `public int NumberOfRemainingAttackerTroops` | 属性 |
| `PlayerSide` | `public BattleSideEnum PlayerSide` | 属性 |
| `TotalSpawnNumber` | `public int TotalSpawnNumber` | 属性 |
| `BattleSize` | `public int BattleSize` | 属性 |
| `NumberOfAgents` | `public int NumberOfAgents` | 属性 |
| `DefenderActivePhase` | `public MissionSpawnPhase DefenderActivePhase` | 属性 |
| `AttackerActivePhase` | `public MissionSpawnPhase AttackerActivePhase` | 属性 |
| `SpawnSettings` | `public readonly ref MissionSpawnSettings SpawnSettings` | 属性 |
| `DeploymentPlan` | `public IMissionDeploymentPlan DeploymentPlan` | 属性 |
| `IsInitialSpawnOver` | `public bool IsInitialSpawnOver` | 属性 |
| `IsDeploymentOver` | `public bool IsDeploymentOver` | 属性 |
| `DefaultBattleMissionAgentSpawnLogic` | `public DefaultBattleMissionAgentSpawnLogic(IMissionTroopSupplier[]suppliers, BattleSideEnum playerSide, Mission.BattleSizeType battleSizeType)` | 构造函数 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `InitWithSinglePhase` | `public void InitWithSinglePhase(int defenderTotalSpawn, int attackerTotalSpawn, int defenderInitialSpawn, int attackerInitialSpawn, bool spawnDefenders, bool spawnAttackers, in MissionSpawnSettings spawnSettings)` | 方法 |
| `IEnumerable` | `public IEnumerable<IAgentOriginBase>GetAllTroopsForSide(BattleSideEnum side)` | 方法 |
| `SetCustomReinforcementSpawnTimer` | `public void SetCustomReinforcementSpawnTimer(ICustomReinforcementSpawnTimer timer)` | 方法 |
| `SetSpawnTroops` | `public void SetSpawnTroops(BattleSideEnum side, bool spawnTroops, bool enforceSpawning = false)` | 方法 |
| `SetSpawnHorses` | `public void SetSpawnHorses(BattleSideEnum side, bool spawnHorses)` | 方法 |
| `StartSpawner` | `public void StartSpawner(BattleSideEnum side)` | 方法 |
| `StopSpawner` | `public void StopSpawner(BattleSideEnum side)` | 方法 |
| `IsSideSpawnEnabled` | `public bool IsSideSpawnEnabled(BattleSideEnum side)` | 方法 |
| `OnSideDeploymentOver` | `public void OnSideDeploymentOver(BattleSideEnum battleSide)` | 方法 |
| `GetNumberOfPlayerControllableTroops` | `public int GetNumberOfPlayerControllableTroops()` | 方法 |
| `GetReinforcementInterval` | `public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None)` | 方法 |
| `SetReinforcementsSpawnEnabled` | `public void SetReinforcementsSpawnEnabled(bool value, bool resetTimers = true)` | 方法 |
| `GetTotalNumberOfTroopsForSide` | `public int GetTotalNumberOfTroopsForSide(BattleSideEnum side)` | 方法 |
| `GetGeneralCharacterOfSide` | `public BasicCharacterObject GetGeneralCharacterOfSide(BattleSideEnum side)` | 方法 |
| `GetSpawnHorses` | `public bool GetSpawnHorses(BattleSideEnum side)` | 方法 |
| `IsSideDepleted` | `public bool IsSideDepleted(BattleSideEnum side)` | 方法 |
| `AddPhaseChangeAction` | `public void AddPhaseChangeAction(BattleSideEnum side, DefaultBattleMissionAgentSpawnLogic.OnPhaseChangedDelegate onPhaseChanged)` | 方法 |
| `ComputeDeploymentBaseOffsets` | `public static void ComputeDeploymentBaseOffsets(SpawnPathData sideSpawnPathData, float baseDeploymentOffset, out float deployingSideBaseOffset, out float opposingSideBaseOffset)` | 方法 |
| `ComputeTeamDeploymentOffsets` | `public static void ComputeTeamDeploymentOffsets(SpawnPathData spawnPathData, float deploymentBaseOffset, float interTeamGapOffset, float[]teamOffsetRanges, out float[]teamDeployOffsets)` | 方法 |
| `OnPhaseChangedDelegate` | `public delegate void OnPhaseChangedDelegate();` | 方法 |
| `OnPhaseChangedDelegate` | `public delegate void OnPhaseChangedDelegate()` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../MissionLogic/)
- [基类/接口 IBattleMissionAgentSpawnLogic](../IBattleMissionAgentSpawnLogic/)
- [基类/接口 IMissionAgentSpawnLogic](../IMissionAgentSpawnLogic/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
