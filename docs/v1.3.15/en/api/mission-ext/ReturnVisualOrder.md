<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ReturnVisualOrder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ReturnVisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class ReturnVisualOrder : VisualOrder`
**Base:** `VisualOrder`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/ReturnVisualOrder.cs`

## Overview

`ReturnVisualOrder` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetName
`public override TextObject GetName(OrderController orderController)`

**Purpose:** Gets the current value of `name`.

### IsTargeted
`public override bool IsTargeted()`

**Purpose:** Handles logic related to `is targeted`.

### ExecuteOrder
`public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** Executes the `order` operation or workflow.

## Usage Example

```csharp
var value = new ReturnVisualOrder();
value.GetName(orderController);
```

## See Also

- [Complete Class Catalog](../catalog)