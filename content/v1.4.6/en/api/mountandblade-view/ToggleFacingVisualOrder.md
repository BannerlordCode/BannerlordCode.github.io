---
title: "ToggleFacingVisualOrder"
description: "ToggleFacingVisualOrder: a public class in TaleWorlds.MountAndBlade.View, inheriting VisualOrder; 6 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/ToggleOrders/ToggleFacingVisualOrder.cs."
---
# ToggleFacingVisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.View.VisualOrders.Orders.ToggleOrders`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class ToggleFacingVisualOrder : VisualOrder`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/ToggleOrders/ToggleFacingVisualOrder.cs`

## Overview

ToggleFacingVisualOrder lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/ToggleOrders/ToggleFacingVisualOrder.cs. It is a public class, implementing/inheriting VisualOrder; the inheritance chain is ToggleFacingVisualOrder → VisualOrder. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ToggleFacingVisualOrder is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.VisualOrders.Orders.ToggleOrders) the module directory; inheritance chain ToggleFacingVisualOrder → VisualOrder. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. VisualOrder on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/ToggleOrders/ToggleFacingVisualOrder.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ToggleFacingVisualOrder` | `public ToggleFacingVisualOrder(string iconId) : base(iconId)` | constructor |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | method |
| `ExecuteOrder` | `public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | method |
| `IsTargeted` | `public override bool IsTargeted()` | method |
| `OnGetFormationHasOrder` | `protected override bool? OnGetFormationHasOrder(Formation formation)` | method |
| `GetIconId` | `protected override string GetIconId()` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
