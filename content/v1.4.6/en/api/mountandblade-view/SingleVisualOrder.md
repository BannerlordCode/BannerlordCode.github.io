---
title: "SingleVisualOrder"
description: "SingleVisualOrder: a public class in TaleWorlds.MountAndBlade.View, inheriting VisualOrder; 5 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/SingleVisualOrder.cs."
---
# SingleVisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.View.VisualOrders.Orders`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class SingleVisualOrder : VisualOrder`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/SingleVisualOrder.cs`

## Overview

SingleVisualOrder lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/SingleVisualOrder.cs. It is a public class, implementing/inheriting VisualOrder; the inheritance chain is SingleVisualOrder → VisualOrder. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SingleVisualOrder is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.VisualOrders.Orders) the module directory; inheritance chain SingleVisualOrder → VisualOrder. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. VisualOrder on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/SingleVisualOrder.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SingleVisualOrder` | `public SingleVisualOrder(string stringId, TextObject name, OrderType orderType, bool useFormationTarget, bool useWorldPositionTarget) : base(stringId)` | constructor |
| `ExecuteOrder` | `public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | method |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | method |
| `IsTargeted` | `public override bool IsTargeted()` | method |
| `OnGetFormationHasOrder` | `protected override bool? OnGetFormationHasOrder(Formation formation)` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
