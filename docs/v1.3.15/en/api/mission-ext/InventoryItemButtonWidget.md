<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class InventoryItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemButtonWidget.cs`

## Overview

`InventoryItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsRightSide` | `public bool IsRightSide { get; set; }` |
| `ItemType` | `public string ItemType { get; set; }` |
| `EquipmentIndex` | `public int EquipmentIndex { get; set; }` |
| `ScreenWidget` | `public InventoryScreenWidget ScreenWidget { get; }` |

## Usage Example

```csharp
// Typical usage of InventoryItemButtonWidget (Widget)
// 声明/访问一个 InventoryItemButtonWidget
var widget = root.GetChild("inventoryItemButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)