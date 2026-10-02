---
title: "BattleDeploymentHandler"
description: "BattleDeploymentHandler：TaleWorlds.MountAndBlade 的 public 类，继承 DeploymentHandler；公开成员 6 个（方法 5、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/Missions/Handlers/BattleDeploymentHandler.cs。"
---
# BattleDeploymentHandler

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Handlers`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleDeploymentHandler : DeploymentHandler`
**File:** `TaleWorlds.MountAndBlade/Missions/Handlers/BattleDeploymentHandler.cs`

## 概述

BattleDeploymentHandler 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Missions/Handlers/BattleDeploymentHandler.cs。它是一个 public 类，实现/继承 DeploymentHandler，继承链为 BattleDeploymentHandler → DeploymentHandler → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 6 个：5 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BattleDeploymentHandler 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.Missions.Handlers），继承链 BattleDeploymentHandler → DeploymentHandler → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 5/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Missions/Handlers/BattleDeploymentHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BattleDeploymentHandler` | `public BattleDeploymentHandler(bool isPlayerAttacker) : base(isPlayerAttacker)` | 构造函数 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `AutoDeployTeamUsingDeploymentPlan` | `public override void AutoDeployTeamUsingDeploymentPlan(Team team)` | 方法 |
| `ForceUpdateAllUnits` | `public override void ForceUpdateAllUnits()` | 方法 |
| `SetDefaultFormationOrders` | `public void SetDefaultFormationOrders(OrderController orderController)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 DeploymentHandler](../DeploymentHandler)
- [同命名空间 SiegeDeploymentHandler](../SiegeDeploymentHandler)
