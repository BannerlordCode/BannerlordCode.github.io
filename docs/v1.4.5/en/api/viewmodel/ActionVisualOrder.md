<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ActionVisualOrder`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ActionVisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class ActionVisualOrder : VisualOrder`
**Base:** `VisualOrder`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual/ActionVisualOrder.cs`

## Overview

`ActionVisualOrder` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OrderActionDelegate
`public delegate void OrderActionDelegate(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** Handles logic related to `order action delegate`.

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
var value = new ActionVisualOrder();
value.OrderActionDelegate(orderController, executionParameters);
```

## See Also

- [Complete Class Catalog](../catalog)