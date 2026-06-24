<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerStatsBattle`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerStatsBattle

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerStatsBattle : PlayerStatsBase`
**Base:** `PlayerStatsBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerStatsBattle.cs`

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

**Purpose:** Handles logic related to `fill with`.

### FillWithNewPlayer
`public void FillWithNewPlayer(PlayerId playerId)`

**Purpose:** Handles logic related to `fill with new player`.

### Update
`public void Update(BattlePlayerStatsBattle stats, bool won)`

**Purpose:** Updates the state or data of `update`.

## Usage Example

```csharp
var value = new PlayerStatsBattle();
value.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)