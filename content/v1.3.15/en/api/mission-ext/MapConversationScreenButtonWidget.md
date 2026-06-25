---
title: "MapConversationScreenButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapConversationScreenButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapConversationScreenButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapConversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapConversationScreenButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapConversation/MapConversationScreenButtonWidget.cs`

## Overview

`MapConversationScreenButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapConversationScreenButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConversationParent` | `public Widget ConversationParent { get; set; }` |
| `IsBarterActive` | `public bool IsBarterActive { get; set; }` |

## Usage Example

```csharp
var widget = new MapConversationScreenButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)