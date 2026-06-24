<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleHelper`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleHelper

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CustomBattleHelper`
**Base:** 无
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/CustomBattleHelper.cs`

## 概述

`CustomBattleHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `CustomBattleHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetIndexFromGameTypeStringId
`public static int GetIndexFromGameTypeStringId(string gameTypeStringId)`

**用途 / Purpose:** 获取 `index from game type string id` 的当前值。

### StartGame
`public static void StartGame(CustomBattleData data)`

**用途 / Purpose:** 处理 `start game` 相关逻辑。

### GetTroopCounts
`public static int GetTroopCounts(int armySize, CustomBattleCompositionData compositionData)`

**用途 / Purpose:** 获取 `troop counts` 的当前值。

### GetWallHitpointPercentages
`public static float GetWallHitpointPercentages(int breachedWallCount)`

**用途 / Purpose:** 获取 `wall hitpoint percentages` 的当前值。

### GetSiegeWeaponType
`public static SiegeEngineType GetSiegeWeaponType(SiegeEngineType siegeWeaponType)`

**用途 / Purpose:** 获取 `siege weapon type` 的当前值。

### PrepareBattleData
`public static CustomBattleData PrepareBattleData(BasicCharacterObject playerCharacter, BasicCharacterObject playerSideGeneralCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, CustomBattlePlayerSide playerSide, CustomBattlePlayerType battlePlayerType, string gameTypeStringId, string scene, string season, float timeOfDay, List<MissionSiegeWeapon> attackerMachines, List<MissionSiegeWeapon> defenderMachines, float wallHitPointsPercentages, int sceneUpgradeLevel, bool isSallyOut, string forcedSceneLevel)`

**用途 / Purpose:** 处理 `prepare battle data` 相关逻辑。

### GetCustomBattleParties
`public static CustomBattleCombatant GetCustomBattleParties(BasicCharacterObject playerCharacter, BasicCharacterObject playerSideGeneralCharacter, BasicCharacterObject enemyCharacter, BasicCultureObject playerFaction, int playerNumbers, List<BasicCharacterObject> playerTroopSelections, BasicCultureObject enemyFaction, int enemyNumbers, List<BasicCharacterObject> enemyTroopSelections, bool isPlayerAttacker)`

**用途 / Purpose:** 获取 `custom battle parties` 的当前值。

### AssertMissingTroopsForDebug
`public static void AssertMissingTroopsForDebug()`

**用途 / Purpose:** 处理 `assert missing troops for debug` 相关逻辑。

### GetDefaultTroopOfFormationForFaction
`public static BasicCharacterObject GetDefaultTroopOfFormationForFaction(BasicCultureObject culture, FormationClass formation)`

**用途 / Purpose:** 获取 `default troop of formation for faction` 的当前值。

## 使用示例

```csharp
CustomBattleHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)