---
title: "MissionOrderVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionOrderVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Sets the value or state of `deployment paremeters`.

### SetCallbacks
`public void SetCallbacks(MissionOrderCallbacks callbacks)`

**Purpose:** Sets the value or state of `callbacks`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnOrderExecuted
`public void OnOrderExecuted(OrderItemVM orderItem)`

**Purpose:** Called when the `order executed` event is raised.

### OnOrderLayoutTypeChanged
`public virtual void OnOrderLayoutTypeChanged()`

**Purpose:** Called when the `order layout type changed` event is raised.

### OpenToggleOrder
`public void OpenToggleOrder(bool fromHold, bool displayMessage = true)`

**Purpose:** Handles logic related to `open toggle order`.

### TryCloseToggleOrder
`public bool TryCloseToggleOrder(bool applySelectedOrders = false)`

**Purpose:** Attempts to get `close toggle order`, usually returning the result in an out parameter.

### SetActiveOrders
`public void SetActiveOrders()`

**Purpose:** Sets the value or state of `active orders`.

### SetFocusedFormations
`public void SetFocusedFormations(MBReadOnlyList<Formation> focusedFormationsCache)`

**Purpose:** Sets the value or state of `focused formations`.

### AfterInitialize
`public void AfterInitialize()`

**Purpose:** Handles logic related to `after initialize`.

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

### OnEscape
`public void OnEscape()`

**Purpose:** Called when the `escape` event is raised.

### ViewOrders
`public void ViewOrders()`

**Purpose:** Handles logic related to `view orders`.

### GetOrderSetAtIndex
`public OrderSetVM GetOrderSetAtIndex(int orderSetIndex)`

**Purpose:** Gets the current value of `order set at index`.

### TrySelectOrderSet
`public bool TrySelectOrderSet(OrderSetVM orderSet)`

**Purpose:** Attempts to get `select order set`, usually returning the result in an out parameter.

### OnTroopFormationSelected
`public void OnTroopFormationSelected(int formationTroopIndex)`

**Purpose:** Called when the `troop formation selected` event is raised.

### ExecuteSelectHighlightedFormation
`public void ExecuteSelectHighlightedFormation()`

**Purpose:** Executes the `select highlighted formation` operation or workflow.

### OnTroopHighlightSelection
`public void OnTroopHighlightSelection(bool isDirectionLeft)`

**Purpose:** Called when the `troop highlight selection` event is raised.

### ExecuteToggleHighlightedFormation
`public void ExecuteToggleHighlightedFormation()`

**Purpose:** Executes the `toggle highlighted formation` operation or workflow.

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

### OnAfterDeploymentFinished
`public void OnAfterDeploymentFinished()`

**Purpose:** Called when the `after deployment finished` event is raised.

### OnFiltersSet
`public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration> filterData)`

**Purpose:** Called when the `filters set` event is raised.

### UpdateCanUseShortcuts
`public void UpdateCanUseShortcuts(bool value)`

**Purpose:** Updates the state or data of `can use shortcuts`.

### SetOrderIndexKey
`public void SetOrderIndexKey(int orderIndex, GameKey gameKey)`

**Purpose:** Sets the value or state of `order index key`.

### SetReturnKey
`public void SetReturnKey(GameKey gameKey)`

**Purpose:** Sets the value or state of `return key`.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

## Usage Example

```csharp
var value = new MissionOrderVM();
value.SetDeploymentParemeters(deploymentCamera, deploymentPoints);
```

## See Also

- [Complete Class Catalog](../catalog)