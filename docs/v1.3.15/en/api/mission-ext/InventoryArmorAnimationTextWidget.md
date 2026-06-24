<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryArmorAnimationTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `InventoryArmorAnimationTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FloatAmount` | `public float FloatAmount { get; set; }` |

## Usage Example

```csharp
var widget = new InventoryArmorAnimationTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)