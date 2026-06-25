---
title: "VisualOrderSet"
description: "Auto-generated class reference for VisualOrderSet."
---
# VisualOrderSet

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class VisualOrderSet`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrderSet.cs`

## Overview

`VisualOrderSet` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Orders` | `public MBReadOnlyList<VisualOrder> Orders { get; }` |
| `SoloOrder` | `public VisualOrder SoloOrder { get; }` |
| `IsSoloOrder` | `public abstract bool IsSoloOrder { get; }` |
| `StringId` | `public abstract string StringId { get; }` |
| `IconId` | `public abstract string IconId { get; }` |

## Key Methods

### GetName
`public abstract TextObject GetName(OrderController orderController)`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of VisualOrderSet from the subsystem API first
VisualOrderSet visualOrderSet = ...;
var result = visualOrderSet.GetName(orderController);
```

### AddOrder
`public void AddOrder(VisualOrder order)`

**Purpose:** Adds `order` to the current collection or state.

```csharp
// Obtain an instance of VisualOrderSet from the subsystem API first
VisualOrderSet visualOrderSet = ...;
visualOrderSet.AddOrder(order);
```

### RemoveOrder
`public void RemoveOrder(VisualOrder order)`

**Purpose:** Removes `order` from the current collection or state.

```csharp
// Obtain an instance of VisualOrderSet from the subsystem API first
VisualOrderSet visualOrderSet = ...;
visualOrderSet.RemoveOrder(order);
```

### ClearOrders
`public void ClearOrders()`

**Purpose:** Removes all `orders` from the current object.

```csharp
// Obtain an instance of VisualOrderSet from the subsystem API first
VisualOrderSet visualOrderSet = ...;
visualOrderSet.ClearOrders();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
VisualOrderSet instance = ...;
```

## See Also

- [Area Index](../)