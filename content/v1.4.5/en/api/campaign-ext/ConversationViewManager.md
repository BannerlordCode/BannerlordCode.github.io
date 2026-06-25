---
title: "ConversationViewManager"
description: "Auto-generated class reference for ConversationViewManager."
---
# ConversationViewManager

**Namespace:** SandBox.View.Conversation
**Module:** SandBox.View
**Type:** `public class ConversationViewManager`
**Base:** none
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Conversation/ConversationViewManager.cs`

## Overview

`ConversationViewManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ConversationViewManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var manager = ConversationViewManager.Current;
```

## See Also

- [Area Index](../)