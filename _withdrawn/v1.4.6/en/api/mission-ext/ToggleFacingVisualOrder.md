---
title: "ToggleFacingVisualOrder"
description: "ToggleFacingVisualOrder: a public class in TaleWorlds.MountAndBlade.View.VisualOrders.Orders.ToggleOrders, inheriting VisualOrder; 6 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/ToggleOrders/ToggleFacingVisualOrder.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ToggleFacingVisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.View.VisualOrders.Orders.ToggleOrders`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class ToggleFacingVisualOrder : VisualOrder`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/ToggleOrders/ToggleFacingVisualOrder.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ToggleFacingVisualOrder lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/ToggleOrders/ToggleFacingVisualOrder.cs. It is a public class, implementing/inheriting VisualOrder; the inheritance chain is ToggleFacingVisualOrder → VisualOrder. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ToggleFacingVisualOrder lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.VisualOrders.Orders.ToggleOrders`, inheritance chain ToggleFacingVisualOrder → VisualOrder. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/ToggleOrders/ToggleFacingVisualOrder.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ToggleFacingVisualOrder` | `public ToggleFacingVisualOrder(string iconId) : base(iconId)` | constructor |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | method |
| `ExecuteOrder` | `public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | method |
| `IsTargeted` | `public override bool IsTargeted()` | method |
| `OnGetFormationHasOrder` | `protected override bool? OnGetFormationHasOrder(Formation formation)` | method |
| `GetIconId` | `protected override string GetIconId()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface VisualOrder](../../viewmodel/VisualOrder/)
