<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationPersuasionProgressRichTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationPersuasionProgressRichTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationPersuasionProgressRichTextWidget : RichTextWidget`
**Base:** `RichTextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/ConversationPersuasionProgressRichTextWidget.cs`

## Overview

`ConversationPersuasionProgressRichTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `FadeInTime` | `public float FadeInTime { get; set; }` |
| `FadeOutTime` | `public float FadeOutTime { get; set; }` |
| `StayTime` | `public float StayTime { get; set; }` |

## Usage Example

```csharp
// Typical usage of ConversationPersuasionProgressRichTextWidget (Widget)
// 声明/访问一个 ConversationPersuasionProgressRichTextWidget
var widget = root.GetChild("conversationPersuasionProgressRichTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)