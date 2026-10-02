---
title: "MatchHistoryData"
description: "MatchHistoryData — class in TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData. 15 public members (0 static)."
---

<!-- v147-skeleton -->
# MatchHistoryData

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public class MatchHistoryData : MultiplayerLocalData`  
**Base:** `MultiplayerLocalData`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryData.cs`

## Overview

`MatchHistoryData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends MultiplayerLocalData, so the members it does not redeclare are inherited from there. 11 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MatchHistoryData`.
- **Instance members** (14): `MatchId`, `MatchType`, `GameType`, `Map`, `MatchDate`, `WinnerTeam`, ….
- **Extension points** (1): `HasSameContentWith`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `HasSameContentWith` | method (override) | Overrides the base member. Takes 1 argument: `MultiplayerLocalData other`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `AddOrUpdatePlayer` | method | Instance entry point. Takes 4 arguments: `string id`, `string username`, `int forcedIndex`, `int teamNo`. Adds to the collection or relation this type owns. |
| `AttackerScore` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `DefenderScore` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Faction1` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Faction2` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `GameType` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Map` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `MatchDate` | property | Instance entry point `DateTime` property. Read it for current state; a declared setter writes that state in place. |
| `MatchId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `MatchType` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Players` | property | Instance entry point `List<PlayerInfo>` property. Read it for current state; a declared setter writes that state in place. |
| `TryUpdatePlayerStats` | method | Instance entry point. Takes 4 arguments: `string id`, `int kill`, `int death`, `int assist`. Returns `bool`. |
| `WinnerTeam` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `MatchHistoryData` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MatchHistoryData()`.

## Usage Example

```csharp
var data = new MatchHistoryData
{
    MatchId = "",
    MatchType = "",
    GameType = "",
    Map = "",
    MatchDate = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MultiplayerLocalData](../MultiplayerLocalData/) — `TaleWorlds.MountAndBlade.Diamond.Lobby`.
- [GameType](../GameType/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.
- [PlayerInfo](../PlayerInfo/) — `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`.

Section: [api/mission-ext/](../) — the other types in this bucket.
