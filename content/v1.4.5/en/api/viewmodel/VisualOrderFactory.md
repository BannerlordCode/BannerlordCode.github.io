---
title: "VisualOrderFactory"
description: "Auto-generated class reference for VisualOrderFactory."
---
# VisualOrderFactory

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class VisualOrderFactory`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual/VisualOrderFactory.cs`

## Overview

`VisualOrderFactory` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterProvider
`public static void RegisterProvider(VisualOrderProvider provider)`

**Purpose:** **Purpose:** Registers provider with the current system so it can later be observed or dispatched.

```csharp
// Static call; no instance required
VisualOrderFactory.RegisterProvider(provider);
```

### UnregisterProvider
`public static void UnregisterProvider(VisualOrderProvider provider)`

**Purpose:** **Purpose:** Unregisters provider from the current system.

```csharp
// Static call; no instance required
VisualOrderFactory.UnregisterProvider(provider);
```

### GetOrders
`public static MBReadOnlyList<VisualOrderSet> GetOrders()`

**Purpose:** **Purpose:** Reads and returns the orders value held by the this instance.

```csharp
// Static call; no instance required
VisualOrderFactory.GetOrders();
```

## Usage Example

```csharp
VisualOrderFactory.RegisterProvider(provider);
```

## See Also

- [Area Index](../)