---
title: "MPLobbyPlayerProfileVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyPlayerProfileVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyPlayerProfileVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPlayerProfileVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyPlayerProfileVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetPlayerID
`public async void SetPlayerID(PlayerId playerID)`

**Purpose:** Sets the value or state of `player i d`.

### OpenWith
`public void OpenWith(PlayerId playerID)`

**Purpose:** Handles logic related to `open with`.

### UpdatePlayerData
`public void UpdatePlayerData(PlayerData playerData, bool updateStatistics = false, bool updateRating = false)`

**Purpose:** Updates the state or data of `player data`.

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Executes the `close popup` operation or workflow.

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**Purpose:** Called when the `clan info changed` event is raised.

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**Purpose:** Called when the `player name updated` event is raised.

## Usage Example

```csharp
var value = new MPLobbyPlayerProfileVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)