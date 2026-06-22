<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaListWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaListWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListWidget.cs`

## Overview

`EncyclopediaListWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `LastSelectedItemId` | `public string LastSelectedItemId { get; set; }` |
| `ItemList` | `public ListPanel ItemList { get; set; }` |
| `ItemListScroll` | `public ScrollbarWidget ItemListScroll { get; set; }` |

## Usage Example

```csharp
// Typical usage of EncyclopediaListWidget (Widget)
// 声明/访问一个 EncyclopediaListWidget
var widget = root.GetChild("encyclopediaListWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)