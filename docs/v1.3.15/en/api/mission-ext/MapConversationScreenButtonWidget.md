<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapConversationScreenButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `ConversationParent` | `public Widget ConversationParent { get; set; }` |
| `IsBarterActive` | `public bool IsBarterActive { get; set; }` |

## Usage Example

```csharp
// Typical usage of MapConversationScreenButtonWidget (Widget)
// 声明/访问一个 MapConversationScreenButtonWidget
var widget = root.GetChild("mapConversationScreenButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)