---
title: "MissionOrderVM"
description: "MissionOrderVM 的自动生成类参考。"
---
# MissionOrderVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection
**Type:** `public class MissionOrderVM : ViewModel `
**Base:** ViewModel
**Source:** TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderVM.cs

## 概述

`MissionOrderVM` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderVM.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateTroopController
`protected virtual MissionOrderTroopControllerVM CreateTroopController(OrderController orderController) `

### SetCallbacks
`public void SetCallbacks(MissionOrderCallbacks callbacks) `

### RefreshValues
`public override void RefreshValues() `

### OnFinalize
`public override void OnFinalize() `

### OnOrderExecuted
`public void OnOrderExecuted(OrderItemVM orderItem) `

### OnOrderLayoutTypeChanged
`public virtual void OnOrderLayoutTypeChanged() `

### OpenToggleOrder
`public void OpenToggleOrder(bool fromHold,bool displayMessage = true) `

### TryCloseToggleOrder
`public bool TryCloseToggleOrder(bool applySelectedOrders = false) `

### SetActiveOrders
`public void SetActiveOrders() `

### AfterInitialize
`public void AfterInitialize() `

### Update
`public void Update() `

### OnEscape
`public void OnEscape() `

### ViewOrders
`public void ViewOrders() `

### GetOrderSetAtIndex
`public OrderSetVM GetOrderSetAtIndex(int orderSetIndex) `

### TrySelectOrderSet
`public bool TrySelectOrderSet(OrderSetVM orderSet) `

### OnTroopFormationSelected
`public void OnTroopFormationSelected(int formationTroopIndex) `

### OnTroopHighlightSelection
`public void OnTroopHighlightSelection(bool isDirectionLeft) `

### ExecuteSelectHighlightedFormation
`public void ExecuteSelectHighlightedFormation() `

### ExecuteToggleHighlightedFormation
`public void ExecuteToggleHighlightedFormation() `

### OnTransferFinished
`protected void OnTransferFinished() `

### OnDeploymentFinished
`public void OnDeploymentFinished() `

### OnAfterDeploymentFinished
`public void OnAfterDeploymentFinished() `

### OnFiltersSet
`public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration> filterData) `

### UpdateCanUseShortcuts
`public void UpdateCanUseShortcuts(bool value) `

### SetOrderIndexKey
`public void SetOrderIndexKey(int orderIndex,GameKey gameKey) `

### SetReturnKey
`public void SetReturnKey(GameKey gameKey) `

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
