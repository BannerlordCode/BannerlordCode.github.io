<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyRankLeaderboardVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyRankLeaderboardVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyRankLeaderboardVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyRankLeaderboardVM.cs`

## Overview

`MPLobbyRankLeaderboardVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `PreviousInputKey` | `public InputKeyItemVM PreviousInputKey { get; set; }` |
| `NextInputKey` | `public InputKeyItemVM NextInputKey { get; set; }` |
| `FirstInputKey` | `public InputKeyItemVM FirstInputKey { get; set; }` |
| `LastInputKey` | `public InputKeyItemVM LastInputKey { get; set; }` |
| `CurrentPageIndex` | `public int CurrentPageIndex { get; set; }` |
| `TotalPageCount` | `public int TotalPageCount { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDataLoading` | `public bool IsDataLoading { get; set; }` |
| `HasData` | `public bool HasData { get; set; }` |
| `IsPlayerActionsActive` | `public bool IsPlayerActionsActive { get; set; }` |
| `IsPreviousPageAvailable` | `public bool IsPreviousPageAvailable { get; set; }` |
| `IsNextPageAvailable` | `public bool IsNextPageAvailable { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `NoDataAvailableText` | `public string NoDataAvailableText { get; set; }` |
| `CurrentPageText` | `public string CurrentPageText { get; set; }` |
| `LeaderboardPlayers` | `public MBBindingList<MPLobbyLeaderboardPlayerItemVM> LeaderboardPlayers { get; set; }` |
| `PlayerActions` | `public MBBindingList<StringPairItemWithActionVM> PlayerActions { get; set; }` |
| `PreviousPageHint` | `public HintViewModel PreviousPageHint { get; set; }` |
| `NextPageHint` | `public HintViewModel NextPageHint { get; set; }` |
| `FirstPageHint` | `public HintViewModel FirstPageHint { get; set; }` |
| `LastPageHint` | `public HintViewModel LastPageHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OpenWith
`public async void OpenWith(string gameType)`

**Purpose:** Handles logic related to `open with`.

### ExecuteLoadFirstPage
`public void ExecuteLoadFirstPage()`

**Purpose:** Executes the `load first page` operation or workflow.

### ExecuteLoadPreviousPage
`public void ExecuteLoadPreviousPage()`

**Purpose:** Executes the `load previous page` operation or workflow.

### ExecuteLoadNextPage
`public void ExecuteLoadNextPage()`

**Purpose:** Executes the `load next page` operation or workflow.

### ExecuteLoadLastPage
`public void ExecuteLoadLastPage()`

**Purpose:** Executes the `load last page` operation or workflow.

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Executes the `close popup` operation or workflow.

### ActivatePlayerActions
`public void ActivatePlayerActions(MPLobbyLeaderboardPlayerItemVM playerVM)`

**Purpose:** Handles logic related to `activate player actions`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetPreviousInputKey
`public void SetPreviousInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `previous input key`.

### SetNextInputKey
`public void SetNextInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `next input key`.

### SetFirstInputKey
`public void SetFirstInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `first input key`.

### SetLastInputKey
`public void SetLastInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `last input key`.

## Usage Example

```csharp
var value = new MPLobbyRankLeaderboardVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)