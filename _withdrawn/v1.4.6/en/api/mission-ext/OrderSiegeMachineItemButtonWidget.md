---
title: "OrderSiegeMachineItemButtonWidget"
description: "OrderSiegeMachineItemButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order, inheriting ButtonWidget; 6 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeMachineItemButtonWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderSiegeMachineItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OrderSiegeMachineItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeMachineItemButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

OrderSiegeMachineItemButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeMachineItemButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is OrderSiegeMachineItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderSiegeMachineItemButtonWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order`, inheritance chain OrderSiegeMachineItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeMachineItemButtonWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OrderSiegeMachineItemButtonWidget` | `public OrderSiegeMachineItemButtonWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `RemainingCount` | `public int RemainingCount` | property |
| `RemainingCountWidget` | `public TextWidget RemainingCountWidget` | property |
| `MachineClass` | `public string MachineClass` | property |
| `MachineIconWidget` | `public Widget MachineIconWidget` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ButtonWidget](../../gui/ButtonWidget/)
- [same namespace OrderCircleActionSelectorParentWidget](../OrderCircleActionSelectorParentWidget/)
- [same namespace OrderItemButtonWidget](../OrderItemButtonWidget/)
- [same namespace OrderSiegeDeploymentItemButtonWidget](../OrderSiegeDeploymentItemButtonWidget/)
- [same namespace OrderSiegeDeploymentScreenWidget](../OrderSiegeDeploymentScreenWidget/)
