---
title: "CustomBattleData"
description: "CustomBattleData: a public struct in TaleWorlds.MountAndBlade.CustomBattle.CustomBattle; 16 exposed members (3 methods, 9 properties, 4 fields). Canonical bucket custombattle. Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleData

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public struct CustomBattleData`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleData.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## Overview

CustomBattleData lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleData.cs. It is a public struct; the inheritance chain is CustomBattleData. It exposes 16 public/protected members: 3 methods, 9 properties, 4 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleData lands in canonical bucket `custombattle` (matched rule `rule:TaleWorlds.MountAndBlade.CustomBattle`), namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`, inheritance chain CustomBattleData. The surface is property-led (properties 9/16, methods 3/16), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IEnumerable` | `public static IEnumerable<SiegeEngineType>GetAllAttackerMeleeMachines()` | method |
| `IEnumerable` | `public static IEnumerable<SiegeEngineType>GetAllDefenderRangedMachines()` | method |
| `IEnumerable` | `public static IEnumerable<SiegeEngineType>GetAllAttackerRangedMachines()` | method |
| `string>>GameTypes` | `public static IEnumerable<Tuple<string, string>>GameTypes` | property |
| `CustomBattlePlayerType>>PlayerTypes` | `public static IEnumerable<Tuple<string, CustomBattlePlayerType>>PlayerTypes` | property |
| `CustomBattlePlayerSide>>PlayerSides` | `public static IEnumerable<Tuple<string, CustomBattlePlayerSide>>PlayerSides` | property |
| `IEnumerable` | `public static IEnumerable<BasicCharacterObject>Characters` | property |
| `IEnumerable` | `public static IEnumerable<BasicCultureObject>Factions` | property |
| `CustomBattleTimeOfDay>>TimesOfDay` | `public static IEnumerable<Tuple<string, CustomBattleTimeOfDay>>TimesOfDay` | property |
| `string>>Seasons` | `public static IEnumerable<Tuple<string, string>>Seasons` | property |
| `int>>WallHitpoints` | `public static IEnumerable<Tuple<string, int>>WallHitpoints` | property |
| `IEnumerable` | `public static IEnumerable<int>SceneLevels` | property |
| `NumberOfAttackerMeleeMachines` | `public const int NumberOfAttackerMeleeMachines` | field |
| `NumberOfAttackerRangedMachines` | `public const int NumberOfAttackerRangedMachines` | field |
| `NumberOfDefenderRangedMachines` | `public const int NumberOfDefenderRangedMachines` | field |
| `CoreContentDefaultSceneName` | `public const string CoreContentDefaultSceneName` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CustomBattleCompositionData](../CustomBattleCompositionData/)
- [same namespace CustomBattleHelper](../CustomBattleHelper/)
- [same namespace CustomBattlePlayerSide](../CustomBattlePlayerSide/)
- [same namespace CustomBattlePlayerType](../CustomBattlePlayerType/)
