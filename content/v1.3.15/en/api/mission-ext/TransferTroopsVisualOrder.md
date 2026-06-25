---
title: "TransferTroopsVisualOrder"
description: "Auto-generated class reference for TransferTroopsVisualOrder."
---
# TransferTroopsVisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TransferTroopsVisualOrder : VisualOrder`
**Base:** `VisualOrder`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/TransferTroopsVisualOrder.cs`

## Overview

`TransferTroopsVisualOrder` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ExecuteOrder
`public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** Runs the operation or workflow associated with `order`.

```csharp
// Obtain an instance of TransferTroopsVisualOrder from the subsystem API first
TransferTroopsVisualOrder transferTroopsVisualOrder = ...;
transferTroopsVisualOrder.ExecuteOrder(orderController, executionParameters);
```

### GetName
`public override TextObject GetName(OrderController orderController)`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of TransferTroopsVisualOrder from the subsystem API first
TransferTroopsVisualOrder transferTroopsVisualOrder = ...;
var result = transferTroopsVisualOrder.GetName(orderController);
```

### IsTargeted
`public override bool IsTargeted()`

**Purpose:** Determines whether the current object is in the `targeted` state or condition.

```csharp
// Obtain an instance of TransferTroopsVisualOrder from the subsystem API first
TransferTroopsVisualOrder transferTroopsVisualOrder = ...;
var result = transferTroopsVisualOrder.IsTargeted();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TransferTroopsVisualOrder transferTroopsVisualOrder = ...;
transferTroopsVisualOrder.ExecuteOrder(orderController, executionParameters);
```

## See Also

- [Area Index](../)