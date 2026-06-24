<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyGameSearchVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyGameSearchVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyGameSearchVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyGameSearchVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### SetEnabled
`public void SetEnabled(bool enabled)`

**Purpose:** Sets the value or state of `enabled`.

### UpdateData
`public void UpdateData(MatchmakingWaitTimeStats matchmakingWaitTimeStats, string gameTypeInfo)`

**Purpose:** Updates the state or data of `data`.

### UpdatePremadeGameData
`public void UpdatePremadeGameData()`

**Purpose:** Updates the state or data of `premade game data`.

### OnJoinPremadeGameRequestSuccessful
`public void OnJoinPremadeGameRequestSuccessful()`

**Purpose:** Called when the `join premade game request successful` event is raised.

### OnRequestedToCancelSearchBattle
`public void OnRequestedToCancelSearchBattle()`

**Purpose:** Called when the `requested to cancel search battle` event is raised.

### UpdateCanCancel
`public void UpdateCanCancel()`

**Purpose:** Updates the state or data of `can cancel`.

## Usage Example

```csharp
var value = new MPLobbyGameSearchVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)