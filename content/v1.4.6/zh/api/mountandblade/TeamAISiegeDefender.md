---
title: "TeamAISiegeDefender"
description: "TeamAISiegeDefender：TaleWorlds.MountAndBlade 的 public 类，继承 TeamAISiegeComponent；公开成员 5 个（方法 2、属性 1、字段 1）。源文件 TaleWorlds.MountAndBlade/TeamAISiegeDefender.cs。"
---
# TeamAISiegeDefender

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TeamAISiegeDefender : TeamAISiegeComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAISiegeDefender.cs`

## 概述

TeamAISiegeDefender 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/TeamAISiegeDefender.cs。它是一个 public 类，实现/继承 TeamAISiegeComponent，继承链为 TeamAISiegeDefender → TeamAISiegeComponent → TeamAIComponent。public/protected 成员共 5 个：2 方法、1 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TeamAISiegeDefender 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 TeamAISiegeDefender → TeamAISiegeComponent → TeamAIComponent。成员构成以方法为主（方法 2/5，属性 1/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/TeamAISiegeDefender.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public List<ArcherPosition>ArcherPositions` | 属性 |
| `TeamAISiegeDefender` | `public TeamAISiegeDefender(Mission currentMission, Team currentTeam, float thinkTimerTime, float applyTimerTime) : base(currentMission, currentTeam, thinkTimerTime, applyTimerTime)` | 构造函数 |
| `OnUnitAddedToFormationForTheFirstTime` | `public override void OnUnitAddedToFormationForTheFirstTime(Formation formation)` | 方法 |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | 方法 |
| `InsideEnemyThresholdRatio` | `public const float InsideEnemyThresholdRatio` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 TeamAISiegeComponent](../TeamAISiegeComponent)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
