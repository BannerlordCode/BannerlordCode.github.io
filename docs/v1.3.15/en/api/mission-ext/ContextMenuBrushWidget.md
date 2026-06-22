<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ContextMenuBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ContextMenuBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ContextMenuBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContextMenuBrushWidget.cs`

## Overview

`ContextMenuBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `HorizontalPadding` | `public float HorizontalPadding { get; set; }` |
| `VerticalPadding` | `public float VerticalPadding { get; set; }` |
| `IsActivated` | `public bool IsActivated { get; set; }` |
| `ActionListPanel` | `public ListPanel ActionListPanel { get; set; }` |
| `ScrollPanelToWatch` | `public ScrollablePanel ScrollPanelToWatch { get; set; }` |

## Usage Example

```csharp
// Typical usage of ContextMenuBrushWidget (Widget)
// 声明/访问一个 ContextMenuBrushWidget
var widget = root.GetChild("contextMenuBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)