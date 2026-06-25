---
title: "MPLobbyHomeVM"
description: "Auto-generated class reference for MPLobbyHomeVM."
---
# MPLobbyHomeVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyHomeVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home/MPLobbyHomeVM.cs`

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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyHomeVM from the subsystem API first
MPLobbyHomeVM mPLobbyHomeVM = ...;
mPLobbyHomeVM.RefreshValues();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of MPLobbyHomeVM from the subsystem API first
MPLobbyHomeVM mPLobbyHomeVM = ...;
mPLobbyHomeVM.OnTick(0);
```

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData, bool updateRating = true)`

**Purpose:** Keeps the display or cache of `player data` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyHomeVM from the subsystem API first
MPLobbyHomeVM mPLobbyHomeVM = ...;
mPLobbyHomeVM.RefreshPlayerData(playerData, false);
```

### OnMatchSelectionChanged
`public void OnMatchSelectionChanged(string selectionInfo, bool isMatchFindPossible)`

**Purpose:** Invoked when the `match selection changed` event is raised.

```csharp
// Obtain an instance of MPLobbyHomeVM from the subsystem API first
MPLobbyHomeVM mPLobbyHomeVM = ...;
mPLobbyHomeVM.OnMatchSelectionChanged("example", false);
```

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**Purpose:** Invoked when the `clan info changed` event is raised.

```csharp
// Obtain an instance of MPLobbyHomeVM from the subsystem API first
MPLobbyHomeVM mPLobbyHomeVM = ...;
mPLobbyHomeVM.OnClanInfoChanged();
```

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**Purpose:** Invoked when the `player name updated` event is raised.

```csharp
// Obtain an instance of MPLobbyHomeVM from the subsystem API first
MPLobbyHomeVM mPLobbyHomeVM = ...;
mPLobbyHomeVM.OnPlayerNameUpdated("example");
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MPLobbyHomeVM from the subsystem API first
MPLobbyHomeVM mPLobbyHomeVM = ...;
mPLobbyHomeVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyHomeVM mPLobbyHomeVM = ...;
mPLobbyHomeVM.RefreshValues();
```

## See Also

- [Area Index](../)