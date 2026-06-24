<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyRecentGameItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyRecentGameItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyRecentGameItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyRecentGameItemVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### FillFrom
`public void FillFrom(MatchHistoryData match)`

**Purpose:** Handles logic related to `fill from`.

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**Purpose:** Called when the `friend list updated` event is raised.

## Usage Example

```csharp
var value = new MPLobbyRecentGameItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)