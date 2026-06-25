---
title: "HideoutVisualOrderProvider"
description: "Auto-generated class reference for HideoutVisualOrderProvider."
---
# HideoutVisualOrderProvider

**Namespace:** SandBox.View.OrderProviders
**Module:** SandBox.View
**Type:** `internal class HideoutVisualOrderProvider : VisualOrderProvider`
**Base:** `VisualOrderProvider`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.OrderProviders/HideoutVisualOrderProvider.cs`

## Overview

`HideoutVisualOrderProvider` lives in `SandBox.View.OrderProviders` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.OrderProviders` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsAvailable
`public override bool IsAvailable()`

**Purpose:** Determines whether the current object is in the `available` state or condition.

```csharp
// Obtain an instance of HideoutVisualOrderProvider from the subsystem API first
HideoutVisualOrderProvider hideoutVisualOrderProvider = ...;
var result = hideoutVisualOrderProvider.IsAvailable();
```

### GetOrders
`public override MBReadOnlyList<VisualOrderSet> GetOrders()`

**Purpose:** Reads and returns the `orders` value held by the current object.

```csharp
// Obtain an instance of HideoutVisualOrderProvider from the subsystem API first
HideoutVisualOrderProvider hideoutVisualOrderProvider = ...;
var result = hideoutVisualOrderProvider.GetOrders();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HideoutVisualOrderProvider hideoutVisualOrderProvider = ...;
hideoutVisualOrderProvider.IsAvailable();
```

## See Also

- [Area Index](../../)