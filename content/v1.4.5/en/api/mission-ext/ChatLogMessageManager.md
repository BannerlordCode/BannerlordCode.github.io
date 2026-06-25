---
title: "ChatLogMessageManager"
description: "Auto-generated class reference for ChatLogMessageManager."
---
# ChatLogMessageManager

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatLogMessageManager : MessageManagerBase`
**Base:** `MessageManagerBase`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs`

## Overview

`ChatLogMessageManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ChatLogMessageManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ChatLineData
`public struct ChatLineData(string text, uint color)`

**Purpose:** **Purpose:** Executes the ChatLineData logic.

```csharp
// Obtain an instance of ChatLogMessageManager from the subsystem API first
ChatLogMessageManager chatLogMessageManager = ...;
var result = chatLogMessageManager.ChatLineData("example", 0);
```

### Update
`public void Update()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of ChatLogMessageManager from the subsystem API first
ChatLogMessageManager chatLogMessageManager = ...;
chatLogMessageManager.Update();
```

## Usage Example

```csharp
var manager = ChatLogMessageManager.Current;
```

## See Also

- [Area Index](../)