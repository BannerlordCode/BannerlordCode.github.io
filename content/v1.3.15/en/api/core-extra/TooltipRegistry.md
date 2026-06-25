---
title: "TooltipRegistry"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TooltipRegistry`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TooltipRegistry

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct TooltipRegistry`
**Area:** core-extra

## Overview

`TooltipRegistry` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RegisteredTypes` | `public static IReadOnlyDictionary<Type, InformationManager.TooltipRegistry> RegisteredTypes { get; }` |

## Key Methods

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

### IsAnyTooltipActiveDelegate
`public delegate void IsAnyTooltipActiveDelegate(out bool isAnyTooltipActive, out bool isAnyTooltipExtended)`

**Purpose:** Handles logic related to `is any tooltip active delegate`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
TooltipRegistry.IsAnyInquiryActive();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
