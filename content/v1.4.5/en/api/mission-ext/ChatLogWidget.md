---
title: "ChatLogWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChatLogWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ChatLogWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatLogWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat/ChatLogWidget.cs`

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

**Purpose:** Handles logic related to `register multi line element`.

### RemoveMultiLineElement
`public void RemoveMultiLineElement(ChatCollapsableListPanel element)`

**Purpose:** Removes `multi line element` from the current collection or state.

## Usage Example

```csharp
var widget = new ChatLogWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)