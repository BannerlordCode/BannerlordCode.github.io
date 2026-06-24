<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationScreenButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationScreenButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationScreenButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/ConversationScreenButtonWidget.cs`

## Overview

`ConversationScreenButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ConversationScreenButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnswerList` | `public ListPanel AnswerList { get; set; }` |
| `ContinueButton` | `public ButtonWidget ContinueButton { get; set; }` |
| `IsPersuasionActive` | `public bool IsPersuasionActive { get; set; }` |

## Usage Example

```csharp
var widget = new ConversationScreenButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)