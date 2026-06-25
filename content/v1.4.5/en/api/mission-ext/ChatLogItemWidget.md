---
title: "ChatLogItemWidget"
description: "Auto-generated class reference for ChatLogItemWidget."
---
# ChatLogItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatLogItemWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat/ChatLogItemWidget.cs`

## Overview

`ChatLogItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ChatLogItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `OneLineTextWidget` | `public RichTextWidget OneLineTextWidget { get; set; }` |
| `CollapsableWidget` | `public ChatCollapsableListPanel CollapsableWidget { get; set; }` |
| `ChatLine` | `public string ChatLine { get; set; }` |
| `ChatLogWidget` | `public ChatLogWidget ChatLogWidget { get; set; }` |

## Key Methods

### ChatMultiLineElement
`public struct ChatMultiLineElement(string line, int identModifier)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ChatLogItemWidget from the subsystem API first
ChatLogItemWidget chatLogItemWidget = ...;
var result = chatLogItemWidget.ChatMultiLineElement("example", 0);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ChatLogItemWidget widget = ...;
```

## See Also

- [Area Index](../)