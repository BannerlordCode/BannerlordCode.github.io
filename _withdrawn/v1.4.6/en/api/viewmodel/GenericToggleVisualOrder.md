---
title: "GenericToggleVisualOrder"
description: "GenericToggleVisualOrder: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.ToggleOrders, inheriting VisualOrder; 8 exposed members (5 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/ToggleOrders/GenericToggleVisualOrder.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GenericToggleVisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.ToggleOrders`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class GenericToggleVisualOrder : VisualOrder`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/ToggleOrders/GenericToggleVisualOrder.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

GenericToggleVisualOrder lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/ToggleOrders/GenericToggleVisualOrder.cs. It is a public class, implementing/inheriting VisualOrder; the inheritance chain is GenericToggleVisualOrder → VisualOrder. It exposes 8 public/protected members: 5 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GenericToggleVisualOrder lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.ToggleOrders`, inheritance chain GenericToggleVisualOrder → VisualOrder. The surface is method-led (methods 5/8, properties 2/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/ToggleOrders/GenericToggleVisualOrder.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface VisualOrder](../VisualOrder/)
