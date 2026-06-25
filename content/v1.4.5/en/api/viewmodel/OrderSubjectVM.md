---
title: "OrderSubjectVM"
description: "Auto-generated class reference for OrderSubjectVM."
---
# OrderSubjectVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class OrderSubjectVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/OrderSubjectVM.cs`

## Overview

`OrderSubjectVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelectable` | `public bool IsSelectable { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsSelectionHighlightActive` | `public bool IsSelectionHighlightActive { get; set; }` |
| `ShowSelectionInputs` | `public bool ShowSelectionInputs { get; set; }` |
| `BehaviorType` | `public int BehaviorType { get; set; }` |
| `UnderAttackOfType` | `public int UnderAttackOfType { get; set; }` |
| `SelectionText` | `public string SelectionText { get; set; }` |
| `ApplySelectionKey` | `public InputKeyItemVM ApplySelectionKey { get; set; }` |
| `ToggleSelectionKey` | `public InputKeyItemVM ToggleSelectionKey { get; set; }` |
| `ActiveOrders` | `public MBBindingList<OrderItemVM> ActiveOrders { get; set; }` |

## Key Methods

### AddActiveOrder
`public void AddActiveOrder(OrderItemVM order)`

**Purpose:** Adds `active order` to the current collection or state.

```csharp
// Obtain an instance of OrderSubjectVM from the subsystem API first
OrderSubjectVM orderSubjectVM = ...;
orderSubjectVM.AddActiveOrder(order);
```

### RemoveActiveOrder
`public void RemoveActiveOrder(OrderItemVM order)`

**Purpose:** Removes `active order` from the current collection or state.

```csharp
// Obtain an instance of OrderSubjectVM from the subsystem API first
OrderSubjectVM orderSubjectVM = ...;
orderSubjectVM.RemoveActiveOrder(order);
```

### ClearActiveOrders
`public void ClearActiveOrders()`

**Purpose:** Removes all `active orders` from the current object.

```csharp
// Obtain an instance of OrderSubjectVM from the subsystem API first
OrderSubjectVM orderSubjectVM = ...;
orderSubjectVM.ClearActiveOrders();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of OrderSubjectVM from the subsystem API first
OrderSubjectVM orderSubjectVM = ...;
orderSubjectVM.RefreshValues();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
OrderSubjectVM instance = ...;
```

## See Also

- [Area Index](../)