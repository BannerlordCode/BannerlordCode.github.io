---
title: "GenericVisualOrderSet"
description: "Auto-generated class reference for GenericVisualOrderSet."
---
# GenericVisualOrderSet

**Namespace:** TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GenericVisualOrderSet : VisualOrderSet`
**Base:** `VisualOrderSet`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/OrderSets/GenericVisualOrderSet.cs`

## Overview

`GenericVisualOrderSet` lives in `TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSoloOrder` | `public override bool IsSoloOrder { get; }` |
| `StringId` | `public override string StringId { get; }` |
| `IconId` | `public override string IconId { get; }` |

## Key Methods

### GetName
`public override TextObject GetName(OrderController orderController)`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of GenericVisualOrderSet from the subsystem API first
GenericVisualOrderSet genericVisualOrderSet = ...;
var result = genericVisualOrderSet.GetName(orderController);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GenericVisualOrderSet genericVisualOrderSet = ...;
genericVisualOrderSet.GetName(orderController);
```

## See Also

- [Area Index](../)