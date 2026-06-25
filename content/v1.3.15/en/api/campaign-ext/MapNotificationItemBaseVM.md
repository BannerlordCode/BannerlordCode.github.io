---
title: "MapNotificationItemBaseVM"
description: "Auto-generated class reference for MapNotificationItemBaseVM."
---
# MapNotificationItemBaseVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapNotificationItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/MapNotificationItemBaseVM.cs`

## Overview

`MapNotificationItemBaseVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NavigationHandler` | `public INavigationHandler NavigationHandler { get; }` |
| `Data` | `public InformationData Data { get; }` |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `NotificationIdentifier` | `public string NotificationIdentifier { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ForceInspection` | `public bool ForceInspection { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `SoundId` | `public string SoundId { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MapNotificationItemBaseVM from the subsystem API first
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.RefreshValues();
```

### SetNavigationHandler
`public void SetNavigationHandler(INavigationHandler navigationHandler)`

**Purpose:** Assigns a new value to `navigation handler` and updates the object's internal state.

```csharp
// Obtain an instance of MapNotificationItemBaseVM from the subsystem API first
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.SetNavigationHandler(navigationHandler);
```

### SetFastMoveCameraToPosition
`public void SetFastMoveCameraToPosition(Action<CampaignVec2> fastMoveCameraToPosition)`

**Purpose:** Assigns a new value to `fast move camera to position` and updates the object's internal state.

```csharp
// Obtain an instance of MapNotificationItemBaseVM from the subsystem API first
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.SetFastMoveCameraToPosition(fastMoveCameraToPosition);
```

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Runs the operation or workflow associated with `action`.

```csharp
// Obtain an instance of MapNotificationItemBaseVM from the subsystem API first
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.ExecuteAction();
```

### ExecuteRemove
`public void ExecuteRemove()`

**Purpose:** Runs the operation or workflow associated with `remove`.

```csharp
// Obtain an instance of MapNotificationItemBaseVM from the subsystem API first
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.ExecuteRemove();
```

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**Purpose:** Runs the operation or workflow associated with `set focused`.

```csharp
// Obtain an instance of MapNotificationItemBaseVM from the subsystem API first
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.ExecuteSetFocused();
```

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**Purpose:** Runs the operation or workflow associated with `set unfocused`.

```csharp
// Obtain an instance of MapNotificationItemBaseVM from the subsystem API first
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.ExecuteSetUnfocused();
```

### ManualRefreshRelevantStatus
`public virtual void ManualRefreshRelevantStatus()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapNotificationItemBaseVM from the subsystem API first
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.ManualRefreshRelevantStatus();
```

### SetRemoveInputKey
`public void SetRemoveInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `remove input key` and updates the object's internal state.

```csharp
// Obtain an instance of MapNotificationItemBaseVM from the subsystem API first
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.SetRemoveInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.RefreshValues();
```

## See Also

- [Area Index](../)