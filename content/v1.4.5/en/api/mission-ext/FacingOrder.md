---
title: "FacingOrder"
description: "Auto-generated class reference for FacingOrder."
---
# FacingOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FacingOrder`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FacingOrder.cs`

## Overview

`FacingOrder` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OrderType` | `public OrderType OrderType { get; }` |

## Key Methods

### FacingOrderLookAtDirection
`public static FacingOrder FacingOrderLookAtDirection(Vec2 direction)`

**Purpose:** Executes the FacingOrderLookAtDirection logic.

```csharp
// Static call; no instance required
FacingOrder.FacingOrderLookAtDirection(direction);
```

### GetDirection
`public Vec2 GetDirection(Formation f, Agent targetAgent = null)`

**Purpose:** Reads and returns the direction value held by the this instance.

```csharp
// Obtain an instance of FacingOrder from the subsystem API first
FacingOrder facingOrder = ...;
var result = facingOrder.GetDirection(f, null);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of FacingOrder from the subsystem API first
FacingOrder facingOrder = ...;
var result = facingOrder.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of FacingOrder from the subsystem API first
FacingOrder facingOrder = ...;
var result = facingOrder.GetHashCode();
```

## Usage Example

```csharp
FacingOrder.FacingOrderLookAtDirection(direction);
```

## See Also

- [Area Index](../)