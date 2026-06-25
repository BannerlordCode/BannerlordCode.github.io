---
title: "MPLobbyClanVM"
description: "Auto-generated class reference for MPLobbyClanVM."
---
# MPLobbyClanVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanVM.cs`

## Overview

`MPLobbyClanVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `SelectedSubPageIndex` | `public int SelectedSubPageIndex { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `ClanOverview` | `public MPLobbyClanOverviewVM ClanOverview { get; set; }` |
| `ClanRoster` | `public MPLobbyClanRosterVM ClanRoster { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClanVM from the subsystem API first
MPLobbyClanVM mPLobbyClanVM = ...;
mPLobbyClanVM.RefreshValues();
```

### OnClanInfoChanged
`public async void OnClanInfoChanged()`

**Purpose:** **Purpose:** Invoked when the clan info changed event is raised.

```csharp
// Obtain an instance of MPLobbyClanVM from the subsystem API first
MPLobbyClanVM mPLobbyClanVM = ...;
mPLobbyClanVM.OnClanInfoChanged();
```

### TrySetClanSubPage
`public async void TrySetClanSubPage(ClanSubPages newPage)`

**Purpose:** **Purpose:** Attempts to retrieve set clan sub page, usually returning success through an out parameter.

```csharp
// Obtain an instance of MPLobbyClanVM from the subsystem API first
MPLobbyClanVM mPLobbyClanVM = ...;
mPLobbyClanVM.TrySetClanSubPage(newPage);
```

### OnNotificationReceived
`public void OnNotificationReceived(LobbyNotification notification)`

**Purpose:** **Purpose:** Invoked when the notification received event is raised.

```csharp
// Obtain an instance of MPLobbyClanVM from the subsystem API first
MPLobbyClanVM mPLobbyClanVM = ...;
mPLobbyClanVM.OnNotificationReceived(notification);
```

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**Purpose:** **Purpose:** Invoked when the player name updated event is raised.

```csharp
// Obtain an instance of MPLobbyClanVM from the subsystem API first
MPLobbyClanVM mPLobbyClanVM = ...;
mPLobbyClanVM.OnPlayerNameUpdated("example");
```

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with open popup.

```csharp
// Obtain an instance of MPLobbyClanVM from the subsystem API first
MPLobbyClanVM mPLobbyClanVM = ...;
mPLobbyClanVM.ExecuteOpenPopup();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close popup.

```csharp
// Obtain an instance of MPLobbyClanVM from the subsystem API first
MPLobbyClanVM mPLobbyClanVM = ...;
mPLobbyClanVM.ExecuteClosePopup();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyClanVM mPLobbyClanVM = ...;
mPLobbyClanVM.RefreshValues();
```

## See Also

- [Area Index](../)