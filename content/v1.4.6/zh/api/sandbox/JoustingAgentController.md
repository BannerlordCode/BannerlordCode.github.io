---
title: "JoustingAgentController"
description: "JoustingAgentController：SandBox 的 public 类，继承 AgentController；公开成员 11 个（方法 5、属性 5、字段 0）。源文件 SandBox/Tournaments/AgentControllers/JoustingAgentController.cs。"
---
# JoustingAgentController

**Namespace:** `SandBox.Tournaments.AgentControllers`
**Module:** `SandBox`
**Type:** `public class JoustingAgentController : AgentController`
**File:** `SandBox/Tournaments/AgentControllers/JoustingAgentController.cs`

## 概述

JoustingAgentController 位于 SandBox 模块，源文件 SandBox/Tournaments/AgentControllers/JoustingAgentController.cs。它是一个 public 类，实现/继承 AgentController，继承链为 JoustingAgentController → AgentController。public/protected 成员共 11 个：5 方法、5 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：JoustingAgentController 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Tournaments.AgentControllers），继承链 JoustingAgentController → AgentController。成员构成以方法为主（方法 5/11，属性 5/11），对外主要以操作入口暴露。继承链上的 AgentController 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Tournaments/AgentControllers/JoustingAgentController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `State` | `public JoustingAgentController.JoustingAgentState State` | 属性 |
| `JoustingMissionController` | `public TournamentJoustingMissionController JoustingMissionController` | 属性 |
| `Opponent` | `public Agent Opponent` | 属性 |
| `PrepareEquipmentsAfterDismount` | `public bool PrepareEquipmentsAfterDismount` | 属性 |
| `OnInitialize` | `public override void OnInitialize()` | 方法 |
| `UpdateState` | `public void UpdateState()` | 方法 |
| `PrepareAgentToSwordDuel` | `public void PrepareAgentToSwordDuel()` | 方法 |
| `PrepareEquipmentsForSwordDuel` | `public void PrepareEquipmentsForSwordDuel()` | 方法 |
| `IsRiding` | `public bool IsRiding()` | 方法 |
| `JoustingAgentState` | `public enum JoustingAgentState` | 属性 |
| `JoustingAgentState` | `public enum JoustingAgentState` | 嵌套类型 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArcheryTournamentAgentController](../ArcheryTournamentAgentController)
- [同命名空间 TownHorseRaceAgentController](../TownHorseRaceAgentController)
