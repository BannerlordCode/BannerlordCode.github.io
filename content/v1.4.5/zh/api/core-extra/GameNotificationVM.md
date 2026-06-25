---
title: "GameNotificationVM"
description: "GameNotificationVM 的自动生成类参考。"
---
# GameNotificationVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class GameNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information/GameNotificationVM.cs`

## 概述

`GameNotificationVM` 位于 `TaleWorlds.Core.ViewModelCollection.Information`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.Information` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentNotification` | `public GameNotificationItemVM CurrentNotification { get; set; }` |
| `GotNotification` | `public bool GotNotification { get; set; }` |
| `NotificationId` | `public int NotificationId { get; set; }` |
| `CurrentNotificationDurationInSeconds` | `public float CurrentNotificationDurationInSeconds { get; set; }` |
| `IsPaused` | `public bool IsPaused { get; set; }` |
| `MustFadeOutCurrentNotification` | `public bool MustFadeOutCurrentNotification { get; set; }` |
| `CurrentNotificationFadeOutDelayInSeconds` | `public float CurrentNotificationFadeOutDelayInSeconds { get; set; }` |

## 主要方法

### FadeOutCurrentNotification
`public void FadeOutCurrentNotification(bool useExtraDisplayTime = false)`

**用途 / Purpose:** 调用 FadeOutCurrentNotification 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameNotificationVM 实例
GameNotificationVM gameNotificationVM = ...;
gameNotificationVM.FadeOutCurrentNotification(false);
```

### SkipCurrentNotification
`public void SkipCurrentNotification()`

**用途 / Purpose:** 调用 SkipCurrentNotification 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameNotificationVM 实例
GameNotificationVM gameNotificationVM = ...;
gameNotificationVM.SkipCurrentNotification();
```

### ClearNotifications
`public void ClearNotifications()`

**用途 / Purpose:** 清空当前对象中的notifications。

```csharp
// 先通过子系统 API 拿到 GameNotificationVM 实例
GameNotificationVM gameNotificationVM = ...;
gameNotificationVM.ClearNotifications();
```

### AddDialogNotification
`public MBInformationManager.DialogNotificationHandle AddDialogNotification(TextObject text, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment equipment, MBInformationManager.NotificationPriority priority, string dialogSoundPath)`

**用途 / Purpose:** 将 dialog notification 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameNotificationVM 实例
GameNotificationVM gameNotificationVM = ...;
var result = gameNotificationVM.AddDialogNotification(text, 0, announcerCharacter, equipment, priority, "example");
```

### GetStatusOfDialogNotification
`public MBInformationManager.NotificationStatus GetStatusOfDialogNotification(MBInformationManager.DialogNotificationHandle handle)`

**用途 / Purpose:** 读取并返回当前对象中 status of dialog notification 的结果。

```csharp
// 先通过子系统 API 拿到 GameNotificationVM 实例
GameNotificationVM gameNotificationVM = ...;
var result = gameNotificationVM.GetStatusOfDialogNotification(handle);
```

### ClearDialogNotification
`public void ClearDialogNotification(MBInformationManager.DialogNotificationHandle handle, bool fadeOut)`

**用途 / Purpose:** 清空当前对象中的dialog notification。

```csharp
// 先通过子系统 API 拿到 GameNotificationVM 实例
GameNotificationVM gameNotificationVM = ...;
gameNotificationVM.ClearDialogNotification(handle, false);
```

### GetIsAnyDialogNotificationActiveOrQueued
`public bool GetIsAnyDialogNotificationActiveOrQueued()`

**用途 / Purpose:** 读取并返回当前对象中 is any dialog notification active or queued 的结果。

```csharp
// 先通过子系统 API 拿到 GameNotificationVM 实例
GameNotificationVM gameNotificationVM = ...;
var result = gameNotificationVM.GetIsAnyDialogNotificationActiveOrQueued();
```

### ClearAllDialogNotifications
`public void ClearAllDialogNotifications(bool fadeOut)`

**用途 / Purpose:** 清空当前对象中的all dialog notifications。

```csharp
// 先通过子系统 API 拿到 GameNotificationVM 实例
GameNotificationVM gameNotificationVM = ...;
gameNotificationVM.ClearAllDialogNotifications(false);
```

### AddGameNotification
`public void AddGameNotification(string notificationText, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment equipment, string soundId)`

**用途 / Purpose:** 将 game notification 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameNotificationVM 实例
GameNotificationVM gameNotificationVM = ...;
gameNotificationVM.AddGameNotification("example", 0, announcerCharacter, equipment, "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameNotificationVM gameNotificationVM = ...;
gameNotificationVM.FadeOutCurrentNotification(false);
```

## 参见

- [本区域目录](../)