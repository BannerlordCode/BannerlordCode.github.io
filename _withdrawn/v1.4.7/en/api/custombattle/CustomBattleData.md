---
title: "CustomBattleData"
description: "CustomBattleData — struct in TaleWorlds.MountAndBlade.CustomBattle.CustomBattle. 28 public members (6 static)."
---

<!-- v147-skeleton -->
# CustomBattleData

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`  
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`  
**Type:** `public struct CustomBattleData`  
**Source:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleData.cs`

## Overview

`CustomBattleData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Static entry points** (6): `GetAllAttackerMeleeMachines`, `GetAllDefenderRangedMachines`, `GetAllAttackerRangedMachines`, `Characters`, `Factions`, `SceneLevels`.
- **Data and constants** (22): `NumberOfAttackerMeleeMachines`, `NumberOfAttackerRangedMachines`, `NumberOfDefenderRangedMachines`, `CoreContentDefaultSceneName`, `GameTypeStringId`, `SceneId`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Characters` | property (static) | Static entry point `IEnumerable<BasicCharacterObject>` property. Read it for current state; a declared setter writes that state in place. |
| `Factions` | property (static) | Static entry point `IEnumerable<BasicCultureObject>` property. Read it for current state; a declared setter writes that state in place. |
| `GetAllAttackerMeleeMachines` | method (static) | Static entry point. Takes no arguments. Returns `IEnumerable<SiegeEngineType>`. Read path: prefer it over reaching for the backing store. |
| `GetAllAttackerRangedMachines` | method (static) | Static entry point. Takes no arguments. Returns `IEnumerable<SiegeEngineType>`. Read path: prefer it over reaching for the backing store. |
| `GetAllDefenderRangedMachines` | method (static) | Static entry point. Takes no arguments. Returns `IEnumerable<SiegeEngineType>`. Read path: prefer it over reaching for the backing store. |
| `SceneLevels` | property (static) | Static entry point `IEnumerable<int>` property. Read it for current state; a declared setter writes that state in place. |
| `CoreContentDefaultSceneName` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `NumberOfAttackerMeleeMachines` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `NumberOfAttackerRangedMachines` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `NumberOfDefenderRangedMachines` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `AttackerMachines` | field | Instance entry point `List<MissionSiegeWeapon>` field — direct storage with no validation or notification. |
| `DefenderMachines` | field | Instance entry point `List<MissionSiegeWeapon>` field — direct storage with no validation or notification. |
| `EnemyParty` | field | Instance entry point `CustomBattleCombatant` field — direct storage with no validation or notification. |
| `GameTypeStringId` | field | Instance entry point `string` field — direct storage with no validation or notification. |
| `HasAnySiegeTower` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `IsPlayerAttacker` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `IsPlayerGeneral` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `IsReliefAttack` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `IsSallyOut` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `PlayerCharacter` | field | Instance entry point `BasicCharacterObject` field — direct storage with no validation or notification. |
| `PlayerParty` | field | Instance entry point `CustomBattleCombatant` field — direct storage with no validation or notification. |
| `PlayerSideGeneralCharacter` | field | Instance entry point `BasicCharacterObject` field — direct storage with no validation or notification. |
| `SceneId` | field | Instance entry point `string` field — direct storage with no validation or notification. |
| `SceneLevel` | field | Instance entry point `string` field — direct storage with no validation or notification. |

4 further public members follow the same patterns.
## Usage Example

```csharp
var data = new CustomBattleData
{
    Characters = default,
    Factions = default,
    SceneLevels = default,
    GameTypeStringId = "",
    SceneId = "",
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CustomBattlePlayerType](../CustomBattlePlayerType/) — `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`.
- [CustomBattlePlayerSide](../CustomBattlePlayerSide/) — `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`.
- [ModuleHelper](../../modulemanager/ModuleHelper/) — `TaleWorlds.ModuleManager`.

Section: [api/custombattle/](../) — the other types in this bucket.
