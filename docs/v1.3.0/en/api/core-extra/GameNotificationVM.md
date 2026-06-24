<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameNotificationVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `clear notifications`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### AddGameNotification
`public void AddGameNotification(string notificationText, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment equipment, string soundId)`

**Purpose:** Adds `game notification` to the current collection or state.

## Usage Example

```csharp
var value = new GameNotificationVM();
value.ClearNotifications();
```

## See Also

- [Complete Class Catalog](../catalog)