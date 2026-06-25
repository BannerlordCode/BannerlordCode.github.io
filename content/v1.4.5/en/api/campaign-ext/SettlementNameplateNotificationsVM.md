---
title: "SettlementNameplateNotificationsVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementNameplateNotificationsVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementNameplateNotificationsVM

**Namespace:** SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNameplateNotificationsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes/SettlementNameplateNotificationsVM.cs`

## Overview

`SettlementNameplateNotificationsVM` lives in `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEventsRegistered` | `public bool IsEventsRegistered { get; }` |
| `Notifications` | `public MBBindingList<SettlementNotificationItemBaseVM> Notifications { get; set; }` |

## Key Methods

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### RegisterEvents
`public void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### UnloadEvents
`public void UnloadEvents()`

**Purpose:** Handles logic related to `unload events`.

### IsValidItemForNotification
`public bool IsValidItemForNotification(ItemRosterElement item)`

**Purpose:** Handles logic related to `is valid item for notification`.

## Usage Example

```csharp
var value = new SettlementNameplateNotificationsVM();
value.Tick();
```

## See Also

- [Complete Class Catalog](../catalog)