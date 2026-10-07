---
title: "DefaultFormationArrangementModel"
description: "Auto-generated class reference for DefaultFormationArrangementModel."
---
# DefaultFormationArrangementModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultFormationArrangementModel : FormationArrangementModel`
**Base:** `FormationArrangementModel`
**File:** `TaleWorlds.MountAndBlade/DefaultFormationArrangementModel.cs`

## Overview

`DefaultFormationArrangementModel` decides where banner bearers stand inside a formation. It is a concrete `FormationArrangementModel` (`DefaultFormationArrangementModel.cs:9`) — the only implementation in `TaleWorlds.MountAndBlade` — published through `MissionGameModels.Current.FormationArrangementsModel` and consumed by `BannerBearerLogic` in a single place: `GetBannerBearerPositions(this.Formation, list.Count)` (`BannerBearerLogic.cs:837`).

Its one public method, `GetBannerBearerPositions(Formation, int maxCount)` (`DefaultFormationArrangementModel.cs:12`), picks a per-shape table of candidate slots and then returns only those that are actually free. The tables are `static readonly` arrays of a private `RelativeFormationPosition` struct: line (`DefaultFormationArrangementModel.cs:138`), circular (`DefaultFormationArrangementModel.cs:149`), skein (`DefaultFormationArrangementModel.cs:160`) and square (`DefaultFormationArrangementModel.cs:171`).

The candidates are turned into concrete slots by `RelativeFormationPosition.GetArrangementPosition(fileCount, rankCount)` (`DefaultFormationArrangementModel.cs:196`), and each is then tested by `SearchOccupiedInLineFormation` (`DefaultFormationArrangementModel.cs:74`), which returns the *slot itself* when occupied and otherwise scans outward for a free one.

## Mental Model

The formation must be a `LineFormation` or you get an empty list. The method starts with `formation.Arrangement as LineFormation` and returns the empty list if either the formation or the cast is null (`DefaultFormationArrangementModel.cs:16`). `CircularFormation`, `SkeinFormation` and `SquareFormation` are all `LineFormation` subclasses, so they cast fine — but a formation whose arrangement is none of those gets no banner bearers at all, silently.

The candidate tables are not all equivalent, and two shapes deliberately have none. The chain of `is` tests maps circular, skein and square to their own tables, while `TransposedLineFormation` and `WedgeFormation` fall through to `array = BannerBearerLineFormationPositions` (`DefaultFormationArrangementModel.cs:51`) — they reuse the line table rather than getting nothing. Transposed line and wedge are not checked at all; they are covered by the fallback.

Each candidate encodes an origin-relative offset, not an index. `RelativeFormationPosition` stores `FromLeftFile`/`FromFrontRank` plus integer and fractional offsets (`DefaultFormationArrangementModel.cs:185`), and `GetArrangementPosition` resolves them against the actual shape: `FromLeftFile` means index 1 upward, otherwise `fileCount - 1` downward, with the fractional offset scaled by `fileCount - 1` and the whole thing clamped (`DefaultFormationArrangementModel.cs:206`, `DefaultFormationArrangementModel.cs:214`). The fractional offsets in the tables — `0.833f`, `0.167f`, `0.666f`, `0.333f` in the circular and square tables (`DefaultFormationArrangementModel.cs:152`) — exist so a rank of three lands on 0/1/2/3-ish slots instead of collapsing onto the middle.

A degenerate shape yields `Invalid` rather than throwing. `GetArrangementPosition` returns `FormationArrangementModel.ArrangementPosition.Invalid` when `fileCount <= 0 || rankCount <= 0` (`DefaultFormationArrangementModel.cs:198`), and the search helpers set the same sentinel before scanning (`DefaultFormationArrangementModel.cs:83`).

`SearchOccupiedInLineFormation` returns `true` when the requested slot is *already occupied* — the name reads backwards. The caller reads it as "this candidate is good, add it" (`DefaultFormationArrangementModel.cs:63`), and the function satisfies that by handing back the nearest occupied slot in the row, which is exactly where a banner bearer can join an existing line. The search direction is chosen by the candidate's `FromLeftFile` flag: `searchLeftToRight` tries outward-to-the-right first, otherwise left first (`DefaultFormationArrangementModel.cs:84`). Empty formations give up immediately — the two scan loops run off the end of the file count and return `false` (`DefaultFormationArrangementModel.cs:126`).

