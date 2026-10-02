---
title: "OrderSiegeDeploymentItemButtonWidget"
description: "OrderSiegeDeploymentItemButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 10 exposed members (1 methods, 8 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeDeploymentItemButtonWidget.cs."
---
# OrderSiegeDeploymentItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OrderSiegeDeploymentItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeDeploymentItemButtonWidget.cs`

## Overview

OrderSiegeDeploymentItemButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeDeploymentItemButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is OrderSiegeDeploymentItemButtonWidget → ButtonWidget. It exposes 10 public/protected members: 1 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderSiegeDeploymentItemButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order) the module directory; inheritance chain OrderSiegeDeploymentItemButtonWidget → ButtonWidget. The surface is property-led (properties 8/10, methods 1/10), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeDeploymentItemButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderSiegeDeploymentItemButtonWidget` | `public OrderSiegeDeploymentItemButtonWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `BreachedTextWidget` | `public TextWidget BreachedTextWidget` | property |
| `TypeIconWidget` | `public Widget TypeIconWidget` | property |
| `Position` | `public Vec2 Position` | property |
| `PointType` | `public int PointType` | property |
| `IsInsideWindow` | `public bool IsInsideWindow` | property |
| `IsInFront` | `public bool IsInFront` | property |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral` | property |
| `ScreenWidget` | `public OrderSiegeDeploymentScreenWidget ScreenWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace OrderCircleActionSelectorParentWidget](../OrderCircleActionSelectorParentWidget)
- [same namespace OrderItemButtonWidget](../OrderItemButtonWidget)
- [same namespace OrderSiegeDeploymentScreenWidget](../OrderSiegeDeploymentScreenWidget)
- [same namespace OrderSiegeMachineItemButtonWidget](../OrderSiegeMachineItemButtonWidget)
