---
title: "ActionVisualOrder"
description: "Auto-generated class reference for ActionVisualOrder."
---
# ActionVisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class ActionVisualOrder : VisualOrder`
**Base:** `VisualOrder`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual/ActionVisualOrder.cs`

## Overview

`ActionVisualOrder` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OrderActionDelegate
`public delegate void OrderActionDelegate(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** **Purpose:** Executes the OrderActionDelegate logic.

```csharp
// Obtain an instance of ActionVisualOrder from the subsystem API first
ActionVisualOrder actionVisualOrder = ...;
actionVisualOrder.OrderActionDelegate(orderController, executionParameters);
```

### GetName
`public override TextObject GetName(OrderController orderController)`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of ActionVisualOrder from the subsystem API first
ActionVisualOrder actionVisualOrder = ...;
var result = actionVisualOrder.GetName(orderController);
```

### IsTargeted
`public override bool IsTargeted()`

**Purpose:** **Purpose:** Determines whether the this instance is in the targeted state or condition.

```csharp
// Obtain an instance of ActionVisualOrder from the subsystem API first
ActionVisualOrder actionVisualOrder = ...;
var result = actionVisualOrder.IsTargeted();
```

### ExecuteOrder
`public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** **Purpose:** Runs the operation or workflow associated with order.

```csharp
// Obtain an instance of ActionVisualOrder from the subsystem API first
ActionVisualOrder actionVisualOrder = ...;
actionVisualOrder.ExecuteOrder(orderController, executionParameters);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ActionVisualOrder actionVisualOrder = ...;
actionVisualOrder.OrderActionDelegate(orderController, executionParameters);
```

## See Also

- [Area Index](../)