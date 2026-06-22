<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HoverToggleWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HoverToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HoverToggleWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/HoverToggleWidget.cs`

## Overview

`HoverToggleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsOverWidget` | `public bool IsOverWidget { get; }` |
| `WidgetToShow` | `public Widget WidgetToShow { get; set; }` |

## Usage Example

```csharp
// Typical usage of HoverToggleWidget (Widget)
// 声明/访问一个 HoverToggleWidget
var widget = root.GetChild("hoverToggleWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)