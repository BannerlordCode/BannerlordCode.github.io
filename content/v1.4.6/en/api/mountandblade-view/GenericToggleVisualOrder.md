---
title: "GenericToggleVisualOrder"
description: "GenericToggleVisualOrder: a public class in TaleWorlds.MountAndBlade.View, inheriting VisualOrder; 8 exposed members (5 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/ToggleOrders/GenericToggleVisualOrder.cs."
---
# GenericToggleVisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.ToggleOrders`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class GenericToggleVisualOrder : VisualOrder`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/ToggleOrders/GenericToggleVisualOrder.cs`

## Overview

GenericToggleVisualOrder lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/ToggleOrders/GenericToggleVisualOrder.cs. It is a public class, implementing/inheriting VisualOrder; the inheritance chain is GenericToggleVisualOrder → VisualOrder. It exposes 8 public/protected members: 5 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GenericToggleVisualOrder is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.ToggleOrders) the module directory; inheritance chain GenericToggleVisualOrder → VisualOrder. The surface is method-led (methods 5/8, properties 2/8), so it mostly exposes operations. VisualOrder on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/ToggleOrders/GenericToggleVisualOrder.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PositiveOrder` | `public OrderType PositiveOrder` | property |
| `NegativeOrder` | `public OrderType NegativeOrder` | property |
| `GenericToggleVisualOrder` | `public GenericToggleVisualOrder(string stringId, OrderType positiveOrder, OrderType negativeOrder) : base(stringId)` | constructor |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | method |
| `IsTargeted` | `public override bool IsTargeted()` | method |
| `ExecuteOrder` | `public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | method |
| `OnGetFormationHasOrder` | `protected override bool? OnGetFormationHasOrder(Formation formation)` | method |
| `GetIconId` | `protected override string GetIconId()` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
