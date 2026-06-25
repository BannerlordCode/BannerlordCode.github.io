---
title: "OrderSetVM"
description: "Auto-generated class reference for OrderSetVM."
---
# OrderSetVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderSetVM : OrderItemBaseVM`
**Base:** `OrderItemBaseVM`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/OrderSetVM.cs`

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

**Purpose:** **Purpose:** Invoked when the order set selection state changed delegate event is raised.

```csharp
// Obtain an instance of OrderSetVM from the subsystem API first
OrderSetVM orderSetVM = ...;
orderSetVM.OnOrderSetSelectionStateChangedDelegate(orderSet, false);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of OrderSetVM from the subsystem API first
OrderSetVM orderSetVM = ...;
orderSetVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of OrderSetVM from the subsystem API first
OrderSetVM orderSetVM = ...;
orderSetVM.OnFinalize();
```

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with select.

```csharp
// Obtain an instance of OrderSetVM from the subsystem API first
OrderSetVM orderSetVM = ...;
orderSetVM.ExecuteSelect();
```

### ExecuteDeSelect
`public void ExecuteDeSelect()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with de select.

```csharp
// Obtain an instance of OrderSetVM from the subsystem API first
OrderSetVM orderSetVM = ...;
orderSetVM.ExecuteDeSelect();
```

### OnOrderExecuted
`public void OnOrderExecuted(OrderItemVM order)`

**Purpose:** **Purpose:** Invoked when the order executed event is raised.

```csharp
// Obtain an instance of OrderSetVM from the subsystem API first
OrderSetVM orderSetVM = ...;
orderSetVM.OnOrderExecuted(order);
```

### RefreshOrders
`public void RefreshOrders()`

**Purpose:** **Purpose:** Keeps the display or cache of orders in sync with the underlying state.

```csharp
// Obtain an instance of OrderSetVM from the subsystem API first
OrderSetVM orderSetVM = ...;
orderSetVM.RefreshOrders();
```

### RefreshOrderStates
`public void RefreshOrderStates()`

**Purpose:** **Purpose:** Keeps the display or cache of order states in sync with the underlying state.

```csharp
// Obtain an instance of OrderSetVM from the subsystem API first
OrderSetVM orderSetVM = ...;
orderSetVM.RefreshOrderStates();
```

### UpdateCanUseShortcuts
`public void UpdateCanUseShortcuts(bool value)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of can use shortcuts.

```csharp
// Obtain an instance of OrderSetVM from the subsystem API first
OrderSetVM orderSetVM = ...;
orderSetVM.UpdateCanUseShortcuts(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OrderSetVM orderSetVM = ...;
orderSetVM.OnOrderSetSelectionStateChangedDelegate(orderSet, false);
```

## See Also

- [Area Index](../)