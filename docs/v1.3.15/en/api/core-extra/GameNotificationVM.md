<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameNotificationVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameNotificationVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `GameNotificationVM` is a class in the `TaleWorlds.Core.ViewModelCollection.Information` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public void FadeOutCurrentNotification(bool useExtraDisplayTime = false)
```

### SkipCurrentNotification

```csharp
public void SkipCurrentNotification()
```

### ClearNotifications

```csharp
public void ClearNotifications()
```

### Tick

```csharp
public void Tick(float dt)
```

### AddDialogNotification

```csharp
public MBInformationManager.DialogNotificationHandle AddDialogNotification(TextObject text, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment equipment, MBInformationManager.NotificationPriority priority, string dialogSoundPath)
```

### GetStatusOfDialogNotification

```csharp
public MBInformationManager.NotificationStatus GetStatusOfDialogNotification(MBInformationManager.DialogNotificationHandle handle)
```

### ClearDialogNotification

```csharp
public void ClearDialogNotification(MBInformationManager.DialogNotificationHandle handle, bool fadeOut)
```

### GetIsAnyDialogNotificationActiveOrQueued

```csharp
public bool GetIsAnyDialogNotificationActiveOrQueued()
```

### ClearAllDialogNotifications

```csharp
public void ClearAllDialogNotifications(bool fadeOut)
```

### AddGameNotification

```csharp
public void AddGameNotification(string notificationText, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment equipment, string soundId)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)