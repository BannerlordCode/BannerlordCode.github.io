<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaSearchBarBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaSearchBarBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaSearchBarBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaSearchBarBrushWidget.cs`

## Overview

`EncyclopediaSearchBarBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShowResults` | `public bool ShowResults { get; set; }` |
| `SearchInputWidget` | `public EditableTextWidget SearchInputWidget { get; set; }` |
| `SearchResultPanel` | `public ScrollablePanel SearchResultPanel { get; set; }` |
| `MinCharAmountToShowResults` | `public int MinCharAmountToShowResults { get; set; }` |

## Usage Example

```csharp
// Typical usage of EncyclopediaSearchBarBrushWidget (Widget)
// 声明/访问一个 EncyclopediaSearchBarBrushWidget
var widget = root.GetChild("encyclopediaSearchBarBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)