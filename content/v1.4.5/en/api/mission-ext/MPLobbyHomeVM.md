---
title: "MPLobbyHomeVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyHomeVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyHomeVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyHomeVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home/MPLobbyHomeVM.cs`

## Overview

`MPLobbyHomeVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsMatchFindPossible` | `public bool IsMatchFindPossible { get; set; }` |
| `HasUnofficialModulesLoaded` | `public bool HasUnofficialModulesLoaded { get; set; }` |
| `IsNewsAvailable` | `public bool IsNewsAvailable { get; set; }` |
| `FindGameText` | `public string FindGameText { get; set; }` |
| `MatchFindNotPossibleText` | `public string MatchFindNotPossibleText { get; set; }` |
| `SelectionInfoText` | `public string SelectionInfoText { get; set; }` |
| `OpenProfileText` | `public string OpenProfileText { get; set; }` |
| `Player` | `public MPLobbyPlayerBaseVM Player { get; set; }` |
| `News` | `public MPNewsVM News { get; set; }` |
| `Announcements` | `public MPAnnouncementsVM Announcements { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData, bool updateRating = true)`

**Purpose:** Refreshes the display or cache of `player data`.

### OnMatchSelectionChanged
`public void OnMatchSelectionChanged(string selectionInfo, bool isMatchFindPossible)`

**Purpose:** Called when the `match selection changed` event is raised.

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**Purpose:** Called when the `clan info changed` event is raised.

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**Purpose:** Called when the `player name updated` event is raised.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new MPLobbyHomeVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)