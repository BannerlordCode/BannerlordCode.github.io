<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionOrderTroopControllerVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionOrderTroopControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOrderTroopControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderTroopControllerVM.cs`

## Overview

`MissionOrderTroopControllerVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopList` | `public MBList<OrderTroopItemVM> TroopList { get; }` |
| `IsTransferActive` | `public bool IsTransferActive { get; set; }` |
| `IsTransferValid` | `public bool IsTransferValid { get; set; }` |
| `TransferTargetList` | `public MBBindingList<OrderTroopItemVM> TransferTargetList { get; set; }` |
| `TransferMaxValue` | `public int TransferMaxValue { get; set; }` |
| `TransferValue` | `public int TransferValue { get; set; }` |
| `TransferTitleText` | `public string TransferTitleText { get; set; }` |
| `AcceptText` | `public string AcceptText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `TroopItem0` | `public OrderTroopItemVM TroopItem0 { get; set; }` |
| `TroopItem1` | `public OrderTroopItemVM TroopItem1 { get; set; }` |
| `TroopItem2` | `public OrderTroopItemVM TroopItem2 { get; set; }` |
| `TroopItem3` | `public OrderTroopItemVM TroopItem3 { get; set; }` |
| `TroopItem4` | `public OrderTroopItemVM TroopItem4 { get; set; }` |
| `TroopItem5` | `public OrderTroopItemVM TroopItem5 { get; set; }` |
| `TroopItem6` | `public OrderTroopItemVM TroopItem6 { get; set; }` |
| `TroopItem7` | `public OrderTroopItemVM TroopItem7 { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### ExecuteSelectAll
`public void ExecuteSelectAll()`

**Purpose:** Executes the `select all` operation or workflow.

### ExecuteSelectTransferTroop
`public void ExecuteSelectTransferTroop(OrderTroopItemVM targetTroop)`

**Purpose:** Executes the `select transfer troop` operation or workflow.

### ExecuteConfirmTransfer
`public void ExecuteConfirmTransfer()`

**Purpose:** Executes the `confirm transfer` operation or workflow.

### ExecuteCancelTransfer
`public void ExecuteCancelTransfer()`

**Purpose:** Executes the `cancel transfer` operation or workflow.

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** Executes the `reset` operation or workflow.

### SetTroopActiveOrders
`public void SetTroopActiveOrders(OrderTroopItemVM item)`

**Purpose:** Sets the value or state of `troop active orders`.

### SelectAllFormations
`public virtual void SelectAllFormations(bool uiFeedback = true)`

**Purpose:** Handles logic related to `select all formations`.

### AddSelectedFormation
`public virtual void AddSelectedFormation(OrderTroopItemVM item)`

**Purpose:** Adds `selected formation` to the current collection or state.

### SetSelectedFormation
`public void SetSelectedFormation(OrderTroopItemVM item)`

**Purpose:** Sets the value or state of `selected formation`.

### OnDeselectFormation
`public void OnDeselectFormation(int index)`

**Purpose:** Called when the `deselect formation` event is raised.

### OnDeselectFormation
`public void OnDeselectFormation(OrderTroopItemVM item)`

**Purpose:** Called when the `deselect formation` event is raised.

### OnSelectFormation
`public void OnSelectFormation(OrderTroopItemVM item)`

**Purpose:** Called when the `select formation` event is raised.

### UpdateTroops
`public void UpdateTroops()`

**Purpose:** Updates the state or data of `troops`.

### AddTroops
`public void AddTroops(Agent agent)`

**Purpose:** Adds `troops` to the current collection or state.

### RemoveTroops
`public void RemoveTroops(Agent agent)`

**Purpose:** Removes `troops` from the current collection or state.

### OnTroopOrderIssued
`public void OnTroopOrderIssued(List<OrderTroopItemVM> selectedFormations, OrderItemVM orderItem)`

**Purpose:** Called when the `troop order issued` event is raised.

### IntervalUpdate
`public void IntervalUpdate()`

**Purpose:** Handles logic related to `interval update`.

### RefreshTroopFormationTargetVisuals
`public void RefreshTroopFormationTargetVisuals()`

**Purpose:** Refreshes the display or cache of `troop formation target visuals`.

### OnSelectFormationWithIndex
`public void OnSelectFormationWithIndex(int formationTroopIndex)`

**Purpose:** Called when the `select formation with index` event is raised.

### SetCurrentActiveOrders
`public void SetCurrentActiveOrders()`

**Purpose:** Sets the value or state of `current active orders`.

### OnFiltersSet
`public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration> filterData)`

**Purpose:** Called when the `filters set` event is raised.

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

### OnAfterDeploymentFinished
`public void OnAfterDeploymentFinished()`

**Purpose:** Called when the `after deployment finished` event is raised.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `reset input key`.

### Compare
`public int Compare(OrderTroopItemVM x, OrderTroopItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new MissionOrderTroopControllerVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)