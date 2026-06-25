---
title: "MPLobbyPlayerProfileVM"
description: "Auto-generated class reference for MPLobbyPlayerProfileVM."
---
# MPLobbyPlayerProfileVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPlayerProfileVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyPlayerProfileVM.cs`

## Overview

`MPLobbyPlayerProfileVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDataLoading` | `public bool IsDataLoading { get; set; }` |
| `StatsTitleText` | `public string StatsTitleText { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `Player` | `public MPLobbyPlayerBaseVM Player { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyPlayerProfileVM from the subsystem API first
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPLobbyPlayerProfileVM from the subsystem API first
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.OnFinalize();
```

### SetPlayerID
`public async void SetPlayerID(PlayerId playerID)`

**Purpose:** Assigns a new value to player i d and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyPlayerProfileVM from the subsystem API first
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.SetPlayerID(playerID);
```

### OpenWith
`public void OpenWith(PlayerId playerID)`

**Purpose:** Opens the resource or UI associated with with.

```csharp
// Obtain an instance of MPLobbyPlayerProfileVM from the subsystem API first
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.OpenWith(playerID);
```

### UpdatePlayerData
`public void UpdatePlayerData(PlayerData playerData, bool updateStatistics = false, bool updateRating = false)`

**Purpose:** Recalculates and stores the latest representation of player data.

```csharp
// Obtain an instance of MPLobbyPlayerProfileVM from the subsystem API first
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.UpdatePlayerData(playerData, false, false);
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Runs the operation or workflow associated with close popup.

```csharp
// Obtain an instance of MPLobbyPlayerProfileVM from the subsystem API first
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.ExecuteClosePopup();
```

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**Purpose:** Invoked when the clan info changed event is raised.

```csharp
// Obtain an instance of MPLobbyPlayerProfileVM from the subsystem API first
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.OnClanInfoChanged();
```

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**Purpose:** Invoked when the player name updated event is raised.

```csharp
// Obtain an instance of MPLobbyPlayerProfileVM from the subsystem API first
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.OnPlayerNameUpdated("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.RefreshValues();
```

## See Also

- [Area Index](../)