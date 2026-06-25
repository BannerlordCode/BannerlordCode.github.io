---
title: "MPLobbyBadgeSelectionPopupVM"
description: "Auto-generated class reference for MPLobbyBadgeSelectionPopupVM."
---
# MPLobbyBadgeSelectionPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBadgeSelectionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyBadgeSelectionPopupVM.cs`

## Overview

`MPLobbyBadgeSelectionPopupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveNotifications` | `public List<LobbyNotification> ActiveNotifications { get; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `HasNotifications` | `public bool HasNotifications { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `BadgesText` | `public string BadgesText { get; set; }` |
| `SpecialBadgesText` | `public string SpecialBadgesText { get; set; }` |
| `AchievementBadgesText` | `public string AchievementBadgesText { get; set; }` |
| `Badges` | `public MBBindingList<MPLobbyBadgeItemVM> Badges { get; set; }` |
| `AchivementBadgeGroups` | `public MBBindingList<MPLobbyAchievementBadgeGroupVM> AchivementBadgeGroups { get; set; }` |
| `InspectedBadge` | `public MPLobbyBadgeItemVM InspectedBadge { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyBadgeSelectionPopupVM from the subsystem API first
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.RefreshValues();
```

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**Purpose:** Keeps the display or cache of `player data` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyBadgeSelectionPopupVM from the subsystem API first
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.RefreshPlayerData(playerData);
```

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey inspectProgressKey)`

**Purpose:** Keeps the display or cache of `key bindings` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyBadgeSelectionPopupVM from the subsystem API first
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.RefreshKeyBindings(inspectProgressKey);
```

### UpdateBadges
`public async void UpdateBadges(bool shouldClear = false)`

**Purpose:** Recalculates and stores the latest representation of `badges`.

```csharp
// Obtain an instance of MPLobbyBadgeSelectionPopupVM from the subsystem API first
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.UpdateBadges(false);
```

### UpdateBadgeSelection
`public void UpdateBadgeSelection()`

**Purpose:** Recalculates and stores the latest representation of `badge selection`.

```csharp
// Obtain an instance of MPLobbyBadgeSelectionPopupVM from the subsystem API first
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.UpdateBadgeSelection();
```

### OnNotificationReceived
`public void OnNotificationReceived(LobbyNotification notification)`

**Purpose:** Invoked when the `notification received` event is raised.

```csharp
// Obtain an instance of MPLobbyBadgeSelectionPopupVM from the subsystem API first
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.OnNotificationReceived(notification);
```

### OnBadgeInspected
`public void OnBadgeInspected(MPLobbyBadgeItemVM badge)`

**Purpose:** Invoked when the `badge inspected` event is raised.

```csharp
// Obtain an instance of MPLobbyBadgeSelectionPopupVM from the subsystem API first
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.OnBadgeInspected(badge);
```

### Open
`public void Open()`

**Purpose:** Opens the resource or UI represented by the current object.

```csharp
// Obtain an instance of MPLobbyBadgeSelectionPopupVM from the subsystem API first
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.Open();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Runs the operation or workflow associated with `close popup`.

```csharp
// Obtain an instance of MPLobbyBadgeSelectionPopupVM from the subsystem API first
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.ExecuteClosePopup();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MPLobbyBadgeSelectionPopupVM from the subsystem API first
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `cancel input key` and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyBadgeSelectionPopupVM from the subsystem API first
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.SetCancelInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.RefreshValues();
```

## See Also

- [Area Index](../)