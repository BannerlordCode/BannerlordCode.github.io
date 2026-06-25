---
title: "MPLobbyBadgeItemVM"
description: "Auto-generated class reference for MPLobbyBadgeItemVM."
---
# MPLobbyBadgeItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBadgeItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyBadgeItemVM.cs`

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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyBadgeItemVM from the subsystem API first
MPLobbyBadgeItemVM mPLobbyBadgeItemVM = ...;
mPLobbyBadgeItemVM.RefreshValues();
```

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey inspectProgressKey)`

**Purpose:** Keeps the display or cache of `key bindings` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyBadgeItemVM from the subsystem API first
MPLobbyBadgeItemVM mPLobbyBadgeItemVM = ...;
mPLobbyBadgeItemVM.RefreshKeyBindings(inspectProgressKey);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MPLobbyBadgeItemVM from the subsystem API first
MPLobbyBadgeItemVM mPLobbyBadgeItemVM = ...;
mPLobbyBadgeItemVM.OnFinalize();
```

### UpdateWith
`public void UpdateWith(Badge badge)`

**Purpose:** Recalculates and stores the latest representation of `with`.

```csharp
// Obtain an instance of MPLobbyBadgeItemVM from the subsystem API first
MPLobbyBadgeItemVM mPLobbyBadgeItemVM = ...;
mPLobbyBadgeItemVM.UpdateWith(badge);
```

### UpdateIsSelected
`public void UpdateIsSelected()`

**Purpose:** Recalculates and stores the latest representation of `is selected`.

```csharp
// Obtain an instance of MPLobbyBadgeItemVM from the subsystem API first
MPLobbyBadgeItemVM mPLobbyBadgeItemVM = ...;
mPLobbyBadgeItemVM.UpdateIsSelected();
```

### SetGroup
`public void SetGroup(MPLobbyAchievementBadgeGroupVM group, Action<MPLobbyAchievementBadgeGroupVM> onBadgeProgressInfoRequested)`

**Purpose:** Assigns a new value to `group` and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyBadgeItemVM from the subsystem API first
MPLobbyBadgeItemVM mPLobbyBadgeItemVM = ...;
mPLobbyBadgeItemVM.SetGroup(group, onBadgeProgressInfoRequested);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyBadgeItemVM mPLobbyBadgeItemVM = ...;
mPLobbyBadgeItemVM.RefreshValues();
```

## See Also

- [Area Index](../)