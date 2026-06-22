<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ToggleButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ToggleButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ToggleButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ToggleButtonWidget.cs`

## Overview

`ToggleButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsTargetVisible` | `public bool IsTargetVisible { get; set; }` |
| `WidgetToClose` | `public Widget WidgetToClose { get; set; }` |

## Usage Example

```csharp
// Typical usage of ToggleButtonWidget (Widget)
// 声明/访问一个 ToggleButtonWidget
var widget = root.GetChild("toggleButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)