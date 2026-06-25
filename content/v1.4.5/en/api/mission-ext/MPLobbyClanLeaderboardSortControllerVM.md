---
title: "MPLobbyClanLeaderboardSortControllerVM"
description: "Auto-generated class reference for MPLobbyClanLeaderboardSortControllerVM."
---
# MPLobbyClanLeaderboardSortControllerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanLeaderboardSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanLeaderboardSortControllerVM.cs`

## Overview

`MPLobbyClanLeaderboardSortControllerVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `WinState` | `public int WinState { get; set; }` |
| `LossState` | `public int LossState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsWinSelected` | `public bool IsWinSelected { get; set; }` |
| `IsLossSelected` | `public bool IsLossSelected { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAcending)`

**Purpose:** Assigns a new value to `sort mode` and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyClanLeaderboardSortControllerVM from the subsystem API first
MPLobbyClanLeaderboardSortControllerVM mPLobbyClanLeaderboardSortControllerVM = ...;
mPLobbyClanLeaderboardSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(ClanLeaderboardEntry x, ClanLeaderboardEntry y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of MPLobbyClanLeaderboardSortControllerVM from the subsystem API first
MPLobbyClanLeaderboardSortControllerVM mPLobbyClanLeaderboardSortControllerVM = ...;
var result = mPLobbyClanLeaderboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanLeaderboardEntry x, ClanLeaderboardEntry y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of MPLobbyClanLeaderboardSortControllerVM from the subsystem API first
MPLobbyClanLeaderboardSortControllerVM mPLobbyClanLeaderboardSortControllerVM = ...;
var result = mPLobbyClanLeaderboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanLeaderboardEntry x, ClanLeaderboardEntry y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of MPLobbyClanLeaderboardSortControllerVM from the subsystem API first
MPLobbyClanLeaderboardSortControllerVM mPLobbyClanLeaderboardSortControllerVM = ...;
var result = mPLobbyClanLeaderboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanLeaderboardEntry x, ClanLeaderboardEntry y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of MPLobbyClanLeaderboardSortControllerVM from the subsystem API first
MPLobbyClanLeaderboardSortControllerVM mPLobbyClanLeaderboardSortControllerVM = ...;
var result = mPLobbyClanLeaderboardSortControllerVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyClanLeaderboardSortControllerVM mPLobbyClanLeaderboardSortControllerVM = ...;
mPLobbyClanLeaderboardSortControllerVM.SetSortMode(false);
```

## See Also

- [Area Index](../)