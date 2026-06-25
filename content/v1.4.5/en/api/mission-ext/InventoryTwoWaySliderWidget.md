---
title: "InventoryTwoWaySliderWidget"
description: "Auto-generated class reference for InventoryTwoWaySliderWidget."
---
# InventoryTwoWaySliderWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryTwoWaySliderWidget : TwoWaySliderWidget`
**Base:** `TwoWaySliderWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory/InventoryTwoWaySliderWidget.cs`

## Overview

`InventoryTwoWaySliderWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `InventoryTwoWaySliderWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsExtended` | `public bool IsExtended { get; set; }` |
| `IncreaseStockButtonWidget` | `public ButtonWidget IncreaseStockButtonWidget { get; set; }` |
| `DecreaseStockButtonWidget` | `public ButtonWidget DecreaseStockButtonWidget { get; set; }` |
| `IsRightSide` | `public bool IsRightSide { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
InventoryTwoWaySliderWidget widget = ...;
```

## See Also

- [Area Index](../)