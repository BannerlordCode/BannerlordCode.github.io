---
title: "MissionOrderTroopControllerVM"
description: "Auto-generated class reference for MissionOrderTroopControllerVM."
---
# MissionOrderTroopControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOrderTroopControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/MissionOrderTroopControllerVM.cs`

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

### Compare
`public int Compare(OrderTroopItemVM x, OrderTroopItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
var result = missionOrderTroopControllerVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnFinalize();
```

### ExecuteSelectAll
`public void ExecuteSelectAll()`

**Purpose:** Runs the operation or workflow associated with select all.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.ExecuteSelectAll();
```

### ExecuteSelectTransferTroop
`public void ExecuteSelectTransferTroop(OrderTroopItemVM targetTroop)`

**Purpose:** Runs the operation or workflow associated with select transfer troop.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.ExecuteSelectTransferTroop(targetTroop);
```

### ExecuteConfirmTransfer
`public void ExecuteConfirmTransfer()`

**Purpose:** Runs the operation or workflow associated with confirm transfer.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.ExecuteConfirmTransfer();
```

### ExecuteCancelTransfer
`public void ExecuteCancelTransfer()`

**Purpose:** Runs the operation or workflow associated with cancel transfer.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.ExecuteCancelTransfer();
```

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** Runs the operation or workflow associated with reset.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.ExecuteReset();
```

### SetTroopActiveOrders
`public void SetTroopActiveOrders(OrderTroopItemVM item)`

**Purpose:** Assigns a new value to troop active orders and updates the object's internal state.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.SetTroopActiveOrders(item);
```

### SelectAllFormations
`public virtual void SelectAllFormations(bool uiFeedback = true)`

**Purpose:** Executes the SelectAllFormations logic.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.SelectAllFormations(false);
```

### AddSelectedFormation
`public virtual void AddSelectedFormation(OrderTroopItemVM item)`

**Purpose:** Adds selected formation to the current collection or state.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.AddSelectedFormation(item);
```

### SetSelectedFormation
`public void SetSelectedFormation(OrderTroopItemVM item)`

**Purpose:** Assigns a new value to selected formation and updates the object's internal state.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.SetSelectedFormation(item);
```

### OnDeselectFormation
`public void OnDeselectFormation(int index)`

**Purpose:** Invoked when the deselect formation event is raised.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnDeselectFormation(0);
```

### OnDeselectFormation
`public void OnDeselectFormation(OrderTroopItemVM item)`

**Purpose:** Invoked when the deselect formation event is raised.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnDeselectFormation(item);
```

### OnSelectFormation
`public void OnSelectFormation(OrderTroopItemVM item)`

**Purpose:** Invoked when the select formation event is raised.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnSelectFormation(item);
```

### UpdateTroops
`public void UpdateTroops()`

**Purpose:** Recalculates and stores the latest representation of troops.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.UpdateTroops();
```

### AddTroops
`public void AddTroops(Agent agent)`

**Purpose:** Adds troops to the current collection or state.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.AddTroops(agent);
```

### RemoveTroops
`public void RemoveTroops(Agent agent)`

**Purpose:** Removes troops from the current collection or state.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.RemoveTroops(agent);
```

### OnTroopOrderIssued
`public void OnTroopOrderIssued(List<OrderTroopItemVM> selectedFormations, OrderItemVM orderItem)`

**Purpose:** Invoked when the troop order issued event is raised.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnTroopOrderIssued(selectedFormations, orderItem);
```

### IntervalUpdate
`public void IntervalUpdate()`

**Purpose:** Executes the IntervalUpdate logic.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.IntervalUpdate();
```

### RefreshTroopFormationTargetVisuals
`public void RefreshTroopFormationTargetVisuals()`

**Purpose:** Keeps the display or cache of troop formation target visuals in sync with the underlying state.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.RefreshTroopFormationTargetVisuals();
```

### OnSelectFormationWithIndex
`public void OnSelectFormationWithIndex(int formationTroopIndex)`

**Purpose:** Invoked when the select formation with index event is raised.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnSelectFormationWithIndex(0);
```

### SetCurrentActiveOrders
`public void SetCurrentActiveOrders()`

**Purpose:** Assigns a new value to current active orders and updates the object's internal state.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.SetCurrentActiveOrders();
```

### OnFiltersSet
`public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration> filterData)`

**Purpose:** Invoked when the filters set event is raised.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnFiltersSet(filterData);
```

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnDeploymentFinished();
```

### OnAfterDeploymentFinished
`public void OnAfterDeploymentFinished()`

**Purpose:** Invoked when the after deployment finished event is raised.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnAfterDeploymentFinished();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.SetDoneInputKey(hotKey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.SetCancelInputKey(hotKey);
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to reset input key and updates the object's internal state.

```csharp
// Obtain an instance of MissionOrderTroopControllerVM from the subsystem API first
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.SetResetInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.Compare(x, y);
```

## See Also

- [Area Index](../)