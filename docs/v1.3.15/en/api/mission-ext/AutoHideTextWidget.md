<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AutoHideTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AutoHideTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AutoHideTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideTextWidget.cs`

## Overview

`AutoHideTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `WidgetToHideIfEmpty` | `public Widget WidgetToHideIfEmpty { get; set; }` |

## Usage Example

```csharp
// Typical usage of AutoHideTextWidget (Widget)
// 声明/访问一个 AutoHideTextWidget
var widget = root.GetChild("autoHideTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)