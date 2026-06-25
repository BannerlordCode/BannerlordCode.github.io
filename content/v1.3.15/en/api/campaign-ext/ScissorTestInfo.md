---
title: "ScissorTestInfo"
description: "Auto-generated class reference for ScissorTestInfo."
---
# ScissorTestInfo

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct ScissorTestInfo`
**Base:** none
**File:** `TaleWorlds.TwoDimension/ScissorTestInfo.cs`

## Overview

`ScissorTestInfo` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `X` | `public float X { get; }` |
| `X2` | `public float X2 { get; }` |
| `Y` | `public float Y { get; }` |
| `Y2` | `public float Y2 { get; }` |

## Key Methods

### ReduceToIntersection
`public void ReduceToIntersection(ScissorTestInfo other)`

**Purpose:** **Purpose:** Executes the ReduceToIntersection logic.

```csharp
// Obtain an instance of ScissorTestInfo from the subsystem API first
ScissorTestInfo scissorTestInfo = ...;
scissorTestInfo.ReduceToIntersection(other);
```

### GetSimpleRectangle
`public SimpleRectangle GetSimpleRectangle()`

**Purpose:** **Purpose:** Reads and returns the simple rectangle value held by the this instance.

```csharp
// Obtain an instance of ScissorTestInfo from the subsystem API first
ScissorTestInfo scissorTestInfo = ...;
var result = scissorTestInfo.GetSimpleRectangle();
```

### IsCollide
`public bool IsCollide(in Rectangle2D other)`

**Purpose:** **Purpose:** Determines whether the this instance is in the collide state or condition.

```csharp
// Obtain an instance of ScissorTestInfo from the subsystem API first
ScissorTestInfo scissorTestInfo = ...;
var result = scissorTestInfo.IsCollide(other);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ScissorTestInfo scissorTestInfo = ...;
scissorTestInfo.ReduceToIntersection(other);
```

## See Also

- [Area Index](../)