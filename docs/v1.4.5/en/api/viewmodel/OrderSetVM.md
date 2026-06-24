<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderSetVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OrderSetVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderSetVM : OrderItemBaseVM`
**Base:** `OrderItemBaseVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/OrderSetVM.cs`

## Overview

`OrderSetVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OrderSet` | `public VisualOrderSet OrderSet { get; set; }` |
| `SelectedOrderText` | `public string SelectedOrderText { get; set; }` |
| `SoloOrder` | `public OrderItemVM SoloOrder { get; set; }` |
| `Orders` | `public MBBindingList<OrderItemVM> Orders { get; set; }` |

## Key Methods

### OnOrderSetSelectionStateChangedDelegate
`public delegate void OnOrderSetSelectionStateChangedDelegate(OrderSetVM orderSet, bool isSelected)`

**Purpose:** Called when the `order set selection state changed delegate` event is raised.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** Executes the `select` operation or workflow.

### ExecuteDeSelect
`public void ExecuteDeSelect()`

**Purpose:** Executes the `de select` operation or workflow.

### OnOrderExecuted
`public void OnOrderExecuted(OrderItemVM order)`

**Purpose:** Called when the `order executed` event is raised.

### RefreshOrders
`public void RefreshOrders()`

**Purpose:** Refreshes the display or cache of `orders`.

### RefreshOrderStates
`public void RefreshOrderStates()`

**Purpose:** Refreshes the display or cache of `order states`.

### UpdateCanUseShortcuts
`public void UpdateCanUseShortcuts(bool value)`

**Purpose:** Updates the state or data of `can use shortcuts`.

## Usage Example

```csharp
var value = new OrderSetVM();
value.OnOrderSetSelectionStateChangedDelegate(orderSet, false);
```

## See Also

- [Complete Class Catalog](../catalog)