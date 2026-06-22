<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NavigatableGridWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NavigatableGridWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NavigatableGridWidget : GridWidget`
**Base:** `GridWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigatableGridWidget.cs`

## Overview

`NavigatableGridWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ParentPanel` | `public ScrollablePanel ParentPanel { get; set; }` |
| `AutoScrollTopOffset` | `public int AutoScrollTopOffset { get; set; }` |
| `AutoScrollBottomOffset` | `public int AutoScrollBottomOffset { get; set; }` |
| `AutoScrollLeftOffset` | `public int AutoScrollLeftOffset { get; set; }` |
| `AutoScrollRightOffset` | `public int AutoScrollRightOffset { get; set; }` |
| `MinIndex` | `public int MinIndex { get; set; }` |
| `MaxIndex` | `public int MaxIndex { get; set; }` |
| `StepSize` | `public int StepSize { get; set; }` |
| `UseSelfIndexForMinimum` | `public bool UseSelfIndexForMinimum { get; set; }` |
| `EmptyNavigationWidget` | `public Widget EmptyNavigationWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of NavigatableGridWidget (Widget)
// 声明/访问一个 NavigatableGridWidget
var widget = root.GetChild("navigatableGridWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)