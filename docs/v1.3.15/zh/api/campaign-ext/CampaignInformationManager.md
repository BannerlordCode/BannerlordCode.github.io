<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignInformationManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignInformationManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignInformationManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CampaignInformationManager.cs`

## 概述

`CampaignInformationManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### OnGameLoaded
```csharp
public void OnGameLoaded()
```

### NewMapNoticeAdded
```csharp
public void NewMapNoticeAdded(InformationData informationData)
```

### AddDialogLine
```csharp
public static MBInformationManager.DialogNotificationHandle AddDialogLine(TextObject text, CharacterObject speakerCharacter, Equipment equipment = null, int extraTimeInMs = 0, MBInformationManager.NotificationPriority priority = MBInformationManager.NotificationPriority.Medium)
```

### GetStatusOfDialogNotification
```csharp
public static MBInformationManager.NotificationStatus GetStatusOfDialogNotification(MBInformationManager.DialogNotificationHandle handle)
```

### ClearDialogNotification
```csharp
public static void ClearDialogNotification(MBInformationManager.DialogNotificationHandle handle, bool fadeOut = true)
```

### GetIsAnyDialogNotificationActiveOrQueued
```csharp
public static bool GetIsAnyDialogNotificationActiveOrQueued()
```

### ClearAllDialogNotifications
```csharp
public static void ClearAllDialogNotifications(bool fadeOut)
```

## 使用示例

```csharp
// CampaignInformationManager (Manager) 的典型用法
CampaignInformationManager.Current;
```

## 参见

- [完整类目录](../catalog)