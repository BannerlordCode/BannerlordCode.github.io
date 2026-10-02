---
title: "TournamentFightMissionController"
description: "TournamentFightMissionController：SandBox 的 public 类，继承 MissionLogic、ITournamentGameBehavior；公开成员 15 个（方法 14、属性 0、字段 0）。源文件 SandBox/Tournaments/MissionLogics/TournamentFightMissionController.cs。"
---
# TournamentFightMissionController

**Namespace:** `SandBox.Tournaments.MissionLogics`
**Module:** `SandBox`
**Type:** `public class TournamentFightMissionController : MissionLogic, ITournamentGameBehavior`
**File:** `SandBox/Tournaments/MissionLogics/TournamentFightMissionController.cs`

## 概述

TournamentFightMissionController 位于 SandBox 模块，源文件 SandBox/Tournaments/MissionLogics/TournamentFightMissionController.cs。它是一个 public 类，实现/继承 MissionLogic、ITournamentGameBehavior，继承链为 TournamentFightMissionController → MissionLogic。public/protected 成员共 15 个：14 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TournamentFightMissionController 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Tournaments.MissionLogics），继承链 TournamentFightMissionController → MissionLogic。成员构成以方法为主（方法 14/15，属性 0/15），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Tournaments/MissionLogics/TournamentFightMissionController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TournamentFightMissionController` | `public TournamentFightMissionController(CultureObject culture)` | 构造函数 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `PrepareForMatch` | `public void PrepareForMatch()` | 方法 |
| `StartMatch` | `public void StartMatch(TournamentMatch match, bool isLastRound)` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `SkipMatch` | `public void SkipMatch(TournamentMatch match)` | 方法 |
| `IsMatchEnded` | `public bool IsMatchEnded()` | 方法 |
| `OnMatchResultsReady` | `public void OnMatchResultsReady()` | 方法 |
| `OnMatchEnded` | `public void OnMatchEnded()` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | 方法 |
| `CanAgentRout` | `public bool CanAgentRout(Agent agent)` | 方法 |
| `OnScoreHit` | `public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | 方法 |
| `CheckIfIsThereAnyEnemies` | `public bool CheckIfIsThereAnyEnemies()` | 方法 |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ITournamentGameBehavior](../ITournamentGameBehavior)
- [同命名空间 TournamentArcheryMissionController](../TournamentArcheryMissionController)
- [同命名空间 TournamentBehavior](../TournamentBehavior)
- [同命名空间 TournamentJoustingMissionController](../TournamentJoustingMissionController)
- [同命名空间 TownHorseRaceMissionController](../TownHorseRaceMissionController)
