<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameNotificationVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameNotificationVM

**命名空间:** TaleWorlds.Core.ViewModelCollection.Information
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`GameNotificationVM` 是 `TaleWorlds.Core.ViewModelCollection.Information` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentNotification` | `public GameNotificationItemVM CurrentNotification { get; set; }` |
| `GotNotification` | `public bool GotNotification { get; set; }` |
| `NotificationId` | `public int NotificationId { get; set; }` |
| `TotalTime` | `public float TotalTime { get; set; }` |
| `Timer` | `public float Timer { get; set; }` |
| `IsPaused` | `public bool IsPaused { get; set; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)