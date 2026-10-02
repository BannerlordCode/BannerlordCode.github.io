---
title: "OrderSiegeDeploymentScreenWidget"
description: "OrderSiegeDeploymentScreenWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeDeploymentScreenWidget.cs."
---
# OrderSiegeDeploymentScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OrderSiegeDeploymentScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeDeploymentScreenWidget.cs`

## Overview

OrderSiegeDeploymentScreenWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeDeploymentScreenWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is OrderSiegeDeploymentScreenWidget → Widget. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderSiegeDeploymentScreenWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order) the module directory; inheritance chain OrderSiegeDeploymentScreenWidget → Widget. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeDeploymentScreenWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderSiegeDeploymentScreenWidget` | `public OrderSiegeDeploymentScreenWidget(UIContext context) : base(context)` | constructor |
| `SetSelectedDeploymentItem` | `public void SetSelectedDeploymentItem(OrderSiegeDeploymentItemButtonWidget deploymentItem)` | method |
| `IsSiegeDeploymentDisabled` | `public bool IsSiegeDeploymentDisabled` | property |
| `DeploymentTargetsParent` | `public Widget DeploymentTargetsParent` | property |
| `DeploymentListPanel` | `public ListPanel DeploymentListPanel` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace OrderCircleActionSelectorParentWidget](../OrderCircleActionSelectorParentWidget)
- [same namespace OrderItemButtonWidget](../OrderItemButtonWidget)
- [same namespace OrderSiegeDeploymentItemButtonWidget](../OrderSiegeDeploymentItemButtonWidget)
- [same namespace OrderSiegeMachineItemButtonWidget](../OrderSiegeMachineItemButtonWidget)
