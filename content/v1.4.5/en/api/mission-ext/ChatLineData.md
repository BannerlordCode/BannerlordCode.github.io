---
title: "ChatLineData"
description: "Auto-generated class reference for ChatLineData."
---
# ChatLineData

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ChatLineData`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs`

## Overview

`ChatLineData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ChatLineData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ChatLineData
`public struct ChatLineData(string text, uint color)`

**Purpose:** Executes the ChatLineData logic.

```csharp
// Obtain an instance of ChatLineData from the subsystem API first
ChatLineData chatLineData = ...;
var result = chatLineData.ChatLineData("example", 0);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ChatLineData entry = ...;
```

## See Also

- [Area Index](../)