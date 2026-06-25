---
title: "ReturnVisualOrder"
description: "Auto-generated class reference for ReturnVisualOrder."
---
# ReturnVisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class ReturnVisualOrder : VisualOrder`
**Base:** `VisualOrder`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual/ReturnVisualOrder.cs`

## Overview

`ReturnVisualOrder` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetName
`public override TextObject GetName(OrderController orderController)`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of ReturnVisualOrder from the subsystem API first
ReturnVisualOrder returnVisualOrder = ...;
var result = returnVisualOrder.GetName(orderController);
```

### IsTargeted
`public override bool IsTargeted()`

**Purpose:** Determines whether the this instance is in the targeted state or condition.

```csharp
// Obtain an instance of ReturnVisualOrder from the subsystem API first
ReturnVisualOrder returnVisualOrder = ...;
var result = returnVisualOrder.IsTargeted();
```

### ExecuteOrder
`public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** Runs the operation or workflow associated with order.

```csharp
// Obtain an instance of ReturnVisualOrder from the subsystem API first
ReturnVisualOrder returnVisualOrder = ...;
returnVisualOrder.ExecuteOrder(orderController, executionParameters);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ReturnVisualOrder returnVisualOrder = ...;
returnVisualOrder.GetName(orderController);
```

## See Also

- [Area Index](../)