---
title: "VisualOrderProvider"
description: "Auto-generated class reference for VisualOrderProvider."
---
# VisualOrderProvider

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class VisualOrderProvider`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrderProvider.cs`

## Overview

`VisualOrderProvider` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsAvailable
`public abstract bool IsAvailable()`

**Purpose:** Determines whether the this instance is in the available state or condition.

```csharp
// Obtain an instance of VisualOrderProvider from the subsystem API first
VisualOrderProvider visualOrderProvider = ...;
var result = visualOrderProvider.IsAvailable();
```

### GetOrders
`public abstract MBReadOnlyList<VisualOrderSet> GetOrders()`

**Purpose:** Reads and returns the orders value held by the this instance.

```csharp
// Obtain an instance of VisualOrderProvider from the subsystem API first
VisualOrderProvider visualOrderProvider = ...;
var result = visualOrderProvider.GetOrders();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
VisualOrderProvider instance = ...;
```

## See Also

- [Area Index](../)