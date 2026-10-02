---
title: "ReturnVisualOrder"
description: "ReturnVisualOrder: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting VisualOrder; 5 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/ReturnVisualOrder.cs."
---
# ReturnVisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public sealed class ReturnVisualOrder : VisualOrder`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/ReturnVisualOrder.cs`

## Overview

ReturnVisualOrder lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/ReturnVisualOrder.cs. It is a public class (sealed), implementing/inheriting VisualOrder; the inheritance chain is ReturnVisualOrder → VisualOrder. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ReturnVisualOrder is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual) the module directory; inheritance chain ReturnVisualOrder → VisualOrder. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/ReturnVisualOrder.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ReturnVisualOrder` | `public ReturnVisualOrder() : base(" ")` | constructor |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | method |
| `IsTargeted` | `public override bool IsTargeted()` | method |
| `ExecuteOrder` | `public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | method |
| `OnGetFormationHasOrder` | `protected override bool? OnGetFormationHasOrder(Formation formation)` | method |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface VisualOrder](../VisualOrder)
- [same namespace ActionVisualOrder](../ActionVisualOrder)
- [same namespace OrderState](../OrderState)
- [same namespace TransferTroopsVisualOrder](../TransferTroopsVisualOrder)
- [same namespace VisualOrder](../VisualOrder)
