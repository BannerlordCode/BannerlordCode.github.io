---
title: "SPScoreboardVM"
description: "SPScoreboardVM 的自动生成类参考。"
---
# SPScoreboardVM

**Namespace:** SandBox.ViewModelCollection
**Module:** SandBox.ViewModelCollection
**Type:** `public class SPScoreboardVM : ScoreboardBaseVM,IBattleObserver `
**Base:** ScoreboardBaseVM,IBattleObserver
**Source:** SandBox.ViewModelCollection/SPScoreboardVM.cs

## 概述

`SPScoreboardVM` 的自动生成类参考页面。声明来自 `SandBox.ViewModelCollection/SPScoreboardVM.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateSimulation
`public static SPScoreboardVM CreateSimulation(BattleSimulation simulation) `

### CreateMission
`public static SPScoreboardVM CreateMission(Mission mission) `

### CreateCustom
`public static SPScoreboardVM CreateCustom(BattleScoreContext battleScoreContext,BattleSimulation simulation = null) `

### UpdateQuitText
`protected override void UpdateQuitText() `

### Initialize
`public override void Initialize(IMissionScreen missionScreen,Mission mission,Action releaseSimulationSources,Action<bool> onToggle) `

### OnTick
`protected override void OnTick(float dt) `

### ExecutePlayAction
`public override void ExecutePlayAction() `

### ExecuteFastForwardAction
`public override void ExecuteFastForwardAction() `

### ExecutePauseSimulationAction
`public override void ExecutePauseSimulationAction() `

### ExecuteEndSimulationAction
`public override void ExecuteEndSimulationAction() `

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
