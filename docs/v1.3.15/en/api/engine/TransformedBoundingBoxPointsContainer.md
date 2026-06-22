<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TransformedBoundingBoxPointsContainer`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TransformedBoundingBoxPointsContainer

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** struct
**Area:** Engine

## Overview

> This is an auto-generated stub. `TransformedBoundingBoxPointsContainer` is a struct in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public Vec3 this { get; }` |
| `this` | `public Vec3 this { get; }` |


## Key Methods

### RelaxMinMaxWithPoint

```csharp
public void RelaxMinMaxWithPoint(in Vec3 point)
```

### RelaxMinMaxWithPointAndRadius

```csharp
public void RelaxMinMaxWithPointAndRadius(in Vec3 point, float radius)
```

### RecomputeRadius

```csharp
public void RecomputeRadius()
```

### GetTransformedTipPointsToParent

```csharp
public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToParent(in MatrixFrame parentFrame)
```

### GetTransformedTipPointsToChild

```csharp
public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToChild(in MatrixFrame childFrame)
```

### RelaxWithBoundingBox

```csharp
public void RelaxWithBoundingBox(BoundingBox modifiedBoundingBox)
```

### RelaxWithArbitraryBoundingBox

```csharp
public void RelaxWithArbitraryBoundingBox(BoundingBox otherBoundingBox, MatrixFrame otherGlobalFrame, MatrixFrame globalFrameOfThisBoundingBox)
```

### RelaxWithChildBoundingBox

```csharp
public void RelaxWithChildBoundingBox(BoundingBox childBoundingBox, MatrixFrame childFrame)
```

### BeginRelaxation

```csharp
public void BeginRelaxation()
```

### ArrangeWithAnotherBoundingBox

```csharp
public static bool ArrangeWithAnotherBoundingBox(ref BoundingBox boundingBox, BoundingBox otherBoundingBox, float changeAmount)
```

### PointInsideBox

```csharp
public bool PointInsideBox(Vec3 point, float epsilon)
```

### GetLongestHalfDimensionOfBoundingBox

```csharp
public static float GetLongestHalfDimensionOfBoundingBox(BoundingBox boundingBox)
```

### RenderBoundingBox

```csharp
public void RenderBoundingBox()
```

### ComputeTransformedMinMax

```csharp
public ValueTuple<Vec3, Vec3> ComputeTransformedMinMax()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)