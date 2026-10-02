---
title: "MissionOrderTroopControllerVM"
description: "MissionOrderTroopControllerVM 的自动生成类参考。"
---
# MissionOrderTroopControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection
**Type:** `public class MissionOrderTroopControllerVM : ViewModel `
**Base:** ViewModel
**Source:** TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderTroopControllerVM.cs

## 概述

`MissionOrderTroopControllerVM` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderTroopControllerVM.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### RefreshValues
`public override void RefreshValues() `

### OnFinalize
`public override void OnFinalize() `

### ExecuteSelectAll
`public void ExecuteSelectAll() `

### ExecuteSelectTransferTroop
`public void ExecuteSelectTransferTroop(OrderTroopItemVM targetTroop) `

### ExecuteConfirmTransfer
`public void ExecuteConfirmTransfer() `

### ExecuteCancelTransfer
`public void ExecuteCancelTransfer() `

### ExecuteReset
`public void ExecuteReset() `

### SetTroopActiveOrders
`public void SetTroopActiveOrders(OrderTroopItemVM item) `

### SelectAllFormations
`public virtual void SelectAllFormations(bool uiFeedback = true) `

### AddSelectedFormation
`public virtual void AddSelectedFormation(OrderTroopItemVM item) `

### SetSelectedFormation
`public void SetSelectedFormation(OrderTroopItemVM item) `

### OnDeselectFormation
`public void OnDeselectFormation(int index) `
`public void OnDeselectFormation(OrderTroopItemVM item) `

### OnSelectFormation
`public void OnSelectFormation(OrderTroopItemVM item) `

### CreateTroopItemVM
`protected virtual OrderTroopItemVM CreateTroopItemVM(Formation formation,Action<OrderTroopItemVM> onSelectFormation,Func<Formation,int> getFormationMorale) `

### UpdateTroops
`public void UpdateTroops() `

### AddTroops
`public void AddTroops(Agent agent) `

### RemoveTroops
`public void RemoveTroops(Agent agent) `

### OnTroopOrderIssued
`public void OnTroopOrderIssued(List<OrderTroopItemVM> selectedFormations,OrderItemVM orderItem) `

### IntervalUpdate
`public void IntervalUpdate() `

### RefreshTroopFormationTargetVisuals
`public void RefreshTroopFormationTargetVisuals() `

### OnSelectFormationWithIndex
`public void OnSelectFormationWithIndex(int formationTroopIndex) `

### SetCurrentActiveOrders
`public void SetCurrentActiveOrders() `

### OnFiltersSet
`public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration> filterData) `

### OnDeploymentFinished
`public void OnDeploymentFinished() `

### OnAfterDeploymentFinished
`public void OnAfterDeploymentFinished() `

### OnAfterNewTroopItemAdded
`protected virtual void OnAfterNewTroopItemAdded() `

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey) `

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey) `

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
