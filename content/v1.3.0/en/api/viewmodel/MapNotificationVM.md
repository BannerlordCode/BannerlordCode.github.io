---
title: "MapNotificationVM"
description: "Auto-generated class reference for MapNotificationVM."
---
# MapNotificationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationVM.cs`

## Overview

`MapNotificationVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey { get; set; }` |
| `FocusedNotificationItem` | `public MapNotificationItemBaseVM FocusedNotificationItem { get; set; }` |
| `NotificationItems` | `public MBBindingList<MapNotificationItemBaseVM> NotificationItems { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MapNotificationVM from the subsystem API first
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.RefreshValues();
```

### RegisterMapNotificationType
`public void RegisterMapNotificationType(Type data, Type item)`

**Purpose:** Registers `map notification type` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of MapNotificationVM from the subsystem API first
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.RegisterMapNotificationType(data, item);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MapNotificationVM from the subsystem API first
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.OnFinalize();
```

### OnFrameTick
`public void OnFrameTick(float dt)`

**Purpose:** Invoked when the `frame tick` event is raised.

```csharp
// Obtain an instance of MapNotificationVM from the subsystem API first
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.OnFrameTick(0);
```

### OnMenuModeTick
`public void OnMenuModeTick(float dt)`

**Purpose:** Invoked when the `menu mode tick` event is raised.

```csharp
// Obtain an instance of MapNotificationVM from the subsystem API first
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.OnMenuModeTick(0);
```

### AddMapNotification
`public void AddMapNotification(InformationData data)`

**Purpose:** Adds `map notification` to the current collection or state.

```csharp
// Obtain an instance of MapNotificationVM from the subsystem API first
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.AddMapNotification(data);
```

### RemoveAllNotifications
`public void RemoveAllNotifications()`

**Purpose:** Removes `all notifications` from the current collection or state.

```csharp
// Obtain an instance of MapNotificationVM from the subsystem API first
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.RemoveAllNotifications();
```

### SetRemoveInputKey
`public void SetRemoveInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `remove input key` and updates the object's internal state.

```csharp
// Obtain an instance of MapNotificationVM from the subsystem API first
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.SetRemoveInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.RefreshValues();
```

## See Also

- [Area Index](../)