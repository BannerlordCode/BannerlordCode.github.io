<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `InventoryItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsRightSide` | `public bool IsRightSide { get; set; }` |
| `ItemType` | `public string ItemType { get; set; }` |
| `EquipmentIndex` | `public int EquipmentIndex { get; set; }` |
| `ScreenWidget` | `public InventoryScreenWidget ScreenWidget { get; }` |

## Usage Example

```csharp
var implementation = new CustomInventoryItemButtonWidget();
```

## See Also

- [Complete Class Catalog](../catalog)