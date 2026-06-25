---
title: "MissionOrderVM"
description: "Auto-generated class reference for MissionOrderVM."
---
# MissionOrderVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOrderVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderVM.cs`

## Overview

`MissionOrderVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CursorState` | `public MissionOrderVM.CursorStates CursorState { get; }` |
| `Team` | `public Team Team { get; }` |
| `OrderController` | `public OrderController OrderController { get; set; }` |
| `IsTroopPlacingActive` | `public bool IsTroopPlacingActive { get; set; }` |
| `PlayerHasAnyTroopUnderThem` | `public bool PlayerHasAnyTroopUnderThem { get; }` |
| `SelectedOrderSet` | `public OrderSetVM SelectedOrderSet { get; }` |
| `DisplayedOrderMessageForLastOrder` | `public bool DisplayedOrderMessageForLastOrder { get; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `OrderSets` | `public MBBindingList<OrderSetVM> OrderSets { get; set; }` |
| `TroopController` | `public MissionOrderTroopControllerVM TroopController { get; set; }` |
| `DeploymentController` | `public MissionOrderDeploymentControllerVM DeploymentController { get; set; }` |
| `ActiveTargetState` | `public int ActiveTargetState { get; set; }` |
| `IsDeployment` | `public bool IsDeployment { get; set; }` |
| `HasAnyCascadingOrders` | `public bool HasAnyCascadingOrders { get; set; }` |
| `IsToggleOrderShown` | `public bool IsToggleOrderShown { get; set; }` |
| `IsTroopListShown` | `public bool IsTroopListShown { get; set; }` |
| `CanUseShortcuts` | `public bool CanUseShortcuts { get; set; }` |
| `IsHolding` | `public bool IsHolding { get; set; }` |
| `IsAnyOrderSetActive` | `public bool IsAnyOrderSetActive { get; set; }` |
| `ReturnText` | `public string ReturnText { get; set; }` |
| `UseAlternativeFormationLayout` | `public bool UseAlternativeFormationLayout { get; set; }` |

## Key Methods

### SetDeploymentParemeters
`public void SetDeploymentParemeters(Camera deploymentCamera, List<DeploymentPoint> deploymentPoints)`

**Purpose:** **Purpose:** Assigns a new value to deployment paremeters and updates the object's internal state.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.SetDeploymentParemeters(deploymentCamera, deploymentPoints);
```

### SetCallbacks
`public void SetCallbacks(MissionOrderCallbacks callbacks)`

**Purpose:** **Purpose:** Assigns a new value to callbacks and updates the object's internal state.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.SetCallbacks(callbacks);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnFinalize();
```

### OnOrderExecuted
`public void OnOrderExecuted(OrderItemVM orderItem)`

**Purpose:** **Purpose:** Invoked when the order executed event is raised.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnOrderExecuted(orderItem);
```

### OnOrderLayoutTypeChanged
`public virtual void OnOrderLayoutTypeChanged()`

**Purpose:** **Purpose:** Invoked when the order layout type changed event is raised.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnOrderLayoutTypeChanged();
```

### OpenToggleOrder
`public void OpenToggleOrder(bool fromHold, bool displayMessage = true)`

**Purpose:** **Purpose:** Opens the resource or UI associated with toggle order.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OpenToggleOrder(false, false);
```

### TryCloseToggleOrder
`public bool TryCloseToggleOrder(bool applySelectedOrders = false)`

**Purpose:** **Purpose:** Attempts to retrieve close toggle order, usually returning success through an out parameter.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
var result = missionOrderVM.TryCloseToggleOrder(false);
```

### SetActiveOrders
`public void SetActiveOrders()`

**Purpose:** **Purpose:** Assigns a new value to active orders and updates the object's internal state.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.SetActiveOrders();
```

### SetFocusedFormations
`public void SetFocusedFormations(MBReadOnlyList<Formation> focusedFormationsCache)`

**Purpose:** **Purpose:** Assigns a new value to focused formations and updates the object's internal state.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.SetFocusedFormations(focusedFormationsCache);
```

### AfterInitialize
`public void AfterInitialize()`

**Purpose:** **Purpose:** Executes the AfterInitialize logic.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.AfterInitialize();
```

### Update
`public void Update()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.Update();
```

### OnEscape
`public void OnEscape()`

**Purpose:** **Purpose:** Invoked when the escape event is raised.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnEscape();
```

### ViewOrders
`public void ViewOrders()`

**Purpose:** **Purpose:** Executes the ViewOrders logic.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.ViewOrders();
```

### GetOrderSetAtIndex
`public OrderSetVM GetOrderSetAtIndex(int orderSetIndex)`

**Purpose:** **Purpose:** Reads and returns the order set at index value held by the this instance.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
var result = missionOrderVM.GetOrderSetAtIndex(0);
```

### TrySelectOrderSet
`public bool TrySelectOrderSet(OrderSetVM orderSet)`

**Purpose:** **Purpose:** Attempts to retrieve select order set, usually returning success through an out parameter.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
var result = missionOrderVM.TrySelectOrderSet(orderSet);
```

### OnTroopFormationSelected
`public void OnTroopFormationSelected(int formationTroopIndex)`

**Purpose:** **Purpose:** Invoked when the troop formation selected event is raised.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnTroopFormationSelected(0);
```

### ExecuteSelectHighlightedFormation
`public void ExecuteSelectHighlightedFormation()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with select highlighted formation.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.ExecuteSelectHighlightedFormation();
```

### OnTroopHighlightSelection
`public void OnTroopHighlightSelection(bool isDirectionLeft)`

**Purpose:** **Purpose:** Invoked when the troop highlight selection event is raised.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnTroopHighlightSelection(false);
```

### ExecuteToggleHighlightedFormation
`public void ExecuteToggleHighlightedFormation()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with toggle highlighted formation.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.ExecuteToggleHighlightedFormation();
```

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**Purpose:** **Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnDeploymentFinished();
```

### OnAfterDeploymentFinished
`public void OnAfterDeploymentFinished()`

**Purpose:** **Purpose:** Invoked when the after deployment finished event is raised.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnAfterDeploymentFinished();
```

### OnFiltersSet
`public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration> filterData)`

**Purpose:** **Purpose:** Invoked when the filters set event is raised.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnFiltersSet(filterData);
```

### UpdateCanUseShortcuts
`public void UpdateCanUseShortcuts(bool value)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of can use shortcuts.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.UpdateCanUseShortcuts(false);
```

### SetOrderIndexKey
`public void SetOrderIndexKey(int orderIndex, GameKey gameKey)`

**Purpose:** **Purpose:** Assigns a new value to order index key and updates the object's internal state.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.SetOrderIndexKey(0, gameKey);
```

### SetReturnKey
`public void SetReturnKey(GameKey gameKey)`

**Purpose:** **Purpose:** Assigns a new value to return key and updates the object's internal state.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.SetReturnKey(gameKey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of MissionOrderVM from the subsystem API first
MissionOrderVM missionOrderVM = ...;
missionOrderVM.SetCancelInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionOrderVM missionOrderVM = ...;
missionOrderVM.SetDeploymentParemeters(deploymentCamera, deploymentPoints);
```

## See Also

- [Area Index](../)