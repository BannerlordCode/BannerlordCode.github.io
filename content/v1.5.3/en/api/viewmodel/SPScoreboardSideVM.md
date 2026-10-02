---
title: "SPScoreboardSideVM"
description: "Auto-generated class reference for SPScoreboardSideVM."
---
# SPScoreboardSideVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection
**Type:** `public class SPScoreboardSideVM : ViewModel `
**Base:** ViewModel
**Source:** TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSideVM.cs

## Overview

Auto-generated stub for `SPScoreboardSideVM`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### RefreshValues
`public override void RefreshValues()`

### UpdateScores
`public void UpdateScores(IBattleCombatant battleCombatant,bool isPlayerParty,BasicCharacterObject character,int numberRemaining,int numberDead,int numberWounded,int numberRouted,int numberKilled,int numberReadyToUpgrade)`

### UpdateHeroSkills
`public void UpdateHeroSkills(IBattleCombatant battleCombatant,bool isPlayerParty,BasicCharacterObject heroCharacter,SkillObject upgradedSkill)`

### GetPartyAddIfNotExists
`public SPScoreboardPartyVM GetPartyAddIfNotExists(IBattleCombatant battleCombatant,bool isPlayerParty)`

### GetParty
`public SPScoreboardPartyVM GetParty(IBattleCombatant battleCombatant)`

### RemoveTroop
`public SPScoreboardStatsVM RemoveTroop(IBattleCombatant battleCombatant,BasicCharacterObject troop)`

### AddTroop
`public void AddTroop(IBattleCombatant battleCombatant,BasicCharacterObject currentTroop,SPScoreboardStatsVM scoreToBringOver)`

### GetShipAddIfNotExists
`public SPScoreboardShipVM GetShipAddIfNotExists(IShipOrigin ship,string shipType,IBattleCombatant owner,TeamSideEnum teamSideEnum,int formationIndex)`

## See Also

- [Section index](../)
