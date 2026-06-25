---
title: "RetreatVisualOrder"
description: "Auto-generated class reference for RetreatVisualOrder."
---
# RetreatVisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RetreatVisualOrder : VisualOrder`
**Base:** `VisualOrder`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/MovementOrders/RetreatVisualOrder.cs`

## Overview

`RetreatVisualOrder` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetName
`public override TextObject GetName(OrderController orderController)`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of RetreatVisualOrder from the subsystem API first
RetreatVisualOrder retreatVisualOrder = ...;
var result = retreatVisualOrder.GetName(orderController);
```

### ExecuteOrder
`public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** Runs the operation or workflow associated with order.

```csharp
// Obtain an instance of RetreatVisualOrder from the subsystem API first
RetreatVisualOrder retreatVisualOrder = ...;
retreatVisualOrder.ExecuteOrder(orderController, executionParameters);
```

### IsTargeted
`public override bool IsTargeted()`

**Purpose:** Determines whether the this instance is in the targeted state or condition.

```csharp
// Obtain an instance of RetreatVisualOrder from the subsystem API first
RetreatVisualOrder retreatVisualOrder = ...;
var result = retreatVisualOrder.IsTargeted();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RetreatVisualOrder retreatVisualOrder = ...;
retreatVisualOrder.GetName(orderController);
```

## See Also

- [Area Index](../)