---
title: "OrderSiegeDeploymentScreenWidget"
description: "Auto-generated class reference for OrderSiegeDeploymentScreenWidget."
---
# OrderSiegeDeploymentScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderSiegeDeploymentScreenWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order/OrderSiegeDeploymentScreenWidget.cs`

## Overview

`OrderSiegeDeploymentScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OrderSiegeDeploymentScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSiegeDeploymentDisabled` | `public bool IsSiegeDeploymentDisabled { get; set; }` |
| `DeploymentTargetsParent` | `public Widget DeploymentTargetsParent { get; set; }` |
| `DeploymentListPanel` | `public ListPanel DeploymentListPanel { get; set; }` |

## Key Methods

### SetSelectedDeploymentItem
`public void SetSelectedDeploymentItem(OrderSiegeDeploymentItemButtonWidget deploymentItem)`

**Purpose:** **Purpose:** Assigns a new value to selected deployment item and updates the object's internal state.

```csharp
// Obtain an instance of OrderSiegeDeploymentScreenWidget from the subsystem API first
OrderSiegeDeploymentScreenWidget orderSiegeDeploymentScreenWidget = ...;
orderSiegeDeploymentScreenWidget.SetSelectedDeploymentItem(deploymentItem);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
OrderSiegeDeploymentScreenWidget widget = ...;
```

## See Also

- [Area Index](../)