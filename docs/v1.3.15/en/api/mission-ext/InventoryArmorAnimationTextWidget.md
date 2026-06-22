<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryArmorAnimationTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryArmorAnimationTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryArmorAnimationTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryArmorAnimationTextWidget.cs`

## Overview

`InventoryArmorAnimationTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `FloatAmount` | `public float FloatAmount { get; set; }` |

## Usage Example

```csharp
// Typical usage of InventoryArmorAnimationTextWidget (Widget)
// 声明/访问一个 InventoryArmorAnimationTextWidget
var widget = root.GetChild("inventoryArmorAnimationTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)