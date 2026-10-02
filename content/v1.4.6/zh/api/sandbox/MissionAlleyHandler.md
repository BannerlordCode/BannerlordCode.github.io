---
title: "MissionAlleyHandler"
description: "MissionAlleyHandler：SandBox 的 public 类，继承 MissionLogic；公开成员 5 个（方法 4、属性 1、字段 0）。源文件 SandBox/Missions/MissionLogics/MissionAlleyHandler.cs。"
---
# MissionAlleyHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class MissionAlleyHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionAlleyHandler.cs`

## 概述

MissionAlleyHandler 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/MissionAlleyHandler.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 MissionAlleyHandler → MissionLogic。public/protected 成员共 5 个：4 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionAlleyHandler 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionLogics），继承链 MissionAlleyHandler → MissionLogic。成员构成以方法为主（方法 4/5，属性 1/5），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/MissionAlleyHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CanThugConversationBeTriggered` | `public bool CanThugConversationBeTriggered` | 属性 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnAgentHit` | `public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | 方法 |
| `StartCommonAreaBattle` | `public void StartCommonAreaBattle(Alley alley)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BattleAgentLogic](../BattleAgentLogic)
- [同命名空间 BattleSurgeonLogic](../BattleSurgeonLogic)
- [同命名空间 CampaignMissionComponent](../CampaignMissionComponent)
- [同命名空间 CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
