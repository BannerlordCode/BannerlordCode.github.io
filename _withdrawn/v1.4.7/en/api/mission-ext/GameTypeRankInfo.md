---
title: "GameTypeRankInfo"
description: "GameTypeRankInfo — class in TaleWorlds.MountAndBlade.Diamond.Ranked. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# GameTypeRankInfo

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Ranked`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public class GameTypeRankInfo`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/Ranked/GameTypeRankInfo.cs`

## Overview

`GameTypeRankInfo` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GameTypeRankInfo`.
- **Instance members** (2): `GameType`, `RankBarInfo`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GameType` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `RankBarInfo` | property | Instance entry point `RankBarInfo` property. Read it for current state; a declared setter writes that state in place. |
| `GameTypeRankInfo` | ctor | Instance entry point. Takes 2 arguments: `string gameType`, `RankBarInfo rankBarInfo`. Returns ``. |

- Constructed as `public GameTypeRankInfo(string gameType, RankBarInfo rankBarInfo)`.

## Usage Example

```csharp
var data = new GameTypeRankInfo
{
    GameType = "",
    RankBarInfo = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/Ranked/GameTypeRankInfo.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameType](../GameType/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.
- [RankBarInfo](../RankBarInfo/) — `TaleWorlds.MountAndBlade.Diamond.Ranked`.

Section: [api/mission-ext/](../) — the other types in this bucket.
