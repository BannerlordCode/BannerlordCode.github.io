<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerStatsSkirmish`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerStatsSkirmish

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerStatsSkirmish : PlayerStatsRanked`
**Base:** `PlayerStatsRanked`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerStatsSkirmish.cs`

## Overview

`PlayerStatsSkirmish` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MVPs` | `public int MVPs { get; set; }` |
| `Score` | `public int Score { get; set; }` |
| `AverageScore` | `public int AverageScore { get; }` |

## Key Methods

### FillWith
`public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int rating, int ratingDeviation, string rank, bool evaluating, int evaluationMatchesPlayedCount, int mvps, int score)`

**Purpose:** Handles logic related to `fill with`.

### FillWithNewPlayer
`public void FillWithNewPlayer(PlayerId playerId, int defaultRating, int defaultRatingDeviation)`

**Purpose:** Handles logic related to `fill with new player`.

### Update
`public void Update(BattlePlayerStatsSkirmish stats, bool won)`

**Purpose:** Updates the state or data of `update`.

## Usage Example

```csharp
var value = new PlayerStatsSkirmish();
value.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0, 0, "example", false, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)