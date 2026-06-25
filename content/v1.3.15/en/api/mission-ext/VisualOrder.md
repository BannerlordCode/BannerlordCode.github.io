---
title: "VisualOrder"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualOrder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class VisualOrder`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrder.cs`

## Overview

`VisualOrder` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringId` | `public string StringId { get; }` |
| `IconId` | `public string IconId { get; }` |

## Key Methods

### GetName
`public abstract TextObject GetName(OrderController orderController)`

**Purpose:** Gets the current value of `name`.

### IsTargeted
`public abstract bool IsTargeted()`

**Purpose:** Handles logic related to `is targeted`.

### ExecuteOrder
`public abstract void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** Executes the `order` operation or workflow.

### BeforeExecuteOrder
`public virtual void BeforeExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** Handles logic related to `before execute order`.

### AfterExecuteOrder
`public virtual void AfterExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**Purpose:** Handles logic related to `after execute order`.

### GetFormationHasOrder
`public bool GetFormationHasOrder(Formation formation)`

**Purpose:** Gets the current value of `formation has order`.

### GetActiveState
`public OrderState GetActiveState(OrderController orderController)`

**Purpose:** Gets the current value of `active state`.

## Usage Example

```csharp
var implementation = new CustomVisualOrder();
```

## See Also

- [Complete Class Catalog](../catalog)