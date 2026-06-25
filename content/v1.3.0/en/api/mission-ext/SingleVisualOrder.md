---
title: "SingleVisualOrder"
description: "Auto-generated class reference for SingleVisualOrder."
---
# SingleVisualOrder

**Namespace:** TaleWorlds.MountAndBlade.View.VisualOrders.Orders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleVisualOrder : VisualOrder`
**Base:** `VisualOrder`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/SingleVisualOrder.cs`

## Overview

`SingleVisualOrder` lives in `TaleWorlds.MountAndBlade.View.VisualOrders.Orders` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.VisualOrders.Orders` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ExecuteOrder
`public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** Runs the operation or workflow associated with order.

```csharp
// Obtain an instance of SingleVisualOrder from the subsystem API first
SingleVisualOrder singleVisualOrder = ...;
singleVisualOrder.ExecuteOrder(orderController, executionParameters);
```

### GetName
`public override TextObject GetName(OrderController orderController)`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of SingleVisualOrder from the subsystem API first
SingleVisualOrder singleVisualOrder = ...;
var result = singleVisualOrder.GetName(orderController);
```

### IsTargeted
`public override bool IsTargeted()`

**Purpose:** Determines whether the this instance is in the targeted state or condition.

```csharp
// Obtain an instance of SingleVisualOrder from the subsystem API first
SingleVisualOrder singleVisualOrder = ...;
var result = singleVisualOrder.IsTargeted();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SingleVisualOrder singleVisualOrder = ...;
singleVisualOrder.ExecuteOrder(orderController, executionParameters);
```

## See Also

- [Area Index](../)