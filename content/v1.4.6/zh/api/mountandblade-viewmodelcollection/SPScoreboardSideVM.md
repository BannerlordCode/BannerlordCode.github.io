---
title: "SPScoreboardSideVM"
description: "SPScoreboardSideVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 20 个（方法 8、属性 11、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSideVM.cs。"
---
# SPScoreboardSideVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPScoreboardSideVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSideVM.cs`

## 概述

SPScoreboardSideVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSideVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SPScoreboardSideVM → ViewModel。public/protected 成员共 20 个：8 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SPScoreboardSideVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard），继承链 SPScoreboardSideVM → ViewModel。成员构成以属性为主（属性 11/20，方法 8/20），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSideVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPScoreboardSideVM` | `public SPScoreboardSideVM(TextObject name, Banner sideFlag, bool isSimulation, bool isPlayerSide)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `UpdateScores` | `public void UpdateScores(IBattleCombatant battleCombatant, bool isPlayerParty, BasicCharacterObject character, int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)` | 方法 |
| `UpdateHeroSkills` | `public void UpdateHeroSkills(IBattleCombatant battleCombatant, bool isPlayerParty, BasicCharacterObject heroCharacter, SkillObject upgradedSkill)` | 方法 |
| `GetPartyAddIfNotExists` | `public SPScoreboardPartyVM GetPartyAddIfNotExists(IBattleCombatant battleCombatant, bool isPlayerParty)` | 方法 |
| `GetParty` | `public SPScoreboardPartyVM GetParty(IBattleCombatant battleCombatant)` | 方法 |
| `RemoveTroop` | `public SPScoreboardStatsVM RemoveTroop(IBattleCombatant battleCombatant, BasicCharacterObject troop)` | 方法 |
| `AddTroop` | `public void AddTroop(IBattleCombatant battleCombatant, BasicCharacterObject currentTroop, SPScoreboardStatsVM scoreToBringOver)` | 方法 |
| `GetShipAddIfNotExists` | `public SPScoreboardShipVM GetShipAddIfNotExists(IShipOrigin ship, string shipType, IBattleCombatant owner, TeamSideEnum teamSideEnum)` | 方法 |
| `CurrentPower` | `public float CurrentPower` | 属性 |
| `InitialPower` | `public float InitialPower` | 属性 |
| `BannerVisual` | `public BannerImageIdentifierVM BannerVisual` | 属性 |
| `BannerVisualSmall` | `public BannerImageIdentifierVM BannerVisualSmall` | 属性 |
| `Score` | `public SPScoreboardStatsVM Score` | 属性 |
| `MBBindingList` | `public MBBindingList<SPScoreboardPartyVM>Parties` | 属性 |
| `MBBindingList` | `public MBBindingList<SPScoreboardShipVM>Ships` | 属性 |
| `SortController` | `public SPScoreboardSortControllerVM SortController` | 属性 |
| `Morale` | `public float Morale` | 属性 |
| `MoraleHint` | `public BasicTooltipViewModel MoraleHint` | 属性 |
| `IsPlayerSide` | `public bool IsPlayerSide` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CustomBattleScoreboardVM](../CustomBattleScoreboardVM)
- [同命名空间 ScoreboardBaseVM](../ScoreboardBaseVM)
- [同命名空间 ScoreboardHotkeys](../ScoreboardHotkeys)
- [同命名空间 SPScoreboardPartyVM](../SPScoreboardPartyVM)
