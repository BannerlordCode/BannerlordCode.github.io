---
title: "PlayerStatsSiege"
description: "Auto-generated class reference for PlayerStatsSiege."
---
# PlayerStatsSiege

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerStatsSiege : PlayerStatsBase`
**Base:** `PlayerStatsBase`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerStatsSiege.cs`

## Overview

`PlayerStatsSiege` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WallsBreached` | `public int WallsBreached { get; set; }` |
| `SiegeEngineKills` | `public int SiegeEngineKills { get; set; }` |
| `SiegeEnginesDestroyed` | `public int SiegeEnginesDestroyed { get; set; }` |
| `ObjectiveGoldGained` | `public int ObjectiveGoldGained { get; set; }` |
| `Score` | `public int Score { get; set; }` |

## Key Methods

### FillWith
`public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int wallsBreached, int siegeEngineKills, int siegeEnginesDestroyed, int objectiveGoldGained, int score)`

**Purpose:** **Purpose:** Executes the FillWith logic.

```csharp
// Obtain an instance of PlayerStatsSiege from the subsystem API first
PlayerStatsSiege playerStatsSiege = ...;
playerStatsSiege.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
```

### FillWithNewPlayer
`public void FillWithNewPlayer(PlayerId playerId)`

**Purpose:** **Purpose:** Executes the FillWithNewPlayer logic.

```csharp
// Obtain an instance of PlayerStatsSiege from the subsystem API first
PlayerStatsSiege playerStatsSiege = ...;
playerStatsSiege.FillWithNewPlayer(playerId);
```

### Update
`public void Update(BattlePlayerStatsSiege stats, bool won)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of PlayerStatsSiege from the subsystem API first
PlayerStatsSiege playerStatsSiege = ...;
playerStatsSiege.Update(stats, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerStatsSiege playerStatsSiege = ...;
playerStatsSiege.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
```

## See Also

- [Area Index](../)