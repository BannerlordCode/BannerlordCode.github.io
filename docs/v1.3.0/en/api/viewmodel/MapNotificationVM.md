<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapNotificationVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Refreshes the display or cache of `values`.

### RegisterMapNotificationType
`public void RegisterMapNotificationType(Type data, Type item)`

**Purpose:** Handles logic related to `register map notification type`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnFrameTick
`public void OnFrameTick(float dt)`

**Purpose:** Called when the `frame tick` event is raised.

### OnMenuModeTick
`public void OnMenuModeTick(float dt)`

**Purpose:** Called when the `menu mode tick` event is raised.

### AddMapNotification
`public void AddMapNotification(InformationData data)`

**Purpose:** Adds `map notification` to the current collection or state.

### RemoveAllNotifications
`public void RemoveAllNotifications()`

**Purpose:** Removes `all notifications` from the current collection or state.

### SetRemoveInputKey
`public void SetRemoveInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `remove input key`.

## Usage Example

```csharp
var value = new MapNotificationVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)