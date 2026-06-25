---
title: "CustomBattleData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleData

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CustomBattleData`
**Base:** none
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/CustomBattleData.cs`

## Overview

`CustomBattleData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CustomBattleData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameTypes` | `public static IEnumerable<Tuple<string, string>> GameTypes { get; }` |
| `PlayerTypes` | `public static IEnumerable<Tuple<string, CustomBattlePlayerType>> PlayerTypes { get; }` |
| `PlayerSides` | `public static IEnumerable<Tuple<string, CustomBattlePlayerSide>> PlayerSides { get; }` |
| `Characters` | `public static IEnumerable<BasicCharacterObject> Characters { get; }` |
| `Factions` | `public static IEnumerable<BasicCultureObject> Factions { get; }` |
| `TimesOfDay` | `public static IEnumerable<Tuple<string, CustomBattleTimeOfDay>> TimesOfDay { get; }` |
| `Seasons` | `public static IEnumerable<Tuple<string, string>> Seasons { get; }` |
| `WallHitpoints` | `public static IEnumerable<Tuple<string, int>> WallHitpoints { get; }` |
| `SceneLevels` | `public static IEnumerable<int> SceneLevels { get; }` |

## Key Methods

### GetAllAttackerMeleeMachines
`public static IEnumerable<SiegeEngineType> GetAllAttackerMeleeMachines()`

**Purpose:** Gets the current value of `all attacker melee machines`.

### GetAllDefenderRangedMachines
`public static IEnumerable<SiegeEngineType> GetAllDefenderRangedMachines()`

**Purpose:** Gets the current value of `all defender ranged machines`.

### GetAllAttackerRangedMachines
`public static IEnumerable<SiegeEngineType> GetAllAttackerRangedMachines()`

**Purpose:** Gets the current value of `all attacker ranged machines`.

## Usage Example

```csharp
var value = new CustomBattleData();
```

## See Also

- [Complete Class Catalog](../catalog)