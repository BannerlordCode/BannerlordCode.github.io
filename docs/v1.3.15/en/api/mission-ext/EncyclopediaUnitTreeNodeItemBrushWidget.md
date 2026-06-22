<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaUnitTreeNodeItemBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaUnitTreeNodeItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaUnitTreeNodeItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaUnitTreeNodeItemBrushWidget.cs`

## Overview

`EncyclopediaUnitTreeNodeItemBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAlternativeUpgrade` | `public bool IsAlternativeUpgrade { get; set; }` |
| `ChildContainer` | `public ListPanel ChildContainer { get; set; }` |
| `LineContainer` | `public Widget LineContainer { get; set; }` |
| `LineBrush` | `public Brush LineBrush { get; set; }` |
| `AlternateLineBrush` | `public Brush AlternateLineBrush { get; set; }` |

## Key Methods

### OnListItemAdded
```csharp
public void OnListItemAdded(Widget parentWidget, Widget addedWidget)
```

## Usage Example

```csharp
// Typical usage of EncyclopediaUnitTreeNodeItemBrushWidget (Widget)
// 声明/访问一个 EncyclopediaUnitTreeNodeItemBrushWidget
var widget = root.GetChild("encyclopediaUnitTreeNodeItemBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)