<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignInformationManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignInformationManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignInformationManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignInformationManager.cs`

## Overview

`CampaignInformationManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

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

## Usage Example

```csharp
// Typical usage of CampaignInformationManager (Manager)
CampaignInformationManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)