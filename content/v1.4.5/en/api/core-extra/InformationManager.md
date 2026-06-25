---
title: "InformationManager"
description: "Auto-generated class reference for InformationManager."
---
# InformationManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class InformationManager`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/InformationManager.cs`

## Overview

`InformationManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `InformationManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### TooltipRegistry
`public struct TooltipRegistry(Type tooltipType, object onRefreshData, string movieName)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of InformationManager from the subsystem API first
InformationManager informationManager = ...;
var result = informationManager.TooltipRegistry(tooltipType, onRefreshData, "example");
```

### IsAnyTooltipActiveDelegate
`public delegate void IsAnyTooltipActiveDelegate(out bool isAnyTooltipActive, out bool isAnyTooltipExtended)`

**Purpose:** Determines whether the current object is in the `any tooltip active delegate` state or condition.

```csharp
// Obtain an instance of InformationManager from the subsystem API first
InformationManager informationManager = ...;
informationManager.IsAnyTooltipActiveDelegate(isAnyTooltipActive, isAnyTooltipExtended);
```

### IsAnyInquiryActive
`public static bool IsAnyInquiryActive()`

**Purpose:** Determines whether the current object is in the `any inquiry active` state or condition.

```csharp
// Static call; no instance required
InformationManager.IsAnyInquiryActive();
```

### DisplayMessage
`public static void DisplayMessage(InformationMessage message)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
InformationManager.DisplayMessage(message);
```

### HideAllMessages
`public static void HideAllMessages()`

**Purpose:** Hides the UI or element associated with `all messages`.

```csharp
// Static call; no instance required
InformationManager.HideAllMessages();
```

### ClearAllMessages
`public static void ClearAllMessages()`

**Purpose:** Removes all `all messages` from the current object.

```csharp
// Static call; no instance required
InformationManager.ClearAllMessages();
```

### AddSystemNotification
`public static void AddSystemNotification(string message)`

**Purpose:** Adds `system notification` to the current collection or state.

```csharp
// Static call; no instance required
InformationManager.AddSystemNotification("example");
```

### ShowTooltip
`public static void ShowTooltip(Type type, params object args)`

**Purpose:** Displays the UI or element associated with `tooltip`.

```csharp
// Static call; no instance required
InformationManager.ShowTooltip(type, args);
```

### HideTooltip
`public static void HideTooltip()`

**Purpose:** Hides the UI or element associated with `tooltip`.

```csharp
// Static call; no instance required
InformationManager.HideTooltip();
```

### ShowInquiry
`public static void ShowInquiry(InquiryData data, bool pauseGameActiveState = false, bool prioritize = false)`

**Purpose:** Displays the UI or element associated with `inquiry`.

```csharp
// Static call; no instance required
InformationManager.ShowInquiry(data, false, false);
```

### ShowTextInquiry
`public static void ShowTextInquiry(TextInquiryData textData, bool pauseGameActiveState = false, bool prioritize = false)`

**Purpose:** Displays the UI or element associated with `text inquiry`.

```csharp
// Static call; no instance required
InformationManager.ShowTextInquiry(textData, false, false);
```

### HideInquiry
`public static void HideInquiry()`

**Purpose:** Hides the UI or element associated with `inquiry`.

```csharp
// Static call; no instance required
InformationManager.HideInquiry();
```

### GetIsAnyTooltipActive
`public static bool GetIsAnyTooltipActive()`

**Purpose:** Reads and returns the `is any tooltip active` value held by the current object.

```csharp
// Static call; no instance required
InformationManager.GetIsAnyTooltipActive();
```

### GetIsAnyTooltipActiveAndExtended
`public static bool GetIsAnyTooltipActiveAndExtended()`

**Purpose:** Reads and returns the `is any tooltip active and extended` value held by the current object.

```csharp
// Static call; no instance required
InformationManager.GetIsAnyTooltipActiveAndExtended();
```

### Clear
`public static void Clear()`

**Purpose:** Removes all content from the current object.

```csharp
// Static call; no instance required
InformationManager.Clear();
```

## Usage Example

```csharp
var manager = InformationManager.Current;
```

## See Also

- [Area Index](../)