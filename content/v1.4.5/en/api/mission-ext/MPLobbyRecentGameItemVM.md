---
title: "MPLobbyRecentGameItemVM"
description: "Auto-generated class reference for MPLobbyRecentGameItemVM."
---
# MPLobbyRecentGameItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyRecentGameItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyRecentGameItemVM.cs`

## Overview

`MPLobbyRecentGameItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MatchInfo` | `public MatchHistoryData MatchInfo { get; }` |
| `LastSeenPlayersText` | `public string LastSeenPlayersText { get; set; }` |
| `PlayersA` | `public MBBindingList<MPLobbyRecentGamePlayerItemVM> PlayersA { get; set; }` |
| `PlayersB` | `public MBBindingList<MPLobbyRecentGamePlayerItemVM> PlayersB { get; set; }` |
| `CultureA` | `public string CultureA { get; set; }` |
| `CultureB` | `public string CultureB { get; set; }` |
| `FactionNameA` | `public string FactionNameA { get; set; }` |
| `FactionNameB` | `public string FactionNameB { get; set; }` |
| `ScoreA` | `public string ScoreA { get; set; }` |
| `ScoreB` | `public string ScoreB { get; set; }` |
| `GameMode` | `public string GameMode { get; set; }` |
| `Date` | `public string Date { get; set; }` |
| `Seperator` | `public string Seperator { get; set; }` |
| `MatchResultIndex` | `public int MatchResultIndex { get; set; }` |
| `PlayerResultIndex` | `public int PlayerResultIndex { get; set; }` |
| `AbandonedHint` | `public HintViewModel AbandonedHint { get; set; }` |
| `WonHint` | `public HintViewModel WonHint { get; set; }` |
| `LostHint` | `public HintViewModel LostHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyRecentGameItemVM from the subsystem API first
MPLobbyRecentGameItemVM mPLobbyRecentGameItemVM = ...;
mPLobbyRecentGameItemVM.RefreshValues();
```

### FillFrom
`public void FillFrom(MatchHistoryData match)`

**Purpose:** Executes the FillFrom logic.

```csharp
// Obtain an instance of MPLobbyRecentGameItemVM from the subsystem API first
MPLobbyRecentGameItemVM mPLobbyRecentGameItemVM = ...;
mPLobbyRecentGameItemVM.FillFrom(match);
```

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**Purpose:** Invoked when the friend list updated event is raised.

```csharp
// Obtain an instance of MPLobbyRecentGameItemVM from the subsystem API first
MPLobbyRecentGameItemVM mPLobbyRecentGameItemVM = ...;
mPLobbyRecentGameItemVM.OnFriendListUpdated(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyRecentGameItemVM mPLobbyRecentGameItemVM = ...;
mPLobbyRecentGameItemVM.RefreshValues();
```

## See Also

- [Area Index](../)