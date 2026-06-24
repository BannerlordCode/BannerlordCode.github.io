<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyBadgeProgressInformationVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyBadgeProgressInformationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBadgeProgressInformationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyBadgeProgressInformationVM.cs`

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

**Purpose:** Handles logic related to `open with`.

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Executes the `close popup` operation or workflow.

### ExecuteIncreaseActiveBadgeIndices
`public void ExecuteIncreaseActiveBadgeIndices()`

**Purpose:** Executes the `increase active badge indices` operation or workflow.

### ExecuteDecreaseActiveBadgeIndices
`public void ExecuteDecreaseActiveBadgeIndices()`

**Purpose:** Executes the `decrease active badge indices` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `previous tab input key`.

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `next tab input key`.

## Usage Example

```csharp
var value = new MPLobbyBadgeProgressInformationVM();
value.OpenWith(badgeGroup);
```

## See Also

- [Complete Class Catalog](../catalog)