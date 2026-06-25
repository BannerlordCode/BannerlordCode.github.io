---
title: "ArrangementVisualOrder"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArrangementVisualOrder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArrangementVisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.FormOrders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArrangementVisualOrder : VisualOrder`
**Base:** `VisualOrder`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.FormOrders/ArrangementVisualOrder.cs`

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

**Purpose:** Gets the current value of `name`.

### ExecuteOrder
`public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** Executes the `order` operation or workflow.

### IsTargeted
`public override bool IsTargeted()`

**Purpose:** Handles logic related to `is targeted`.

## Usage Example

```csharp
var value = new ArrangementVisualOrder();
value.GetName(orderController);
```

## See Also

- [Complete Class Catalog](../catalog)