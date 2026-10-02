---
title: "OrderItemVM"
description: "OrderItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting OrderItemBaseVM; 5 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemVM.cs."
---
# OrderItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderItemVM : OrderItemBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemVM.cs`

## Overview

OrderItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemVM.cs. It is a public class, implementing/inheriting OrderItemBaseVM; the inheritance chain is OrderItemVM → OrderItemBaseVM → ViewModel. It exposes 5 public/protected members: 3 methods, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Order) the module directory; inheritance chain OrderItemVM → OrderItemBaseVM → ViewModel. The surface is method-led (methods 3/5, properties 0/5), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public static event Action<OrderItemVM>OnExecuteOrder;` | event |
| `OrderItemVM` | `public OrderItemVM(OrderController orderController, VisualOrder order) : base(orderController)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnRefreshState` | `protected override void OnRefreshState()` | method |
| `OnExecuteAction` | `protected override void OnExecuteAction(VisualOrderExecutionParameters executionParameters)` | method |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface OrderItemBaseVM](../OrderItemBaseVM)
- [same namespace DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM)
- [same namespace MissionOrderCallbacks](../MissionOrderCallbacks)
- [same namespace MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM)
- [same namespace MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM)
