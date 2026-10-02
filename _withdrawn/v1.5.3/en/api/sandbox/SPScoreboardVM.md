---
title: "SPScoreboardVM"
description: "Auto-generated class reference for SPScoreboardVM."
---
# SPScoreboardVM

**Namespace:** SandBox.ViewModelCollection
**Module:** SandBox.ViewModelCollection
**Type:** `public class SPScoreboardVM : ScoreboardBaseVM,IBattleObserver `
**Base:** ScoreboardBaseVM, IBattleObserver
**Source:** SandBox.ViewModelCollection/SPScoreboardVM.cs

## Overview

Auto-generated stub for `SPScoreboardVM`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CreateSimulation
`public static SPScoreboardVM CreateSimulation(BattleSimulation simulation)`

### CreateMission
`public static SPScoreboardVM CreateMission(Mission mission)`

### CreateCustom
`public static SPScoreboardVM CreateCustom(BattleScoreContext battleScoreContext,BattleSimulation simulation = null)`

### UpdateQuitText
`protected override void UpdateQuitText()`

### Initialize
`public override void Initialize(IMissionScreen missionScreen,Mission mission,Action releaseSimulationSources,Action<bool> onToggle)`

### OnTick
`protected override void OnTick(float dt)`

### ExecutePlayAction
`public override void ExecutePlayAction()`

### ExecuteFastForwardAction
`public override void ExecuteFastForwardAction()`

### ExecutePauseSimulationAction
`public override void ExecutePauseSimulationAction()`

### ExecuteEndSimulationAction
`public override void ExecuteEndSimulationAction()`

### ExecuteQuitAction
`public override void ExecuteQuitAction()`

### OnBattleOver
`public void OnBattleOver()`

### OnExitBattle
`public void OnExitBattle()`

### TroopNumberChanged
`public void TroopNumberChanged(BattleSideEnum side,IBattleCombatant battleCombatant,BasicCharacterObject character,int number = 0,int numberDead = 0,int numberWounded = 0,int numberRouted = 0,int numberKilled = 0,int numberReadyToUpgrade = 0)`

### HeroSkillIncreased
`public void HeroSkillIncreased(BattleSideEnum side,IBattleCombatant battleCombatant,BasicCharacterObject heroCharacter,SkillObject upgradedSkill)`

### BattleResultsReady
`public void BattleResultsReady()`

### TroopSideChanged
`public void TroopSideChanged(BattleSideEnum prevSide,BattleSideEnum newSide,IBattleCombatant battleCombatant,BasicCharacterObject character)`

## See Also

- [Section index](../)
