---
title: "MPLobbyProfileVM"
description: "Auto-generated class reference for MPLobbyProfileVM."
---
# MPLobbyProfileVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyProfileVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyProfileVM.cs`

## Overview

`MPLobbyProfileVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMatchFindPossible` | `public bool IsMatchFindPossible { get; set; }` |
| `HasUnofficialModulesLoaded` | `public bool HasUnofficialModulesLoaded { get; set; }` |
| `ShowMoreText` | `public string ShowMoreText { get; set; }` |
| `FindGameText` | `public string FindGameText { get; set; }` |
| `MatchFindNotPossibleText` | `public string MatchFindNotPossibleText { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `SelectionInfoText` | `public string SelectionInfoText { get; set; }` |
| `RecentGamesTitleText` | `public string RecentGamesTitleText { get; set; }` |
| `HasBadgeNotification` | `public bool HasBadgeNotification { get; set; }` |
| `RecentGamesSummary` | `public MBBindingList<MPLobbyRecentGameItemVM> RecentGamesSummary { get; set; }` |
| `PlayerInfo` | `public MPLobbyPlayerProfileVM PlayerInfo { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyProfileVM from the subsystem API first
MPLobbyProfileVM mPLobbyProfileVM = ...;
mPLobbyProfileVM.RefreshValues();
```

### RefreshRecentGames
`public void RefreshRecentGames(MBReadOnlyList<MatchHistoryData> recentGames)`

**Purpose:** Keeps the display or cache of recent games in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyProfileVM from the subsystem API first
MPLobbyProfileVM mPLobbyProfileVM = ...;
mPLobbyProfileVM.RefreshRecentGames(recentGames);
```

### OnMatchSelectionChanged
`public void OnMatchSelectionChanged(string selectionInfo, bool isMatchFindPossible)`

**Purpose:** Invoked when the match selection changed event is raised.

```csharp
// Obtain an instance of MPLobbyProfileVM from the subsystem API first
MPLobbyProfileVM mPLobbyProfileVM = ...;
mPLobbyProfileVM.OnMatchSelectionChanged("example", false);
```

### UpdatePlayerData
`public void UpdatePlayerData(PlayerData playerData, bool updateStatistics = true, bool updateRating = true)`

**Purpose:** Recalculates and stores the latest representation of player data.

```csharp
// Obtain an instance of MPLobbyProfileVM from the subsystem API first
MPLobbyProfileVM mPLobbyProfileVM = ...;
mPLobbyProfileVM.UpdatePlayerData(playerData, false, false);
```

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**Purpose:** Invoked when the player name updated event is raised.

```csharp
// Obtain an instance of MPLobbyProfileVM from the subsystem API first
MPLobbyProfileVM mPLobbyProfileVM = ...;
mPLobbyProfileVM.OnPlayerNameUpdated("example");
```

### OnNotificationReceived
`public void OnNotificationReceived(LobbyNotification notification)`

**Purpose:** Invoked when the notification received event is raised.

```csharp
// Obtain an instance of MPLobbyProfileVM from the subsystem API first
MPLobbyProfileVM mPLobbyProfileVM = ...;
mPLobbyProfileVM.OnNotificationReceived(notification);
```

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**Purpose:** Invoked when the clan info changed event is raised.

```csharp
// Obtain an instance of MPLobbyProfileVM from the subsystem API first
MPLobbyProfileVM mPLobbyProfileVM = ...;
mPLobbyProfileVM.OnClanInfoChanged();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyProfileVM mPLobbyProfileVM = ...;
mPLobbyProfileVM.RefreshValues();
```

## See Also

- [Area Index](../)