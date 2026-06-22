<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SingleQueryParentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SingleQueryParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Popup
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleQueryParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Popup/SingleQueryParentWidget.cs`

## Overview

`SingleQueryParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `DescriptionScrollablePanel` | `public ScrollablePanel DescriptionScrollablePanel { get; set; }` |
| `DescriptionScrollbar` | `public ScrollbarWidget DescriptionScrollbar { get; set; }` |

## Usage Example

```csharp
// Typical usage of SingleQueryParentWidget (Widget)
// 声明/访问一个 SingleQueryParentWidget
var widget = root.GetChild("singleQueryParentWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)