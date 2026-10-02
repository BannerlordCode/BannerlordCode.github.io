---
title: "OrderItemBaseVM"
description: "OrderItemBaseVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 15 exposed members (7 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemBaseVM.cs."
---
# OrderItemBaseVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class OrderItemBaseVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemBaseVM.cs`

## Overview

OrderItemBaseVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemBaseVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is OrderItemBaseVM → ViewModel. It exposes 15 public/protected members: 7 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderItemBaseVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Order) the module directory; inheritance chain OrderItemBaseVM → ViewModel. The surface is method-led (methods 7/15, properties 7/15), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemBaseVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM)
- [same namespace MissionOrderCallbacks](../MissionOrderCallbacks)
- [same namespace MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM)
- [same namespace MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM)
