---
title: "TransferTroopsVisualOrder"
description: "TransferTroopsVisualOrder: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual, inheriting VisualOrder; 6 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/TransferTroopsVisualOrder.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TransferTroopsVisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class TransferTroopsVisualOrder : VisualOrder`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/TransferTroopsVisualOrder.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

TransferTroopsVisualOrder lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/TransferTroopsVisualOrder.cs. It is a public class, implementing/inheriting VisualOrder; the inheritance chain is TransferTroopsVisualOrder → VisualOrder. It exposes 6 public/protected members: 4 methods, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TransferTroopsVisualOrder lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`, inheritance chain TransferTroopsVisualOrder → VisualOrder. The surface is method-led (methods 4/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/TransferTroopsVisualOrder.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnTransferStarted;` | `public static event Action OnTransferStarted;` | event |
| `TransferTroopsVisualOrder` | `public TransferTroopsVisualOrder() : base(" ")` | constructor |
| `ExecuteOrder` | `public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | method |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | method |
| `IsTargeted` | `public override bool IsTargeted()` | method |
| `OnGetFormationHasOrder` | `protected override bool? OnGetFormationHasOrder(Formation formation)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface VisualOrder](../VisualOrder/)
- [same namespace ActionVisualOrder](../ActionVisualOrder/)
- [same namespace OrderState](../OrderState/)
- [same namespace ReturnVisualOrder](../ReturnVisualOrder/)
- [same namespace VisualOrder](../VisualOrder/)
