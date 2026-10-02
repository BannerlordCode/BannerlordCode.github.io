---
title: "AlleyFightMissionHandler"
description: "AlleyFightMissionHandler：SandBox.Missions.MissionLogics.Towns 的 public 类，继承 MissionLogic、IMissionAgentSpawnLogic；公开成员 18 个（方法 16、属性 1、字段 0）。canonical 桶 sandbox。源文件 SandBox/Missions/MissionLogics/Towns/AlleyFightMissionHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AlleyFightMissionHandler

**Namespace:** `SandBox.Missions.MissionLogics.Towns`
**Module:** `SandBox`
**Type:** `public class AlleyFightMissionHandler : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**File:** `SandBox/Missions/MissionLogics/Towns/AlleyFightMissionHandler.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

AlleyFightMissionHandler 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/Towns/AlleyFightMissionHandler.cs。它是一个 public 类，实现/继承 MissionLogic、IMissionAgentSpawnLogic、IMissionBehavior，继承链为 AlleyFightMissionHandler → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 18 个：16 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AlleyFightMissionHandler 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Missions.MissionLogics.Towns`，继承链 AlleyFightMissionHandler → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 16/18，属性 1/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/Towns/AlleyFightMissionHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerSide` | `public BattleSideEnum PlayerSide` | 属性 |
| `AlleyFightMissionHandler` | `public AlleyFightMissionHandler(TroopRoster playerSideTroops, TroopRoster rivalSideTroops)` | 构造函数 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canLeave)` | 方法 |
| `OnRetreatMission` | `public override void OnRetreatMission()` | 方法 |
| `OnRenderingStarted` | `public override void OnRenderingStarted()` | 方法 |
| `OnMissionStateFinalized` | `public override void OnMissionStateFinalized()` | 方法 |
| `StartSpawner` | `public void StartSpawner(BattleSideEnum side)` | 方法 |
| `StopSpawner` | `public void StopSpawner(BattleSideEnum side)` | 方法 |
| `IsSideSpawnEnabled` | `public bool IsSideSpawnEnabled(BattleSideEnum side)` | 方法 |
| `IsSideDepleted` | `public bool IsSideDepleted(BattleSideEnum side)` | 方法 |
| `GetReinforcementInterval` | `public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None)` | 方法 |
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
- [同命名空间 PrisonBreakMissionController](../PrisonBreakMissionController/)
- [同命名空间 TownCenterMissionController](../TownCenterMissionController/)
- [同命名空间 WorkshopMissionHandler](../WorkshopMissionHandler/)
