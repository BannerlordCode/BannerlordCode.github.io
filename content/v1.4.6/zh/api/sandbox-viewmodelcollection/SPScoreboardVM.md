---
title: "SPScoreboardVM"
description: "SPScoreboardVM：SandBox.ViewModelCollection 的 public 类，继承 ScoreboardBaseVM、IBattleObserver；公开成员 19 个（方法 17、属性 1、字段 0）。源文件 SandBox.ViewModelCollection/SPScoreboardVM.cs。"
---
# SPScoreboardVM

**Namespace:** `SandBox.ViewModelCollection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SPScoreboardVM : ScoreboardBaseVM, IBattleObserver`
**File:** `SandBox.ViewModelCollection/SPScoreboardVM.cs`

## 概述

SPScoreboardVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/SPScoreboardVM.cs。它是一个 public 类，实现/继承 ScoreboardBaseVM、IBattleObserver，继承链为 SPScoreboardVM → ScoreboardBaseVM。public/protected 成员共 19 个：17 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SPScoreboardVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录一致，继承链 SPScoreboardVM → ScoreboardBaseVM。成员构成以方法为主（方法 17/19，属性 1/19），对外主要以操作入口暴露。继承链上的 ScoreboardBaseVM 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/SPScoreboardVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateSimulation` | `public static SPScoreboardVM CreateSimulation(BattleSimulation simulation)` | 方法 |
| `CreateMission` | `public static SPScoreboardVM CreateMission(Mission mission)` | 方法 |
| `CreateCustom` | `public static SPScoreboardVM CreateCustom(BattleScoreContext battleScoreContext, BattleSimulation simulation = null)` | 方法 |
| `SPScoreboardVM` | `public SPScoreboardVM(BattleScoreContext scoreboardContext, BattleSimulation simulation) : base(scoreboardContext)` | 构造函数 |
| `UpdateQuitText` | `protected override void UpdateQuitText()` | 方法 |
| `Initialize` | `public override void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool>onToggle)` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `ExecutePlayAction` | `public override void ExecutePlayAction()` | 方法 |
| `ExecuteFastForwardAction` | `public override void ExecuteFastForwardAction()` | 方法 |
| `ExecutePauseSimulationAction` | `public override void ExecutePauseSimulationAction()` | 方法 |
| `ExecuteEndSimulationAction` | `public override void ExecuteEndSimulationAction()` | 方法 |
| `ExecuteQuitAction` | `public override void ExecuteQuitAction()` | 方法 |
| `OnBattleOver` | `public void OnBattleOver()` | 方法 |
| `OnExitBattle` | `public void OnExitBattle()` | 方法 |
| `TroopNumberChanged` | `public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberDead = 0, int numberWounded = 0, int numberRouted = 0, int numberKilled = 0, int numberReadyToUpgrade = 0)` | 方法 |
| `HeroSkillIncreased` | `public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject upgradedSkill)` | 方法 |
| `BattleResultsReady` | `public void BattleResultsReady()` | 方法 |
| `TroopSideChanged` | `public void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character)` | 方法 |
| `MBBindingList` | `public override MBBindingList<BattleResultVM>BattleResults` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 PerkObjectComparer](../PerkObjectComparer)
- [同命名空间 SandBoxUIHelper](../SandBoxUIHelper)
- [同命名空间 SPOrderOfBattleVM](../SPOrderOfBattleVM)
- [同命名空间 TournamentRewardVM](../TournamentRewardVM)
