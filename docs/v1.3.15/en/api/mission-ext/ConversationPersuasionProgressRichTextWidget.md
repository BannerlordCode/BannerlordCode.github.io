<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationPersuasionProgressRichTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `ConversationPersuasionProgressRichTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FadeInTime` | `public float FadeInTime { get; set; }` |
| `FadeOutTime` | `public float FadeOutTime { get; set; }` |
| `StayTime` | `public float StayTime { get; set; }` |

## Usage Example

```csharp
var widget = new ConversationPersuasionProgressRichTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)