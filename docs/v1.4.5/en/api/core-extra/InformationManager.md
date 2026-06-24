<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InformationManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InformationManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class InformationManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/InformationManager.cs`

## Overview

`InformationManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `InformationManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### TooltipRegistry
`public struct TooltipRegistry(Type tooltipType, object onRefreshData, string movieName)`

**Purpose:** Handles logic related to `tooltip registry`.

### IsAnyTooltipActiveDelegate
`public delegate void IsAnyTooltipActiveDelegate(out bool isAnyTooltipActive, out bool isAnyTooltipExtended)`

**Purpose:** Handles logic related to `is any tooltip active delegate`.

### IsAnyInquiryActive
`public static bool IsAnyInquiryActive()`

**Purpose:** Handles logic related to `is any inquiry active`.

### DisplayMessage
`public static void DisplayMessage(InformationMessage message)`

**Purpose:** Handles logic related to `display message`.

### HideAllMessages
`public static void HideAllMessages()`

**Purpose:** Handles logic related to `hide all messages`.

### ClearAllMessages
`public static void ClearAllMessages()`

**Purpose:** Handles logic related to `clear all messages`.

### AddSystemNotification
`public static void AddSystemNotification(string message)`

**Purpose:** Adds `system notification` to the current collection or state.

### ShowTooltip
`public static void ShowTooltip(Type type, params object args)`

**Purpose:** Handles logic related to `show tooltip`.

### HideTooltip
`public static void HideTooltip()`

**Purpose:** Handles logic related to `hide tooltip`.

### ShowInquiry
`public static void ShowInquiry(InquiryData data, bool pauseGameActiveState = false, bool prioritize = false)`

**Purpose:** Handles logic related to `show inquiry`.

### ShowTextInquiry
`public static void ShowTextInquiry(TextInquiryData textData, bool pauseGameActiveState = false, bool prioritize = false)`

**Purpose:** Handles logic related to `show text inquiry`.

### HideInquiry
`public static void HideInquiry()`

**Purpose:** Handles logic related to `hide inquiry`.

### GetIsAnyTooltipActive
`public static bool GetIsAnyTooltipActive()`

**Purpose:** Gets the current value of `is any tooltip active`.

### GetIsAnyTooltipActiveAndExtended
`public static bool GetIsAnyTooltipActiveAndExtended()`

**Purpose:** Gets the current value of `is any tooltip active and extended`.

### Clear
`public static void Clear()`

**Purpose:** Handles logic related to `clear`.

## Usage Example

```csharp
var manager = InformationManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)