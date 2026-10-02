---
title: "SPScoreboardPartyVM"
description: "SPScoreboardPartyVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 11 个（方法 5、属性 5、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardPartyVM.cs。"
---
# SPScoreboardPartyVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPScoreboardPartyVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardPartyVM.cs`

## 概述

SPScoreboardPartyVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardPartyVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SPScoreboardPartyVM → ViewModel。public/protected 成员共 11 个：5 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SPScoreboardPartyVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard），继承链 SPScoreboardPartyVM → ViewModel。成员构成以方法为主（方法 5/11，属性 5/11），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardPartyVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BattleCombatant` | `public IBattleCombatant BattleCombatant` | 属性 |
| `CurrentPower` | `public float CurrentPower` | 属性 |
| `InitialPower` | `public float InitialPower` | 属性 |
| `SPScoreboardPartyVM` | `public SPScoreboardPartyVM(IBattleCombatant battleCombatant)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `UpdateScores` | `public void UpdateScores(BasicCharacterObject character, int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)` | 方法 |
| `UpdateHeroSkills` | `public void UpdateHeroSkills(BasicCharacterObject heroCharacter, SkillObject upgradedSkill)` | 方法 |
| `GetUnitAddIfNotExists` | `public SPScoreboardUnitVM GetUnitAddIfNotExists(BasicCharacterObject character)` | 方法 |
| `GetUnit` | `public SPScoreboardUnitVM GetUnit(BasicCharacterObject character)` | 方法 |
| `Score` | `public SPScoreboardStatsVM Score` | 属性 |
| `MBBindingList` | `public MBBindingList<SPScoreboardUnitVM>Members` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CustomBattleScoreboardVM](../CustomBattleScoreboardVM)
- [同命名空间 ScoreboardBaseVM](../ScoreboardBaseVM)
- [同命名空间 ScoreboardHotkeys](../ScoreboardHotkeys)
- [同命名空间 SPScoreboardShipVM](../SPScoreboardShipVM)
