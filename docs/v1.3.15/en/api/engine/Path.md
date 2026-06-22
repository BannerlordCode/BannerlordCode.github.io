<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Path`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Path

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `Path` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfPoints` | `public int NumberOfPoints { get; }` |
| `TotalDistance` | `public float TotalDistance { get; }` |


## Key Methods

### GetHermiteFrameForDt

```csharp
public MatrixFrame GetHermiteFrameForDt(float phase, int first_point)
```

### GetFrameForDistance

```csharp
public MatrixFrame GetFrameForDistance(float distance)
```

### GetNearestFrameWithValidAlphaForDistance

```csharp
public MatrixFrame GetNearestFrameWithValidAlphaForDistance(float distance, bool searchForward = true, float alphaThreshold = 0.5f)
```

### GetFrameAndColorForDistance

```csharp
public void GetFrameAndColorForDistance(float distance, out MatrixFrame frame, out Vec3 color)
```

### GetArcLength

```csharp
public float GetArcLength(int first_point)
```

### GetPoints

```csharp
public void GetPoints(MatrixFrame points)
```

### GetTotalLength

```csharp
public float GetTotalLength()
```

### GetVersion

```csharp
public int GetVersion()
```

### SetFrameOfPoint

```csharp
public void SetFrameOfPoint(int pointIndex, ref MatrixFrame frame)
```

### SetTangentPositionOfPoint

```csharp
public void SetTangentPositionOfPoint(int pointIndex, int tangentIndex, ref Vec3 position)
```

### AddPathPoint

```csharp
public int AddPathPoint(int newNodeIndex)
```

### DeletePathPoint

```csharp
public void DeletePathPoint(int nodeIndex)
```

### HasValidAlphaAtPathPoint

```csharp
public bool HasValidAlphaAtPathPoint(int nodeIndex, float alphaThreshold = 0.5f)
```

### GetName

```csharp
public string GetName()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)