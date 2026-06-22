<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBInformationManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBInformationManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBInformationManager`
**Base:** 无
**File:** `TaleWorlds.Core/MBInformationManager.cs`

## 概述

`MBInformationManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### AddQuickInformation
```csharp
public static void AddQuickInformation(TextObject message, int extraTimeInMs = 0, BasicCharacterObject announcerCharacter = null, Equipment equipment = null, string soundEventPath = "")
```

### ClearQuickInformations
```csharp
public static void ClearQuickInformations()
```

### ShowMultiSelectionInquiry
```csharp
public static void ShowMultiSelectionInquiry(MultiSelectionInquiryData data, bool pauseGameActiveState = false, bool prioritize = false)
```

### AddNotice
```csharp
public static void AddNotice(InformationData data)
```

### MapNoticeRemoved
```csharp
public static void MapNoticeRemoved(InformationData data)
```

### ShowHint
```csharp
public static void ShowHint(string hint)
```

### HideInformations
```csharp
public static void HideInformations()
```

### ShowSceneNotification
```csharp
public static void ShowSceneNotification(SceneNotificationData data)
```

### HideSceneNotification
```csharp
public static void HideSceneNotification()
```

### GetIsAnySceneNotificationActive
```csharp
public static bool? GetIsAnySceneNotificationActive()
```

### Clear
```csharp
public static void Clear()
```

## 使用示例

```csharp
// MBInformationManager (Manager) 的典型用法
MBInformationManager.Current;
```

## 参见

- [完整类目录](../catalog)