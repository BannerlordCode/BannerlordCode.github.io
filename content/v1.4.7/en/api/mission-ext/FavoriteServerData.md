---
title: "FavoriteServerData"
description: "FavoriteServerData — class in TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData. 6 public members (1 static)."
---

<!-- v147-skeleton -->
# FavoriteServerData

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public class FavoriteServerData : MultiplayerLocalData`  
**Base:** `MultiplayerLocalData`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerData.cs`

## Overview

`FavoriteServerData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends MultiplayerLocalData, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `CreateFrom`.
- **Instance members** (5): `Address`, `Port`, `GameType`, `Name`, `HasSameContentWith`.
- **Extension points** (1): `HasSameContentWith`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateFrom` | method (static) | Static entry point. Takes 1 argument: `GameServerEntry serverEntry`. Returns `FavoriteServerData`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `HasSameContentWith` | method (override) | Overrides the base member. Takes 1 argument: `MultiplayerLocalData other`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Address` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `GameType` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Name` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Port` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
var data = new FavoriteServerData
{
    Address = "",
    Port = 0,
    GameType = "",
    Name = "",
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MultiplayerLocalData](../MultiplayerLocalData/) — `TaleWorlds.MountAndBlade.Diamond.Lobby`.
- [GameType](../GameType/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.

Section: [api/mission-ext/](../) — the other types in this bucket.
