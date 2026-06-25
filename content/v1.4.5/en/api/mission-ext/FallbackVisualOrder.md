---
title: "FallbackVisualOrder"
description: "Auto-generated class reference for FallbackVisualOrder."
---
# FallbackVisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FallbackVisualOrder : VisualOrder`
**Base:** `VisualOrder`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders/FallbackVisualOrder.cs`

## Overview

`FallbackVisualOrder` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetName
`public override TextObject GetName(OrderController orderController)`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of FallbackVisualOrder from the subsystem API first
FallbackVisualOrder fallbackVisualOrder = ...;
var result = fallbackVisualOrder.GetName(orderController);
```

### ExecuteOrder
`public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** **Purpose:** Runs the operation or workflow associated with order.

```csharp
// Obtain an instance of FallbackVisualOrder from the subsystem API first
FallbackVisualOrder fallbackVisualOrder = ...;
fallbackVisualOrder.ExecuteOrder(orderController, executionParameters);
```

### IsTargeted
`public override bool IsTargeted()`

**Purpose:** **Purpose:** Determines whether the this instance is in the targeted state or condition.

```csharp
// Obtain an instance of FallbackVisualOrder from the subsystem API first
FallbackVisualOrder fallbackVisualOrder = ...;
var result = fallbackVisualOrder.IsTargeted();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FallbackVisualOrder fallbackVisualOrder = ...;
fallbackVisualOrder.GetName(orderController);
```

## See Also

- [Area Index](../)