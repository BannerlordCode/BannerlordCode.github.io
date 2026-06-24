<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerStatsBase`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerStatsBase

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerStatsBase`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerStatsBase.cs`

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
| `AverageKillPerDeath` | `public float AverageKillPerDeath { get; set; }` |
| `GameType` | `public string GameType { get; set; }` |

## Key Methods

### FillWith
`public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount)`

**Purpose:** Handles logic related to `fill with`.

### Update
`public virtual void Update(BattlePlayerStatsBase battleStats, bool won)`

**Purpose:** Updates the state or data of `update`.

## Usage Example

```csharp
var value = new PlayerStatsBase();
value.FillWith(playerId, 0, 0, 0, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)