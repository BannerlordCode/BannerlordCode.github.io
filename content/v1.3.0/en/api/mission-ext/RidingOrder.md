---
title: "RidingOrder"
description: "Auto-generated class reference for RidingOrder."
---
# RidingOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct RidingOrder`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/RidingOrder.cs`

## Overview

`RidingOrder` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OrderType` | `public OrderType OrderType { get; }` |

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of RidingOrder from the subsystem API first
RidingOrder ridingOrder = ...;
var result = ridingOrder.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of RidingOrder from the subsystem API first
RidingOrder ridingOrder = ...;
var result = ridingOrder.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RidingOrder ridingOrder = ...;
ridingOrder.Equals(obj);
```

## See Also

- [Area Index](../)