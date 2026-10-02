---
title: "CustomBattleScoreboardVM"
description: "Auto-generated class reference for CustomBattleScoreboardVM."
---
# CustomBattleScoreboardVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection
**Type:** `public class CustomBattleScoreboardVM : ScoreboardBaseVM,IBattleObserver `
**Base:** ScoreboardBaseVM, IBattleObserver
**Source:** TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/CustomBattleScoreboardVM.cs

## Overview

Auto-generated stub for `CustomBattleScoreboardVM`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Initialize
`public override void Initialize(IMissionScreen missionScreen,Mission mission,Action releaseSimulationSources,Action<bool> onToggle)`

### RefreshValues
`public override void RefreshValues()`

### OnTick
`protected override void OnTick(float dt)`

### ExecuteFastForwardAction
`public override void ExecuteFastForwardAction()`

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
