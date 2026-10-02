---
title: "MissionFightHandler"
description: "MissionFightHandler：SandBox 的 public 类，继承 MissionLogic；公开成员 24 个（方法 19、属性 4、字段 0）。源文件 SandBox/Missions/MissionLogics/MissionFightHandler.cs。"
---
# MissionFightHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class MissionFightHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionFightHandler.cs`

## 概述

MissionFightHandler 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/MissionFightHandler.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 MissionFightHandler → MissionLogic。public/protected 成员共 24 个：19 方法、4 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionFightHandler 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionLogics），继承链 MissionFightHandler → MissionLogic。成员构成以方法为主（方法 19/24，属性 4/24），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/MissionFightHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MinMissionEndTime` | `public float MinMissionEndTime` | 属性 |
| `ReadOnlyCollection` | `public ReadOnlyCollection<Agent>PlayerSideAgents` | 属性 |
| `ReadOnlyCollection` | `public ReadOnlyCollection<Agent>OpponentSideAgents` | 属性 |
| `IsPlayerSideWon` | `public bool IsPlayerSideWon` | 属性 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | 方法 |
| `StartCustomFight` | `public void StartCustomFight(List<Agent>playerSideAgents, List<Agent>opponentSideAgents, bool dropWeapons, bool isItemUseDisabled, MissionFightHandler.OnFightEndDelegate onFightEndDelegate, float minimumEndTime = 1E-45f)` | 方法 |
| `StartFistFight` | `public void StartFistFight(Agent opponent, MissionFightHandler.OnFightEndDelegate onFightEndDelegate, float minimumEndTime = 1E-45f)` | 方法 |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `GetAgentToSpectate` | `public static Agent GetAgentToSpectate()` | 方法 |
| `BeginEndFight` | `public void BeginEndFight()` | 方法 |
| `EndFight` | `public void EndFight(bool overrideDuelWonByPlayer = false)` | 方法 |
| `IsThereActiveFight` | `public bool IsThereActiveFight()` | 方法 |
| `AddAgentToSide` | `public void AddAgentToSide(Agent agent, bool isPlayerSide)` | 方法 |
| `IEnumerable` | `public IEnumerable<Agent>GetDangerSources(Agent ownerAgent)` | 方法 |
| `IsAgentAggressive` | `public static bool IsAgentAggressive(Agent agent)` | 方法 |
| `IsAgentJusticeWarrior` | `public static bool IsAgentJusticeWarrior(CharacterObject character)` | 方法 |
| `IsAgentVillian` | `public static bool IsAgentVillian(CharacterObject character)` | 方法 |
| `OnFightEndDelegate` | `public delegate void OnFightEndDelegate(bool isPlayerSideWon);` | 方法 |
| `OnFightEndDelegate` | `public delegate void OnFightEndDelegate(bool isPlayerSideWon)` | 嵌套类型 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BattleAgentLogic](../BattleAgentLogic)
- [同命名空间 BattleSurgeonLogic](../BattleSurgeonLogic)
- [同命名空间 CampaignMissionComponent](../CampaignMissionComponent)
- [同命名空间 CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
