<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiblingIndexVisibilityWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiblingIndexVisibilityWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class SiblingIndexVisibilityWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/SiblingIndexVisibilityWidget.cs`

## Overview

`SiblingIndexVisibilityWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `WatchType` | `public SiblingIndexVisibilityWidget.WatchTypes WatchType { get; set; }` |
| `IndexToBeVisible` | `public int IndexToBeVisible { get { return this._indexToBeVisible; }` |
| `WidgetToWatch` | `public Widget WidgetToWatch { get { return this._widgetToWatch; }` |

## Usage Example

```csharp
// Typical usage of SiblingIndexVisibilityWidget (Widget)
// 声明/访问一个 SiblingIndexVisibilityWidget
var widget = root.GetChild("siblingIndexVisibilityWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)