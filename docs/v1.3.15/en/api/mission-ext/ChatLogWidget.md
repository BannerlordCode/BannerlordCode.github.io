<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChatLogWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChatLogWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatLogWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogWidget.cs`

## Overview

`ChatLogWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

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
```csharp
public void RegisterMultiLineElement(ChatCollapsableListPanel element)
```

### RemoveMultiLineElement
```csharp
public void RemoveMultiLineElement(ChatCollapsableListPanel element)
```

## Usage Example

```csharp
// Typical usage of ChatLogWidget (Widget)
// 声明/访问一个 ChatLogWidget
var widget = root.GetChild("chatLogWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)