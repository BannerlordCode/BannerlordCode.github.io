---
title: "ToggleFacingVisualOrder"
description: "Auto-generated class reference for ToggleFacingVisualOrder."
---
# ToggleFacingVisualOrder

**Namespace:** TaleWorlds.MountAndBlade.View.VisualOrders.Orders.ToggleOrders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ToggleFacingVisualOrder : VisualOrder`
**Base:** `VisualOrder`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.VisualOrders.Orders.ToggleOrders/ToggleFacingVisualOrder.cs`

## Overview

`ToggleFacingVisualOrder` lives in `TaleWorlds.MountAndBlade.View.VisualOrders.Orders.ToggleOrders` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.VisualOrders.Orders.ToggleOrders` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetName
`public override TextObject GetName(OrderController orderController)`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of ToggleFacingVisualOrder from the subsystem API first
ToggleFacingVisualOrder toggleFacingVisualOrder = ...;
var result = toggleFacingVisualOrder.GetName(orderController);
```

### ExecuteOrder
`public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** Runs the operation or workflow associated with order.

```csharp
// Obtain an instance of ToggleFacingVisualOrder from the subsystem API first
ToggleFacingVisualOrder toggleFacingVisualOrder = ...;
toggleFacingVisualOrder.ExecuteOrder(orderController, executionParameters);
```

### IsTargeted
`public override bool IsTargeted()`

**Purpose:** Determines whether the this instance is in the targeted state or condition.

```csharp
// Obtain an instance of ToggleFacingVisualOrder from the subsystem API first
ToggleFacingVisualOrder toggleFacingVisualOrder = ...;
var result = toggleFacingVisualOrder.IsTargeted();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ToggleFacingVisualOrder toggleFacingVisualOrder = ...;
toggleFacingVisualOrder.GetName(orderController);
```

## See Also

- [Area Index](../)