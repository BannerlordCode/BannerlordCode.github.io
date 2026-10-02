---
title: "OrderSubjectVM"
description: "OrderSubjectVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 16 exposed members (5 methods, 10 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSubjectVM.cs."
---
# OrderSubjectVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class OrderSubjectVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSubjectVM.cs`

## Overview

OrderSubjectVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSubjectVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is OrderSubjectVM → ViewModel. It exposes 16 public/protected members: 5 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderSubjectVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Order) the module directory; inheritance chain OrderSubjectVM → ViewModel. The surface is property-led (properties 10/16, methods 5/16), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSubjectVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderSubjectVM` | `public OrderSubjectVM()` | constructor |
| `AddActiveOrder` | `public void AddActiveOrder(OrderItemVM order)` | method |
| `RemoveActiveOrder` | `public void RemoveActiveOrder(OrderItemVM order)` | method |
| `ClearActiveOrders` | `public void ClearActiveOrders()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnSelectionStateChanged` | `protected abstract void OnSelectionStateChanged(bool isSelected);` | method |
| `IsSelectable` | `public bool IsSelectable` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `IsSelectionHighlightActive` | `public bool IsSelectionHighlightActive` | property |
| `ShowSelectionInputs` | `public bool ShowSelectionInputs` | property |
| `BehaviorType` | `public int BehaviorType` | property |
| `UnderAttackOfType` | `public int UnderAttackOfType` | property |
| `SelectionText` | `public string SelectionText` | property |
| `ApplySelectionKey` | `public InputKeyItemVM ApplySelectionKey` | property |
| `ToggleSelectionKey` | `public InputKeyItemVM ToggleSelectionKey` | property |
| `MBBindingList` | `public MBBindingList<OrderItemVM>ActiveOrders` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM)
- [same namespace MissionOrderCallbacks](../MissionOrderCallbacks)
- [same namespace MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM)
- [same namespace MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM)
