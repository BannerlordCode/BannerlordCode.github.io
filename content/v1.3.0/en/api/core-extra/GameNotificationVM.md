---
title: "GameNotificationVM"
description: "Auto-generated class reference for GameNotificationVM."
---
# GameNotificationVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class GameNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/GameNotificationVM.cs`

## Overview

`GameNotificationVM` lives in `TaleWorlds.Core.ViewModelCollection.Information` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Information` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentNotification` | `public GameNotificationItemVM CurrentNotification { get; set; }` |
| `GotNotification` | `public bool GotNotification { get; set; }` |
| `NotificationId` | `public int NotificationId { get; set; }` |
| `TotalTime` | `public float TotalTime { get; set; }` |

## Key Methods

### ClearNotifications
`public void ClearNotifications()`

**Purpose:** Removes all notifications from the this instance.

```csharp
// Obtain an instance of GameNotificationVM from the subsystem API first
GameNotificationVM gameNotificationVM = ...;
gameNotificationVM.ClearNotifications();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of GameNotificationVM from the subsystem API first
GameNotificationVM gameNotificationVM = ...;
gameNotificationVM.Tick(0);
```

### AddGameNotification
`public void AddGameNotification(string notificationText, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment equipment, string soundId)`

**Purpose:** Adds game notification to the current collection or state.

```csharp
// Obtain an instance of GameNotificationVM from the subsystem API first
GameNotificationVM gameNotificationVM = ...;
gameNotificationVM.AddGameNotification("example", 0, announcerCharacter, equipment, "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameNotificationVM gameNotificationVM = ...;
gameNotificationVM.ClearNotifications();
```

## See Also

- [Area Index](../)