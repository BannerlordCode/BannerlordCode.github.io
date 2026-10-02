---
title: "WhileEnteringSettlementBattleMissionController"
description: "WhileEnteringSettlementBattleMissionController：SandBox.Missions.MissionLogics 的 public 类，继承 MissionLogic、IMissionAgentSpawnLogic；公开成员 12 个（方法 10、属性 1、字段 0）。canonical 桶 sandbox。源文件 SandBox/Missions/MissionLogics/WhileEnteringSettlementBattleMissionController.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WhileEnteringSettlementBattleMissionController

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class WhileEnteringSettlementBattleMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**File:** `SandBox/Missions/MissionLogics/WhileEnteringSettlementBattleMissionController.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

WhileEnteringSettlementBattleMissionController 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/WhileEnteringSettlementBattleMissionController.cs。它是一个 public 类，实现/继承 MissionLogic、IMissionAgentSpawnLogic、IMissionBehavior，继承链为 WhileEnteringSettlementBattleMissionController → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 12 个：10 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WhileEnteringSettlementBattleMissionController 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Missions.MissionLogics`，继承链 WhileEnteringSettlementBattleMissionController → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 10/12，属性 1/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/WhileEnteringSettlementBattleMissionController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerSide` | `public BattleSideEnum PlayerSide` | 属性 |
| `WhileEnteringSettlementBattleMissionController` | `public WhileEnteringSettlementBattleMissionController(IMissionTroopSupplier[]suppliers, int numberOfMaxTroopForPlayer, int numberOfMaxTroopForEnemy)` | 构造函数 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `StartSpawner` | `public void StartSpawner(BattleSideEnum side)` | 方法 |
| `StopSpawner` | `public void StopSpawner(BattleSideEnum side)` | 方法 |
| `IsSideSpawnEnabled` | `public bool IsSideSpawnEnabled(BattleSideEnum side)` | 方法 |
| `GetReinforcementInterval` | `public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None)` | 方法 |
| `IsSideDepleted` | `public bool IsSideDepleted(BattleSideEnum side)` | 方法 |
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
