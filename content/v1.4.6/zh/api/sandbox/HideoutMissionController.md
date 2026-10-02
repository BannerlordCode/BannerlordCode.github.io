---
title: "HideoutMissionController"
description: "HideoutMissionController：SandBox 的 public 类，继承 MissionLogic、IMissionAgentSpawnLogic；公开成员 21 个（方法 19、属性 1、字段 0）。源文件 SandBox/Missions/MissionLogics/Hideout/HideoutMissionController.cs。"
---
# HideoutMissionController

**Namespace:** `SandBox.Missions.MissionLogics.Hideout`
**Module:** `SandBox`
**Type:** `public class HideoutMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**File:** `SandBox/Missions/MissionLogics/Hideout/HideoutMissionController.cs`

## 概述

HideoutMissionController 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/Hideout/HideoutMissionController.cs。它是一个 public 类，实现/继承 MissionLogic、IMissionAgentSpawnLogic、IMissionBehavior，继承链为 HideoutMissionController → MissionLogic。public/protected 成员共 21 个：19 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HideoutMissionController 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionLogics.Hideout），继承链 HideoutMissionController → MissionLogic。成员构成以方法为主（方法 19/21，属性 1/21），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/Hideout/HideoutMissionController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerSide` | `public BattleSideEnum PlayerSide` | 属性 |
| `HideoutMissionController` | `public HideoutMissionController(IMissionTroopSupplier[]suppliers, BattleSideEnum playerSide, int firstPhaseEnemyTroopCount, int firstPhasePlayerSideTroopCount)` | 构造函数 |
| `OnCreated` | `public override void OnCreated()` | 方法 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnObjectStoppedBeingUsed` | `public override void OnObjectStoppedBeingUsed(Agent userAgent, UsableMissionObject usedObject)` | 方法 |
| `OnAgentAlarmedStateChanged` | `public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `OnMissionStateFinalized` | `public override void OnMissionStateFinalized()` | 方法 |
| `SetOverriddenHideoutBossCharacterObject` | `public void SetOverriddenHideoutBossCharacterObject(CharacterObject characterObject)` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `StartSpawner` | `public void StartSpawner(BattleSideEnum side)` | 方法 |
| `StopSpawner` | `public void StopSpawner(BattleSideEnum side)` | 方法 |
| `IsSideSpawnEnabled` | `public bool IsSideSpawnEnabled(BattleSideEnum side)` | 方法 |
| `GetReinforcementInterval` | `public float GetReinforcementInterval(BattleSideEnum battleSide = BattleSideEnum.None)` | 方法 |
| `IsSideDepleted` | `public unsafe bool IsSideDepleted(BattleSideEnum side)` | 方法 |
| `StartBossFightDuelMode` | `public static void StartBossFightDuelMode()` | 方法 |
| `StartBossFightBattleMode` | `public static void StartBossFightBattleMode()` | 方法 |
| `IEnumerable` | `public IEnumerable<IAgentOriginBase>GetAllTroopsForSide(BattleSideEnum side)` | 方法 |
| `GetNumberOfPlayerControllableTroops` | `public int GetNumberOfPlayerControllableTroops()` | 方法 |
| `GetSpawnHorses` | `public bool GetSpawnHorses(BattleSideEnum side)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 HideoutAmbushBossFightCinematicController](../HideoutAmbushBossFightCinematicController)
- [同命名空间 HideoutAmbushMissionController](../HideoutAmbushMissionController)
- [同命名空间 HideoutCinematicController](../HideoutCinematicController)
