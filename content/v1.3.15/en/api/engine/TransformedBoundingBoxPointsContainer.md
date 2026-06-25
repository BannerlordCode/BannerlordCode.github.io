---
title: "TransformedBoundingBoxPointsContainer"
description: "Auto-generated class reference for TransformedBoundingBoxPointsContainer."
---
# TransformedBoundingBoxPointsContainer

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct TransformedBoundingBoxPointsContainer`
**Base:** none
**File:** `TaleWorlds.Engine/BoundingBox.cs`

## Overview

`TransformedBoundingBoxPointsContainer` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public Vec3 this { get; }` |

## Key Methods

### ComputeTransformedMinMax
`public ValueTuple<Vec3, Vec3> ComputeTransformedMinMax()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TransformedBoundingBoxPointsContainer from the subsystem API first
TransformedBoundingBoxPointsContainer transformedBoundingBoxPointsContainer = ...;
var result = transformedBoundingBoxPointsContainer.ComputeTransformedMinMax();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TransformedBoundingBoxPointsContainer transformedBoundingBoxPointsContainer = ...;
transformedBoundingBoxPointsContainer.ComputeTransformedMinMax();
```

## See Also

- [Area Index](../)