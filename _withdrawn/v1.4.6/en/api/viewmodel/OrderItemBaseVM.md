---
title: "OrderItemBaseVM"
description: "OrderItemBaseVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Order, inheriting ViewModel; 15 exposed members (7 methods, 7 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemBaseVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderItemBaseVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class OrderItemBaseVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemBaseVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

OrderItemBaseVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemBaseVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is OrderItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 15 public/protected members: 7 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderItemBaseVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order`, inheritance chain OrderItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 7/15, properties 7/15), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemBaseVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OrderItemBaseVM` | `public OrderItemBaseVM(OrderController orderController)` | constructor |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `RefreshState` | `public void RefreshState()` | method |
| `ExecuteAction` | `public void ExecuteAction(VisualOrderExecutionParameters executionParameters)` | method |
| `OnSelectedStateChanged` | `protected virtual void OnSelectedStateChanged(bool isSelected)` | method |
| `OnRefreshState` | `protected abstract void OnRefreshState();` | method |
| `OnExecuteAction` | `protected abstract void OnExecuteAction(VisualOrderExecutionParameters executionParameters);` | method |
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey` | property |
| `SetShortcutKey` | `public void SetShortcutKey(InputKeyItemVM inputKeyItem)` | method |
| `IsActive` | `public bool IsActive` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `CanUseShortcuts` | `public bool CanUseShortcuts` | property |
| `OrderIconId` | `public string OrderIconId` | property |
| `SelectionState` | `public string SelectionState` | property |
| `Name` | `public string Name` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM/)
- [same namespace MissionOrderCallbacks](../MissionOrderCallbacks/)
- [same namespace MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM/)
- [same namespace MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM/)
