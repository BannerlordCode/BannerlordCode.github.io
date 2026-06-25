---
title: "VisualOrder"
description: "Auto-generated class reference for VisualOrder."
---
# VisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class VisualOrder`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual/VisualOrder.cs`

## Overview

`VisualOrder` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringId` | `public string StringId { get; }` |

## Key Methods

### GetName
`public abstract TextObject GetName(OrderController orderController)`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of VisualOrder from the subsystem API first
VisualOrder visualOrder = ...;
var result = visualOrder.GetName(orderController);
```

### IsTargeted
`public abstract bool IsTargeted()`

**Purpose:** Determines whether the this instance is in the targeted state or condition.

```csharp
// Obtain an instance of VisualOrder from the subsystem API first
VisualOrder visualOrder = ...;
var result = visualOrder.IsTargeted();
```

### ExecuteOrder
`public abstract void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** Runs the operation or workflow associated with order.

```csharp
// Obtain an instance of VisualOrder from the subsystem API first
VisualOrder visualOrder = ...;
visualOrder.ExecuteOrder(orderController, executionParameters);
```

### BeforeExecuteOrder
`public virtual void BeforeExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** Executes the BeforeExecuteOrder logic.

```csharp
// Obtain an instance of VisualOrder from the subsystem API first
VisualOrder visualOrder = ...;
visualOrder.BeforeExecuteOrder(orderController, executionParameters);
```

### AfterExecuteOrder
`public virtual void AfterExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** Executes the AfterExecuteOrder logic.

```csharp
// Obtain an instance of VisualOrder from the subsystem API first
VisualOrder visualOrder = ...;
visualOrder.AfterExecuteOrder(orderController, executionParameters);
```

### GetFormationHasOrder
`public bool GetFormationHasOrder(Formation formation)`

**Purpose:** Reads and returns the formation has order value held by the this instance.

```csharp
// Obtain an instance of VisualOrder from the subsystem API first
VisualOrder visualOrder = ...;
var result = visualOrder.GetFormationHasOrder(formation);
```

### GetActiveState
`public OrderState GetActiveState(OrderController orderController)`

**Purpose:** Reads and returns the active state value held by the this instance.

```csharp
// Obtain an instance of VisualOrder from the subsystem API first
VisualOrder visualOrder = ...;
var result = visualOrder.GetActiveState(orderController);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
VisualOrder instance = ...;
```

## See Also

- [Area Index](../)