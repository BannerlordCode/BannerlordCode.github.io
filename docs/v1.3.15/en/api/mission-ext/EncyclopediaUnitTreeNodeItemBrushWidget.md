<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaUnitTreeNodeItemBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `EncyclopediaUnitTreeNodeItemBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public void OnListItemAdded(Widget parentWidget, Widget addedWidget)`

**Purpose:** Called when the `list item added` event is raised.

## Usage Example

```csharp
var widget = new EncyclopediaUnitTreeNodeItemBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)