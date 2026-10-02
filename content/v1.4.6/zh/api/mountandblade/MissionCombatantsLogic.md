---
title: "MissionCombatantsLogic"
description: "MissionCombatantsLogic：TaleWorlds.MountAndBlade 的 public 类，继承 MissionLogic；公开成员 11 个（方法 9、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade/MissionCombatantsLogic.cs。"
---
# MissionCombatantsLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionCombatantsLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionCombatantsLogic.cs`

## 概述

MissionCombatantsLogic 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionCombatantsLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 MissionCombatantsLogic → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 11 个：9 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionCombatantsLogic 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MissionCombatantsLogic → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 9/11，属性 1/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionCombatantsLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerSide` | `public BattleSideEnum PlayerSide` | 属性 |
| `MissionCombatantsLogic` | `public MissionCombatantsLogic(IEnumerable<IBattleCombatant>battleCombatants, IBattleCombatant playerBattleCombatant, IBattleCombatant defenderLeaderBattleCombatant, IBattleCombatant attackerLeaderBattleCombatant, Mission.MissionTeamAITypeEnum teamAIType, bool isPlayerSergeant)` | 构造函数 |
| `GetBannerForSide` | `public Banner GetBannerForSide(BattleSideEnum side)` | 方法 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `IEnumerable` | `public IEnumerable<IBattleCombatant>GetAllCombatants()` | 方法 |
| `AddPlayerTeam` | `protected void AddPlayerTeam(BattleSideEnum playerSide)` | 方法 |
| `AddEnemyTeam` | `protected void AddEnemyTeam(BattleSideEnum enemySide)` | 方法 |
| `AddPlayerAllyTeam` | `protected void AddPlayerAllyTeam(BattleSideEnum playerSide, IBattleCombatant allyCombatant)` | 方法 |
| `SupportsAllyTeamOnPlayerSide` | `public static bool SupportsAllyTeamOnPlayerSide(IEnumerable<IBattleCombatant>playerSideBattleCombatants, IBattleCombatant playerBattleCombatant, bool isPlayerSergeant, bool isNavalLandHybridMission, out IBattleCombatant allyCombatant)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionLogic](../MissionLogic)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
