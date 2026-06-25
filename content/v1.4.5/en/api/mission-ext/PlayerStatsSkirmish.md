---
title: "PlayerStatsSkirmish"
description: "Auto-generated class reference for PlayerStatsSkirmish."
---
# PlayerStatsSkirmish

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerStatsSkirmish : PlayerStatsRanked`
**Base:** `PlayerStatsRanked`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerStatsSkirmish.cs`

## Overview

`PlayerStatsSkirmish` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MVPs` | `public int MVPs { get; set; }` |
| `Score` | `public int Score { get; set; }` |

## Key Methods

### FillWith
`public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int rating, int ratingDeviation, string rank, bool evaluating, int evaluationMatchesPlayedCount, int mvps, int score)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PlayerStatsSkirmish from the subsystem API first
PlayerStatsSkirmish playerStatsSkirmish = ...;
playerStatsSkirmish.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0, 0, "example", false, 0, 0, 0);
```

### FillWithNewPlayer
`public void FillWithNewPlayer(PlayerId playerId, int defaultRating, int defaultRatingDeviation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PlayerStatsSkirmish from the subsystem API first
PlayerStatsSkirmish playerStatsSkirmish = ...;
playerStatsSkirmish.FillWithNewPlayer(playerId, 0, 0);
```

### Update
`public void Update(BattlePlayerStatsSkirmish stats, bool won)`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Obtain an instance of PlayerStatsSkirmish from the subsystem API first
PlayerStatsSkirmish playerStatsSkirmish = ...;
playerStatsSkirmish.Update(stats, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerStatsSkirmish playerStatsSkirmish = ...;
playerStatsSkirmish.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0, 0, "example", false, 0, 0, 0);
```

## See Also

- [Area Index](../)