---
title: "PlayerStatsBase"
description: "Auto-generated class reference for PlayerStatsBase."
---
# PlayerStatsBase

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerStatsBase`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerStatsBase.cs`

## Overview

`PlayerStatsBase` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; }` |
| `KillCount` | `public int KillCount { get; set; }` |
| `DeathCount` | `public int DeathCount { get; set; }` |
| `AssistCount` | `public int AssistCount { get; set; }` |
| `WinCount` | `public int WinCount { get; set; }` |
| `LoseCount` | `public int LoseCount { get; set; }` |
| `ForfeitCount` | `public int ForfeitCount { get; set; }` |
| `GameType` | `public string GameType { get; set; }` |

## Key Methods

### FillWith
`public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PlayerStatsBase from the subsystem API first
PlayerStatsBase playerStatsBase = ...;
playerStatsBase.FillWith(playerId, 0, 0, 0, 0, 0, 0);
```

### Update
`public virtual void Update(BattlePlayerStatsBase battleStats, bool won)`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Obtain an instance of PlayerStatsBase from the subsystem API first
PlayerStatsBase playerStatsBase = ...;
playerStatsBase.Update(battleStats, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerStatsBase playerStatsBase = ...;
playerStatsBase.FillWith(playerId, 0, 0, 0, 0, 0, 0);
```

## See Also

- [Area Index](../)