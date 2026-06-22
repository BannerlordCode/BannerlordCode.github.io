<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationItemImageWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationItemImageWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationItemImageWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/ConversationItemImageWidget.cs`

## Overview

`ConversationItemImageWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `NormalBrush` | `public Brush NormalBrush { get; set; }` |
| `SpecialBrush` | `public Brush SpecialBrush { get; set; }` |
| `IsSpecial` | `public bool IsSpecial { get; set; }` |

## Usage Example

```csharp
// Typical usage of ConversationItemImageWidget (Widget)
// 声明/访问一个 ConversationItemImageWidget
var widget = root.GetChild("conversationItemImageWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)