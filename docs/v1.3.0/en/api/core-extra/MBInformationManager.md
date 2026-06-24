<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBInformationManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Adds `quick information` to the current collection or state.

### ShowMultiSelectionInquiry
`public static void ShowMultiSelectionInquiry(MultiSelectionInquiryData data, bool pauseGameActiveState = false, bool prioritize = false)`

**Purpose:** Handles logic related to `show multi selection inquiry`.

### AddNotice
`public static void AddNotice(InformationData data)`

**Purpose:** Adds `notice` to the current collection or state.

### MapNoticeRemoved
`public static void MapNoticeRemoved(InformationData data)`

**Purpose:** Handles logic related to `map notice removed`.

### ShowHint
`public static void ShowHint(string hint)`

**Purpose:** Handles logic related to `show hint`.

### HideInformations
`public static void HideInformations()`

**Purpose:** Handles logic related to `hide informations`.

### ShowSceneNotification
`public static void ShowSceneNotification(SceneNotificationData data)`

**Purpose:** Handles logic related to `show scene notification`.

### HideSceneNotification
`public static void HideSceneNotification()`

**Purpose:** Handles logic related to `hide scene notification`.

### GetIsAnySceneNotificationActive
`public static bool? GetIsAnySceneNotificationActive()`

**Purpose:** Gets the current value of `is any scene notification active`.

### Clear
`public static void Clear()`

**Purpose:** Handles logic related to `clear`.

## Usage Example

```csharp
var manager = MBInformationManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)