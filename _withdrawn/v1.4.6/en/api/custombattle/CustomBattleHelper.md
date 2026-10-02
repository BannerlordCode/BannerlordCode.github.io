---
title: "CustomBattleHelper"
description: "CustomBattleHelper: a public class in TaleWorlds.MountAndBlade.CustomBattle.CustomBattle; 12 exposed members (9 methods, 0 properties, 3 fields). Canonical bucket custombattle. Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleHelper.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleHelper

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public static class CustomBattleHelper`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleHelper.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## Overview

CustomBattleHelper lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleHelper.cs. It is a public class; the inheritance chain is CustomBattleHelper. It exposes 12 public/protected members: 9 methods, 3 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleHelper lands in canonical bucket `custombattle` (matched rule `rule:TaleWorlds.MountAndBlade.CustomBattle`), namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`, inheritance chain CustomBattleHelper. The surface is method-led (methods 9/12, properties 0/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleHelper.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetIndexFromGameTypeStringId` | `public static int GetIndexFromGameTypeStringId(string gameTypeStringId)` | method |
| `StartGame` | `public static void StartGame(CustomBattleData data)` | method |
| `int[]GetTroopCounts` | `public static int[]GetTroopCounts(int armySize, CustomBattleCompositionData compositionData)` | method |
| `float[]GetWallHitpointPercentages` | `public static float[]GetWallHitpointPercentages(int breachedWallCount)` | method |
| `GetSiegeWeaponType` | `public static SiegeEngineType GetSiegeWeaponType(SiegeEngineType siegeWeaponType)` | method |
| `PrepareBattleData` | `public static CustomBattleData PrepareBattleData(BasicCharacterObject playerCharacter, BasicCharacterObject playerSideGeneralCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, CustomBattlePlayerSide playerSide, CustomBattlePlayerType battlePlayerType, string gameTypeStringId, string scene, string season, float timeOfDay, List<MissionSiegeWeapon>attackerMachines, List<MissionSiegeWeapon>defenderMachines, float[]wallHitPointsPercentages, int sceneUpgradeLevel, bool isSallyOut, string forcedSceneLevel)` | method |
| `CustomBattleCombatant[]GetCustomBattleParties` | `public static CustomBattleCombatant[]GetCustomBattleParties(BasicCharacterObject playerCharacter, BasicCharacterObject playerSideGeneralCharacter, BasicCharacterObject enemyCharacter, BasicCultureObject playerFaction, int[]playerNumbers, List<BasicCharacterObject>[]playerTroopSelections, BasicCultureObject enemyFaction, int[]enemyNumbers, List<BasicCharacterObject>[]enemyTroopSelections, bool isPlayerAttacker)` | method |
| `AssertMissingTroopsForDebug` | `public static void AssertMissingTroopsForDebug()` | method |
| `GetDefaultTroopOfFormationForFaction` | `public static BasicCharacterObject GetDefaultTroopOfFormationForFaction(BasicCultureObject culture, FormationClass formation)` | method |
| `DefaultBattleGameTypeStringId` | `public const string DefaultBattleGameTypeStringId` | field |
| `DefaultSiegeGameTypeStringId` | `public const string DefaultSiegeGameTypeStringId` | field |
| `DefaultVillageGameTypeStringId` | `public const string DefaultVillageGameTypeStringId` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CustomBattleCompositionData](../CustomBattleCompositionData/)
- [same namespace CustomBattleData](../CustomBattleData/)
- [same namespace CustomBattlePlayerSide](../CustomBattlePlayerSide/)
- [same namespace CustomBattlePlayerType](../CustomBattlePlayerType/)
