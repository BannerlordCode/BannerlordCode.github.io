---
title: "StealthAreaMissionLogic"
description: "StealthAreaMissionLogic：SandBox.Missions.MissionLogics 的 public 类，继承 MissionLogic；公开成员 14 个（方法 9、属性 3、字段 0）。canonical 桶 sandbox。源文件 SandBox/Missions/MissionLogics/StealthAreaMissionLogic.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StealthAreaMissionLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class StealthAreaMissionLogic : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/StealthAreaMissionLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

StealthAreaMissionLogic 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/StealthAreaMissionLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 StealthAreaMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 14 个：9 方法、3 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StealthAreaMissionLogic 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Missions.MissionLogics`，继承链 StealthAreaMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 9/14，属性 3/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/StealthAreaMissionLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<Agent>AllyTroops` | 属性 |
| `AllReinforcementsCalled` | `public bool AllReinforcementsCalled` | 属性 |
| `IsSentry` | `public bool IsSentry(Agent agent)` | 方法 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | 方法 |
| `OnAgentTeamChanged` | `public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `OnObjectUsed` | `public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)` | 方法 |
| `CheckIfAllStealthAreasAreTriggered` | `public bool CheckIfAllStealthAreasAreTriggered()` | 方法 |
| `CheckIfAllStealthAreasReinforcementsAreCalled` | `public bool CheckIfAllStealthAreasReinforcementsAreCalled()` | 方法 |
| `MBList` | `public delegate MBList<Agent>SpawnReinforcementAllyTroopsDelegate(StealthAreaMissionLogic.StealthAreaData triggeredStealthAreaData, StealthAreaMarker stealthAreaMarker);` | 方法 |
| `StealthAreaData` | `public class StealthAreaData` | 属性 |
| `MBList` | `public delegate MBList<Agent>SpawnReinforcementAllyTroopsDelegate(StealthAreaMissionLogic.StealthAreaData triggeredStealthAreaData, StealthAreaMarker stealthAreaMarker)` | 嵌套类型 |
| `StealthAreaData` | `public class StealthAreaData` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../../mission-ext/MissionLogic/)
- [同命名空间 BattleAgentLogic](../BattleAgentLogic/)
- [同命名空间 BattleSurgeonLogic](../BattleSurgeonLogic/)
- [同命名空间 CampaignMissionComponent](../CampaignMissionComponent/)
- [同命名空间 CampaignSiegeStateHandler](../CampaignSiegeStateHandler/)
