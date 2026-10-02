---
title: "SPScoreboardStatsVM"
description: "SPScoreboardStatsVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 14 个（方法 4、属性 9、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardStatsVM.cs。"
---
# SPScoreboardStatsVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPScoreboardStatsVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardStatsVM.cs`

## 概述

SPScoreboardStatsVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardStatsVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SPScoreboardStatsVM → ViewModel。public/protected 成员共 14 个：4 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SPScoreboardStatsVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard），继承链 SPScoreboardStatsVM → ViewModel。成员构成以属性为主（属性 9/14，方法 4/14），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardStatsVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPScoreboardStatsVM` | `public SPScoreboardStatsVM(TextObject name)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `UpdateScores` | `public void UpdateScores(int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)` | 方法 |
| `IsAnyStatRelevant` | `public bool IsAnyStatRelevant()` | 方法 |
| `GetScoreForOneAliveMember` | `public SPScoreboardStatsVM GetScoreForOneAliveMember()` | 方法 |
| `NameText` | `public string NameText` | 属性 |
| `IsMainHero` | `public bool IsMainHero` | 属性 |
| `IsMainParty` | `public bool IsMainParty` | 属性 |
| `Kill` | `public int Kill` | 属性 |
| `Dead` | `public int Dead` | 属性 |
| `Wounded` | `public int Wounded` | 属性 |
| `Routed` | `public int Routed` | 属性 |
| `Remaining` | `public int Remaining` | 属性 |
| `ReadyToUpgrade` | `public int ReadyToUpgrade` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CustomBattleScoreboardVM](../CustomBattleScoreboardVM)
- [同命名空间 ScoreboardBaseVM](../ScoreboardBaseVM)
- [同命名空间 ScoreboardHotkeys](../ScoreboardHotkeys)
- [同命名空间 SPScoreboardPartyVM](../SPScoreboardPartyVM)
