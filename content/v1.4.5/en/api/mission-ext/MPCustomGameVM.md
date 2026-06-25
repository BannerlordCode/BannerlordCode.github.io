---
title: "MPCustomGameVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPCustomGameVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPCustomGameVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPCustomGameVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame/MPCustomGameVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### SetPremadeGameList
`public void SetPremadeGameList(PremadeGameEntry entries)`

**Purpose:** Sets the value or state of `premade game list`.

### SetCustomGameServerList
`public void SetCustomGameServerList(AvailableCustomGames availableCustomGames)`

**Purpose:** Sets the value or state of `custom game server list`.

### ExecuteRefresh
`public async void ExecuteRefresh()`

**Purpose:** Executes the `refresh` operation or workflow.

### ExecuteJoinSelectedGame
`public void ExecuteJoinSelectedGame()`

**Purpose:** Executes the `join selected game` operation or workflow.

### OnJoinGame
`public void OnJoinGame(MPCustomGameItemVM gameItem)`

**Purpose:** Called when the `join game` event is raised.

### ExecuteOpenCreateGamePanel
`public void ExecuteOpenCreateGamePanel()`

**Purpose:** Executes the `open create game panel` operation or workflow.

### ExecuteCloseCreateGamePanel
`public void ExecuteCloseCreateGamePanel()`

**Purpose:** Executes the `close create game panel` operation or workflow.

### SetRefreshInputKey
`public void SetRefreshInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `refresh input key`.

## Usage Example

```csharp
var value = new MPCustomGameVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)