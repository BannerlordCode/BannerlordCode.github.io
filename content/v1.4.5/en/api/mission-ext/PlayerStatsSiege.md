---
title: "PlayerStatsSiege"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerStatsSiege`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerStatsSiege

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerStatsSiege : PlayerStatsBase`
**Base:** `PlayerStatsBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerStatsSiege.cs`

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

**Purpose:** Handles logic related to `fill with`.

### FillWithNewPlayer
`public void FillWithNewPlayer(PlayerId playerId)`

**Purpose:** Handles logic related to `fill with new player`.

### Update
`public void Update(BattlePlayerStatsSiege stats, bool won)`

**Purpose:** Updates the state or data of `update`.

## Usage Example

```csharp
var value = new PlayerStatsSiege();
value.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)