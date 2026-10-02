---
title: "HideoutAmbushMissionController"
description: "HideoutAmbushMissionController：SandBox 的 public 类，继承 MissionLogic；公开成员 22 个（方法 18、属性 2、字段 0）。源文件 SandBox/Missions/MissionLogics/Hideout/HideoutAmbushMissionController.cs。"
---
# HideoutAmbushMissionController

**Namespace:** `SandBox.Missions.MissionLogics.Hideout`
**Module:** `SandBox`
**Type:** `public class HideoutAmbushMissionController : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushMissionController.cs`

## 概述

HideoutAmbushMissionController 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/Hideout/HideoutAmbushMissionController.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 HideoutAmbushMissionController → MissionLogic。public/protected 成员共 22 个：18 方法、2 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HideoutAmbushMissionController 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionLogics.Hideout），继承链 HideoutAmbushMissionController → MissionLogic。成员构成以方法为主（方法 18/22，属性 2/22），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/Hideout/HideoutAmbushMissionController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsReadyForCallTroopsCinematic` | `public bool IsReadyForCallTroopsCinematic` | 属性 |
| `HideoutAmbushMissionController` | `public HideoutAmbushMissionController(IMissionTroopSupplier[]suppliers, BattleSideEnum playerSide, int playerTroopCount)` | 构造函数 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnCreated` | `public override void OnCreated()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | 方法 |
| `OnAgentAlarmedStateChanged` | `public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `OnMissionStateFinalized` | `public override void OnMissionStateFinalized()` | 方法 |
| `OnObjectUsed` | `public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)` | 方法 |
| `OnStealthMissionCounterFailed` | `public void OnStealthMissionCounterFailed(OnStealthMissionCounterFailedEvent obj)` | 方法 |
| `IsSideDepleted` | `public bool IsSideDepleted(BattleSideEnum side)` | 方法 |
| `SetOverriddenHideoutBossCharacterObject` | `public void SetOverriddenHideoutBossCharacterObject(CharacterObject characterObject)` | 方法 |
| `OnAgentsShouldBeEnabled` | `public void OnAgentsShouldBeEnabled()` | 方法 |
| `StartBossFightDuelMode` | `public static void StartBossFightDuelMode()` | 方法 |
| `StartBossFightBattleMode` | `public static void StartBossFightBattleMode()` | 方法 |
| `KillAllSentries` | `public static string KillAllSentries(List<string>strings)` | 方法 |
| `TroopData` | `public class TroopData` | 属性 |
| `TroopData` | `public class TroopData` | 嵌套类型 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 HideoutAmbushBossFightCinematicController](../HideoutAmbushBossFightCinematicController)
- [同命名空间 HideoutCinematicController](../HideoutCinematicController)
- [同命名空间 HideoutMissionController](../HideoutMissionController)
