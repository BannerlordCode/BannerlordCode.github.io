---
title: "Rectangle2D"
description: "Auto-generated class reference for Rectangle2D."
---
# Rectangle2D

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct Rectangle2D`
**Base:** none
**File:** `TaleWorlds.TwoDimension/Rectangle2D.cs`

## Overview

`Rectangle2D` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Invalid` | `public static Rectangle2D Invalid { get; }` |

## Key Methods

### Create
`public static Rectangle2D Create()`

**Purpose:** **Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
Rectangle2D.Create();
```

### FillLocalValuesFrom
`public Rectangle2D FillLocalValuesFrom(in Rectangle2D other)`

**Purpose:** **Purpose:** Executes the FillLocalValuesFrom logic.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
var result = rectangle2D.FillLocalValuesFrom(other);
```

### GetVisualScale
`public Vector2 GetVisualScale()`

**Purpose:** **Purpose:** Reads and returns the visual scale value held by the this instance.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
var result = rectangle2D.GetVisualScale();
```

### AddVisualOffset
`public void AddVisualOffset(float offsetX, float offsetY)`

**Purpose:** **Purpose:** Adds visual offset to the current collection or state.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
rectangle2D.AddVisualOffset(0, 0);
```

### SetVisualOffset
`public void SetVisualOffset(float offsetX, float offsetY)`

**Purpose:** **Purpose:** Assigns a new value to visual offset and updates the object's internal state.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
rectangle2D.SetVisualOffset(0, 0);
```

### AddVisualScale
`public void AddVisualScale(float scaleX, float scaleY)`

**Purpose:** **Purpose:** Adds visual scale to the current collection or state.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
rectangle2D.AddVisualScale(0, 0);
```

### SetVisualScale
`public void SetVisualScale(float scaleX, float scaleY)`

**Purpose:** **Purpose:** Assigns a new value to visual scale and updates the object's internal state.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
rectangle2D.SetVisualScale(0, 0);
```

### AddVisualRotationOffset
`public void AddVisualRotationOffset(float rotationOffset)`

**Purpose:** **Purpose:** Adds visual rotation offset to the current collection or state.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
rectangle2D.AddVisualRotationOffset(0);
```

### SetVisualRotationOffset
`public void SetVisualRotationOffset(float rotationOffset)`

**Purpose:** **Purpose:** Assigns a new value to visual rotation offset and updates the object's internal state.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
rectangle2D.SetVisualRotationOffset(0);
```

### ValidateVisuals
`public void ValidateVisuals()`

**Purpose:** **Purpose:** Checks whether visuals satisfies the required constraints, usually returning a boolean.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
rectangle2D.ValidateVisuals();
```

### DrawBoundingBox
`public void DrawBoundingBox()`

**Purpose:** **Purpose:** Executes the DrawBoundingBox logic.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
rectangle2D.DrawBoundingBox();
```

### DrawCorners
`public void DrawCorners()`

**Purpose:** **Purpose:** Executes the DrawCorners logic.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
rectangle2D.DrawCorners();
```

### CalculateMatrixFrame
`public void CalculateMatrixFrame(in Rectangle2D parentRectangle)`

**Purpose:** **Purpose:** Calculates the current value or result of matrix frame.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
rectangle2D.CalculateMatrixFrame(parentRectangle);
```

### CalculateVisualMatrixFrame
`public void CalculateVisualMatrixFrame()`

**Purpose:** **Purpose:** Calculates the current value or result of visual matrix frame.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
rectangle2D.CalculateVisualMatrixFrame();
```

### GetCachedOrigin
`public Vector2 GetCachedOrigin()`

**Purpose:** **Purpose:** Reads and returns the cached origin value held by the this instance.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
var result = rectangle2D.GetCachedOrigin();
```

### GetCachedMatrixFrame
`public MatrixFrame GetCachedMatrixFrame()`

**Purpose:** **Purpose:** Reads and returns the cached matrix frame value held by the this instance.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
var result = rectangle2D.GetCachedMatrixFrame();
```

