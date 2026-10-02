---
title: "ActionVisualOrder"
description: "ActionVisualOrder: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual, inheriting VisualOrder; 7 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/ActionVisualOrder.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ActionVisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public sealed class ActionVisualOrder : VisualOrder`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/ActionVisualOrder.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

ActionVisualOrder lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/ActionVisualOrder.cs. It is a public class (sealed), implementing/inheriting VisualOrder; the inheritance chain is ActionVisualOrder → VisualOrder. It exposes 7 public/protected members: 5 methods, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ActionVisualOrder lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`, inheritance chain ActionVisualOrder → VisualOrder. The surface is method-led (methods 5/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/ActionVisualOrder.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ActionVisualOrder` | `public ActionVisualOrder(string iconId, ActionVisualOrder.OrderActionDelegate orderAction, TextObject name) : base(iconId)` | constructor |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | method |
| `IsTargeted` | `public override bool IsTargeted()` | method |
| `ExecuteOrder` | `public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | method |
| `OnGetFormationHasOrder` | `protected override bool? OnGetFormationHasOrder(Formation formation)` | method |
| `OrderActionDelegate` | `public delegate void OrderActionDelegate(OrderController orderController, VisualOrderExecutionParameters executionParameters);` | method |
| `OrderActionDelegate` | `public delegate void OrderActionDelegate(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface VisualOrder](../VisualOrder/)
- [same namespace OrderState](../OrderState/)
- [same namespace ReturnVisualOrder](../ReturnVisualOrder/)
- [same namespace TransferTroopsVisualOrder](../TransferTroopsVisualOrder/)
- [same namespace VisualOrder](../VisualOrder/)