The `maxCount` cap is applied while iterating, before the occupancy test (`DefaultFormationArrangementModel.cs:58`), so you get *at most* `maxCount` positions and the loop breaks rather than skipping. The caller passes `list.Count` (`BannerBearerLogic.cs:837`), i.e. one slot per bearer it intends to place.

## How to use

**Getting one.** Read it as `MissionGameModels.Current.FormationArrangementsModel`; to change the placement, register your own `FormationArrangementModel` with `gameStarter.AddModel<FormationArrangementModel>(new MyArrangementModel())`.

**Typical use** — asking where bearers fit, and handling a formation that has no line arrangement:

```csharp
using System.Collections.Generic;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public static class MyBannerPlacer
{
    public static bool Place(Formation formation, int bearerCount)
    {
        FormationArrangementModel model = MissionGameModels.Current.FormationArrangementsModel;
        if (model == null)
        {
            return false;
        }

        LineFormation line = formation.Arrangement as LineFormation;
        if (line == null)
        {
            // Not a line-derived shape: no positions are produced.
            return false;
        }

        List<FormationArrangementModel.ArrangementPosition> positions =
            model.GetBannerBearerPositions(formation, bearerCount);

        foreach (FormationArrangementModel.ArrangementPosition position in positions)
        {
            MyBearer.SpawnAt(position.FileIndex, position.RankIndex);
        }

        return positions.Count == bearerCount;
    }
}
```

`Formation.Arrangement`, `LineFormation.GetUnit(int fileIndex, int rankIndex)` and `GetFormationInfo(out int fileCount, out int rankCount)` (`DefaultFormationArrangementModel.cs:23`) are the real members — the last is how the model learns the shape's dimensions.

**Most common mistake:** assuming one bearer per requested slot regardless of the formation's state.

```csharp
var positions = model.GetBannerBearerPositions(formation, 5);
// positions.Count may be 2, or 0
```

The method returns *free* positions, not reservations: each candidate only lands in the list if `SearchOccupiedInLineFormation` found an occupied neighbour to stand beside (`DefaultFormationArrangementModel.cs:63`), and it returns `false` for a formation whose arrangement is not `LineFormation`-derived (`DefaultFormationArrangementModel.cs:16`). Asking for five on a two-file formation yields fewer, and asking on a formation with no arrangement yields an empty list with no exception. Check `positions.Count` against what you need, as in the example, and do not index the result assuming it is full.

## Key Methods

### GetBannerBearerPositions
`public override List<FormationArrangementModel.ArrangementPosition> GetBannerBearerPositions(Formation formation, int maxCount)`

**Purpose:** Reads and returns the banner bearer positions value held by the this instance.

```csharp
// Obtain an instance of DefaultFormationArrangementModel from the subsystem API first
DefaultFormationArrangementModel defaultFormationArrangementModel = ...;
var result = defaultFormationArrangementModel.GetBannerBearerPositions(formation, 0);
```

### GetArrangementPosition
`public FormationArrangementModel.ArrangementPosition GetArrangementPosition(int fileCount, int rankCount)`

**Purpose:** Reads and returns the arrangement position value held by the this instance.

```csharp
// Obtain an instance of DefaultFormationArrangementModel from the subsystem API first
DefaultFormationArrangementModel defaultFormationArrangementModel = ...;
var result = defaultFormationArrangementModel.GetArrangementPosition(0, 0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultFormationArrangementModel>(new MyDefaultFormationArrangementModel());
```

## See Also

- [Area Index](../)
- [FormationArrangementModel — the abstract base and the model slot](../FormationArrangementModel)
- [BannerBearerLogic — the only shipped caller](../BannerBearerLogic)
- [LineFormation — the arrangement type this model requires](../LineFormation)
- [中文页面](../../../../zh/api/mission-ext/DefaultFormationArrangementModel)