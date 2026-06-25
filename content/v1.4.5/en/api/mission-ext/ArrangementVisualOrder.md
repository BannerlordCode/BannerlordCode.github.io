---
title: "ArrangementVisualOrder"
description: "Auto-generated class reference for ArrangementVisualOrder."
---
# ArrangementVisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.FormOrders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArrangementVisualOrder : VisualOrder`
**Base:** `VisualOrder`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.FormOrders/ArrangementVisualOrder.cs`

## Overview

`ArrangementVisualOrder` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.FormOrders` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.FormOrders` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ArrangementOrder` | `public ArrangementOrderEnum ArrangementOrder { get; }` |

## Key Methods

### GetName
`public override TextObject GetName(OrderController orderController)`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of ArrangementVisualOrder from the subsystem API first
ArrangementVisualOrder arrangementVisualOrder = ...;
var result = arrangementVisualOrder.GetName(orderController);
```

### ExecuteOrder
`public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** Runs the operation or workflow associated with `order`.

```csharp
// Obtain an instance of ArrangementVisualOrder from the subsystem API first
ArrangementVisualOrder arrangementVisualOrder = ...;
arrangementVisualOrder.ExecuteOrder(orderController, executionParameters);
```

### IsTargeted
`public override bool IsTargeted()`

**Purpose:** Determines whether the current object is in the `targeted` state or condition.

```csharp
// Obtain an instance of ArrangementVisualOrder from the subsystem API first
ArrangementVisualOrder arrangementVisualOrder = ...;
var result = arrangementVisualOrder.IsTargeted();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArrangementVisualOrder arrangementVisualOrder = ...;
arrangementVisualOrder.GetName(orderController);
```

## See Also

- [Area Index](../)