<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingScreenWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting/CraftingScreenWidget.cs`

## Overview

`CraftingScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CraftingScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var widget = new CraftingScreenWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)