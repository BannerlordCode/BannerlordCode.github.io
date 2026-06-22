<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingScreenWidget.cs`

## Overview

`CraftingScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInCraftingMode` | `public bool IsInCraftingMode { get; set; }` |
| `IsInRefinementMode` | `public bool IsInRefinementMode { get; set; }` |
| `IsInSmeltingMode` | `public bool IsInSmeltingMode { get; set; }` |
| `MainActionButtonWidget` | `public ButtonWidget MainActionButtonWidget { get; set; }` |
| `FinalCraftButtonWidget` | `public ButtonWidget FinalCraftButtonWidget { get; set; }` |
| `NewCraftedWeaponPopupWidget` | `public Widget NewCraftedWeaponPopupWidget { get; set; }` |
| `CraftingOrderPopupWidget` | `public Widget CraftingOrderPopupWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of CraftingScreenWidget (Widget)
// 声明/访问一个 CraftingScreenWidget
var widget = root.GetChild("craftingScreenWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)