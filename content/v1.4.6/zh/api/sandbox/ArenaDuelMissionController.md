---
title: "ArenaDuelMissionController"
description: "ArenaDuelMissionController：SandBox 的 public 类，继承 MissionLogic；公开成员 5 个（方法 4、属性 0、字段 0）。源文件 SandBox/Missions/MissionLogics/Arena/ArenaDuelMissionController.cs。"
---
# ArenaDuelMissionController

**Namespace:** `SandBox.Missions.MissionLogics.Arena`
**Module:** `SandBox`
**Type:** `public class ArenaDuelMissionController : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Arena/ArenaDuelMissionController.cs`

## 概述

ArenaDuelMissionController 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/Arena/ArenaDuelMissionController.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 ArenaDuelMissionController → MissionLogic。public/protected 成员共 5 个：4 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ArenaDuelMissionController 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionLogics.Arena），继承链 ArenaDuelMissionController → MissionLogic。成员构成以方法为主（方法 4/5，属性 0/5），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/Arena/ArenaDuelMissionController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ArenaDuelMissionController` | `public ArenaDuelMissionController(CharacterObject duelCharacter, bool requireCivilianEquipment, bool spawnBothSideWithHorses, Action<CharacterObject>onDuelEnd, float customAgentHealth)` | 构造函数 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | 方法 |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArenaAgentStateDeciderLogic](../ArenaAgentStateDeciderLogic)
- [同命名空间 ArenaDuelMissionBehavior](../ArenaDuelMissionBehavior)
- [同命名空间 ArenaPracticeFightMissionController](../ArenaPracticeFightMissionController)
