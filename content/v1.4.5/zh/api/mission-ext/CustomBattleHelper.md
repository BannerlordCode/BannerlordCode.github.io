---
title: "CustomBattleHelper"
description: "CustomBattleHelper 的自动生成类参考。"
---
# CustomBattleHelper

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CustomBattleHelper`
**Base:** 无
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/CustomBattleHelper.cs`

## 概述

`CustomBattleHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `CustomBattleHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetIndexFromGameTypeStringId
`public static int GetIndexFromGameTypeStringId(string gameTypeStringId)`

**用途 / Purpose:** 读取并返回当前对象中 index from game type string id 的结果。

```csharp
// 静态调用，不需要实例
CustomBattleHelper.GetIndexFromGameTypeStringId("example");
```

### StartGame
`public static void StartGame(CustomBattleData data)`

**用途 / Purpose:** 启动game流程或状态机。

```csharp
// 静态调用，不需要实例
CustomBattleHelper.StartGame(data);
```

### GetTroopCounts
`public static int GetTroopCounts(int armySize, CustomBattleCompositionData compositionData)`

**用途 / Purpose:** 读取并返回当前对象中 troop counts 的结果。

```csharp
// 静态调用，不需要实例
CustomBattleHelper.GetTroopCounts(0, compositionData);
```

### GetWallHitpointPercentages
`public static float GetWallHitpointPercentages(int breachedWallCount)`

**用途 / Purpose:** 读取并返回当前对象中 wall hitpoint percentages 的结果。

```csharp
// 静态调用，不需要实例
CustomBattleHelper.GetWallHitpointPercentages(0);
```

### GetSiegeWeaponType
`public static SiegeEngineType GetSiegeWeaponType(SiegeEngineType siegeWeaponType)`

**用途 / Purpose:** 读取并返回当前对象中 siege weapon type 的结果。

```csharp
// 静态调用，不需要实例
CustomBattleHelper.GetSiegeWeaponType(siegeWeaponType);
```

### PrepareBattleData
`public static CustomBattleData PrepareBattleData(BasicCharacterObject playerCharacter, BasicCharacterObject playerSideGeneralCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, CustomBattlePlayerSide playerSide, CustomBattlePlayerType battlePlayerType, string gameTypeStringId, string scene, string season, float timeOfDay, List<MissionSiegeWeapon> attackerMachines, List<MissionSiegeWeapon> defenderMachines, float wallHitPointsPercentages, int sceneUpgradeLevel, bool isSallyOut, string forcedSceneLevel)`

**用途 / Purpose:** 为即将执行的battle data操作完成前置准备工作。

```csharp
// 静态调用，不需要实例
CustomBattleHelper.PrepareBattleData(playerCharacter, playerSideGeneralCharacter, playerParty, enemyParty, playerSide, battlePlayerType, "example", "example", "example", 0, attackerMachines, defenderMachines, 0, 0, false, "example");
```

### GetCustomBattleParties
`public static CustomBattleCombatant GetCustomBattleParties(BasicCharacterObject playerCharacter, BasicCharacterObject playerSideGeneralCharacter, BasicCharacterObject enemyCharacter, BasicCultureObject playerFaction, int playerNumbers, List<BasicCharacterObject> playerTroopSelections, BasicCultureObject enemyFaction, int enemyNumbers, List<BasicCharacterObject> enemyTroopSelections, bool isPlayerAttacker)`

**用途 / Purpose:** 读取并返回当前对象中 custom battle parties 的结果。

```csharp
// 静态调用，不需要实例
CustomBattleHelper.GetCustomBattleParties(playerCharacter, playerSideGeneralCharacter, enemyCharacter, playerFaction, 0, playerTroopSelections, enemyFaction, 0, enemyTroopSelections, false);
```

### AssertMissingTroopsForDebug
`public static void AssertMissingTroopsForDebug()`

**用途 / Purpose:** 调用 AssertMissingTroopsForDebug 对应的操作。

```csharp
// 静态调用，不需要实例
CustomBattleHelper.AssertMissingTroopsForDebug();
```

### GetDefaultTroopOfFormationForFaction
`public static BasicCharacterObject GetDefaultTroopOfFormationForFaction(BasicCultureObject culture, FormationClass formation)`

**用途 / Purpose:** 读取并返回当前对象中 default troop of formation for faction 的结果。

```csharp
// 静态调用，不需要实例
CustomBattleHelper.GetDefaultTroopOfFormationForFaction(culture, formation);
```

## 使用示例

```csharp
CustomBattleHelper.Initialize();
```

## 参见

- [本区域目录](../)