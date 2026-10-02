---
title: "RankBarInfo"
description: "RankBarInfo — class in TaleWorlds.MountAndBlade.Diamond.Ranked. 13 public members (2 static)."
---

<!-- v147-skeleton -->
# RankBarInfo

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Ranked`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public class RankBarInfo`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/Ranked/RankBarInfo.cs`

## Overview

`RankBarInfo` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `RankBarInfo`, `RankBarInfo`.
- **Static entry points** (2): `CreateBarInfo`, `CreateUnrankedInfo`.
- **Instance members** (9): `RankId`, `PreviousRankId`, `NextRankId`, `ProgressPercentage`, `Rating`, `RatingToNextRank`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateBarInfo` | method (static) | Static entry point. Takes 6 arguments: `string rankId`, `string previousRankId`, `string nextRankId`, `float progressPercentage`, …. Returns `RankBarInfo`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateUnrankedInfo` | method (static) | Static entry point. Takes 2 arguments: `int matchesPlayed`, `int totalMatchesRequired`. Returns `RankBarInfo`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `EvaluationMatchesPlayed` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `IsEvaluating` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `NextRankId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `PreviousRankId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `ProgressPercentage` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `RankId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Rating` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `RatingToNextRank` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `TotalEvaluationMatchesRequired` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `RankBarInfo` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `RankBarInfo` | ctor | Instance entry point. Takes 9 arguments: `string rankId`, `string previousRankId`, `string nextRankId`, `float progressPercentage`, …. Returns ``. |

- Constructed as `public RankBarInfo()`.
- Constructed as `public RankBarInfo(string rankId, string previousRankId, string nextRankId, float progressPercentage, int rating, int ratingToNextRank, bool isEvaluating, int evaluationMatchesPlayed, int totalEvaluationMatchesRequired)`.

## Usage Example

```csharp
var data = new RankBarInfo
{
    RankId = "",
    PreviousRankId = "",
    NextRankId = "",
    ProgressPercentage = 0,
    Rating = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/Ranked/RankBarInfo.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
