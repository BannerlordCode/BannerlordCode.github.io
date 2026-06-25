---
title: "PlayerStatsTeamDeathmatch"
description: "Auto-generated class reference for PlayerStatsTeamDeathmatch."
---
# PlayerStatsTeamDeathmatch

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerStatsTeamDeathmatch : PlayerStatsBase`
**Base:** `PlayerStatsBase`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerStatsTeamDeathmatch.cs`

## Overview

`PlayerStatsTeamDeathmatch` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Score` | `public int Score { get; set; }` |

## Key Methods

### FillWith
`public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int score)`

**Purpose:** **Purpose:** Executes the FillWith logic.

```csharp
// Obtain an instance of PlayerStatsTeamDeathmatch from the subsystem API first
PlayerStatsTeamDeathmatch playerStatsTeamDeathmatch = ...;
playerStatsTeamDeathmatch.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0);
```

### FillWithNewPlayer
`public void FillWithNewPlayer(PlayerId playerId)`

**Purpose:** **Purpose:** Executes the FillWithNewPlayer logic.

```csharp
// Obtain an instance of PlayerStatsTeamDeathmatch from the subsystem API first
PlayerStatsTeamDeathmatch playerStatsTeamDeathmatch = ...;
playerStatsTeamDeathmatch.FillWithNewPlayer(playerId);
```

### Update
`public void Update(BattlePlayerStatsTeamDeathmatch stats, bool won)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of PlayerStatsTeamDeathmatch from the subsystem API first
PlayerStatsTeamDeathmatch playerStatsTeamDeathmatch = ...;
playerStatsTeamDeathmatch.Update(stats, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerStatsTeamDeathmatch playerStatsTeamDeathmatch = ...;
playerStatsTeamDeathmatch.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0);
```

## See Also

- [Area Index](../)