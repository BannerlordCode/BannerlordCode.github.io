<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryTwoWaySliderWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryTwoWaySliderWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryTwoWaySliderWidget : TwoWaySliderWidget`
**Base:** `TwoWaySliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryTwoWaySliderWidget.cs`

## Overview

`InventoryTwoWaySliderWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsExtended` | `public bool IsExtended { get; set; }` |
| `IncreaseStockButtonWidget` | `public ButtonWidget IncreaseStockButtonWidget { get; set; }` |
| `DecreaseStockButtonWidget` | `public ButtonWidget DecreaseStockButtonWidget { get; set; }` |
| `IsRightSide` | `public bool IsRightSide { get; set; }` |

## Usage Example

```csharp
// Typical usage of InventoryTwoWaySliderWidget (Widget)
// 声明/访问一个 InventoryTwoWaySliderWidget
var widget = root.GetChild("inventoryTwoWaySliderWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)