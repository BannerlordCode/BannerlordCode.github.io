---
title: "AdvanceVisualOrder"
description: "AdvanceVisualOrder: a public class in TaleWorlds.MountAndBlade.View, inheriting VisualOrder; 5 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/MovementOrders/AdvanceVisualOrder.cs."
---
# AdvanceVisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class AdvanceVisualOrder : VisualOrder`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/MovementOrders/AdvanceVisualOrder.cs`

## Overview

AdvanceVisualOrder lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/MovementOrders/AdvanceVisualOrder.cs. It is a public class, implementing/inheriting VisualOrder; the inheritance chain is AdvanceVisualOrder → VisualOrder. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AdvanceVisualOrder is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders) the module directory; inheritance chain AdvanceVisualOrder → VisualOrder. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. VisualOrder on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/MovementOrders/AdvanceVisualOrder.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AdvanceVisualOrder` | `public AdvanceVisualOrder(string iconId) : base(iconId)` | constructor |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | method |
| `ExecuteOrder` | `public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | method |
| `OnGetFormationHasOrder` | `protected override bool? OnGetFormationHasOrder(Formation formation)` | method |
| `IsTargeted` | `public override bool IsTargeted()` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ChargeVisualOrder](../ChargeVisualOrder)
- [same namespace FallbackVisualOrder](../FallbackVisualOrder)
- [same namespace FollowMeVisualOrder](../FollowMeVisualOrder)
- [same namespace MoveVisualOrder](../MoveVisualOrder)
