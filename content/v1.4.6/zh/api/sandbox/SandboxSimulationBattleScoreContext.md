---
title: "SandboxSimulationBattleScoreContext"
description: "SandboxSimulationBattleScoreContext：SandBox 的 public 类，继承 BattleScoreContext；公开成员 4 个（方法 2、属性 1、字段 0）。源文件 SandBox/Missions/BattleScore/SandboxSimulationBattleScoreContext.cs。"
---
# SandboxSimulationBattleScoreContext

**Namespace:** `SandBox.Missions.BattleScore`
**Module:** `SandBox`
**Type:** `public class SandboxSimulationBattleScoreContext : BattleScoreContext`
**File:** `SandBox/Missions/BattleScore/SandboxSimulationBattleScoreContext.cs`

## 概述

SandboxSimulationBattleScoreContext 位于 SandBox 模块，源文件 SandBox/Missions/BattleScore/SandboxSimulationBattleScoreContext.cs。它是一个 public 类，实现/继承 BattleScoreContext，继承链为 SandboxSimulationBattleScoreContext → BattleScoreContext。public/protected 成员共 4 个：2 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandboxSimulationBattleScoreContext 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.BattleScore），继承链 SandboxSimulationBattleScoreContext → BattleScoreContext。成员构成以方法为主（方法 2/4，属性 1/4），对外主要以操作入口暴露。继承链上的 BattleScoreContext 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/BattleScore/SandboxSimulationBattleScoreContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SandboxSimulationBattleScoreContext` | `public SandboxSimulationBattleScoreContext(BattleSimulation battleSimulation)` | 构造函数 |
| `IsPowerComparisonRelevant` | `public override bool IsPowerComparisonRelevant` | 属性 |
| `GetAttackerBanner` | `public override Banner GetAttackerBanner()` | 方法 |
| `GetDefenderBanner` | `public override Banner GetDefenderBanner()` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 SandboxMissionBattleScoreContext](../SandboxMissionBattleScoreContext)
