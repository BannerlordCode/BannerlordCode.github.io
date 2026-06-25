---
title: "SingleVisualOrderSet"
description: "Auto-generated class reference for SingleVisualOrderSet."
---
# SingleVisualOrderSet

**Namespace:** TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleVisualOrderSet : VisualOrderSet`
**Base:** `VisualOrderSet`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets/SingleVisualOrderSet.cs`

## Overview

`SingleVisualOrderSet` lives in `TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetName
`public override TextObject GetName(OrderController orderController)`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of SingleVisualOrderSet from the subsystem API first
SingleVisualOrderSet singleVisualOrderSet = ...;
var result = singleVisualOrderSet.GetName(orderController);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SingleVisualOrderSet singleVisualOrderSet = ...;
singleVisualOrderSet.GetName(orderController);
```

## See Also

- [Area Index](../)