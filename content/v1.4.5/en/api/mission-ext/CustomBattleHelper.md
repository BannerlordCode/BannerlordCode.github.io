---
title: "CustomBattleHelper"
description: "Auto-generated class reference for CustomBattleHelper."
---
# CustomBattleHelper

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CustomBattleHelper`
**Base:** none
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/CustomBattleHelper.cs`

## Overview

`CustomBattleHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `CustomBattleHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetIndexFromGameTypeStringId
`public static int GetIndexFromGameTypeStringId(string gameTypeStringId)`

**Purpose:** **Purpose:** Reads and returns the index from game type string id value held by the this instance.

```csharp
// Static call; no instance required
CustomBattleHelper.GetIndexFromGameTypeStringId("example");
```

### StartGame
`public static void StartGame(CustomBattleData data)`

**Purpose:** **Purpose:** Starts the game flow or state machine.

```csharp
// Static call; no instance required
CustomBattleHelper.StartGame(data);
```

### GetTroopCounts
`public static int GetTroopCounts(int armySize, CustomBattleCompositionData compositionData)`

**Purpose:** **Purpose:** Reads and returns the troop counts value held by the this instance.

```csharp
// Static call; no instance required
CustomBattleHelper.GetTroopCounts(0, compositionData);
```

### GetWallHitpointPercentages
`public static float GetWallHitpointPercentages(int breachedWallCount)`

**Purpose:** **Purpose:** Reads and returns the wall hitpoint percentages value held by the this instance.

```csharp
// Static call; no instance required
CustomBattleHelper.GetWallHitpointPercentages(0);
```

### GetSiegeWeaponType
`public static SiegeEngineType GetSiegeWeaponType(SiegeEngineType siegeWeaponType)`

**Purpose:** **Purpose:** Reads and returns the siege weapon type value held by the this instance.

```csharp
// Static call; no instance required
CustomBattleHelper.GetSiegeWeaponType(siegeWeaponType);
```

### PrepareBattleData
`public static CustomBattleData PrepareBattleData(BasicCharacterObject playerCharacter, BasicCharacterObject playerSideGeneralCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, CustomBattlePlayerSide playerSide, CustomBattlePlayerType battlePlayerType, string gameTypeStringId, string scene, string season, float timeOfDay, List<MissionSiegeWeapon> attackerMachines, List<MissionSiegeWeapon> defenderMachines, float wallHitPointsPercentages, int sceneUpgradeLevel, bool isSallyOut, string forcedSceneLevel)`

**Purpose:** **Purpose:** Finishes prerequisite setup for the upcoming battle data operation.

```csharp
// Static call; no instance required
CustomBattleHelper.PrepareBattleData(playerCharacter, playerSideGeneralCharacter, playerParty, enemyParty, playerSide, battlePlayerType, "example", "example", "example", 0, attackerMachines, defenderMachines, 0, 0, false, "example");
```

### GetCustomBattleParties
`public static CustomBattleCombatant GetCustomBattleParties(BasicCharacterObject playerCharacter, BasicCharacterObject playerSideGeneralCharacter, BasicCharacterObject enemyCharacter, BasicCultureObject playerFaction, int playerNumbers, List<BasicCharacterObject> playerTroopSelections, BasicCultureObject enemyFaction, int enemyNumbers, List<BasicCharacterObject> enemyTroopSelections, bool isPlayerAttacker)`

**Purpose:** **Purpose:** Reads and returns the custom battle parties value held by the this instance.

```csharp
// Static call; no instance required
CustomBattleHelper.GetCustomBattleParties(playerCharacter, playerSideGeneralCharacter, enemyCharacter, playerFaction, 0, playerTroopSelections, enemyFaction, 0, enemyTroopSelections, false);
```

### AssertMissingTroopsForDebug
`public static void AssertMissingTroopsForDebug()`

**Purpose:** **Purpose:** Executes the AssertMissingTroopsForDebug logic.

```csharp
// Static call; no instance required
CustomBattleHelper.AssertMissingTroopsForDebug();
```

### GetDefaultTroopOfFormationForFaction
`public static BasicCharacterObject GetDefaultTroopOfFormationForFaction(BasicCultureObject culture, FormationClass formation)`

**Purpose:** **Purpose:** Reads and returns the default troop of formation for faction value held by the this instance.

```csharp
// Static call; no instance required
CustomBattleHelper.GetDefaultTroopOfFormationForFaction(culture, formation);
```

## Usage Example

```csharp
CustomBattleHelper.Initialize();
```

## See Also

- [Area Index](../)