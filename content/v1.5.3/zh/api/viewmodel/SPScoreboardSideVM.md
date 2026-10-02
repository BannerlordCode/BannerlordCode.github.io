---
title: "SPScoreboardSideVM"
description: "SPScoreboardSideVM 的自动生成类参考。"
---
# SPScoreboardSideVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection
**Type:** `public class SPScoreboardSideVM : ViewModel `
**Base:** ViewModel
**Source:** TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSideVM.cs

## 概述

`SPScoreboardSideVM` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSideVM.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### RefreshValues
`public override void RefreshValues() `

### UpdateScores
`public void UpdateScores(IBattleCombatant battleCombatant,bool isPlayerParty,BasicCharacterObject character,int numberRemaining,int numberDead,int numberWounded,int numberRouted,int numberKilled,int numberReadyToUpgrade) `

### UpdateHeroSkills
`public void UpdateHeroSkills(IBattleCombatant battleCombatant,bool isPlayerParty,BasicCharacterObject heroCharacter,SkillObject upgradedSkill) `

### GetPartyAddIfNotExists
`public SPScoreboardPartyVM GetPartyAddIfNotExists(IBattleCombatant battleCombatant,bool isPlayerParty) `

### GetParty
`public SPScoreboardPartyVM GetParty(IBattleCombatant battleCombatant) `

### RemoveTroop
`public SPScoreboardStatsVM RemoveTroop(IBattleCombatant battleCombatant,BasicCharacterObject troop) `

### AddTroop
`public void AddTroop(IBattleCombatant battleCombatant,BasicCharacterObject currentTroop,SPScoreboardStatsVM scoreToBringOver) `

### GetShipAddIfNotExists
`public SPScoreboardShipVM GetShipAddIfNotExists(IShipOrigin ship,string shipType,IBattleCombatant owner,TeamSideEnum teamSideEnum,int formationIndex) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