### GetCachedVisualMatrixFrame
`public MatrixFrame GetCachedVisualMatrixFrame()`

**Purpose:** **Purpose:** Reads and returns the cached visual matrix frame value held by the this instance.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
var result = rectangle2D.GetCachedVisualMatrixFrame();
```

### GetCenter
`public Vector2 GetCenter()`

**Purpose:** **Purpose:** Reads and returns the center value held by the this instance.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
var result = rectangle2D.GetCenter();
```

### GetBoundingBox
`public SimpleRectangle GetBoundingBox()`

**Purpose:** **Purpose:** Reads and returns the bounding box value held by the this instance.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
var result = rectangle2D.GetBoundingBox();
```

### IsIdentical
`public bool IsIdentical(in Rectangle2D other)`

**Purpose:** **Purpose:** Determines whether the this instance is in the identical state or condition.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
var result = rectangle2D.IsIdentical(other);
```

### IsCollide
`public bool IsCollide(in Rectangle2D other)`

**Purpose:** **Purpose:** Determines whether the this instance is in the collide state or condition.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
var result = rectangle2D.IsCollide(other);
```

### IsSubRectOf
`public bool IsSubRectOf(in Rectangle2D other)`

**Purpose:** **Purpose:** Determines whether the this instance is in the sub rect of state or condition.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
var result = rectangle2D.IsSubRectOf(other);
```

### IsPointInside
`public bool IsPointInside(in Vector2 point)`

**Purpose:** **Purpose:** Determines whether the this instance is in the point inside state or condition.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
var result = rectangle2D.IsPointInside(point);
```

### TransformScreenPositionToLocal
`public Vector2 TransformScreenPositionToLocal(in Vector2 screenPosition)`

**Purpose:** **Purpose:** Executes the TransformScreenPositionToLocal logic.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
var result = rectangle2D.TransformScreenPositionToLocal(screenPosition);
```

### TransformLocalPositionToScreen
`public Vector2 TransformLocalPositionToScreen(in Vector2 localPosition)`

**Purpose:** **Purpose:** Executes the TransformLocalPositionToScreen logic.

```csharp
// Obtain an instance of Rectangle2D from the subsystem API first
Rectangle2D rectangle2D = ...;
var result = rectangle2D.TransformLocalPositionToScreen(localPosition);
```

### CreateMatrixFrame
`public static MatrixFrame CreateMatrixFrame(float posX, float posY, float pivotX, float pivotY, float scaleX, float scaleY, float rotation)`

**Purpose:** **Purpose:** Constructs a new matrix frame entity and returns it to the caller.

```csharp
// Static call; no instance required
Rectangle2D.CreateMatrixFrame(0, 0, 0, 0, 0, 0, 0);
```

### GetBoundingBox
`public static SimpleRectangle GetBoundingBox(in Rectangle2D rectangle)`

**Purpose:** **Purpose:** Reads and returns the bounding box value held by the this instance.

```csharp
// Static call; no instance required
Rectangle2D.GetBoundingBox(rectangle);
```

### DoRectanglesIntersect
`public static bool DoRectanglesIntersect(in Rectangle2D rect1, in Rectangle2D rect2)`

**Purpose:** **Purpose:** Executes the DoRectanglesIntersect logic.

```csharp
// Static call; no instance required
Rectangle2D.DoRectanglesIntersect(rect1, rect2);
```

### IsPointInside
`public static bool IsPointInside(in Vector2 point, in Rectangle2D rect)`

**Purpose:** **Purpose:** Determines whether the this instance is in the point inside state or condition.

```csharp
// Static call; no instance required
Rectangle2D.IsPointInside(point, rect);
```

### IsSubRectOf
`public static bool IsSubRectOf(in Rectangle2D rect1, in Rectangle2D rect2)`

**Purpose:** **Purpose:** Determines whether the this instance is in the sub rect of state or condition.

```csharp
// Static call; no instance required
Rectangle2D.IsSubRectOf(rect1, rect2);
```

## Usage Example

```csharp
Rectangle2D.Create();
```

## See Also

- [Area Index](../)