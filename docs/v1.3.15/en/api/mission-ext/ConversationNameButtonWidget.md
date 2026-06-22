<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationNameButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationNameButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationNameButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/ConversationNameButtonWidget.cs`

## Overview

`ConversationNameButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsRelationEnabled` | `public bool IsRelationEnabled { get; set; }` |
| `RelationBarContainer` | `public Widget RelationBarContainer { get; set; }` |

## Usage Example

```csharp
// Typical usage of ConversationNameButtonWidget (Widget)
// 声明/访问一个 ConversationNameButtonWidget
var widget = root.GetChild("conversationNameButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)