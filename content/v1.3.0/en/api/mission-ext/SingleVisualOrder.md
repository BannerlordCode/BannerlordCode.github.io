---
title: "SingleVisualOrder"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SingleVisualOrder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Executes the `order` operation or workflow.

### GetName
`public override TextObject GetName(OrderController orderController)`

**Purpose:** Gets the current value of `name`.

### IsTargeted
`public override bool IsTargeted()`

**Purpose:** Handles logic related to `is targeted`.

## Usage Example

```csharp
var value = new SingleVisualOrder();
value.ExecuteOrder(orderController, executionParameters);
```

## See Also

- [Complete Class Catalog](../catalog)