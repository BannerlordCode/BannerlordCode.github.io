<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Rectangle2D`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Rectangle2D

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** struct
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Rectangle2D` is a struct in the `TaleWorlds.TwoDimension` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Invalid` | `public static Rectangle2D Invalid { get; }` |


## Key Methods

### Create

```csharp
public static Rectangle2D Create()
```

### FillLocalValuesFrom

```csharp
public Rectangle2D FillLocalValuesFrom(in Rectangle2D other)
```

### GetVisualScale

```csharp
public Vector2 GetVisualScale()
```

### AddVisualOffset

```csharp
public void AddVisualOffset(float offsetX, float offsetY)
```

### SetVisualOffset

```csharp
public void SetVisualOffset(float offsetX, float offsetY)
```

### AddVisualScale

```csharp
public void AddVisualScale(float scaleX, float scaleY)
```

### SetVisualScale

```csharp
public void SetVisualScale(float scaleX, float scaleY)
```

### AddVisualRotationOffset

```csharp
public void AddVisualRotationOffset(float rotationOffset)
```

### SetVisualRotationOffset

```csharp
public void SetVisualRotationOffset(float rotationOffset)
```

### ValidateVisuals

```csharp
public void ValidateVisuals()
```

### DrawBoundingBox

```csharp
public void DrawBoundingBox()
```

### DrawCorners

```csharp
public void DrawCorners()
```

### CalculateMatrixFrame

```csharp
public void CalculateMatrixFrame(in Rectangle2D parentRectangle)
```

### CalculateVisualMatrixFrame

```csharp
public void CalculateVisualMatrixFrame()
```

### GetCachedOrigin

```csharp
public Vector2 GetCachedOrigin()
```

### GetCachedMatrixFrame

```csharp
public MatrixFrame GetCachedMatrixFrame()
```

### GetCachedVisualMatrixFrame

```csharp
public MatrixFrame GetCachedVisualMatrixFrame()
```

### GetCenter

```csharp
public Vector2 GetCenter()
```

### GetBoundingBox

```csharp
public SimpleRectangle GetBoundingBox()
```

### IsIdentical

```csharp
public bool IsIdentical(in Rectangle2D other)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)