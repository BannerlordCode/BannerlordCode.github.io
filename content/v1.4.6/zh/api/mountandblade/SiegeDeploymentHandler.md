---
title: "SiegeDeploymentHandler"
description: "SiegeDeploymentHandler：TaleWorlds.MountAndBlade 的 public 类，继承 BattleDeploymentHandler；公开成员 18 个（方法 15、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade/Missions/Handlers/SiegeDeploymentHandler.cs。"
---
# SiegeDeploymentHandler

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Handlers`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeDeploymentHandler : BattleDeploymentHandler`
**File:** `TaleWorlds.MountAndBlade/Missions/Handlers/SiegeDeploymentHandler.cs`

## 概述

SiegeDeploymentHandler 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Missions/Handlers/SiegeDeploymentHandler.cs。它是一个 public 类，实现/继承 BattleDeploymentHandler，继承链为 SiegeDeploymentHandler → BattleDeploymentHandler → DeploymentHandler → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 18 个：15 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeDeploymentHandler 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.Missions.Handlers），继承链 SiegeDeploymentHandler → BattleDeploymentHandler → DeploymentHandler → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 15/18，属性 2/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Missions/Handlers/SiegeDeploymentHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<DeploymentPoint>PlayerDeploymentPoints` | 属性 |
| `IEnumerable` | `public IEnumerable<DeploymentPoint>AllDeploymentPoints` | 属性 |
| `SiegeDeploymentHandler` | `public SiegeDeploymentHandler(bool isPlayerAttacker) : base(isPlayerAttacker)` | 构造函数 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `FinishDeployment` | `public override void FinishDeployment()` | 方法 |
| `DeployAllSiegeWeaponsOfPlayer` | `public void DeployAllSiegeWeaponsOfPlayer()` | 方法 |
| `GetMaxDeployableWeaponCountOfPlayer` | `public int GetMaxDeployableWeaponCountOfPlayer(Type weapon)` | 方法 |
| `DeployAllSiegeWeaponsOfAi` | `public void DeployAllSiegeWeaponsOfAi()` | 方法 |
| `RemoveDeploymentPoints` | `public void RemoveDeploymentPoints(BattleSideEnum side)` | 方法 |
| `RemoveUnavailableDeploymentPoints` | `public void RemoveUnavailableDeploymentPoints(BattleSideEnum side)` | 方法 |
| `UnHideDeploymentPoints` | `public void UnHideDeploymentPoints(BattleSideEnum side)` | 方法 |
| `GetDeployableWeaponCountOfPlayer` | `public int GetDeployableWeaponCountOfPlayer(Type weapon)` | 方法 |
| `AutoDeployTeamUsingTeamAI` | `public void AutoDeployTeamUsingTeamAI(Team team, bool autoAssignDetachments = true)` | 方法 |
| `AutoAssignDetachmentsForDeployment` | `public void AutoAssignDetachmentsForDeployment(Team team)` | 方法 |
| `Mission_IsFormationUnitPositionAvailable_AdditionalCondition` | `protected bool Mission_IsFormationUnitPositionAvailable_AdditionalCondition(WorldPosition position, Team team)` | 方法 |
| `GetEstimatedAverageDefenderPosition` | `public Vec2 GetEstimatedAverageDefenderPosition()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 BattleDeploymentHandler](../BattleDeploymentHandler)
- [同命名空间 BattleDeploymentHandler](../BattleDeploymentHandler)
