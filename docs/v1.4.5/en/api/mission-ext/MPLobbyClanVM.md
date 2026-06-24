<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyClanVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClanVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnClanInfoChanged
`public async void OnClanInfoChanged()`

**Purpose:** Called when the `clan info changed` event is raised.

### TrySetClanSubPage
`public async void TrySetClanSubPage(ClanSubPages newPage)`

**Purpose:** Attempts to get `set clan sub page`, usually returning the result in an out parameter.

### OnNotificationReceived
`public void OnNotificationReceived(LobbyNotification notification)`

**Purpose:** Called when the `notification received` event is raised.

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**Purpose:** Called when the `player name updated` event is raised.

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** Executes the `open popup` operation or workflow.

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Executes the `close popup` operation or workflow.

## Usage Example

```csharp
var value = new MPLobbyClanVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)