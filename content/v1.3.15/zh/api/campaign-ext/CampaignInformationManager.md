---
title: "CampaignInformationManager"
description: "CampaignInformationManager 的自动生成类参考。"
---
# CampaignInformationManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignInformationManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CampaignInformationManager.cs`

## 概述

`CampaignInformationManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CampaignInformationManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnGameLoaded
`public void OnGameLoaded()`

**用途 / Purpose:** 在 「game loaded」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignInformationManager 实例
CampaignInformationManager campaignInformationManager = ...;
campaignInformationManager.OnGameLoaded();
```

### NewMapNoticeAdded
`public void NewMapNoticeAdded(InformationData informationData)`

**用途 / Purpose:** 处理与 「new map notice added」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CampaignInformationManager 实例
CampaignInformationManager campaignInformationManager = ...;
campaignInformationManager.NewMapNoticeAdded(informationData);
```

### AddDialogLine
`public static MBInformationManager.DialogNotificationHandle AddDialogLine(TextObject text, CharacterObject speakerCharacter, Equipment equipment = null, int extraTimeInMs = 0, MBInformationManager.NotificationPriority priority = MBInformationManager.NotificationPriority.Medium)`

**用途 / Purpose:** 将 「dialog line」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignInformationManager.AddDialogLine(text, speakerCharacter, null, 0, mBInformationManager.NotificationPriority.Medium);
```

### GetStatusOfDialogNotification
`public static MBInformationManager.NotificationStatus GetStatusOfDialogNotification(MBInformationManager.DialogNotificationHandle handle)`

**用途 / Purpose:** 读取并返回当前对象中 「status of dialog notification」 的结果。

```csharp
// 静态调用，不需要实例
CampaignInformationManager.GetStatusOfDialogNotification(handle);
```

### ClearDialogNotification
`public static void ClearDialogNotification(MBInformationManager.DialogNotificationHandle handle, bool fadeOut = true)`

**用途 / Purpose:** 清空当前对象中的「dialog notification」。

```csharp
// 静态调用，不需要实例
CampaignInformationManager.ClearDialogNotification(handle, false);
```

### GetIsAnyDialogNotificationActiveOrQueued
`public static bool GetIsAnyDialogNotificationActiveOrQueued()`

**用途 / Purpose:** 读取并返回当前对象中 「is any dialog notification active or queued」 的结果。

```csharp
// 静态调用，不需要实例
CampaignInformationManager.GetIsAnyDialogNotificationActiveOrQueued();
```

### ClearAllDialogNotifications
`public static void ClearAllDialogNotifications(bool fadeOut)`

**用途 / Purpose:** 清空当前对象中的「all dialog notifications」。

```csharp
// 静态调用，不需要实例
CampaignInformationManager.ClearAllDialogNotifications(false);
```

## 使用示例

```csharp
var manager = CampaignInformationManager.Current;
```

## 参见

- [本区域目录](../)