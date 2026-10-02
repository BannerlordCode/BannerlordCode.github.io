---
title: "BattleScoreContext"
description: "BattleScoreContext：TaleWorlds.MountAndBlade 的 public 类；公开成员 3 个（方法 2、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade/Missions/BattleScore/BattleScoreContext.cs。"
---
# BattleScoreContext

**Namespace:** `TaleWorlds.MountAndBlade.Missions.BattleScore`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BattleScoreContext`
**File:** `TaleWorlds.MountAndBlade/Missions/BattleScore/BattleScoreContext.cs`

## 概述

BattleScoreContext 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Missions/BattleScore/BattleScoreContext.cs。它是一个 public 类（abstract），继承链为 BattleScoreContext。public/protected 成员共 3 个：2 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BattleScoreContext 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.Missions.BattleScore），继承链 BattleScoreContext。成员构成以方法为主（方法 2/3，属性 1/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Missions/BattleScore/BattleScoreContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsPowerComparisonRelevant` | `public abstract bool IsPowerComparisonRelevant` | 属性 |
| `GetAttackerBanner` | `public abstract Banner GetAttackerBanner();` | 方法 |
| `GetDefenderBanner` | `public abstract Banner GetDefenderBanner();` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CustomBattleScoreContext](../CustomBattleScoreContext)
