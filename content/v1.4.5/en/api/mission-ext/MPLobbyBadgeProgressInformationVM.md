---
title: "MPLobbyBadgeProgressInformationVM"
description: "Auto-generated class reference for MPLobbyBadgeProgressInformationVM."
---
# MPLobbyBadgeProgressInformationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBadgeProgressInformationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyBadgeProgressInformationVM.cs`

## Overview

`MPLobbyBadgeProgressInformationVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey { get; set; }` |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey { get; set; }` |
| `ShownBadgeCount` | `public int ShownBadgeCount { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CanIncreaseBadgeIndices` | `public bool CanIncreaseBadgeIndices { get; set; }` |
| `CanDecreaseBadgeIndices` | `public bool CanDecreaseBadgeIndices { get; set; }` |
| `ClickToCloseText` | `public string ClickToCloseText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `BadgeGroup` | `public MPLobbyAchievementBadgeGroupVM BadgeGroup { get; set; }` |
| `AvailableBadgeIDs` | `public MBBindingList<StringPairItemVM> AvailableBadgeIDs { get; set; }` |

## Key Methods

### OpenWith
`public void OpenWith(MPLobbyAchievementBadgeGroupVM badgeGroup)`

**Purpose:** **Purpose:** Opens the resource or UI associated with with.

```csharp
// Obtain an instance of MPLobbyBadgeProgressInformationVM from the subsystem API first
MPLobbyBadgeProgressInformationVM mPLobbyBadgeProgressInformationVM = ...;
mPLobbyBadgeProgressInformationVM.OpenWith(badgeGroup);
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close popup.

```csharp
// Obtain an instance of MPLobbyBadgeProgressInformationVM from the subsystem API first
MPLobbyBadgeProgressInformationVM mPLobbyBadgeProgressInformationVM = ...;
mPLobbyBadgeProgressInformationVM.ExecuteClosePopup();
```

### ExecuteIncreaseActiveBadgeIndices
`public void ExecuteIncreaseActiveBadgeIndices()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with increase active badge indices.

```csharp
// Obtain an instance of MPLobbyBadgeProgressInformationVM from the subsystem API first
MPLobbyBadgeProgressInformationVM mPLobbyBadgeProgressInformationVM = ...;
mPLobbyBadgeProgressInformationVM.ExecuteIncreaseActiveBadgeIndices();
```

### ExecuteDecreaseActiveBadgeIndices
`public void ExecuteDecreaseActiveBadgeIndices()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with decrease active badge indices.

```csharp
// Obtain an instance of MPLobbyBadgeProgressInformationVM from the subsystem API first
MPLobbyBadgeProgressInformationVM mPLobbyBadgeProgressInformationVM = ...;
mPLobbyBadgeProgressInformationVM.ExecuteDecreaseActiveBadgeIndices();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPLobbyBadgeProgressInformationVM from the subsystem API first
MPLobbyBadgeProgressInformationVM mPLobbyBadgeProgressInformationVM = ...;
mPLobbyBadgeProgressInformationVM.OnFinalize();
```

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to previous tab input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyBadgeProgressInformationVM from the subsystem API first
MPLobbyBadgeProgressInformationVM mPLobbyBadgeProgressInformationVM = ...;
mPLobbyBadgeProgressInformationVM.SetPreviousTabInputKey(hotKey);
```

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to next tab input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyBadgeProgressInformationVM from the subsystem API first
MPLobbyBadgeProgressInformationVM mPLobbyBadgeProgressInformationVM = ...;
mPLobbyBadgeProgressInformationVM.SetNextTabInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyBadgeProgressInformationVM mPLobbyBadgeProgressInformationVM = ...;
mPLobbyBadgeProgressInformationVM.OpenWith(badgeGroup);
```

## See Also

- [Area Index](../)