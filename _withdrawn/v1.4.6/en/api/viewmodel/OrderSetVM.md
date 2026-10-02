---
title: "OrderSetVM"
description: "OrderSetVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Order, inheriting OrderItemBaseVM; 20 exposed members (12 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSetVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderSetVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderSetVM : OrderItemBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSetVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

OrderSetVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSetVM.cs. It is a public class, implementing/inheriting OrderItemBaseVM; the inheritance chain is OrderSetVM → OrderItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 20 public/protected members: 12 methods, 5 properties, 1 events, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderSetVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order`, inheritance chain OrderSetVM → OrderItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 12/20, properties 5/20), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSetVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnSelectionStateChanged;` | `public static event OrderSetVM.OnOrderSetSelectionStateChangedDelegate OnSelectionStateChanged;` | event |
| `HasSingleOrder` | `public bool HasSingleOrder` | property |
| `OrderSet` | `public VisualOrderSet OrderSet` | property |
| `OrderSetVM` | `public OrderSetVM(OrderController orderController, VisualOrderSet collection) : base(orderController)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `OnExecuteAction` | `protected override void OnExecuteAction(VisualOrderExecutionParameters executionParameters)` | method |
| `OnRefreshState` | `protected override void OnRefreshState()` | method |
| `ExecuteSelect` | `public void ExecuteSelect()` | method |
| `ExecuteDeSelect` | `public void ExecuteDeSelect()` | method |
| `OnOrderExecuted` | `public void OnOrderExecuted(OrderItemVM order)` | method |
| `RefreshOrders` | `public void RefreshOrders()` | method |
| `OnSelectedStateChanged` | `protected override void OnSelectedStateChanged(bool isSelected)` | method |
| `RefreshOrderStates` | `public void RefreshOrderStates()` | method |
| `UpdateCanUseShortcuts` | `public void UpdateCanUseShortcuts(bool value)` | method |
| `SelectedOrderText` | `public string SelectedOrderText` | property |
| `SoloOrder` | `public OrderItemVM SoloOrder` | property |
| `MBBindingList` | `public MBBindingList<OrderItemVM>Orders` | property |
| `OnOrderSetSelectionStateChangedDelegate` | `public delegate void OnOrderSetSelectionStateChangedDelegate(OrderSetVM orderSet, bool isSelected);` | method |
| `OnOrderSetSelectionStateChangedDelegate` | `public delegate void OnOrderSetSelectionStateChangedDelegate(OrderSetVM orderSet, bool isSelected)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface OrderItemBaseVM](../OrderItemBaseVM/)
- [same namespace DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM/)
- [same namespace MissionOrderCallbacks](../MissionOrderCallbacks/)
- [same namespace MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM/)
- [same namespace MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM/)
