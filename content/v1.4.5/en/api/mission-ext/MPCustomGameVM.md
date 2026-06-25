---
title: "MPCustomGameVM"
description: "Auto-generated class reference for MPCustomGameVM."
---
# MPCustomGameVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPCustomGameVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame/MPCustomGameVM.cs`

## Overview

`MPCustomGameVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RefreshInputKey` | `public InputKeyItemVM RefreshInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsAnyGameSelected` | `public bool IsAnyGameSelected { get; set; }` |
| `IsCreateGamePanelActive` | `public bool IsCreateGamePanelActive { get; set; }` |
| `CanPlayerCreateGame` | `public bool CanPlayerCreateGame { get; set; }` |
| `IsJoinEnabled` | `public bool IsJoinEnabled { get; set; }` |
| `SelectedGame` | `public MPCustomGameItemVM SelectedGame { get; set; }` |
| `FiltersData` | `public MPCustomGameFiltersVM FiltersData { get; set; }` |
| `HostGame` | `public MPHostGameVM HostGame { get; set; }` |
| `SortController` | `public MPCustomGameSortControllerVM SortController { get; set; }` |
| `GameList` | `public MBBindingList<MPCustomGameItemVM> GameList { get; set; }` |
| `IsPasswordProtectedHint` | `public HintViewModel IsPasswordProtectedHint { get; set; }` |
| `IsRefreshing` | `public bool IsRefreshing { get; set; }` |
| `IsPartyLeader` | `public bool IsPartyLeader { get; set; }` |
| `IsInParty` | `public bool IsInParty { get; set; }` |
| `CreateServerText` | `public string CreateServerText { get; set; }` |
| `IsCustomServerActionsActive` | `public bool IsCustomServerActionsActive { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `RefreshText` | `public string RefreshText { get; set; }` |
| `JoinText` | `public string JoinText { get; set; }` |
| `ServerNameText` | `public string ServerNameText { get; set; }` |
| `GameTypeText` | `public string GameTypeText { get; set; }` |
| `MapText` | `public string MapText { get; set; }` |
| `PlayerCountText` | `public string PlayerCountText { get; set; }` |
| `PingText` | `public string PingText { get; set; }` |
| `PasswordText` | `public string PasswordText { get; set; }` |
| `FirstFactionText` | `public string FirstFactionText { get; set; }` |
| `SecondFactionText` | `public string SecondFactionText { get; set; }` |
| `RegionText` | `public string RegionText { get; set; }` |
| `PremadeMatchTypeText` | `public string PremadeMatchTypeText { get; set; }` |
| `HostText` | `public string HostText { get; set; }` |
| `IsPlayerBasedCustomBattleEnabled` | `public bool IsPlayerBasedCustomBattleEnabled { get; set; }` |
| `IsPremadeGameEnabled` | `public bool IsPremadeGameEnabled { get; set; }` |
| `CustomServerActionsList` | `public MBBindingList<StringPairItemWithActionVM> CustomServerActionsList { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPCustomGameVM from the subsystem API first
MPCustomGameVM mPCustomGameVM = ...;
mPCustomGameVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPCustomGameVM from the subsystem API first
MPCustomGameVM mPCustomGameVM = ...;
mPCustomGameVM.OnFinalize();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of MPCustomGameVM from the subsystem API first
MPCustomGameVM mPCustomGameVM = ...;
mPCustomGameVM.OnTick(0);
```

### SetPremadeGameList
`public void SetPremadeGameList(PremadeGameEntry entries)`

**Purpose:** **Purpose:** Assigns a new value to premade game list and updates the object's internal state.

```csharp
// Obtain an instance of MPCustomGameVM from the subsystem API first
MPCustomGameVM mPCustomGameVM = ...;
mPCustomGameVM.SetPremadeGameList(entries);
```

### SetCustomGameServerList
`public void SetCustomGameServerList(AvailableCustomGames availableCustomGames)`

**Purpose:** **Purpose:** Assigns a new value to custom game server list and updates the object's internal state.

```csharp
// Obtain an instance of MPCustomGameVM from the subsystem API first
MPCustomGameVM mPCustomGameVM = ...;
mPCustomGameVM.SetCustomGameServerList(availableCustomGames);
```

### ExecuteRefresh
`public async void ExecuteRefresh()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with refresh.

```csharp
// Obtain an instance of MPCustomGameVM from the subsystem API first
MPCustomGameVM mPCustomGameVM = ...;
mPCustomGameVM.ExecuteRefresh();
```

### ExecuteJoinSelectedGame
`public void ExecuteJoinSelectedGame()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with join selected game.

```csharp
// Obtain an instance of MPCustomGameVM from the subsystem API first
MPCustomGameVM mPCustomGameVM = ...;
mPCustomGameVM.ExecuteJoinSelectedGame();
```

### OnJoinGame
`public void OnJoinGame(MPCustomGameItemVM gameItem)`

**Purpose:** **Purpose:** Invoked when the join game event is raised.

```csharp
// Obtain an instance of MPCustomGameVM from the subsystem API first
MPCustomGameVM mPCustomGameVM = ...;
mPCustomGameVM.OnJoinGame(gameItem);
```

### ExecuteOpenCreateGamePanel
`public void ExecuteOpenCreateGamePanel()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with open create game panel.

```csharp
// Obtain an instance of MPCustomGameVM from the subsystem API first
MPCustomGameVM mPCustomGameVM = ...;
mPCustomGameVM.ExecuteOpenCreateGamePanel();
```

### ExecuteCloseCreateGamePanel
`public void ExecuteCloseCreateGamePanel()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close create game panel.

```csharp
// Obtain an instance of MPCustomGameVM from the subsystem API first
MPCustomGameVM mPCustomGameVM = ...;
mPCustomGameVM.ExecuteCloseCreateGamePanel();
```

### SetRefreshInputKey
`public void SetRefreshInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to refresh input key and updates the object's internal state.

```csharp
// Obtain an instance of MPCustomGameVM from the subsystem API first
MPCustomGameVM mPCustomGameVM = ...;
mPCustomGameVM.SetRefreshInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPCustomGameVM mPCustomGameVM = ...;
mPCustomGameVM.RefreshValues();
```

## See Also

- [Area Index](../)