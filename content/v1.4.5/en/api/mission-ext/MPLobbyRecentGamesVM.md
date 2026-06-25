---
title: "MPLobbyRecentGamesVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyRecentGamesVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyRecentGamesVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyRecentGamesVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyRecentGamesVM.cs`

## Overview

`MPLobbyRecentGamesVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `GotItems` | `public bool GotItems { get; set; }` |
| `IsPlayerActionsActive` | `public bool IsPlayerActionsActive { get; set; }` |
| `RecentGamesText` | `public string RecentGamesText { get; set; }` |
| `NoRecentGamesFoundText` | `public string NoRecentGamesFoundText { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `PlayerActions` | `public MBBindingList<StringPairItemWithActionVM> PlayerActions { get; set; }` |
| `Games` | `public MBBindingList<MPLobbyRecentGameItemVM> Games { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshData
`public void RefreshData(MBReadOnlyList<MatchHistoryData> matches)`

**Purpose:** Refreshes the display or cache of `data`.

### ActivatePlayerActions
`public void ActivatePlayerActions(MPLobbyRecentGamePlayerItemVM playerVM)`

**Purpose:** Handles logic related to `activate player actions`.

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** Executes the `open popup` operation or workflow.

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Executes the `close popup` operation or workflow.

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**Purpose:** Called when the `friend list updated` event is raised.

## Usage Example

```csharp
var value = new MPLobbyRecentGamesVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)