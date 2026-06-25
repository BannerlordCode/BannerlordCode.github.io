---
title: "InformationManager"
description: "Auto-generated class reference for InformationManager."
---
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

### RegisterIsAnyTooltipActiveCallback
`public static void RegisterIsAnyTooltipActiveCallback(Func<bool> callback)`

**Purpose:** Registers `is any tooltip active callback` with the current system so it can later be observed or dispatched.

```csharp
// Static call; no instance required
InformationManager.RegisterIsAnyTooltipActiveCallback(callback);
```

### UnregisterIsAnyTooltipActiveCallback
`public static void UnregisterIsAnyTooltipActiveCallback(Func<bool> callback)`

**Purpose:** Unregisters `is any tooltip active callback` from the current system.

```csharp
// Static call; no instance required
InformationManager.UnregisterIsAnyTooltipActiveCallback(callback);
```

### RegisterIsAnyTooltipExtendedCallback
`public static void RegisterIsAnyTooltipExtendedCallback(Func<bool> callback)`

**Purpose:** Registers `is any tooltip extended callback` with the current system so it can later be observed or dispatched.

```csharp
// Static call; no instance required
InformationManager.RegisterIsAnyTooltipExtendedCallback(callback);
```

### UnregisterIsAnyTooltipExtendedCallback
`public static void UnregisterIsAnyTooltipExtendedCallback(Func<bool> callback)`

**Purpose:** Unregisters `is any tooltip extended callback` from the current system.

```csharp
// Static call; no instance required
InformationManager.UnregisterIsAnyTooltipExtendedCallback(callback);
```

### GetIsAnyTooltipActive
`public static bool GetIsAnyTooltipActive()`

**Purpose:** Reads and returns the `is any tooltip active` value held by the current object.

```csharp
// Static call; no instance required
InformationManager.GetIsAnyTooltipActive();
```

### GetIsAnyTooltipExtended
`public static bool GetIsAnyTooltipExtended()`

**Purpose:** Reads and returns the `is any tooltip extended` value held by the current object.

```csharp
// Static call; no instance required
InformationManager.GetIsAnyTooltipExtended();
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