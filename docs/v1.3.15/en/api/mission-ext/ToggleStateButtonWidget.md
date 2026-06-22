<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ToggleStateButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ToggleStateButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ToggleStateButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ToggleStateButtonWidget.cs`

## Overview

`ToggleStateButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `WidgetToClose` | `public Widget WidgetToClose { get; set; }` |
| `AllowSwitchOff` | `public bool AllowSwitchOff { get; set; }` |
| `NotifyParentForSelection` | `public bool NotifyParentForSelection { get; set; }` |

## Usage Example

```csharp
// Typical usage of ToggleStateButtonWidget (Widget)
// 声明/访问一个 ToggleStateButtonWidget
var widget = root.GetChild("toggleStateButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)