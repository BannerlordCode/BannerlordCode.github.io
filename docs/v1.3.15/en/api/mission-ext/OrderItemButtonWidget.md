<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderItemButtonWidget.cs`

## Overview

`OrderItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectionState` | `public string SelectionState { get; set; }` |
| `SelectionVisualWidget` | `public ImageWidget SelectionVisualWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of OrderItemButtonWidget (Widget)
// 声明/访问一个 OrderItemButtonWidget
var widget = root.GetChild("orderItemButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)