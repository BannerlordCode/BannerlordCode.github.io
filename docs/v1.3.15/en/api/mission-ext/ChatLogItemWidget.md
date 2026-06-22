<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChatLogItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChatLogItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatLogItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogItemWidget.cs`

## Overview

`ChatLogItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `OneLineTextWidget` | `public RichTextWidget OneLineTextWidget { get; set; }` |
| `CollapsableWidget` | `public ChatCollapsableListPanel CollapsableWidget { get; set; }` |
| `ChatLine` | `public string ChatLine { get; set; }` |
| `ChatLogWidget` | `public ChatLogWidget ChatLogWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of ChatLogItemWidget (Widget)
// 声明/访问一个 ChatLogItemWidget
var widget = root.GetChild("chatLogItemWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)