---
title: "PlayerStatsRanked"
description: "Auto-generated class reference for PlayerStatsRanked."
---
# PlayerStatsRanked

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerStatsRanked : PlayerStatsBase`
**Base:** `PlayerStatsBase`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerStatsRanked.cs`

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

**Purpose:** **Purpose:** Executes the FillWith logic.

```csharp
// Obtain an instance of PlayerStatsRanked from the subsystem API first
PlayerStatsRanked playerStatsRanked = ...;
playerStatsRanked.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0, 0, "example", false, 0);
```

### FillWithNewPlayer
`public virtual void FillWithNewPlayer(PlayerId playerId, string gameType, int defaultRating, int defaultRatingDeviation)`

**Purpose:** **Purpose:** Executes the FillWithNewPlayer logic.

```csharp
// Obtain an instance of PlayerStatsRanked from the subsystem API first
PlayerStatsRanked playerStatsRanked = ...;
playerStatsRanked.FillWithNewPlayer(playerId, "example", 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerStatsRanked playerStatsRanked = ...;
playerStatsRanked.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0, 0, "example", false, 0);
```

## See Also

- [Area Index](../)