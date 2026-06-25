---
title: "InventoryTupleExtensionControlsWidget"
description: "Auto-generated class reference for InventoryTupleExtensionControlsWidget."
---
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

**Purpose:** Assembles and returns the built result for `navigation data`.

```csharp
// Obtain an instance of InventoryTupleExtensionControlsWidget from the subsystem API first
InventoryTupleExtensionControlsWidget inventoryTupleExtensionControlsWidget = ...;
inventoryTupleExtensionControlsWidget.BuildNavigationData();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
InventoryTupleExtensionControlsWidget widget = ...;
```

## See Also

- [Area Index](../)