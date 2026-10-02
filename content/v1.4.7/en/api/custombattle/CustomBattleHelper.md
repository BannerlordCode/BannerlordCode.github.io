---
title: "CustomBattleHelper"
description: "CustomBattleHelper — class in TaleWorlds.MountAndBlade.CustomBattle.CustomBattle. 12 public members (9 static)."
---

<!-- v147-skeleton -->
# CustomBattleHelper

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`  
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`  
**Type:** `public static class CustomBattleHelper`  
**Source:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleHelper.cs`

## Overview

`CustomBattleHelper` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- **Static entry points** (9): `GetIndexFromGameTypeStringId`, `StartGame`, `GetTroopCounts`, `GetWallHitpointPercentages`, `GetSiegeWeaponType`, `PrepareBattleData`, ….
- **Data and constants** (3): `DefaultBattleGameTypeStringId`, `DefaultSiegeGameTypeStringId`, `DefaultVillageGameTypeStringId`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AssertMissingTroopsForDebug` | method (static) | Static entry point. Takes no arguments. |
| `GetCustomBattleParties` | method (static) | Static entry point. Takes 10 arguments: `BasicCharacterObject playerCharacter`, `BasicCharacterObject playerSideGeneralCharacter`, `BasicCharacterObject enemyCharacter`, `BasicCultureObject playerFaction`, …. Returns `CustomBattleCombatant[]`. Read path: prefer it over reaching for the backing store. |
| `GetDefaultTroopOfFormationForFaction` | method (static) | Static entry point. Takes 2 arguments: `BasicCultureObject culture`, `FormationClass formation`. Returns `BasicCharacterObject`. Read path: prefer it over reaching for the backing store. |
| `GetIndexFromGameTypeStringId` | method (static) | Static entry point. Takes 1 argument: `string gameTypeStringId`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetSiegeWeaponType` | method (static) | Static entry point. Takes 1 argument: `SiegeEngineType siegeWeaponType`. Returns `SiegeEngineType`. Read path: prefer it over reaching for the backing store. |
| `GetTroopCounts` | method (static) | Static entry point. Takes 2 arguments: `int armySize`, `CustomBattleCompositionData compositionData`. Returns `int[]`. Read path: prefer it over reaching for the backing store. |
| `GetWallHitpointPercentages` | method (static) | Static entry point. Takes 1 argument: `int breachedWallCount`. Returns `float[]`. Read path: prefer it over reaching for the backing store. |
| `PrepareBattleData` | method (static) | Static entry point. Takes 16 arguments: `BasicCharacterObject playerCharacter`, `BasicCharacterObject playerSideGeneralCharacter`, `CustomBattleCombatant playerParty`, `CustomBattleCombatant enemyParty`, …. Returns `CustomBattleData`. |
| `StartGame` | method (static) | Static entry point. Takes 1 argument: `CustomBattleData data`. |
| `DefaultBattleGameTypeStringId` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `DefaultSiegeGameTypeStringId` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `DefaultVillageGameTypeStringId` | const | Instance entry point. Takes no arguments. Returns `string`. |

## Usage Example

```csharp
// Static entry points on CustomBattleHelper:
CustomBattleHelper.GetIndexFromGameTypeStringId(gameTypeStringId);
CustomBattleHelper.StartGame(data);
CustomBattleHelper.GetTroopCounts(armySize, compositionData);
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleHelper.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CustomBattleData](../CustomBattleData/) — `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`.
- [CustomBattleCompositionData](../CustomBattleCompositionData/) — `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`.
- [CustomBattlePlayerSide](../CustomBattlePlayerSide/) — `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`.
- [CustomBattlePlayerType](../CustomBattlePlayerType/) — `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`.

Section: [api/custombattle/](../) — the other types in this bucket.
