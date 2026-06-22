<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryEquippedItemSlotWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryEquippedItemSlotWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryEquippedItemSlotWidget : InventoryItemButtonWidget`
**Base:** `InventoryItemButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemSlotWidget.cs`

## Overview

`InventoryEquippedItemSlotWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ImageIdentifier` | `public ImageIdentifierWidget ImageIdentifier { get; set; }` |
| `Background` | `public Widget Background { get; set; }` |
| `TargetEquipmentIndex` | `public int TargetEquipmentIndex { get; set; }` |

## Usage Example

```csharp
// Typical usage of InventoryEquippedItemSlotWidget (Widget)
// 声明/访问一个 InventoryEquippedItemSlotWidget
var widget = root.GetChild("inventoryEquippedItemSlotWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)