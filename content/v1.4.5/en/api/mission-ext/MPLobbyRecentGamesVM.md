---
title: "MPLobbyRecentGamesVM"
description: "Auto-generated class reference for MPLobbyRecentGamesVM."
---
# MPLobbyRecentGamesVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyRecentGamesVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyRecentGamesVM.cs`

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

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyRecentGamesVM from the subsystem API first
MPLobbyRecentGamesVM mPLobbyRecentGamesVM = ...;
mPLobbyRecentGamesVM.RefreshValues();
```

### RefreshData
`public void RefreshData(MBReadOnlyList<MatchHistoryData> matches)`

**Purpose:** **Purpose:** Keeps the display or cache of data in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyRecentGamesVM from the subsystem API first
MPLobbyRecentGamesVM mPLobbyRecentGamesVM = ...;
mPLobbyRecentGamesVM.RefreshData(matches);
```

### ActivatePlayerActions
`public void ActivatePlayerActions(MPLobbyRecentGamePlayerItemVM playerVM)`

**Purpose:** **Purpose:** Activates the resource, state, or feature associated with player actions.

```csharp
// Obtain an instance of MPLobbyRecentGamesVM from the subsystem API first
MPLobbyRecentGamesVM mPLobbyRecentGamesVM = ...;
mPLobbyRecentGamesVM.ActivatePlayerActions(playerVM);
```

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with open popup.

```csharp
// Obtain an instance of MPLobbyRecentGamesVM from the subsystem API first
MPLobbyRecentGamesVM mPLobbyRecentGamesVM = ...;
mPLobbyRecentGamesVM.ExecuteOpenPopup();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close popup.

```csharp
// Obtain an instance of MPLobbyRecentGamesVM from the subsystem API first
MPLobbyRecentGamesVM mPLobbyRecentGamesVM = ...;
mPLobbyRecentGamesVM.ExecuteClosePopup();
```

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**Purpose:** **Purpose:** Invoked when the friend list updated event is raised.

```csharp
// Obtain an instance of MPLobbyRecentGamesVM from the subsystem API first
MPLobbyRecentGamesVM mPLobbyRecentGamesVM = ...;
mPLobbyRecentGamesVM.OnFriendListUpdated(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyRecentGamesVM mPLobbyRecentGamesVM = ...;
mPLobbyRecentGamesVM.RefreshValues();
```

## See Also

- [Area Index](../)