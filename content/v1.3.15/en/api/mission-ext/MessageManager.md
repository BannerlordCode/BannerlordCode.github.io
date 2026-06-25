---
title: "MessageManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MessageManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MessageManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MessageManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MessageManager.cs`

## Overview

`MessageManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MessageManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### DisplayMessage
`public static void DisplayMessage(string message)`

**Purpose:** Handles logic related to `display message`.

### DisplayMessage
`public static void DisplayMessage(string message, uint color)`

**Purpose:** Handles logic related to `display message`.

### DisplayDebugMessage
`public static void DisplayDebugMessage(string message)`

**Purpose:** Handles logic related to `display debug message`.

### DisplayMultilineMessage
`public static void DisplayMultilineMessage(string message, uint color)`

**Purpose:** Handles logic related to `display multiline message`.

### EraseMessageLines
`public static void EraseMessageLines()`

**Purpose:** Handles logic related to `erase message lines`.

### SetMessageManager
`public static void SetMessageManager(MessageManagerBase messageManager)`

**Purpose:** Sets the value or state of `message manager`.

## Usage Example

```csharp
var manager = MessageManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)