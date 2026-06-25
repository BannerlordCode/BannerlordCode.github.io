---
title: "DefaultVisualOrderProvider"
description: "Auto-generated class reference for DefaultVisualOrderProvider."
---
# DefaultVisualOrderProvider

**Namespace:** TaleWorlds.MountAndBlade.View.VisualOrders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultVisualOrderProvider : VisualOrderProvider`
**Base:** `VisualOrderProvider`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.VisualOrders/DefaultVisualOrderProvider.cs`

## Overview

`DefaultVisualOrderProvider` lives in `TaleWorlds.MountAndBlade.View.VisualOrders` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.VisualOrders` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsAvailable
`public override bool IsAvailable()`

**Purpose:** **Purpose:** Determines whether the this instance is in the available state or condition.

```csharp
// Obtain an instance of DefaultVisualOrderProvider from the subsystem API first
DefaultVisualOrderProvider defaultVisualOrderProvider = ...;
var result = defaultVisualOrderProvider.IsAvailable();
```

### GetOrders
`public override MBReadOnlyList<VisualOrderSet> GetOrders()`

**Purpose:** **Purpose:** Reads and returns the orders value held by the this instance.

```csharp
// Obtain an instance of DefaultVisualOrderProvider from the subsystem API first
DefaultVisualOrderProvider defaultVisualOrderProvider = ...;
var result = defaultVisualOrderProvider.GetOrders();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefaultVisualOrderProvider defaultVisualOrderProvider = ...;
defaultVisualOrderProvider.IsAvailable();
```

## See Also

- [Area Index](../)