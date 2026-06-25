---
title: "GenericToggleVisualOrder"
description: "Auto-generated class reference for GenericToggleVisualOrder."
---
# GenericToggleVisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.ToggleOrders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GenericToggleVisualOrder : VisualOrder`
**Base:** `VisualOrder`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.ToggleOrders/GenericToggleVisualOrder.cs`

## Overview

`GenericToggleVisualOrder` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.ToggleOrders` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.ToggleOrders` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PositiveOrder` | `public OrderType PositiveOrder { get; }` |
| `NegativeOrder` | `public OrderType NegativeOrder { get; }` |

## Key Methods

### GetName
`public override TextObject GetName(OrderController orderController)`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of GenericToggleVisualOrder from the subsystem API first
GenericToggleVisualOrder genericToggleVisualOrder = ...;
var result = genericToggleVisualOrder.GetName(orderController);
```

### IsTargeted
`public override bool IsTargeted()`

**Purpose:** Determines whether the this instance is in the targeted state or condition.

```csharp
// Obtain an instance of GenericToggleVisualOrder from the subsystem API first
GenericToggleVisualOrder genericToggleVisualOrder = ...;
var result = genericToggleVisualOrder.IsTargeted();
```

### ExecuteOrder
`public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** Runs the operation or workflow associated with order.

```csharp
// Obtain an instance of GenericToggleVisualOrder from the subsystem API first
GenericToggleVisualOrder genericToggleVisualOrder = ...;
genericToggleVisualOrder.ExecuteOrder(orderController, executionParameters);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GenericToggleVisualOrder genericToggleVisualOrder = ...;
genericToggleVisualOrder.GetName(orderController);
```

## See Also

- [Area Index](../)