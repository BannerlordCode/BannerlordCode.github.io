---
title: "InventoryTupleExtensionControlsWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryTupleExtensionControlsWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `InventoryTupleExtensionControlsWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public void BuildNavigationData()`

**Purpose:** Handles logic related to `build navigation data`.

## Usage Example

```csharp
var widget = new InventoryTupleExtensionControlsWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)