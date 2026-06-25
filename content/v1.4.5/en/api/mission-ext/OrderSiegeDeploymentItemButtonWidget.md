---
title: "OrderSiegeDeploymentItemButtonWidget"
description: "Auto-generated class reference for OrderSiegeDeploymentItemButtonWidget."
---
# OrderSiegeDeploymentItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderSiegeDeploymentItemButtonWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order/OrderSiegeDeploymentItemButtonWidget.cs`

## Overview

`OrderSiegeDeploymentItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OrderSiegeDeploymentItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BreachedTextWidget` | `public TextWidget BreachedTextWidget { get; set; }` |
| `TypeIconWidget` | `public Widget TypeIconWidget { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `PointType` | `public int PointType { get; set; }` |
| `IsInsideWindow` | `public bool IsInsideWindow { get; set; }` |
| `IsInFront` | `public bool IsInFront { get; set; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; set; }` |
| `ScreenWidget` | `public OrderSiegeDeploymentScreenWidget ScreenWidget { get; set; }` |

## Key Methods

### OrderSiegeDeploymentItemButtonWidget
`public class OrderSiegeDeploymentItemButtonWidget(UIContext context)`

**Purpose:** Executes the OrderSiegeDeploymentItemButtonWidget logic.

```csharp
// Obtain an instance of OrderSiegeDeploymentItemButtonWidget from the subsystem API first
OrderSiegeDeploymentItemButtonWidget orderSiegeDeploymentItemButtonWidget = ...;
var result = orderSiegeDeploymentItemButtonWidget.OrderSiegeDeploymentItemButtonWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
OrderSiegeDeploymentItemButtonWidget widget = ...;
```

## See Also

- [Area Index](../)