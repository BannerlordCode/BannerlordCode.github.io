---
title: "MissionAgentHandler"
description: "MissionAgentHandler：SandBox 的 public 类，继承 MissionLogic；公开成员 31 个（方法 27、属性 3、字段 0）。源文件 SandBox/Missions/MissionLogics/MissionAgentHandler.cs。"
---
# MissionAgentHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class MissionAgentHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionAgentHandler.cs`

## 概述

MissionAgentHandler 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/MissionAgentHandler.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 MissionAgentHandler → MissionLogic。public/protected 成员共 31 个：27 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionAgentHandler 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionLogics），继承链 MissionAgentHandler → MissionLogic。成员构成以方法为主（方法 27/31，属性 3/31），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/MissionAgentHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HasPassages` | `public bool HasPassages()` | 方法 |
| `List` | `public List<UsableMachine>TownPassageProps` | 属性 |
| `List` | `public List<UsableMachine>DisabledPassages` | 属性 |
| `List` | `public List<UsableMachine>UsablePoints` | 属性 |
| `MissionAgentHandler` | `public MissionAgentHandler()` | 构造函数 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `OnRenderingStarted` | `public override void OnRenderingStarted()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `OnMissionModeChange` | `public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | 方法 |
| `DetectMissingEntities` | `public void DetectMissingEntities()` | 方法 |
| `int>FindUnusedUsablePointCount` | `public Dictionary<string, int>FindUnusedUsablePointCount()` | 方法 |
| `SpawnLocationCharacters` | `public void SpawnLocationCharacters(string overridenTagValue = null)` | 方法 |
| `SpawnDefaultLocationCharacter` | `public Agent SpawnDefaultLocationCharacter(LocationCharacter locationCharacter, bool simulateAgentAfterSpawn = false)` | 方法 |
| `SimulateAgent` | `public void SimulateAgent(Agent agent)` | 方法 |
| `FadeoutExitingLocationCharacter` | `public void FadeoutExitingLocationCharacter(LocationCharacter locationCharacter)` | 方法 |
| `SpawnEnteringLocationCharacter` | `public void SpawnEnteringLocationCharacter(LocationCharacter locationCharacter, Location fromLocation)` | 方法 |
| `HasUsablePointWithTag` | `public bool HasUsablePointWithTag(string tag)` | 方法 |
| `IEnumerable` | `public IEnumerable<string>GetAllSpawnTags()` | 方法 |
| `List` | `public List<UsableMachine>GetAllUsablePointsWithTag(string tag)` | 方法 |
| `SpawnWanderingAgent` | `public Agent SpawnWanderingAgent(LocationCharacter locationCharacter)` | 方法 |
| `SpawnWanderingAgentWithDelay` | `public void SpawnWanderingAgentWithDelay(LocationCharacter locationCharacter, MatrixFrame matrixFrame, GameEntity spawnEntity, bool noHorses = true, bool hasTorch = false, float delay = 3f)` | 方法 |
| `SpawnWanderingAgentWithInitialFrame` | `public Agent SpawnWanderingAgentWithInitialFrame(LocationCharacter locationCharacter, MatrixFrame spawnPointFrame, WeakGameEntity spawnEntity, bool noHorses = true, bool hasTorch = false)` | 方法 |
| `GetRandomTournamentTeamColor` | `public static uint GetRandomTournamentTeamColor(int teamIndex)` | 方法 |
| `uint>GetAgentSettlementColors` | `public static ValueTuple<uint, uint>GetAgentSettlementColors(LocationCharacter locationCharacter)` | 方法 |
| `FindUnusedPointWithTagForAgent` | `public UsableMachine FindUnusedPointWithTagForAgent(Agent agent, string tag)` | 方法 |
| `List` | `public List<UsableMachine>FindUnusedPoints(string tag)` | 方法 |
| `List` | `public List<UsableMachine>FindAllUnusedPoints(Agent agent, string primaryTag)` | 方法 |
| `TeleportTargetAgentNearReferenceAgent` | `public void TeleportTargetAgentNearReferenceAgent(Agent referenceAgent, Agent teleportAgent, bool teleportFollowers, bool teleportOpposite)` | 方法 |
| `GetPointCountOfUsableMachine` | `public static int GetPointCountOfUsableMachine(UsableMachine usableMachine, bool checkForUnusedOnes)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BattleAgentLogic](../BattleAgentLogic)
- [同命名空间 BattleSurgeonLogic](../BattleSurgeonLogic)
- [同命名空间 CampaignMissionComponent](../CampaignMissionComponent)
- [同命名空间 CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
