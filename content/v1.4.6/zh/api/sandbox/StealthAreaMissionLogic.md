---
title: "StealthAreaMissionLogic"
description: "StealthAreaMissionLogic：SandBox 的 public 类，继承 MissionLogic；公开成员 14 个（方法 9、属性 3、字段 0）。源文件 SandBox/Missions/MissionLogics/StealthAreaMissionLogic.cs。"
---
# StealthAreaMissionLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class StealthAreaMissionLogic : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/StealthAreaMissionLogic.cs`

## 概述

StealthAreaMissionLogic 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/StealthAreaMissionLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 StealthAreaMissionLogic → MissionLogic。public/protected 成员共 14 个：9 方法、3 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StealthAreaMissionLogic 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionLogics），继承链 StealthAreaMissionLogic → MissionLogic。成员构成以方法为主（方法 9/14，属性 3/14），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/StealthAreaMissionLogic.cs 的方法体或该类型的深写页确认。

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

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BattleAgentLogic](../BattleAgentLogic)
- [同命名空间 BattleSurgeonLogic](../BattleSurgeonLogic)
- [同命名空间 CampaignMissionComponent](../CampaignMissionComponent)
- [同命名空间 CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
