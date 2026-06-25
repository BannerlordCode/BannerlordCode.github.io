---
title: "PlayerStatsRanked"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerStatsRanked`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerStatsRanked

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerStatsRanked : PlayerStatsBase`
**Base:** `PlayerStatsBase`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerStatsRanked.cs`

## Overview

`PlayerStatsRanked` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Rating` | `public int Rating { get; set; }` |
| `Rank` | `public string Rank { get; set; }` |
| `Evaluating` | `public bool Evaluating { get; set; }` |
| `EvaluationMatchesPlayedCount` | `public int EvaluationMatchesPlayedCount { get; set; }` |

## Key Methods

### FillWith
`public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int rating, int ratingDeviation, string rank, bool evaluating, int evaluationMatchesPlayedCount)`

**Purpose:** Handles logic related to `fill with`.

### FillWithNewPlayer
`public virtual void FillWithNewPlayer(PlayerId playerId, string gameType, int defaultRating, int defaultRatingDeviation)`

**Purpose:** Handles logic related to `fill with new player`.

## Usage Example

```csharp
var value = new PlayerStatsRanked();
value.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0, 0, "example", false, 0);
```

## See Also

- [Complete Class Catalog](../catalog)