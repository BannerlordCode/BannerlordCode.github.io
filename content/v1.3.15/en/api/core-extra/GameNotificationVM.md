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
| `Timer` | `public float Timer { get; set; }` |
| `IsPaused` | `public bool IsPaused { get; set; }` |

## Key Methods

### FadeOutCurrentNotification
`public void FadeOutCurrentNotification(bool useExtraDisplayTime = false)`

**Purpose:** Executes the FadeOutCurrentNotification logic.

```csharp
// Obtain an instance of GameNotificationVM from the subsystem API first
GameNotificationVM gameNotificationVM = ...;
gameNotificationVM.FadeOutCurrentNotification(false);
```

### SkipCurrentNotification
`public void SkipCurrentNotification()`

**Purpose:** Executes the SkipCurrentNotification logic.

```csharp
// Obtain an instance of GameNotificationVM from the subsystem API first
GameNotificationVM gameNotificationVM = ...;
gameNotificationVM.SkipCurrentNotification();
```

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

### AddDialogNotification
`public MBInformationManager.DialogNotificationHandle AddDialogNotification(TextObject text, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment equipment, MBInformationManager.NotificationPriority priority, string dialogSoundPath)`

**Purpose:** Adds dialog notification to the current collection or state.

```csharp
// Obtain an instance of GameNotificationVM from the subsystem API first
GameNotificationVM gameNotificationVM = ...;
var result = gameNotificationVM.AddDialogNotification(text, 0, announcerCharacter, equipment, priority, "example");
```

### GetStatusOfDialogNotification
`public MBInformationManager.NotificationStatus GetStatusOfDialogNotification(MBInformationManager.DialogNotificationHandle handle)`

**Purpose:** Reads and returns the status of dialog notification value held by the this instance.

```csharp
// Obtain an instance of GameNotificationVM from the subsystem API first
GameNotificationVM gameNotificationVM = ...;
var result = gameNotificationVM.GetStatusOfDialogNotification(handle);
```

### ClearDialogNotification
`public void ClearDialogNotification(MBInformationManager.DialogNotificationHandle handle, bool fadeOut)`

**Purpose:** Removes all dialog notification from the this instance.

```csharp
// Obtain an instance of GameNotificationVM from the subsystem API first
GameNotificationVM gameNotificationVM = ...;
gameNotificationVM.ClearDialogNotification(handle, false);
```

### GetIsAnyDialogNotificationActiveOrQueued
`public bool GetIsAnyDialogNotificationActiveOrQueued()`

**Purpose:** Reads and returns the is any dialog notification active or queued value held by the this instance.

```csharp
// Obtain an instance of GameNotificationVM from the subsystem API first
GameNotificationVM gameNotificationVM = ...;
var result = gameNotificationVM.GetIsAnyDialogNotificationActiveOrQueued();
```

### ClearAllDialogNotifications
`public void ClearAllDialogNotifications(bool fadeOut)`

**Purpose:** Removes all all dialog notifications from the this instance.

```csharp
// Obtain an instance of GameNotificationVM from the subsystem API first
GameNotificationVM gameNotificationVM = ...;
gameNotificationVM.ClearAllDialogNotifications(false);
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
gameNotificationVM.FadeOutCurrentNotification(false);
```

## See Also

- [Area Index](../)