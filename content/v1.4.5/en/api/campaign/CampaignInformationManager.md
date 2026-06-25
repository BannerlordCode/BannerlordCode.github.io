---
title: "CampaignInformationManager"
description: "Auto-generated class reference for CampaignInformationManager."
---
# CampaignInformationManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignInformationManager`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignInformationManager.cs`

## Overview

`CampaignInformationManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CampaignInformationManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnGameLoaded
`public void OnGameLoaded()`

**Purpose:** Invoked when the `game loaded` event is raised.

```csharp
// Obtain an instance of CampaignInformationManager from the subsystem API first
CampaignInformationManager campaignInformationManager = ...;
campaignInformationManager.OnGameLoaded();
```

### NewMapNoticeAdded
`public void NewMapNoticeAdded(InformationData informationData)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignInformationManager from the subsystem API first
CampaignInformationManager campaignInformationManager = ...;
campaignInformationManager.NewMapNoticeAdded(informationData);
```

### AddDialogLine
`public static MBInformationManager.DialogNotificationHandle AddDialogLine(TextObject text, CharacterObject speakerCharacter, Equipment equipment = null, int extraTimeInMs = 0, MBInformationManager.NotificationPriority priority = MBInformationManager.NotificationPriority.Medium)`

**Purpose:** Adds `dialog line` to the current collection or state.

```csharp
// Static call; no instance required
CampaignInformationManager.AddDialogLine(text, speakerCharacter, null, 0, mBInformationManager.NotificationPriority.Medium);
```

### GetStatusOfDialogNotification
`public static MBInformationManager.NotificationStatus GetStatusOfDialogNotification(MBInformationManager.DialogNotificationHandle handle)`

**Purpose:** Reads and returns the `status of dialog notification` value held by the current object.

```csharp
// Static call; no instance required
CampaignInformationManager.GetStatusOfDialogNotification(handle);
```

### ClearDialogNotification
`public static void ClearDialogNotification(MBInformationManager.DialogNotificationHandle handle, bool fadeOut = true)`

**Purpose:** Removes all `dialog notification` from the current object.

```csharp
// Static call; no instance required
CampaignInformationManager.ClearDialogNotification(handle, false);
```

### GetIsAnyDialogNotificationActiveOrQueued
`public static bool GetIsAnyDialogNotificationActiveOrQueued()`

**Purpose:** Reads and returns the `is any dialog notification active or queued` value held by the current object.

```csharp
// Static call; no instance required
CampaignInformationManager.GetIsAnyDialogNotificationActiveOrQueued();
```

### ClearAllDialogNotifications
`public static void ClearAllDialogNotifications(bool fadeOut)`

**Purpose:** Removes all `all dialog notifications` from the current object.

```csharp
// Static call; no instance required
CampaignInformationManager.ClearAllDialogNotifications(false);
```

## Usage Example

```csharp
var manager = CampaignInformationManager.Current;
```

## See Also

- [Area Index](../)