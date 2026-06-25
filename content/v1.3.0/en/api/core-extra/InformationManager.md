---
title: "InformationManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InformationManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InformationManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class InformationManager`
**Base:** none
**File:** `TaleWorlds.Library/InformationManager.cs`

## Overview

`InformationManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `InformationManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RegisteredTypes` | `public static IReadOnlyDictionary<Type, InformationManager.TooltipRegistry> RegisteredTypes { get; }` |

## Key Methods

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

### RegisterIsAnyTooltipActiveCallback
`public static void RegisterIsAnyTooltipActiveCallback(Func<bool> callback)`

**Purpose:** Handles logic related to `register is any tooltip active callback`.

### UnregisterIsAnyTooltipActiveCallback
`public static void UnregisterIsAnyTooltipActiveCallback(Func<bool> callback)`

**Purpose:** Handles logic related to `unregister is any tooltip active callback`.

### RegisterIsAnyTooltipExtendedCallback
`public static void RegisterIsAnyTooltipExtendedCallback(Func<bool> callback)`

**Purpose:** Handles logic related to `register is any tooltip extended callback`.

### UnregisterIsAnyTooltipExtendedCallback
`public static void UnregisterIsAnyTooltipExtendedCallback(Func<bool> callback)`

**Purpose:** Handles logic related to `unregister is any tooltip extended callback`.

### GetIsAnyTooltipActive
`public static bool GetIsAnyTooltipActive()`

**Purpose:** Gets the current value of `is any tooltip active`.

### GetIsAnyTooltipExtended
`public static bool GetIsAnyTooltipExtended()`

**Purpose:** Gets the current value of `is any tooltip extended`.

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