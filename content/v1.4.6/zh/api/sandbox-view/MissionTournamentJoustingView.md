---
title: "MissionTournamentJoustingView"
description: "MissionTournamentJoustingView：SandBox.View 的 public 类，继承 MissionView；公开成员 6 个（方法 6、属性 0、字段 0）。源文件 SandBox.View/Missions/Tournaments/MissionTournamentJoustingView.cs。"
---
# MissionTournamentJoustingView

**Namespace:** `SandBox.View.Missions.Tournaments`
**Module:** `SandBox.View`
**Type:** `public class MissionTournamentJoustingView : MissionView`
**File:** `SandBox.View/Missions/Tournaments/MissionTournamentJoustingView.cs`

## 概述

MissionTournamentJoustingView 位于 SandBox.View 模块，源文件 SandBox.View/Missions/Tournaments/MissionTournamentJoustingView.cs。它是一个 public 类，实现/继承 MissionView，继承链为 MissionTournamentJoustingView → MissionView。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionTournamentJoustingView 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Missions.Tournaments），继承链 MissionTournamentJoustingView → MissionView。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。继承链上的 MissionView 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Missions/Tournaments/MissionTournamentJoustingView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnAgentHit` | `public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | 方法 |
| `ShowMessage` | `public void ShowMessage(string str, float duration, bool hasPriority = true)` | 方法 |
| `ShowMessage` | `public void ShowMessage(Agent agent, string str, float duration, bool hasPriority = true)` | 方法 |
| `DeleteMessage` | `public void DeleteMessage(string str)` | 方法 |
| `DeleteMessage` | `public void DeleteMessage(Agent agent, string str)` | 方法 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionTournamentView](../MissionTournamentView)
- [同命名空间 TournamentMissionViews](../TournamentMissionViews)
