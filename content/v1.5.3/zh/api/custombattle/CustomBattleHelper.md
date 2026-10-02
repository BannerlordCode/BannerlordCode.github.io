---
title: "CustomBattleHelper"
description: "CustomBattleHelper 的自动生成类参考。"
---
# CustomBattleHelper

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade.CustomBattle
**Type:** `public static class CustomBattleHelper `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleHelper.cs

## 概述

`CustomBattleHelper` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleHelper.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetIndexFromGameTypeStringId
`public static int GetIndexFromGameTypeStringId(string gameTypeStringId) `

### StartGame
`public static void StartGame(CustomBattleData data) `

### GetTroopCounts
`public static int[] GetTroopCounts(int armySize,CustomBattleCompositionData compositionData) `

### GetWallHitpointPercentages
`public static float[] GetWallHitpointPercentages(int breachedWallCount) `

### GetSiegeWeaponType
`public static SiegeEngineType GetSiegeWeaponType(SiegeEngineType siegeWeaponType) `

### PrepareBattleData
`public static CustomBattleData PrepareBattleData(BasicCharacterObject playerCharacter,BasicCharacterObject playerSideGeneralCharacter,CustomBattleCombatant playerParty,CustomBattleCombatant enemyParty,CustomBattlePlayerSide playerSide,CustomBattlePlayerType battlePlayerType,string gameTypeStringId,string scene,string season,float timeOfDay,List<MissionSiegeWeapon> attackerMachines,List<MissionSiegeWeapon> defenderMachines,float[] wallHitPointsPercentages,int sceneUpgradeLevel,bool isSallyOut,string forcedSceneLevel)`

### GetCustomBattleParties
`public static CustomBattleCombatant[] GetCustomBattleParties(BasicCharacterObject playerCharacter,BasicCharacterObject playerSideGeneralCharacter,BasicCharacterObject enemyCharacter,BasicCultureObject playerFaction,int[] playerNumbers,List<BasicCharacterObject>[] playerTroopSelections,BasicCultureObject enemyFaction,int[] enemyNumbers,List<BasicCharacterObject>[] enemyTroopSelections,bool isPlayerAttacker)`

### AssertMissingTroopsForDebug
`public static void AssertMissingTroopsForDebug() `

### GetDefaultTroopOfFormationForFaction
`public static BasicCharacterObject GetDefaultTroopOfFormationForFaction(BasicCultureObject culture,FormationClass formation) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
