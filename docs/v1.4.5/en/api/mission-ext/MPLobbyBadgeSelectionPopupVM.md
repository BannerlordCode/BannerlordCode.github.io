<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyBadgeSelectionPopupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyBadgeSelectionPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBadgeSelectionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyBadgeSelectionPopupVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**Purpose:** Refreshes the display or cache of `player data`.

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey inspectProgressKey)`

**Purpose:** Refreshes the display or cache of `key bindings`.

### UpdateBadges
`public async void UpdateBadges(bool shouldClear = false)`

**Purpose:** Updates the state or data of `badges`.

### UpdateBadgeSelection
`public void UpdateBadgeSelection()`

**Purpose:** Updates the state or data of `badge selection`.

### OnNotificationReceived
`public void OnNotificationReceived(LobbyNotification notification)`

**Purpose:** Called when the `notification received` event is raised.

### OnBadgeInspected
`public void OnBadgeInspected(MPLobbyBadgeItemVM badge)`

**Purpose:** Called when the `badge inspected` event is raised.

### Open
`public void Open()`

**Purpose:** Handles logic related to `open`.

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Executes the `close popup` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

## Usage Example

```csharp
var value = new MPLobbyBadgeSelectionPopupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)