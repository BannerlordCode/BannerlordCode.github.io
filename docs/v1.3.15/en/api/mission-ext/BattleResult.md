<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleResult`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleResult

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleResult`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/BattleResult.cs`

## Overview

`BattleResult` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsCancelled` | `public bool IsCancelled { get; }` |
| `WinnerTeamNo` | `public int WinnerTeamNo { get; }` |
| `IsPremadeGame` | `public bool IsPremadeGame { get; }` |
| `PremadeGameType` | `public PremadeGameType PremadeGameType { get; }` |
| `PlayerEntries` | `public Dictionary<string, BattlePlayerEntry> PlayerEntries { get; }` |

## Key Methods

### AddOrUpdatePlayerEntry
`public void AddOrUpdatePlayerEntry(PlayerId playerId, int teamNo, string gameMode, Guid party, int overriddenInitialPlayTime = -1)`

**Purpose:** Adds `or update player entry` to the current collection or state.

### TryGetPlayerEntry
`public bool TryGetPlayerEntry(PlayerId playerId, out BattlePlayerEntry battlePlayerEntry)`

**Purpose:** Attempts to get `get player entry`, usually returning the result in an out parameter.

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerId)`

**Purpose:** Handles the `player disconnect` event or callback.

### DebugPrint
`public void DebugPrint()`

**Purpose:** Handles logic related to `debug print`.

### SetBattleFinished
`public void SetBattleFinished(int winnerTeamNo, bool isPremadeGame, PremadeGameType premadeGameType)`

**Purpose:** Sets the value or state of `battle finished`.

### SetBattleCancelled
`public void SetBattleCancelled()`

**Purpose:** Sets the value or state of `battle cancelled`.

## Usage Example

```csharp
var value = new BattleResult();
value.AddOrUpdatePlayerEntry(playerId, 0, "example", party, 0);
```

## See Also

- [Complete Class Catalog](../catalog)