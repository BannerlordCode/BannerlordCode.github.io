<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryItemValueTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryItemValueTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryItemValueTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemValueTextWidget.cs`

## Overview

`InventoryItemValueTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ProfitType` | `public int ProfitType { get; set; }` |

## Usage Example

```csharp
// Typical usage of InventoryItemValueTextWidget (Widget)
// 声明/访问一个 InventoryItemValueTextWidget
var widget = root.GetChild("inventoryItemValueTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)