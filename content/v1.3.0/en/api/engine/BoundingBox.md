---
title: "BoundingBox"
description: "Auto-generated class reference for BoundingBox."
---
# BoundingBox

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct BoundingBox`
**Base:** none
**File:** `TaleWorlds.Engine/BoundingBox.cs`

## Overview

`BoundingBox` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public Vec3 this { get; }` |
| `this` | `public Vec3 this { get; }` |

## Key Methods

### RelaxMinMaxWithPoint
`public void RelaxMinMaxWithPoint(in Vec3 point)`

**Purpose:** **Purpose:** Executes the RelaxMinMaxWithPoint logic.

```csharp
// Obtain an instance of BoundingBox from the subsystem API first
BoundingBox boundingBox = ...;
boundingBox.RelaxMinMaxWithPoint(point);
```

### RelaxMinMaxWithPointAndRadius
`public void RelaxMinMaxWithPointAndRadius(in Vec3 point, float radius)`

**Purpose:** **Purpose:** Executes the RelaxMinMaxWithPointAndRadius logic.

```csharp
// Obtain an instance of BoundingBox from the subsystem API first
BoundingBox boundingBox = ...;
boundingBox.RelaxMinMaxWithPointAndRadius(point, 0);
```

### RecomputeRadius
`public void RecomputeRadius()`

**Purpose:** **Purpose:** Recomputes radius and returns the result.

```csharp
// Obtain an instance of BoundingBox from the subsystem API first
BoundingBox boundingBox = ...;
boundingBox.RecomputeRadius();
```

### GetTransformedTipPointsToParent
`public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToParent(in MatrixFrame childFrame)`

**Purpose:** **Purpose:** Reads and returns the transformed tip points to parent value held by the this instance.

```csharp
// Obtain an instance of BoundingBox from the subsystem API first
BoundingBox boundingBox = ...;
var result = boundingBox.GetTransformedTipPointsToParent(childFrame);
```

### GetTransformedTipPointsToChild
`public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToChild(in MatrixFrame childFrame)`

**Purpose:** **Purpose:** Reads and returns the transformed tip points to child value held by the this instance.

```csharp
// Obtain an instance of BoundingBox from the subsystem API first
BoundingBox boundingBox = ...;
var result = boundingBox.GetTransformedTipPointsToChild(childFrame);
```

### RelaxWithBoundingBox
`public void RelaxWithBoundingBox(BoundingBox modifiedBoundingBox)`

**Purpose:** **Purpose:** Executes the RelaxWithBoundingBox logic.

```csharp
// Obtain an instance of BoundingBox from the subsystem API first
BoundingBox boundingBox = ...;
boundingBox.RelaxWithBoundingBox(modifiedBoundingBox);
```

### RelaxWithArbitraryBoundingBox
`public void RelaxWithArbitraryBoundingBox(BoundingBox otherBoundingBox, MatrixFrame otherGlobalFrame, MatrixFrame globalFrameOfThisBoundingBox)`

**Purpose:** **Purpose:** Executes the RelaxWithArbitraryBoundingBox logic.

```csharp
// Obtain an instance of BoundingBox from the subsystem API first
BoundingBox boundingBox = ...;
boundingBox.RelaxWithArbitraryBoundingBox(otherBoundingBox, otherGlobalFrame, globalFrameOfThisBoundingBox);
```

### RelaxWithChildBoundingBox
`public void RelaxWithChildBoundingBox(BoundingBox childBoundingBox, MatrixFrame childFrame)`

**Purpose:** **Purpose:** Executes the RelaxWithChildBoundingBox logic.

```csharp
// Obtain an instance of BoundingBox from the subsystem API first
BoundingBox boundingBox = ...;
boundingBox.RelaxWithChildBoundingBox(childBoundingBox, childFrame);
```

### BeginRelaxation
`public void BeginRelaxation()`

**Purpose:** **Purpose:** Executes the BeginRelaxation logic.

```csharp
// Obtain an instance of BoundingBox from the subsystem API first
BoundingBox boundingBox = ...;
boundingBox.BeginRelaxation();
```

### ArrangeWithAnotherBoundingBox
`public static bool ArrangeWithAnotherBoundingBox(ref BoundingBox boundingBox, BoundingBox otherBoundingBox, float changeAmount)`

**Purpose:** **Purpose:** Executes the ArrangeWithAnotherBoundingBox logic.

```csharp
// Static call; no instance required
BoundingBox.ArrangeWithAnotherBoundingBox(boundingBox, otherBoundingBox, 0);
```

### GetLongestHalfDimensionOfBoundingBox
`public static float GetLongestHalfDimensionOfBoundingBox(BoundingBox boundingBox)`

**Purpose:** **Purpose:** Reads and returns the longest half dimension of bounding box value held by the this instance.

```csharp
// Static call; no instance required
BoundingBox.GetLongestHalfDimensionOfBoundingBox(boundingBox);
```

### RenderBoundingBox
`public void RenderBoundingBox()`

**Purpose:** **Purpose:** Executes the RenderBoundingBox logic.

```csharp
// Obtain an instance of BoundingBox from the subsystem API first
BoundingBox boundingBox = ...;
boundingBox.RenderBoundingBox();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoundingBox boundingBox = ...;
boundingBox.RelaxMinMaxWithPoint(point);
```

## See Also

- [Area Index](../)