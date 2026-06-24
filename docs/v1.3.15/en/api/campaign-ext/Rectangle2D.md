<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Rectangle2D`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Rectangle2D

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct Rectangle2D`
**Area:** campaign-ext

## Overview

`Rectangle2D` lives in `TaleWorlds.TwoDimension`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Invalid` | `public static Rectangle2D Invalid { get; }` |

## Key Methods

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

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Rectangle2D.Create();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
