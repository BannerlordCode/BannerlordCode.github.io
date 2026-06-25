---
title: "MPLobbyGameSearchVM"
description: "Auto-generated class reference for MPLobbyGameSearchVM."
---
# MPLobbyGameSearchVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyGameSearchVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyGameSearchVM.cs`

## Overview

`MPLobbyGameSearchVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CustomGameMode` | `public MPCustomGameVM.CustomGameMode CustomGameMode { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CanEnterPracticeBattle` | `public bool CanEnterPracticeBattle { get; set; }` |
| `CanCancelSearch` | `public bool CanCancelSearch { get; set; }` |
| `ShowStats` | `public bool ShowStats { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `GameTypesText` | `public string GameTypesText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `PracticeText` | `public string PracticeText { get; set; }` |
| `AverageWaitingTime` | `public string AverageWaitingTime { get; set; }` |
| `AverageWaitingTimeDescription` | `public string AverageWaitingTimeDescription { get; set; }` |
| `CurrentWaitingTime` | `public string CurrentWaitingTime { get; set; }` |
| `CurrentWaitingTimeDescription` | `public string CurrentWaitingTimeDescription { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyGameSearchVM from the subsystem API first
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.RefreshValues();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of MPLobbyGameSearchVM from the subsystem API first
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.OnTick(0);
```

### SetEnabled
`public void SetEnabled(bool enabled)`

**Purpose:** Assigns a new value to `enabled` and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyGameSearchVM from the subsystem API first
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.SetEnabled(false);
```

### UpdateData
`public void UpdateData(MatchmakingWaitTimeStats matchmakingWaitTimeStats, string gameTypeInfo)`

**Purpose:** Recalculates and stores the latest representation of `data`.

```csharp
// Obtain an instance of MPLobbyGameSearchVM from the subsystem API first
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.UpdateData(matchmakingWaitTimeStats, "example");
```

### UpdatePremadeGameData
`public void UpdatePremadeGameData()`

**Purpose:** Recalculates and stores the latest representation of `premade game data`.

```csharp
// Obtain an instance of MPLobbyGameSearchVM from the subsystem API first
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.UpdatePremadeGameData();
```

### OnJoinPremadeGameRequestSuccessful
`public void OnJoinPremadeGameRequestSuccessful()`

**Purpose:** Invoked when the `join premade game request successful` event is raised.

```csharp
// Obtain an instance of MPLobbyGameSearchVM from the subsystem API first
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.OnJoinPremadeGameRequestSuccessful();
```

### OnRequestedToCancelSearchBattle
`public void OnRequestedToCancelSearchBattle()`

**Purpose:** Invoked when the `requested to cancel search battle` event is raised.

```csharp
// Obtain an instance of MPLobbyGameSearchVM from the subsystem API first
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.OnRequestedToCancelSearchBattle();
```

### UpdateCanCancel
`public void UpdateCanCancel()`

**Purpose:** Recalculates and stores the latest representation of `can cancel`.

```csharp
// Obtain an instance of MPLobbyGameSearchVM from the subsystem API first
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.UpdateCanCancel();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.RefreshValues();
```

## See Also

- [Area Index](../)