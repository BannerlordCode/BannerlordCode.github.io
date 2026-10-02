---
title: "LordsHallFightMissionController"
description: "LordsHallFightMissionController：TaleWorlds.MountAndBlade.Source.Missions.Handlers 的 public 类，继承 MissionLogic、IMissionAgentSpawnLogic；公开成员 15 个（方法 13、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Source/Missions/Handlers/LordsHallFightMissionController.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LordsHallFightMissionController

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions.Handlers`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class LordsHallFightMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/LordsHallFightMissionController.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

LordsHallFightMissionController 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Source/Missions/Handlers/LordsHallFightMissionController.cs。它是一个 public 类，实现/继承 MissionLogic、IMissionAgentSpawnLogic、IMissionBehavior，继承链为 LordsHallFightMissionController → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 15 个：13 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LordsHallFightMissionController 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Source.Missions.Handlers`，继承链 LordsHallFightMissionController → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 13/15，属性 1/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Source/Missions/Handlers/LordsHallFightMissionController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerSide` | `public BattleSideEnum PlayerSide` | 属性 |
| `LordsHallFightMissionController` | `public LordsHallFightMissionController(IMissionTroopSupplier[]suppliers, float areaLostRatio, float attackerDefenderTroopCountRatio, int attackerSideTroopCountMax, int defenderSideTroopCountMax, BattleSideEnum playerSide)` | 构造函数 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnMissionStateFinalized` | `public override void OnMissionStateFinalized()` | 方法 |
| `OnCreated` | `public override void OnCreated()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `StartSpawner` | `public void StartSpawner(BattleSideEnum side)` | 方法 |
| `StopSpawner` | `public void StopSpawner(BattleSideEnum side)` | 方法 |
| `IsSideSpawnEnabled` | `public bool IsSideSpawnEnabled(BattleSideEnum side)` | 方法 |
| `GetReinforcementInterval` | `public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None)` | 方法 |
| `IsSideDepleted` | `public bool IsSideDepleted(BattleSideEnum side)` | 方法 |
| `GetNumberOfPlayerControllableTroops` | `public int GetNumberOfPlayerControllableTroops()` | 方法 |
| `IEnumerable` | `public IEnumerable<IAgentOriginBase>GetAllTroopsForSide(BattleSideEnum side)` | 方法 |
| `GetSpawnHorses` | `public bool GetSpawnHorses(BattleSideEnum side)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../MissionLogic/)
- [基类/接口 IMissionAgentSpawnLogic](../IMissionAgentSpawnLogic/)
- [基类/接口 IMissionBehavior](../IMissionBehavior/)
- [同命名空间 BasicMissionHandler](../BasicMissionHandler/)
- [同命名空间 IBoardGameHandler](../IBoardGameHandler/)
- [同命名空间 MissionFacialAnimationHandler](../MissionFacialAnimationHandler/)
