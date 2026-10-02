---
title: "CustomBattleHelper"
description: "Auto-generated class reference for CustomBattleHelper."
---
# CustomBattleHelper

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade.CustomBattle
**Type:** `public static class CustomBattleHelper `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleHelper.cs

## Overview

Auto-generated stub for `CustomBattleHelper`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetIndexFromGameTypeStringId
`public static int GetIndexFromGameTypeStringId(string gameTypeStringId)`

### StartGame
`public static void StartGame(CustomBattleData data)`

### GetTroopCounts
`public static int[] GetTroopCounts(int armySize,CustomBattleCompositionData compositionData)`

### GetWallHitpointPercentages
`public static float[] GetWallHitpointPercentages(int breachedWallCount)`

### GetSiegeWeaponType
`public static SiegeEngineType GetSiegeWeaponType(SiegeEngineType siegeWeaponType)`

### PrepareBattleData
`public static CustomBattleData PrepareBattleData(BasicCharacterObject playerCharacter,BasicCharacterObject playerSideGeneralCharacter,CustomBattleCombatant playerParty,CustomBattleCombatant enemyParty,CustomBattlePlayerSide playerSide,CustomBattlePlayerType battlePlayerType,string gameTypeStringId,string scene,string season,float timeOfDay,List<MissionSiegeWeapon> attackerMachines,List<MissionSiegeWeapon> defenderMachines,float[] wallHitPointsPercentages,int sceneUpgradeLevel,bool isSallyOut,string forcedSceneLevel)`

### GetCustomBattleParties
`public static CustomBattleCombatant[] GetCustomBattleParties(BasicCharacterObject playerCharacter,BasicCharacterObject playerSideGeneralCharacter,BasicCharacterObject enemyCharacter,BasicCultureObject playerFaction,int[] playerNumbers,List<BasicCharacterObject>[] playerTroopSelections,BasicCultureObject enemyFaction,int[] enemyNumbers,List<BasicCharacterObject>[] enemyTroopSelections,bool isPlayerAttacker)`

### AssertMissingTroopsForDebug
`public static void AssertMissingTroopsForDebug()`

### GetDefaultTroopOfFormationForFaction
`public static BasicCharacterObject GetDefaultTroopOfFormationForFaction(BasicCultureObject culture,FormationClass formation)`

## See Also

- [Section index](../)
