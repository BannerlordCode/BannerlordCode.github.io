---
title: "MissionOrderVM"
description: "Auto-generated class reference for MissionOrderVM."
---
# MissionOrderVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection
**Type:** `public class MissionOrderVM : ViewModel `
**Base:** ViewModel
**Source:** TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderVM.cs

## Overview

Auto-generated stub for `MissionOrderVM`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CreateTroopController
`protected virtual MissionOrderTroopControllerVM CreateTroopController(OrderController orderController)`

### SetCallbacks
`public void SetCallbacks(MissionOrderCallbacks callbacks)`

### RefreshValues
`public override void RefreshValues()`

### OnFinalize
`public override void OnFinalize()`

### OnOrderExecuted
`public void OnOrderExecuted(OrderItemVM orderItem)`

### OnOrderLayoutTypeChanged
`public virtual void OnOrderLayoutTypeChanged()`

### OpenToggleOrder
`public void OpenToggleOrder(bool fromHold,bool displayMessage = true)`

### TryCloseToggleOrder
`public bool TryCloseToggleOrder(bool applySelectedOrders = false)`

### SetActiveOrders
`public void SetActiveOrders()`

### AfterInitialize
`public void AfterInitialize()`

### Update
`public void Update()`

### OnEscape
`public void OnEscape()`

### ViewOrders
`public void ViewOrders()`

### GetOrderSetAtIndex
`public OrderSetVM GetOrderSetAtIndex(int orderSetIndex)`

### TrySelectOrderSet
`public bool TrySelectOrderSet(OrderSetVM orderSet)`

### OnTroopFormationSelected
`public void OnTroopFormationSelected(int formationTroopIndex)`

### OnTroopHighlightSelection
`public void OnTroopHighlightSelection(bool isDirectionLeft)`

### ExecuteSelectHighlightedFormation
`public void ExecuteSelectHighlightedFormation()`

### ExecuteToggleHighlightedFormation
`public void ExecuteToggleHighlightedFormation()`

### OnTransferFinished
`protected void OnTransferFinished()`

### OnDeploymentFinished
`public void OnDeploymentFinished()`

### OnAfterDeploymentFinished
`public void OnAfterDeploymentFinished()`

### OnFiltersSet
`public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration> filterData)`

### UpdateCanUseShortcuts
`public void UpdateCanUseShortcuts(bool value)`

### SetOrderIndexKey
`public void SetOrderIndexKey(int orderIndex,GameKey gameKey)`

### SetReturnKey
`public void SetReturnKey(GameKey gameKey)`

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

## See Also

- [Section index](../)
