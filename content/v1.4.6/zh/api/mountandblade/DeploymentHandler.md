---
title: "DeploymentHandler"
description: "DeploymentHandler：TaleWorlds.MountAndBlade 的 public 类，继承 MissionLogic；公开成员 14 个（方法 10、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade/DeploymentHandler.cs。"
---
# DeploymentHandler

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class DeploymentHandler : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/DeploymentHandler.cs`

## 概述

DeploymentHandler 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/DeploymentHandler.cs。它是一个 public 类（abstract），实现/继承 MissionLogic，继承链为 DeploymentHandler → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 14 个：10 方法、1 属性、2 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DeploymentHandler 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 DeploymentHandler → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 10/14，属性 1/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/DeploymentHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnPlayerSideDeploymentReady;` | `public event Action OnPlayerSideDeploymentReady;` | 事件 |
| `OnEnemySideDeploymentReady;` | `public event Action OnEnemySideDeploymentReady;` | 事件 |
| `PlayerTeam` | `public Team PlayerTeam` | 属性 |
| `DeploymentHandler` | `public DeploymentHandler(bool isPlayerAttacker)` | 构造函数 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `OnBattleSideDeployed` | `public override void OnBattleSideDeployed(BattleSideEnum side)` | 方法 |
| `AutoDeployTeamUsingDeploymentPlan` | `public abstract void AutoDeployTeamUsingDeploymentPlan(Team playerTeam);` | 方法 |
| `ForceUpdateAllUnits` | `public abstract void ForceUpdateAllUnits();` | 方法 |
| `FinishDeployment` | `public virtual void FinishDeployment()` | 方法 |
| `InitializeDeploymentPoints` | `public void InitializeDeploymentPoints()` | 方法 |
| `OrderController_OnOrderIssued_Aux` | `public static void OrderController_OnOrderIssued_Aux(OrderType orderType, MBReadOnlyList<Formation>appliedFormations, OrderController orderController = null, params object[]delegateParams)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionLogic](../MissionLogic)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
