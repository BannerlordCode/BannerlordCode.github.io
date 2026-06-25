---
title: "MPLobbyClanLeaderboardVM"
description: "Auto-generated class reference for MPLobbyClanLeaderboardVM."
---
# MPLobbyClanLeaderboardVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanLeaderboardVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanLeaderboardVM.cs`

## Overview

`MPLobbyClanLeaderboardVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDataLoading` | `public bool IsDataLoading { get; set; }` |
| `LeaderboardText` | `public string LeaderboardText { get; set; }` |
| `ClansText` | `public string ClansText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `GamesWonText` | `public string GamesWonText { get; set; }` |
| `GamesLostText` | `public string GamesLostText { get; set; }` |
| `NextText` | `public string NextText { get; set; }` |
| `PreviousText` | `public string PreviousText { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `ClanItems` | `public MBBindingList<MPLobbyClanItemVM> ClanItems { get; set; }` |
| `SortController` | `public MPLobbyClanLeaderboardSortControllerVM SortController { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClanLeaderboardVM from the subsystem API first
MPLobbyClanLeaderboardVM mPLobbyClanLeaderboardVM = ...;
mPLobbyClanLeaderboardVM.RefreshValues();
```

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** Runs the operation or workflow associated with open popup.

```csharp
// Obtain an instance of MPLobbyClanLeaderboardVM from the subsystem API first
MPLobbyClanLeaderboardVM mPLobbyClanLeaderboardVM = ...;
mPLobbyClanLeaderboardVM.ExecuteOpenPopup();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Runs the operation or workflow associated with close popup.

```csharp
// Obtain an instance of MPLobbyClanLeaderboardVM from the subsystem API first
MPLobbyClanLeaderboardVM mPLobbyClanLeaderboardVM = ...;
mPLobbyClanLeaderboardVM.ExecuteClosePopup();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyClanLeaderboardVM mPLobbyClanLeaderboardVM = ...;
mPLobbyClanLeaderboardVM.RefreshValues();
```

## See Also

- [Area Index](../)