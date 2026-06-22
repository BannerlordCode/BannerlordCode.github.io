<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderReturnButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderReturnButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderReturnButtonWidget : OrderItemButtonWidget`
**Base:** `OrderItemButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderReturnButtonWidget.cs`

## Overview

`OrderReturnButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `InputVisualParent` | `public Widget InputVisualParent { get; set; }` |
| `IsHolding` | `public bool IsHolding { get; set; }` |
| `CanUseShortcuts` | `public bool CanUseShortcuts { get; set; }` |
| `IsAnyOrderSetActive` | `public bool IsAnyOrderSetActive { get; set; }` |
| `IsDeployment` | `public bool IsDeployment { get; set; }` |

## Usage Example

```csharp
// Typical usage of OrderReturnButtonWidget (Widget)
// 声明/访问一个 OrderReturnButtonWidget
var widget = root.GetChild("orderReturnButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)