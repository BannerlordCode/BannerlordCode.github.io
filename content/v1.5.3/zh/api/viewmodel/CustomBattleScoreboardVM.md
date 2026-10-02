---
title: "CustomBattleScoreboardVM"
description: "CustomBattleScoreboardVM 的自动生成类参考。"
---
# CustomBattleScoreboardVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection
**Type:** `public class CustomBattleScoreboardVM : ScoreboardBaseVM,IBattleObserver `
**Base:** ScoreboardBaseVM,IBattleObserver
**Source:** TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/CustomBattleScoreboardVM.cs

## 概述

`CustomBattleScoreboardVM` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/CustomBattleScoreboardVM.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Initialize
`public override void Initialize(IMissionScreen missionScreen,Mission mission,Action releaseSimulationSources,Action<bool> onToggle) `

### RefreshValues
`public override void RefreshValues() `

### OnTick
`protected override void OnTick(float dt) `

### ExecuteFastForwardAction
`public override void ExecuteFastForwardAction() `

### ExecuteQuitAction
`public override void ExecuteQuitAction() `

### OnBattleOver
`public void OnBattleOver() `

### OnExitBattle
`public void OnExitBattle() `

### TroopNumberChanged
`public void TroopNumberChanged(BattleSideEnum side,IBattleCombatant battleCombatant,BasicCharacterObject character,int number = 0,int numberDead = 0,int numberWounded = 0,int numberRouted = 0,int numberKilled = 0,int numberReadyToUpgrade = 0) `

### HeroSkillIncreased
`public void HeroSkillIncreased(BattleSideEnum side,IBattleCombatant battleCombatant,BasicCharacterObject heroCharacter,SkillObject upgradedSkill) `

### BattleResultsReady
`public void BattleResultsReady() `

### TroopSideChanged
`public void TroopSideChanged(BattleSideEnum prevSide,BattleSideEnum newSide,IBattleCombatant battleCombatant,BasicCharacterObject character) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
