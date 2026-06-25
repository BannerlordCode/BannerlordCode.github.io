---
title: "MPLobbyRankLeaderboardVM"
description: "Auto-generated class reference for MPLobbyRankLeaderboardVM."
---
# MPLobbyRankLeaderboardVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyRankLeaderboardVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyRankLeaderboardVM.cs`

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

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyRankLeaderboardVM from the subsystem API first
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.RefreshValues();
```

### OpenWith
`public async void OpenWith(string gameType)`

**Purpose:** **Purpose:** Opens the resource or UI associated with with.

```csharp
// Obtain an instance of MPLobbyRankLeaderboardVM from the subsystem API first
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.OpenWith("example");
```

### ExecuteLoadFirstPage
`public void ExecuteLoadFirstPage()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with load first page.

```csharp
// Obtain an instance of MPLobbyRankLeaderboardVM from the subsystem API first
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.ExecuteLoadFirstPage();
```

### ExecuteLoadPreviousPage
`public void ExecuteLoadPreviousPage()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with load previous page.

```csharp
// Obtain an instance of MPLobbyRankLeaderboardVM from the subsystem API first
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.ExecuteLoadPreviousPage();
```

### ExecuteLoadNextPage
`public void ExecuteLoadNextPage()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with load next page.

```csharp
// Obtain an instance of MPLobbyRankLeaderboardVM from the subsystem API first
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.ExecuteLoadNextPage();
```

### ExecuteLoadLastPage
`public void ExecuteLoadLastPage()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with load last page.

```csharp
// Obtain an instance of MPLobbyRankLeaderboardVM from the subsystem API first
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.ExecuteLoadLastPage();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close popup.

```csharp
// Obtain an instance of MPLobbyRankLeaderboardVM from the subsystem API first
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.ExecuteClosePopup();
```

### ActivatePlayerActions
`public void ActivatePlayerActions(MPLobbyLeaderboardPlayerItemVM playerVM)`

**Purpose:** **Purpose:** Activates the resource, state, or feature associated with player actions.

```csharp
// Obtain an instance of MPLobbyRankLeaderboardVM from the subsystem API first
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.ActivatePlayerActions(playerVM);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPLobbyRankLeaderboardVM from the subsystem API first
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyRankLeaderboardVM from the subsystem API first
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.SetCancelInputKey(hotKey);
```

### SetPreviousInputKey
`public void SetPreviousInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to previous input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyRankLeaderboardVM from the subsystem API first
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.SetPreviousInputKey(hotKey);
```

### SetNextInputKey
`public void SetNextInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to next input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyRankLeaderboardVM from the subsystem API first
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.SetNextInputKey(hotKey);
```

### SetFirstInputKey
`public void SetFirstInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to first input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyRankLeaderboardVM from the subsystem API first
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.SetFirstInputKey(hotKey);
```

### SetLastInputKey
`public void SetLastInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to last input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyRankLeaderboardVM from the subsystem API first
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.SetLastInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.RefreshValues();
```

## See Also

- [Area Index](../)