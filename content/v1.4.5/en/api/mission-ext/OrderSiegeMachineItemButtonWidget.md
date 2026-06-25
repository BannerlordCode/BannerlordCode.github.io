---
title: "OrderSiegeMachineItemButtonWidget"
description: "Auto-generated class reference for OrderSiegeMachineItemButtonWidget."
---
# OrderSiegeMachineItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderSiegeMachineItemButtonWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order/OrderSiegeMachineItemButtonWidget.cs`

## Overview

`OrderSiegeMachineItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OrderSiegeMachineItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RemainingCount` | `public int RemainingCount { get; set; }` |
| `RemainingCountWidget` | `public TextWidget RemainingCountWidget { get; set; }` |
| `MachineClass` | `public string MachineClass { get; set; }` |
| `MachineIconWidget` | `public Widget MachineIconWidget { get; set; }` |

## Key Methods

### OrderSiegeMachineItemButtonWidget
`public class OrderSiegeMachineItemButtonWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of OrderSiegeMachineItemButtonWidget from the subsystem API first
OrderSiegeMachineItemButtonWidget orderSiegeMachineItemButtonWidget = ...;
var result = orderSiegeMachineItemButtonWidget.OrderSiegeMachineItemButtonWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
OrderSiegeMachineItemButtonWidget widget = ...;
```

## See Also

- [Area Index](../)