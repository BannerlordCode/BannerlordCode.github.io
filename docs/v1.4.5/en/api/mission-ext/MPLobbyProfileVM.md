<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyProfileVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyProfileVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyProfileVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyProfileVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### RefreshRecentGames
`public void RefreshRecentGames(MBReadOnlyList<MatchHistoryData> recentGames)`

**Purpose:** Refreshes the display or cache of `recent games`.

### OnMatchSelectionChanged
`public void OnMatchSelectionChanged(string selectionInfo, bool isMatchFindPossible)`

**Purpose:** Called when the `match selection changed` event is raised.

### UpdatePlayerData
`public void UpdatePlayerData(PlayerData playerData, bool updateStatistics = true, bool updateRating = true)`

**Purpose:** Updates the state or data of `player data`.

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**Purpose:** Called when the `player name updated` event is raised.

### OnNotificationReceived
`public void OnNotificationReceived(LobbyNotification notification)`

**Purpose:** Called when the `notification received` event is raised.

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**Purpose:** Called when the `clan info changed` event is raised.

## Usage Example

```csharp
var value = new MPLobbyProfileVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)