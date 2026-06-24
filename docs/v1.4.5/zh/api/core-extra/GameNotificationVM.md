<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameNotificationVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameNotificationVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class GameNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information/GameNotificationVM.cs`

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

**用途 / Purpose:** 处理 `fade out current notification` 相关逻辑。

### SkipCurrentNotification
`public void SkipCurrentNotification()`

**用途 / Purpose:** 处理 `skip current notification` 相关逻辑。

### ClearNotifications
`public void ClearNotifications()`

**用途 / Purpose:** 处理 `clear notifications` 相关逻辑。

### AddDialogNotification
`public MBInformationManager.DialogNotificationHandle AddDialogNotification(TextObject text, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment equipment, MBInformationManager.NotificationPriority priority, string dialogSoundPath)`

**用途 / Purpose:** 向当前集合/状态中添加 `dialog notification`。

### GetStatusOfDialogNotification
`public MBInformationManager.NotificationStatus GetStatusOfDialogNotification(MBInformationManager.DialogNotificationHandle handle)`

**用途 / Purpose:** 获取 `status of dialog notification` 的当前值。

### ClearDialogNotification
`public void ClearDialogNotification(MBInformationManager.DialogNotificationHandle handle, bool fadeOut)`

**用途 / Purpose:** 处理 `clear dialog notification` 相关逻辑。

### GetIsAnyDialogNotificationActiveOrQueued
`public bool GetIsAnyDialogNotificationActiveOrQueued()`

**用途 / Purpose:** 获取 `is any dialog notification active or queued` 的当前值。

### ClearAllDialogNotifications
`public void ClearAllDialogNotifications(bool fadeOut)`

**用途 / Purpose:** 处理 `clear all dialog notifications` 相关逻辑。

### AddGameNotification
`public void AddGameNotification(string notificationText, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment equipment, string soundId)`

**用途 / Purpose:** 向当前集合/状态中添加 `game notification`。

## 使用示例

```csharp
var value = new GameNotificationVM();
value.FadeOutCurrentNotification(false);
```

## 参见

- [完整类目录](../catalog)