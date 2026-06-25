---
title: "ChatLogWidget"
description: "Auto-generated class reference for ChatLogWidget."
---
# ChatLogWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatLogWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogWidget.cs`

## Overview

`ChatLogWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ChatLogWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsChatDisabled` | `public bool IsChatDisabled { get; set; }` |
| `FinishedResizing` | `public bool FinishedResizing { get; set; }` |
| `FullyShowChat` | `public bool FullyShowChat { get; set; }` |
| `FullyShowChatWithTyping` | `public bool FullyShowChatWithTyping { get; set; }` |
| `TextInputWidget` | `public EditableTextWidget TextInputWidget { get; set; }` |
| `Scrollbar` | `public ScrollbarWidget Scrollbar { get; set; }` |
| `ScrollablePanel` | `public ScrollablePanel ScrollablePanel { get; set; }` |
| `ResizerWidget` | `public Widget ResizerWidget { get; set; }` |
| `ResizeFrameWidget` | `public Widget ResizeFrameWidget { get; set; }` |
| `SizeX` | `public float SizeX { get; set; }` |
| `SizeY` | `public float SizeY { get; set; }` |
| `MessageHistoryList` | `public ListPanel MessageHistoryList { get; set; }` |
| `IsMPChatLog` | `public bool IsMPChatLog { get; set; }` |

## Key Methods

### RegisterMultiLineElement
`public void RegisterMultiLineElement(ChatCollapsableListPanel element)`

**Purpose:** Registers `multi line element` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of ChatLogWidget from the subsystem API first
ChatLogWidget chatLogWidget = ...;
chatLogWidget.RegisterMultiLineElement(element);
```

### RemoveMultiLineElement
`public void RemoveMultiLineElement(ChatCollapsableListPanel element)`

**Purpose:** Removes `multi line element` from the current collection or state.

```csharp
// Obtain an instance of ChatLogWidget from the subsystem API first
ChatLogWidget chatLogWidget = ...;
chatLogWidget.RemoveMultiLineElement(element);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ChatLogWidget widget = ...;
```

## See Also

- [Area Index](../)