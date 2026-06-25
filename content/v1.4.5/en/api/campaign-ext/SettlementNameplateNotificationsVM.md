---
title: "SettlementNameplateNotificationsVM"
description: "Auto-generated class reference for SettlementNameplateNotificationsVM."
---
# SettlementNameplateNotificationsVM

**Namespace:** SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNameplateNotificationsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes/SettlementNameplateNotificationsVM.cs`

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

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of SettlementNameplateNotificationsVM from the subsystem API first
SettlementNameplateNotificationsVM settlementNameplateNotificationsVM = ...;
settlementNameplateNotificationsVM.Tick();
```

### RegisterEvents
`public void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of SettlementNameplateNotificationsVM from the subsystem API first
SettlementNameplateNotificationsVM settlementNameplateNotificationsVM = ...;
settlementNameplateNotificationsVM.RegisterEvents();
```

### UnloadEvents
`public void UnloadEvents()`

**Purpose:** **Purpose:** Executes the UnloadEvents logic.

```csharp
// Obtain an instance of SettlementNameplateNotificationsVM from the subsystem API first
SettlementNameplateNotificationsVM settlementNameplateNotificationsVM = ...;
settlementNameplateNotificationsVM.UnloadEvents();
```

### IsValidItemForNotification
`public bool IsValidItemForNotification(ItemRosterElement item)`

**Purpose:** **Purpose:** Determines whether the this instance is in the valid item for notification state or condition.

```csharp
// Obtain an instance of SettlementNameplateNotificationsVM from the subsystem API first
SettlementNameplateNotificationsVM settlementNameplateNotificationsVM = ...;
var result = settlementNameplateNotificationsVM.IsValidItemForNotification(item);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SettlementNameplateNotificationsVM settlementNameplateNotificationsVM = ...;
settlementNameplateNotificationsVM.Tick();
```

## See Also

- [Area Index](../)