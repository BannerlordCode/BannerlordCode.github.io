---
title: "CustomBattleHelper"
description: "CustomBattleHelper：TaleWorlds.MountAndBlade.CustomBattle.CustomBattle 的 public 类；公开成员 12 个（方法 9、属性 0、字段 3）。canonical 桶 custombattle。源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleHelper.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleHelper

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public static class CustomBattleHelper`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleHelper.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## 概述

CustomBattleHelper 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleHelper.cs。它是一个 public 类，继承链为 CustomBattleHelper。public/protected 成员共 12 个：9 方法、3 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleHelper 落在 canonical 桶 `custombattle`（命中规则 `rule:TaleWorlds.MountAndBlade.CustomBattle`），命名空间 `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`，继承链 CustomBattleHelper。成员构成以方法为主（方法 9/12，属性 0/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleHelper.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetIndexFromGameTypeStringId` | `public static int GetIndexFromGameTypeStringId(string gameTypeStringId)` | 方法 |
| `StartGame` | `public static void StartGame(CustomBattleData data)` | 方法 |
| `int[]GetTroopCounts` | `public static int[]GetTroopCounts(int armySize, CustomBattleCompositionData compositionData)` | 方法 |
| `float[]GetWallHitpointPercentages` | `public static float[]GetWallHitpointPercentages(int breachedWallCount)` | 方法 |
| `GetSiegeWeaponType` | `public static SiegeEngineType GetSiegeWeaponType(SiegeEngineType siegeWeaponType)` | 方法 |
| `PrepareBattleData` | `public static CustomBattleData PrepareBattleData(BasicCharacterObject playerCharacter, BasicCharacterObject playerSideGeneralCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, CustomBattlePlayerSide playerSide, CustomBattlePlayerType battlePlayerType, string gameTypeStringId, string scene, string season, float timeOfDay, List<MissionSiegeWeapon>attackerMachines, List<MissionSiegeWeapon>defenderMachines, float[]wallHitPointsPercentages, int sceneUpgradeLevel, bool isSallyOut, string forcedSceneLevel)` | 方法 |
| `CustomBattleCombatant[]GetCustomBattleParties` | `public static CustomBattleCombatant[]GetCustomBattleParties(BasicCharacterObject playerCharacter, BasicCharacterObject playerSideGeneralCharacter, BasicCharacterObject enemyCharacter, BasicCultureObject playerFaction, int[]playerNumbers, List<BasicCharacterObject>[]playerTroopSelections, BasicCultureObject enemyFaction, int[]enemyNumbers, List<BasicCharacterObject>[]enemyTroopSelections, bool isPlayerAttacker)` | 方法 |
| `AssertMissingTroopsForDebug` | `public static void AssertMissingTroopsForDebug()` | 方法 |
| `GetDefaultTroopOfFormationForFaction` | `public static BasicCharacterObject GetDefaultTroopOfFormationForFaction(BasicCultureObject culture, FormationClass formation)` | 方法 |
| `DefaultBattleGameTypeStringId` | `public const string DefaultBattleGameTypeStringId` | 字段 |
| `DefaultSiegeGameTypeStringId` | `public const string DefaultSiegeGameTypeStringId` | 字段 |
| `DefaultVillageGameTypeStringId` | `public const string DefaultVillageGameTypeStringId` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CustomBattleCompositionData](../CustomBattleCompositionData/)
- [同命名空间 CustomBattleData](../CustomBattleData/)
- [同命名空间 CustomBattlePlayerSide](../CustomBattlePlayerSide/)
- [同命名空间 CustomBattlePlayerType](../CustomBattlePlayerType/)
