<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Rectangle2D`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Rectangle2D

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct Rectangle2D`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/Rectangle2D.cs`

## Overview

`Rectangle2D` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateMatrixFrame
`public static MatrixFrame CreateMatrixFrame(float posX, float posY, float pivotX, float pivotY, float scaleX, float scaleY, float rotation)`

**Purpose:** Creates a new `matrix frame` instance or object.

### GetBoundingBox
`public static SimpleRectangle GetBoundingBox(in Rectangle2D rectangle)`

**Purpose:** Gets the current value of `bounding box`.

### DoRectanglesIntersect
`public static bool DoRectanglesIntersect(in Rectangle2D rect1, in Rectangle2D rect2)`

**Purpose:** Handles logic related to `do rectangles intersect`.

### IsPointInside
`public static bool IsPointInside(in Vector2 point, in Rectangle2D rect)`

**Purpose:** Handles logic related to `is point inside`.

### IsSubRectOf
`public static bool IsSubRectOf(in Rectangle2D rect1, in Rectangle2D rect2)`

**Purpose:** Handles logic related to `is sub rect of`.

### Create
`public static Rectangle2D Create()`

**Purpose:** Creates a new `create` instance or object.

### FillLocalValuesFrom
`public Rectangle2D FillLocalValuesFrom(in Rectangle2D other)`

**Purpose:** Handles logic related to `fill local values from`.

### GetVisualScale
`public Vector2 GetVisualScale()`

**Purpose:** Gets the current value of `visual scale`.

### AddVisualOffset
`public void AddVisualOffset(float offsetX, float offsetY)`

**Purpose:** Adds `visual offset` to the current collection or state.

### SetVisualOffset
`public void SetVisualOffset(float offsetX, float offsetY)`

**Purpose:** Sets the value or state of `visual offset`.

### AddVisualScale
`public void AddVisualScale(float scaleX, float scaleY)`

**Purpose:** Adds `visual scale` to the current collection or state.

### SetVisualScale
`public void SetVisualScale(float scaleX, float scaleY)`

**Purpose:** Sets the value or state of `visual scale`.

### AddVisualRotationOffset
`public void AddVisualRotationOffset(float rotationOffset)`

**Purpose:** Adds `visual rotation offset` to the current collection or state.

### SetVisualRotationOffset
`public void SetVisualRotationOffset(float rotationOffset)`

**Purpose:** Sets the value or state of `visual rotation offset`.

### ValidateVisuals
`public void ValidateVisuals()`

**Purpose:** Handles logic related to `validate visuals`.

### DrawBoundingBox
`public void DrawBoundingBox()`

**Purpose:** Handles logic related to `draw bounding box`.

### DrawCorners
`public void DrawCorners()`

**Purpose:** Handles logic related to `draw corners`.

### CalculateMatrixFrame
`public void CalculateMatrixFrame(in Rectangle2D parentRectangle)`

**Purpose:** Handles logic related to `calculate matrix frame`.

### CalculateVisualMatrixFrame
`public void CalculateVisualMatrixFrame()`

**Purpose:** Handles logic related to `calculate visual matrix frame`.

### GetCachedOrigin
`public Vector2 GetCachedOrigin()`

**Purpose:** Gets the current value of `cached origin`.

### GetCachedMatrixFrame
`public MatrixFrame GetCachedMatrixFrame()`

**Purpose:** Gets the current value of `cached matrix frame`.

### GetCachedVisualMatrixFrame
`public MatrixFrame GetCachedVisualMatrixFrame()`

**Purpose:** Gets the current value of `cached visual matrix frame`.

### GetCenter
`public Vector2 GetCenter()`

**Purpose:** Gets the current value of `center`.

### GetBoundingBox
`public SimpleRectangle GetBoundingBox()`

**Purpose:** Gets the current value of `bounding box`.

### IsIdentical
`public bool IsIdentical(in Rectangle2D other)`

**Purpose:** Handles logic related to `is identical`.

### IsCollide
`public bool IsCollide(in Rectangle2D other)`

**Purpose:** Handles logic related to `is collide`.

### IsSubRectOf
`public bool IsSubRectOf(in Rectangle2D other)`

**Purpose:** Handles logic related to `is sub rect of`.

### IsPointInside
`public bool IsPointInside(in Vector2 point)`

**Purpose:** Handles logic related to `is point inside`.

### TransformScreenPositionToLocal
`public Vector2 TransformScreenPositionToLocal(in Vector2 screenPosition)`

**Purpose:** Handles logic related to `transform screen position to local`.

### TransformLocalPositionToScreen
`public Vector2 TransformLocalPositionToScreen(in Vector2 localPosition)`

**Purpose:** Handles logic related to `transform local position to screen`.

## Usage Example

```csharp
Rectangle2D.CreateMatrixFrame(0, 0, 0, 0, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)