<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyBadgeItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyBadgeItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBadgeItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyBadgeItemVM.cs`

## Overview

`MPLobbyBadgeItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Badge` | `public Badge Badge { get; }` |
| `Name` | `public string Name { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `BadgeConditionsText` | `public string BadgeConditionsText { get; set; }` |
| `Conditions` | `public MBBindingList<StringPairItemVM> Conditions { get; set; }` |
| `BadgeId` | `public string BadgeId { get; set; }` |
| `IsEarned` | `public bool IsEarned { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasNotification` | `public bool HasNotification { get; set; }` |
| `IsBeingChanged` | `public bool IsBeingChanged { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `InspectProgressKey` | `public InputKeyItemVM InspectProgressKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey inspectProgressKey)`

**Purpose:** Refreshes the display or cache of `key bindings`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### UpdateWith
`public void UpdateWith(Badge badge)`

**Purpose:** Updates the state or data of `with`.

### UpdateIsSelected
`public void UpdateIsSelected()`

**Purpose:** Updates the state or data of `is selected`.

### SetGroup
`public void SetGroup(MPLobbyAchievementBadgeGroupVM group, Action<MPLobbyAchievementBadgeGroupVM> onBadgeProgressInfoRequested)`

**Purpose:** Sets the value or state of `group`.

## Usage Example

```csharp
var value = new MPLobbyBadgeItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)