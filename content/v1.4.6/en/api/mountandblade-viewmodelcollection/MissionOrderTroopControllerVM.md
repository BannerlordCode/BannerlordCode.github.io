---
title: "MissionOrderTroopControllerVM"
description: "MissionOrderTroopControllerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 55 exposed members (30 methods, 23 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderTroopControllerVM.cs."
---
# MissionOrderTroopControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionOrderTroopControllerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderTroopControllerVM.cs`

## Overview

MissionOrderTroopControllerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderTroopControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionOrderTroopControllerVM → ViewModel. It exposes 55 public/protected members: 30 methods, 23 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionOrderTroopControllerVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Order) the module directory; inheritance chain MissionOrderTroopControllerVM → ViewModel. The surface is method-led (methods 30/55, properties 23/55), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderTroopControllerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBList` | `public MBList<OrderTroopItemVM>TroopList` | property |
| `Team` | `protected Team Team` | property |
| `OrderController` | `protected OrderController OrderController` | property |
| `MissionOrderTroopControllerVM` | `public MissionOrderTroopControllerVM(MissionOrderVM missionOrder, bool isDeployment, Action onTransferFinised)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ExecuteSelectAll` | `public void ExecuteSelectAll()` | method |
| `ExecuteSelectTransferTroop` | `public void ExecuteSelectTransferTroop(OrderTroopItemVM targetTroop)` | method |
| `ExecuteConfirmTransfer` | `public void ExecuteConfirmTransfer()` | method |
| `ExecuteCancelTransfer` | `public void ExecuteCancelTransfer()` | method |
| `ExecuteReset` | `public void ExecuteReset()` | method |
| `SetTroopActiveOrders` | `public void SetTroopActiveOrders(OrderTroopItemVM item)` | method |
| `SelectAllFormations` | `public virtual void SelectAllFormations(bool uiFeedback = true)` | method |
| `AddSelectedFormation` | `public virtual void AddSelectedFormation(OrderTroopItemVM item)` | method |
| `SetSelectedFormation` | `public void SetSelectedFormation(OrderTroopItemVM item)` | method |
| `OnDeselectFormation` | `public void OnDeselectFormation(int index)` | method |
| `OnDeselectFormation` | `public void OnDeselectFormation(OrderTroopItemVM item)` | method |
| `OnSelectFormation` | `public void OnSelectFormation(OrderTroopItemVM item)` | method |
| `CreateTroopItemVM` | `protected virtual OrderTroopItemVM CreateTroopItemVM(Formation formation, Action<OrderTroopItemVM>onSelectFormation, Func<Formation, int>getFormationMorale)` | method |
| `UpdateTroops` | `public void UpdateTroops()` | method |
| `AddTroops` | `public void AddTroops(Agent agent)` | method |
| `RemoveTroops` | `public void RemoveTroops(Agent agent)` | method |
| `OnTroopOrderIssued` | `public void OnTroopOrderIssued(List<OrderTroopItemVM>selectedFormations, OrderItemVM orderItem)` | method |
| `IntervalUpdate` | `public void IntervalUpdate()` | method |
| `RefreshTroopFormationTargetVisuals` | `public void RefreshTroopFormationTargetVisuals()` | method |
| `OnSelectFormationWithIndex` | `public void OnSelectFormationWithIndex(int formationTroopIndex)` | method |
| `SetCurrentActiveOrders` | `public void SetCurrentActiveOrders()` | method |
| `OnFiltersSet` | `public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration>filterData)` | method |
| `OnDeploymentFinished` | `public void OnDeploymentFinished()` | method |
| `OnAfterDeploymentFinished` | `public void OnAfterDeploymentFinished()` | method |
| `OnAfterNewTroopItemAdded` | `protected virtual void OnAfterNewTroopItemAdded()` | method |
| `IsTransferActive` | `public bool IsTransferActive` | property |
| `IsTransferValid` | `public bool IsTransferValid` | property |
| `MBBindingList` | `public MBBindingList<OrderTroopItemVM>TransferTargetList` | property |
| `TransferMaxValue` | `public int TransferMaxValue` | property |
| `TransferValue` | `public int TransferValue` | property |
| `TransferTitleText` | `public string TransferTitleText` | property |
| `AcceptText` | `public string AcceptText` | property |
| `CancelText` | `public string CancelText` | property |
| `TroopItem0` | `public OrderTroopItemVM TroopItem0` | property |
| `TroopItem1` | `public OrderTroopItemVM TroopItem1` | property |
| `TroopItem2` | `public OrderTroopItemVM TroopItem2` | property |
| `TroopItem3` | `public OrderTroopItemVM TroopItem3` | property |
| `TroopItem4` | `public OrderTroopItemVM TroopItem4` | property |
| `TroopItem5` | `public OrderTroopItemVM TroopItem5` | property |
| `TroopItem6` | `public OrderTroopItemVM TroopItem6` | property |
| `TroopItem7` | `public OrderTroopItemVM TroopItem7` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | property |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotKey)` | method |
| `IComparer` | `protected class TroopItemFormationIndexComparer : IComparer<OrderTroopItemVM>` | property |
| `IComparer` | `protected class TroopItemFormationIndexComparer : IComparer<OrderTroopItemVM>` | nested type |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM)
- [same namespace MissionOrderCallbacks](../MissionOrderCallbacks)
- [same namespace MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM)
- [same namespace MissionOrderVM](../MissionOrderVM)
