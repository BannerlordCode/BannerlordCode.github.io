---
title: "OrderSubjectVM"
description: "OrderSubjectVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Order, inheriting ViewModel; 16 exposed members (5 methods, 10 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSubjectVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderSubjectVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class OrderSubjectVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSubjectVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

OrderSubjectVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSubjectVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is OrderSubjectVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 16 public/protected members: 5 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderSubjectVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order`, inheritance chain OrderSubjectVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 10/16, methods 5/16), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSubjectVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM/)
- [same namespace MissionOrderCallbacks](../MissionOrderCallbacks/)
- [same namespace MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM/)
- [same namespace MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM/)
