---
title: "CustomBattleScoreboardVM"
description: "CustomBattleScoreboardVM：TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard 的 public 类，继承 ScoreboardBaseVM、IBattleObserver；公开成员 12 个（方法 11、属性 0、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/CustomBattleScoreboardVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleScoreboardVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class CustomBattleScoreboardVM : ScoreboardBaseVM, IBattleObserver`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/CustomBattleScoreboardVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

CustomBattleScoreboardVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/CustomBattleScoreboardVM.cs。它是一个 public 类，实现/继承 ScoreboardBaseVM、IBattleObserver，继承链为 CustomBattleScoreboardVM → ScoreboardBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 12 个：11 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleScoreboardVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`，继承链 CustomBattleScoreboardVM → ScoreboardBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 11/12，属性 0/12），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/CustomBattleScoreboardVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CustomBattleScoreboardVM` | `public CustomBattleScoreboardVM(BattleScoreContext scoreboardContext) : base(scoreboardContext)` | 构造函数 |
| `Initialize` | `public override void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool>onToggle)` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `ExecuteFastForwardAction` | `public override void ExecuteFastForwardAction()` | 方法 |
| `ExecuteQuitAction` | `public override void ExecuteQuitAction()` | 方法 |
| `OnBattleOver` | `public void OnBattleOver()` | 方法 |
| `OnExitBattle` | `public void OnExitBattle()` | 方法 |
| `TroopNumberChanged` | `public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberDead = 0, int numberWounded = 0, int numberRouted = 0, int numberKilled = 0, int numberReadyToUpgrade = 0)` | 方法 |
| `HeroSkillIncreased` | `public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject upgradedSkill)` | 方法 |
| `BattleResultsReady` | `public void BattleResultsReady()` | 方法 |
| `TroopSideChanged` | `public void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ScoreboardBaseVM](../ScoreboardBaseVM/)
- [基类/接口 IBattleObserver](../../core-extra/IBattleObserver/)
- [同命名空间 ScoreboardBaseVM](../ScoreboardBaseVM/)
- [同命名空间 ScoreboardHotkeys](../ScoreboardHotkeys/)
- [同命名空间 SPScoreboardPartyVM](../SPScoreboardPartyVM/)
- [同命名空间 SPScoreboardShipVM](../SPScoreboardShipVM/)
