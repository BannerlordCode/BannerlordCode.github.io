---
title: "OrderItemVM"
description: "OrderItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Order, inheriting OrderItemBaseVM; 5 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderItemVM : OrderItemBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

OrderItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemVM.cs. It is a public class, implementing/inheriting OrderItemBaseVM; the inheritance chain is OrderItemVM → OrderItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 3 methods, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order`, inheritance chain OrderItemVM → OrderItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 3/5, properties 0/5), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Action` | `public static event Action<OrderItemVM>OnExecuteOrder;` | event |
| `OrderItemVM` | `public OrderItemVM(OrderController orderController, VisualOrder order) : base(orderController)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnRefreshState` | `protected override void OnRefreshState()` | method |
| `OnExecuteAction` | `protected override void OnExecuteAction(VisualOrderExecutionParameters executionParameters)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface OrderItemBaseVM](../OrderItemBaseVM/)
- [same namespace DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM/)
- [same namespace MissionOrderCallbacks](../MissionOrderCallbacks/)
- [same namespace MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM/)
- [same namespace MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM/)
