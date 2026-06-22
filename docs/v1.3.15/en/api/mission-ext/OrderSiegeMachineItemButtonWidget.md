<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderSiegeMachineItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderSiegeMachineItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderSiegeMachineItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeMachineItemButtonWidget.cs`

## Overview

`OrderSiegeMachineItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `RemainingCount` | `public int RemainingCount { get; set; }` |
| `RemainingCountWidget` | `public TextWidget RemainingCountWidget { get; set; }` |
| `MachineClass` | `public string MachineClass { get; set; }` |
| `MachineIconWidget` | `public Widget MachineIconWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of OrderSiegeMachineItemButtonWidget (Widget)
// 声明/访问一个 OrderSiegeMachineItemButtonWidget
var widget = root.GetChild("orderSiegeMachineItemButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)