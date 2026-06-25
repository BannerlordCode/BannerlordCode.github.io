---
title: "MPLobbyAchievementBadgeGroupVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyAchievementBadgeGroupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyAchievementBadgeGroupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyAchievementBadgeGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyAchievementBadgeGroupVM.cs`

## Overview

`MPLobbyAchievementBadgeGroupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsProgressComplete` | `public bool IsProgressComplete { get; set; }` |
| `ProgressCompletedText` | `public string ProgressCompletedText { get; set; }` |
| `CurrentProgress` | `public int CurrentProgress { get; set; }` |
| `TotalProgress` | `public int TotalProgress { get; set; }` |
| `ShownBadgeItem` | `public MPLobbyBadgeItemVM ShownBadgeItem { get; set; }` |
| `Badges` | `public MBBindingList<MPLobbyBadgeItemVM> Badges { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey inspectProgressKey)`

**Purpose:** Refreshes the display or cache of `key bindings`.

### OnGroupBadgeAdded
`public void OnGroupBadgeAdded(MPLobbyBadgeItemVM badgeItem)`

**Purpose:** Called when the `group badge added` event is raised.

### UpdateBadgeSelection
`public void UpdateBadgeSelection()`

**Purpose:** Updates the state or data of `badge selection`.

## Usage Example

```csharp
var value = new MPLobbyAchievementBadgeGroupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)