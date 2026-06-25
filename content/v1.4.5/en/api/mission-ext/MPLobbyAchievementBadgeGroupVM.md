---
title: "MPLobbyAchievementBadgeGroupVM"
description: "Auto-generated class reference for MPLobbyAchievementBadgeGroupVM."
---
# MPLobbyAchievementBadgeGroupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyAchievementBadgeGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyAchievementBadgeGroupVM.cs`

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

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyAchievementBadgeGroupVM from the subsystem API first
MPLobbyAchievementBadgeGroupVM mPLobbyAchievementBadgeGroupVM = ...;
mPLobbyAchievementBadgeGroupVM.RefreshValues();
```

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey inspectProgressKey)`

**Purpose:** Keeps the display or cache of key bindings in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyAchievementBadgeGroupVM from the subsystem API first
MPLobbyAchievementBadgeGroupVM mPLobbyAchievementBadgeGroupVM = ...;
mPLobbyAchievementBadgeGroupVM.RefreshKeyBindings(inspectProgressKey);
```

### OnGroupBadgeAdded
`public void OnGroupBadgeAdded(MPLobbyBadgeItemVM badgeItem)`

**Purpose:** Invoked when the group badge added event is raised.

```csharp
// Obtain an instance of MPLobbyAchievementBadgeGroupVM from the subsystem API first
MPLobbyAchievementBadgeGroupVM mPLobbyAchievementBadgeGroupVM = ...;
mPLobbyAchievementBadgeGroupVM.OnGroupBadgeAdded(badgeItem);
```

### UpdateBadgeSelection
`public void UpdateBadgeSelection()`

**Purpose:** Recalculates and stores the latest representation of badge selection.

```csharp
// Obtain an instance of MPLobbyAchievementBadgeGroupVM from the subsystem API first
MPLobbyAchievementBadgeGroupVM mPLobbyAchievementBadgeGroupVM = ...;
mPLobbyAchievementBadgeGroupVM.UpdateBadgeSelection();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyAchievementBadgeGroupVM mPLobbyAchievementBadgeGroupVM = ...;
mPLobbyAchievementBadgeGroupVM.RefreshValues();
```

## See Also

- [Area Index](../)