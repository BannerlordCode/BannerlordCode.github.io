<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderSiegeDeploymentScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderSiegeDeploymentScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderSiegeDeploymentScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeDeploymentScreenWidget.cs`

## Overview

`OrderSiegeDeploymentScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSiegeDeploymentDisabled` | `public bool IsSiegeDeploymentDisabled { get; set; }` |
| `DeploymentTargetsParent` | `public Widget DeploymentTargetsParent { get; set; }` |
| `DeploymentListPanel` | `public ListPanel DeploymentListPanel { get; set; }` |

## Key Methods

### SetSelectedDeploymentItem
```csharp
public void SetSelectedDeploymentItem(OrderSiegeDeploymentItemButtonWidget deploymentItem)
```

## Usage Example

```csharp
// Typical usage of OrderSiegeDeploymentScreenWidget (Widget)
// 声明/访问一个 OrderSiegeDeploymentScreenWidget
var widget = root.GetChild("orderSiegeDeploymentScreenWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)