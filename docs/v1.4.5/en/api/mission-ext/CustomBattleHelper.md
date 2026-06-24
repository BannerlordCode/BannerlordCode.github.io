<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleHelper`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleHelper

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CustomBattleHelper`
**Base:** none
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/CustomBattleHelper.cs`

## Overview

`CustomBattleHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `CustomBattleHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetIndexFromGameTypeStringId
`public static int GetIndexFromGameTypeStringId(string gameTypeStringId)`

**Purpose:** Gets the current value of `index from game type string id`.

### StartGame
`public static void StartGame(CustomBattleData data)`

**Purpose:** Handles logic related to `start game`.

### GetTroopCounts
`public static int GetTroopCounts(int armySize, CustomBattleCompositionData compositionData)`

**Purpose:** Gets the current value of `troop counts`.

### GetWallHitpointPercentages
`public static float GetWallHitpointPercentages(int breachedWallCount)`

**Purpose:** Gets the current value of `wall hitpoint percentages`.

### GetSiegeWeaponType
`public static SiegeEngineType GetSiegeWeaponType(SiegeEngineType siegeWeaponType)`

**Purpose:** Gets the current value of `siege weapon type`.

### PrepareBattleData
`public static CustomBattleData PrepareBattleData(BasicCharacterObject playerCharacter, BasicCharacterObject playerSideGeneralCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, CustomBattlePlayerSide playerSide, CustomBattlePlayerType battlePlayerType, string gameTypeStringId, string scene, string season, float timeOfDay, List<MissionSiegeWeapon> attackerMachines, List<MissionSiegeWeapon> defenderMachines, float wallHitPointsPercentages, int sceneUpgradeLevel, bool isSallyOut, string forcedSceneLevel)`

**Purpose:** Handles logic related to `prepare battle data`.

### GetCustomBattleParties
`public static CustomBattleCombatant GetCustomBattleParties(BasicCharacterObject playerCharacter, BasicCharacterObject playerSideGeneralCharacter, BasicCharacterObject enemyCharacter, BasicCultureObject playerFaction, int playerNumbers, List<BasicCharacterObject> playerTroopSelections, BasicCultureObject enemyFaction, int enemyNumbers, List<BasicCharacterObject> enemyTroopSelections, bool isPlayerAttacker)`

**Purpose:** Gets the current value of `custom battle parties`.

### AssertMissingTroopsForDebug
`public static void AssertMissingTroopsForDebug()`

**Purpose:** Handles logic related to `assert missing troops for debug`.

### GetDefaultTroopOfFormationForFaction
`public static BasicCharacterObject GetDefaultTroopOfFormationForFaction(BasicCultureObject culture, FormationClass formation)`

**Purpose:** Gets the current value of `default troop of formation for faction`.

## Usage Example

```csharp
CustomBattleHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)