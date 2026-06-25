---
title: "MBInformationManager"
description: "Auto-generated class reference for MBInformationManager."
---
# MBInformationManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBInformationManager`
**Base:** none
**File:** `TaleWorlds.Core/MBInformationManager.cs`

## Overview

`MBInformationManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MBInformationManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddQuickInformation
`public static void AddQuickInformation(TextObject message, int extraTimeInMs = 0, BasicCharacterObject announcerCharacter = null, Equipment equipment = null, string soundEventPath = "")`

**Purpose:** Adds quick information to the current collection or state.

```csharp
// Static call; no instance required
MBInformationManager.AddQuickInformation(message, 0, null, null, "example");
```

### ClearQuickInformations
`public static void ClearQuickInformations()`

**Purpose:** Removes all quick informations from the this instance.

```csharp
// Static call; no instance required
MBInformationManager.ClearQuickInformations();
```

### ShowMultiSelectionInquiry
`public static void ShowMultiSelectionInquiry(MultiSelectionInquiryData data, bool pauseGameActiveState = false, bool prioritize = false)`

**Purpose:** Displays the UI or element associated with multi selection inquiry.

```csharp
// Static call; no instance required
MBInformationManager.ShowMultiSelectionInquiry(data, false, false);
```

### AddNotice
`public static void AddNotice(InformationData data)`

**Purpose:** Adds notice to the current collection or state.

```csharp
// Static call; no instance required
MBInformationManager.AddNotice(data);
```

### MapNoticeRemoved
`public static void MapNoticeRemoved(InformationData data)`

**Purpose:** Executes the MapNoticeRemoved logic.

```csharp
// Static call; no instance required
MBInformationManager.MapNoticeRemoved(data);
```

### ShowHint
`public static void ShowHint(string hint)`

**Purpose:** Displays the UI or element associated with hint.

```csharp
// Static call; no instance required
MBInformationManager.ShowHint("example");
```

### HideInformations
`public static void HideInformations()`

**Purpose:** Hides the UI or element associated with informations.

```csharp
// Static call; no instance required
MBInformationManager.HideInformations();
```

### ShowSceneNotification
`public static void ShowSceneNotification(SceneNotificationData data)`

**Purpose:** Displays the UI or element associated with scene notification.

```csharp
// Static call; no instance required
MBInformationManager.ShowSceneNotification(data);
```

### HideSceneNotification
`public static void HideSceneNotification()`

**Purpose:** Hides the UI or element associated with scene notification.

```csharp
// Static call; no instance required
MBInformationManager.HideSceneNotification();
```

### GetIsAnySceneNotificationActive
`public static bool? GetIsAnySceneNotificationActive()`

**Purpose:** Reads and returns the is any scene notification active value held by the this instance.

```csharp
// Static call; no instance required
MBInformationManager.GetIsAnySceneNotificationActive();
```

### Clear
`public static void Clear()`

**Purpose:** Removes all content from the this instance.

```csharp
// Static call; no instance required
MBInformationManager.Clear();
```

## Usage Example

```csharp
var manager = MBInformationManager.Current;
```

## See Also

- [Area Index](../)