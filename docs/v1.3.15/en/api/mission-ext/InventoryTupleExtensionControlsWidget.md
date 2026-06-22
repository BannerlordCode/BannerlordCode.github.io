<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryTupleExtensionControlsWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryTupleExtensionControlsWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryTupleExtensionControlsWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryTupleExtensionControlsWidget.cs`

## Overview

`InventoryTupleExtensionControlsWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `NavigationParent` | `public Widget NavigationParent { get; set; }` |
| `IsExtended` | `public bool IsExtended { get; set; }` |
| `TransferSlider` | `public Widget TransferSlider { get; set; }` |
| `IncreaseDecreaseButtonsParent` | `public Widget IncreaseDecreaseButtonsParent { get; set; }` |
| `ButtonCarrier` | `public Widget ButtonCarrier { get; set; }` |

## Key Methods

### BuildNavigationData
```csharp
public void BuildNavigationData()
```

## Usage Example

```csharp
// Typical usage of InventoryTupleExtensionControlsWidget (Widget)
// 声明/访问一个 InventoryTupleExtensionControlsWidget
var widget = root.GetChild("inventoryTupleExtensionControlsWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)