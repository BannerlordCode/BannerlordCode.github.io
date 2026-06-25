---
title: "OrderSiegeDeploymentScreenWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderSiegeDeploymentScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OrderSiegeDeploymentScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderSiegeDeploymentScreenWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order/OrderSiegeDeploymentScreenWidget.cs`

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

**Purpose:** Sets the value or state of `selected deployment item`.

## Usage Example

```csharp
var widget = new OrderSiegeDeploymentScreenWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)