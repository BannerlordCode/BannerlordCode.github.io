---
title: "BattleResult"
description: "Auto-generated class reference for BattleResult."
---
# BattleResult

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleResult`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/BattleResult.cs`

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

**Purpose:** **Purpose:** Adds or update player entry to the current collection or state.

```csharp
// Obtain an instance of BattleResult from the subsystem API first
BattleResult battleResult = ...;
battleResult.AddOrUpdatePlayerEntry(playerId, 0, "example", party, 0);
```

### TryGetPlayerEntry
`public bool TryGetPlayerEntry(PlayerId playerId, out BattlePlayerEntry battlePlayerEntry)`

**Purpose:** **Purpose:** Attempts to retrieve get player entry, usually returning success through an out parameter.

```csharp
// Obtain an instance of BattleResult from the subsystem API first
BattleResult battleResult = ...;
var result = battleResult.TryGetPlayerEntry(playerId, battlePlayerEntry);
```

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerId)`

**Purpose:** **Purpose:** Executes the response logic associated with player disconnect.

```csharp
// Obtain an instance of BattleResult from the subsystem API first
BattleResult battleResult = ...;
battleResult.HandlePlayerDisconnect(playerId);
```

### DebugPrint
`public void DebugPrint()`

**Purpose:** **Purpose:** Executes the DebugPrint logic.

```csharp
// Obtain an instance of BattleResult from the subsystem API first
BattleResult battleResult = ...;
battleResult.DebugPrint();
```

### SetBattleFinished
`public void SetBattleFinished(int winnerTeamNo, bool isPremadeGame, PremadeGameType premadeGameType)`

**Purpose:** **Purpose:** Assigns a new value to battle finished and updates the object's internal state.

```csharp
// Obtain an instance of BattleResult from the subsystem API first
BattleResult battleResult = ...;
battleResult.SetBattleFinished(0, false, premadeGameType);
```

### SetBattleCancelled
`public void SetBattleCancelled()`

**Purpose:** **Purpose:** Assigns a new value to battle cancelled and updates the object's internal state.

```csharp
// Obtain an instance of BattleResult from the subsystem API first
BattleResult battleResult = ...;
battleResult.SetBattleCancelled();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BattleResult battleResult = ...;
battleResult.AddOrUpdatePlayerEntry(playerId, 0, "example", party, 0);
```

## See Also

- [Area Index](../)