---
title: "SPScoreboardShipVM"
description: "SPScoreboardShipVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 10 个（方法 0、属性 9、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardShipVM.cs。"
---
# SPScoreboardShipVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPScoreboardShipVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardShipVM.cs`

## 概述

SPScoreboardShipVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardShipVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SPScoreboardShipVM → ViewModel。public/protected 成员共 10 个：9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SPScoreboardShipVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard），继承链 SPScoreboardShipVM → ViewModel。成员构成以属性为主（属性 9/10，方法 0/10），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardShipVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPScoreboardShipVM` | `public SPScoreboardShipVM(IShipOrigin ship, string shipType, IBattleCombatant owner, TeamSideEnum teamSideEnum)` | 构造函数 |
| `ShipType` | `public string ShipType` | 属性 |
| `IsPlayerTeam` | `public bool IsPlayerTeam` | 属性 |
| `IsPlayerAllyTeam` | `public bool IsPlayerAllyTeam` | 属性 |
| `IsEnemyTeam` | `public bool IsEnemyTeam` | 属性 |
| `CurrentHealth` | `public float CurrentHealth` | 属性 |
| `MaxHealth` | `public float MaxHealth` | 属性 |
| `IsDestroyed` | `public bool IsDestroyed` | 属性 |
| `IsInactive` | `public bool IsInactive` | 属性 |
| `Tooltip` | `public BasicTooltipViewModel Tooltip` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CustomBattleScoreboardVM](../CustomBattleScoreboardVM)
- [同命名空间 ScoreboardBaseVM](../ScoreboardBaseVM)
- [同命名空间 ScoreboardHotkeys](../ScoreboardHotkeys)
- [同命名空间 SPScoreboardPartyVM](../SPScoreboardPartyVM)
