---
title: "PlayerStatsBattle"
description: "Auto-generated class reference for PlayerStatsBattle."
---
# PlayerStatsBattle

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerStatsBattle : PlayerStatsBase`
**Base:** `PlayerStatsBase`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerStatsBattle.cs`

## Overview

`PlayerStatsBattle` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RoundsWon` | `public int RoundsWon { get; }` |
| `RoundsLost` | `public int RoundsLost { get; }` |

## Key Methods

### FillWith
`public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int roundsWon, int roundsLost)`

**Purpose:** **Purpose:** Executes the FillWith logic.

```csharp
// Obtain an instance of PlayerStatsBattle from the subsystem API first
PlayerStatsBattle playerStatsBattle = ...;
playerStatsBattle.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0, 0);
```

### FillWithNewPlayer
`public void FillWithNewPlayer(PlayerId playerId)`

**Purpose:** **Purpose:** Executes the FillWithNewPlayer logic.

```csharp
// Obtain an instance of PlayerStatsBattle from the subsystem API first
PlayerStatsBattle playerStatsBattle = ...;
playerStatsBattle.FillWithNewPlayer(playerId);
```

### Update
`public void Update(BattlePlayerStatsBattle stats, bool won)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of PlayerStatsBattle from the subsystem API first
PlayerStatsBattle playerStatsBattle = ...;
playerStatsBattle.Update(stats, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerStatsBattle playerStatsBattle = ...;
playerStatsBattle.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0, 0);
```

## See Also

- [Area Index](../)