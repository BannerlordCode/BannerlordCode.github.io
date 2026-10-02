---
title: "ArenaPracticeFightMissionController"
description: "ArenaPracticeFightMissionController：SandBox 的 public 类，继承 MissionLogic；公开成员 15 个（方法 8、属性 6、字段 1）。源文件 SandBox/Missions/MissionLogics/Arena/ArenaPracticeFightMissionController.cs。"
---
# ArenaPracticeFightMissionController

**Namespace:** `SandBox.Missions.MissionLogics.Arena`
**Module:** `SandBox`
**Type:** `public class ArenaPracticeFightMissionController : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Arena/ArenaPracticeFightMissionController.cs`

## 概述

ArenaPracticeFightMissionController 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/Arena/ArenaPracticeFightMissionController.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 ArenaPracticeFightMissionController → MissionLogic。public/protected 成员共 15 个：8 方法、6 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ArenaPracticeFightMissionController 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionLogics.Arena），继承链 ArenaPracticeFightMissionController → MissionLogic。成员构成以方法为主（方法 8/15，属性 6/15），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/Arena/ArenaPracticeFightMissionController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RemainingOpponentCountFromLastPractice` | `public int RemainingOpponentCountFromLastPractice` | 属性 |
| `IsPlayerPracticing` | `public bool IsPlayerPracticing` | 属性 |
| `OpponentCountBeatenByPlayer` | `public int OpponentCountBeatenByPlayer` | 属性 |
| `RemainingOpponentCount` | `public int RemainingOpponentCount` | 属性 |
| `IsPlayerSurvived` | `public bool IsPlayerSurvived` | 属性 |
| `AfterPractice` | `public bool AfterPractice` | 属性 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnScoreHit` | `public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | 方法 |
| `MissionEnded` | `public override bool MissionEnded(ref MissionResult missionResult)` | 方法 |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)` | 方法 |
| `StartPlayerPractice` | `public void StartPlayerPractice()` | 方法 |
| `List` | `public static List<CharacterObject>GetParticipantCharacters(Settlement settlement)` | 方法 |
| `TeleportTime` | `public int TeleportTime` | 字段 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArenaAgentStateDeciderLogic](../ArenaAgentStateDeciderLogic)
- [同命名空间 ArenaDuelMissionBehavior](../ArenaDuelMissionBehavior)
- [同命名空间 ArenaDuelMissionController](../ArenaDuelMissionController)
