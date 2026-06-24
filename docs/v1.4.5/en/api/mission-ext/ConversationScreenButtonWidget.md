<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationScreenButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationScreenButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationScreenButtonWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation/ConversationScreenButtonWidget.cs`

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

## Key Methods

### ConversationScreenButtonWidget
`public class ConversationScreenButtonWidget(UIContext context)`

**Purpose:** Handles logic related to `conversation screen button widget`.

## Usage Example

```csharp
var widget = new ConversationScreenButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)