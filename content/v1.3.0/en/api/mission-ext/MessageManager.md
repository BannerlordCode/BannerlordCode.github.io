---
title: "MessageManager"
description: "Auto-generated class reference for MessageManager."
---
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

**Purpose:** Executes the DisplayMessage logic.

```csharp
// Static call; no instance required
MessageManager.DisplayMessage("example");
```

### DisplayMessage
`public static void DisplayMessage(string message, uint color)`

**Purpose:** Executes the DisplayMessage logic.

```csharp
// Static call; no instance required
MessageManager.DisplayMessage("example", 0);
```

### DisplayDebugMessage
`public static void DisplayDebugMessage(string message)`

**Purpose:** Executes the DisplayDebugMessage logic.

```csharp
// Static call; no instance required
MessageManager.DisplayDebugMessage("example");
```

### DisplayMultilineMessage
`public static void DisplayMultilineMessage(string message, uint color)`

**Purpose:** Executes the DisplayMultilineMessage logic.

```csharp
// Static call; no instance required
MessageManager.DisplayMultilineMessage("example", 0);
```

### EraseMessageLines
`public static void EraseMessageLines()`

**Purpose:** Executes the EraseMessageLines logic.

```csharp
// Static call; no instance required
MessageManager.EraseMessageLines();
```

### SetMessageManager
`public static void SetMessageManager(MessageManagerBase messageManager)`

**Purpose:** Assigns a new value to message manager and updates the object's internal state.

```csharp
// Static call; no instance required
MessageManager.SetMessageManager(messageManager);
```

## Usage Example

```csharp
var manager = MessageManager.Current;
```

## See Also

- [Area Index](../)