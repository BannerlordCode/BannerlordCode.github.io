<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignInformationManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignInformationManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignInformationManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignInformationManager.cs`

## Overview

`CampaignInformationManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CampaignInformationManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnGameLoaded
`public void OnGameLoaded()`

**Purpose:** Called when the `game loaded` event is raised.

### NewMapNoticeAdded
`public void NewMapNoticeAdded(InformationData informationData)`

**Purpose:** Handles logic related to `new map notice added`.

### AddDialogLine
`public static MBInformationManager.DialogNotificationHandle AddDialogLine(TextObject text, CharacterObject speakerCharacter, Equipment equipment = null, int extraTimeInMs = 0, MBInformationManager.NotificationPriority priority = MBInformationManager.NotificationPriority.Medium)`

**Purpose:** Adds `dialog line` to the current collection or state.

### GetStatusOfDialogNotification
`public static MBInformationManager.NotificationStatus GetStatusOfDialogNotification(MBInformationManager.DialogNotificationHandle handle)`

**Purpose:** Gets the current value of `status of dialog notification`.

### ClearDialogNotification
`public static void ClearDialogNotification(MBInformationManager.DialogNotificationHandle handle, bool fadeOut = true)`

**Purpose:** Handles logic related to `clear dialog notification`.

### GetIsAnyDialogNotificationActiveOrQueued
`public static bool GetIsAnyDialogNotificationActiveOrQueued()`

**Purpose:** Gets the current value of `is any dialog notification active or queued`.

### ClearAllDialogNotifications
`public static void ClearAllDialogNotifications(bool fadeOut)`

**Purpose:** Handles logic related to `clear all dialog notifications`.

## Usage Example

```csharp
var manager = CampaignInformationManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)