---
title: "MissionOrderTroopControllerVM"
description: "MissionOrderTroopControllerVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 55 个（方法 30、属性 23、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderTroopControllerVM.cs。"
---
# MissionOrderTroopControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionOrderTroopControllerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderTroopControllerVM.cs`

## 概述

MissionOrderTroopControllerVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderTroopControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionOrderTroopControllerVM → ViewModel。public/protected 成员共 55 个：30 方法、23 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionOrderTroopControllerVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.Order），继承链 MissionOrderTroopControllerVM → ViewModel。成员构成以方法为主（方法 30/55，属性 23/55），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderTroopControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBList` | `public MBList<OrderTroopItemVM>TroopList` | 属性 |
| `Team` | `protected Team Team` | 属性 |
| `OrderController` | `protected OrderController OrderController` | 属性 |
| `MissionOrderTroopControllerVM` | `public MissionOrderTroopControllerVM(MissionOrderVM missionOrder, bool isDeployment, Action onTransferFinised)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ExecuteSelectAll` | `public void ExecuteSelectAll()` | 方法 |
| `ExecuteSelectTransferTroop` | `public void ExecuteSelectTransferTroop(OrderTroopItemVM targetTroop)` | 方法 |
| `ExecuteConfirmTransfer` | `public void ExecuteConfirmTransfer()` | 方法 |
| `ExecuteCancelTransfer` | `public void ExecuteCancelTransfer()` | 方法 |
| `ExecuteReset` | `public void ExecuteReset()` | 方法 |
| `SetTroopActiveOrders` | `public void SetTroopActiveOrders(OrderTroopItemVM item)` | 方法 |
| `SelectAllFormations` | `public virtual void SelectAllFormations(bool uiFeedback = true)` | 方法 |
| `AddSelectedFormation` | `public virtual void AddSelectedFormation(OrderTroopItemVM item)` | 方法 |
| `SetSelectedFormation` | `public void SetSelectedFormation(OrderTroopItemVM item)` | 方法 |
| `OnDeselectFormation` | `public void OnDeselectFormation(int index)` | 方法 |
| `OnDeselectFormation` | `public void OnDeselectFormation(OrderTroopItemVM item)` | 方法 |
| `OnSelectFormation` | `public void OnSelectFormation(OrderTroopItemVM item)` | 方法 |
| `CreateTroopItemVM` | `protected virtual OrderTroopItemVM CreateTroopItemVM(Formation formation, Action<OrderTroopItemVM>onSelectFormation, Func<Formation, int>getFormationMorale)` | 方法 |
| `UpdateTroops` | `public void UpdateTroops()` | 方法 |
| `AddTroops` | `public void AddTroops(Agent agent)` | 方法 |
| `RemoveTroops` | `public void RemoveTroops(Agent agent)` | 方法 |
| `OnTroopOrderIssued` | `public void OnTroopOrderIssued(List<OrderTroopItemVM>selectedFormations, OrderItemVM orderItem)` | 方法 |
| `IntervalUpdate` | `public void IntervalUpdate()` | 方法 |
| `RefreshTroopFormationTargetVisuals` | `public void RefreshTroopFormationTargetVisuals()` | 方法 |
| `OnSelectFormationWithIndex` | `public void OnSelectFormationWithIndex(int formationTroopIndex)` | 方法 |
| `SetCurrentActiveOrders` | `public void SetCurrentActiveOrders()` | 方法 |
| `OnFiltersSet` | `public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration>filterData)` | 方法 |
| `OnDeploymentFinished` | `public void OnDeploymentFinished()` | 方法 |
| `OnAfterDeploymentFinished` | `public void OnAfterDeploymentFinished()` | 方法 |
| `OnAfterNewTroopItemAdded` | `protected virtual void OnAfterNewTroopItemAdded()` | 方法 |
| `IsTransferActive` | `public bool IsTransferActive` | 属性 |
| `IsTransferValid` | `public bool IsTransferValid` | 属性 |
| `MBBindingList` | `public MBBindingList<OrderTroopItemVM>TransferTargetList` | 属性 |
| `TransferMaxValue` | `public int TransferMaxValue` | 属性 |
| `TransferValue` | `public int TransferValue` | 属性 |
| `TransferTitleText` | `public string TransferTitleText` | 属性 |
| `AcceptText` | `public string AcceptText` | 属性 |
| `CancelText` | `public string CancelText` | 属性 |
| `TroopItem0` | `public OrderTroopItemVM TroopItem0` | 属性 |
| `TroopItem1` | `public OrderTroopItemVM TroopItem1` | 属性 |
| `TroopItem2` | `public OrderTroopItemVM TroopItem2` | 属性 |
| `TroopItem3` | `public OrderTroopItemVM TroopItem3` | 属性 |
| `TroopItem4` | `public OrderTroopItemVM TroopItem4` | 属性 |
| `TroopItem5` | `public OrderTroopItemVM TroopItem5` | 属性 |
| `TroopItem6` | `public OrderTroopItemVM TroopItem6` | 属性 |
| `TroopItem7` | `public OrderTroopItemVM TroopItem7` | 属性 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | 属性 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | 方法 |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotKey)` | 方法 |
| `IComparer` | `protected class TroopItemFormationIndexComparer : IComparer<OrderTroopItemVM>` | 属性 |
| `IComparer` | `protected class TroopItemFormationIndexComparer : IComparer<OrderTroopItemVM>` | 嵌套类型 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM)
- [同命名空间 MissionOrderCallbacks](../MissionOrderCallbacks)
- [同命名空间 MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM)
- [同命名空间 MissionOrderVM](../MissionOrderVM)
