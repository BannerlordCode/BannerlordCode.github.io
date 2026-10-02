---
title: "ActionVisualOrder"
description: "ActionVisualOrder: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting VisualOrder; 7 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/ActionVisualOrder.cs."
---
# ActionVisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public sealed class ActionVisualOrder : VisualOrder`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/ActionVisualOrder.cs`

## Overview

ActionVisualOrder lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/ActionVisualOrder.cs. It is a public class (sealed), implementing/inheriting VisualOrder; the inheritance chain is ActionVisualOrder → VisualOrder. It exposes 7 public/protected members: 5 methods, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ActionVisualOrder is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual) the module directory; inheritance chain ActionVisualOrder → VisualOrder. The surface is method-led (methods 5/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/ActionVisualOrder.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ActionVisualOrder` | `public ActionVisualOrder(string iconId, ActionVisualOrder.OrderActionDelegate orderAction, TextObject name) : base(iconId)` | constructor |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | method |
| `IsTargeted` | `public override bool IsTargeted()` | method |
| `ExecuteOrder` | `public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | method |
| `OnGetFormationHasOrder` | `protected override bool? OnGetFormationHasOrder(Formation formation)` | method |
| `OrderActionDelegate` | `public delegate void OrderActionDelegate(OrderController orderController, VisualOrderExecutionParameters executionParameters);` | method |
| `OrderActionDelegate` | `public delegate void OrderActionDelegate(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | nested type |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface VisualOrder](../VisualOrder)
- [same namespace OrderState](../OrderState)
- [same namespace ReturnVisualOrder](../ReturnVisualOrder)
- [same namespace TransferTroopsVisualOrder](../TransferTroopsVisualOrder)
- [same namespace VisualOrder](../VisualOrder)
