---
title: "OrderSiegeDeploymentItemButtonWidget"
description: "OrderSiegeDeploymentItemButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order, inheriting ButtonWidget; 10 exposed members (1 methods, 8 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeDeploymentItemButtonWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderSiegeDeploymentItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OrderSiegeDeploymentItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeDeploymentItemButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

OrderSiegeDeploymentItemButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeDeploymentItemButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is OrderSiegeDeploymentItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 10 public/protected members: 1 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderSiegeDeploymentItemButtonWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order`, inheritance chain OrderSiegeDeploymentItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 8/10, methods 1/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeDeploymentItemButtonWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ButtonWidget](../../gui/ButtonWidget/)
- [same namespace OrderCircleActionSelectorParentWidget](../OrderCircleActionSelectorParentWidget/)
- [same namespace OrderItemButtonWidget](../OrderItemButtonWidget/)
- [same namespace OrderSiegeDeploymentScreenWidget](../OrderSiegeDeploymentScreenWidget/)
- [same namespace OrderSiegeMachineItemButtonWidget](../OrderSiegeMachineItemButtonWidget/)
