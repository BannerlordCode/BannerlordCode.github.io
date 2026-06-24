<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationNameButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationNameButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationNameButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation/ConversationNameButtonWidget.cs`

## Overview

`ConversationNameButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ConversationNameButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsRelationEnabled` | `public bool IsRelationEnabled { get; set; }` |
| `RelationBarContainer` | `public Widget RelationBarContainer { get; set; }` |

## Usage Example

```csharp
var widget = new ConversationNameButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)