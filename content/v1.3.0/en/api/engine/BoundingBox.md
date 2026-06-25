---
title: "BoundingBox"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoundingBox`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `relax min max with point`.

### RelaxMinMaxWithPointAndRadius
`public void RelaxMinMaxWithPointAndRadius(in Vec3 point, float radius)`

**Purpose:** Handles logic related to `relax min max with point and radius`.

### RecomputeRadius
`public void RecomputeRadius()`

**Purpose:** Handles logic related to `recompute radius`.

### GetTransformedTipPointsToParent
`public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToParent(in MatrixFrame childFrame)`

**Purpose:** Gets the current value of `transformed tip points to parent`.

### GetTransformedTipPointsToChild
`public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToChild(in MatrixFrame childFrame)`

**Purpose:** Gets the current value of `transformed tip points to child`.

### RelaxWithBoundingBox
`public void RelaxWithBoundingBox(BoundingBox modifiedBoundingBox)`

**Purpose:** Handles logic related to `relax with bounding box`.

### RelaxWithArbitraryBoundingBox
`public void RelaxWithArbitraryBoundingBox(BoundingBox otherBoundingBox, MatrixFrame otherGlobalFrame, MatrixFrame globalFrameOfThisBoundingBox)`

**Purpose:** Handles logic related to `relax with arbitrary bounding box`.

### RelaxWithChildBoundingBox
`public void RelaxWithChildBoundingBox(BoundingBox childBoundingBox, MatrixFrame childFrame)`

**Purpose:** Handles logic related to `relax with child bounding box`.

### BeginRelaxation
`public void BeginRelaxation()`

**Purpose:** Handles logic related to `begin relaxation`.

### ArrangeWithAnotherBoundingBox
`public static bool ArrangeWithAnotherBoundingBox(ref BoundingBox boundingBox, BoundingBox otherBoundingBox, float changeAmount)`

**Purpose:** Handles logic related to `arrange with another bounding box`.

### GetLongestHalfDimensionOfBoundingBox
`public static float GetLongestHalfDimensionOfBoundingBox(BoundingBox boundingBox)`

**Purpose:** Gets the current value of `longest half dimension of bounding box`.

### RenderBoundingBox
`public void RenderBoundingBox()`

**Purpose:** Handles logic related to `render bounding box`.

## Usage Example

```csharp
var value = new BoundingBox();
value.RelaxMinMaxWithPoint(point);
```

## See Also

- [Complete Class Catalog](../catalog)