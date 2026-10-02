---
title: "TransferTroopsVisualOrder"
description: "TransferTroopsVisualOrder: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting VisualOrder; 6 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/TransferTroopsVisualOrder.cs."
---
# TransferTroopsVisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class TransferTroopsVisualOrder : VisualOrder`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/TransferTroopsVisualOrder.cs`

## Overview

TransferTroopsVisualOrder lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/TransferTroopsVisualOrder.cs. It is a public class, implementing/inheriting VisualOrder; the inheritance chain is TransferTroopsVisualOrder → VisualOrder. It exposes 6 public/protected members: 4 methods, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TransferTroopsVisualOrder is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual) the module directory; inheritance chain TransferTroopsVisualOrder → VisualOrder. The surface is method-led (methods 4/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/TransferTroopsVisualOrder.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnTransferStarted;` | `public static event Action OnTransferStarted;` | event |
| `TransferTroopsVisualOrder` | `public TransferTroopsVisualOrder() : base(" ")` | constructor |
| `ExecuteOrder` | `public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | method |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | method |
| `IsTargeted` | `public override bool IsTargeted()` | method |
| `OnGetFormationHasOrder` | `protected override bool? OnGetFormationHasOrder(Formation formation)` | method |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface VisualOrder](../VisualOrder)
- [same namespace ActionVisualOrder](../ActionVisualOrder)
- [same namespace OrderState](../OrderState)
- [same namespace ReturnVisualOrder](../ReturnVisualOrder)
- [same namespace VisualOrder](../VisualOrder)
