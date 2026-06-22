<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CubicBezier`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CubicBezier

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `CubicBezier` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### CreateEase

```csharp
public static CubicBezier CreateEase(double controlPoint1X, double controlPoint1Y, double controlPoint2X, double controlPoint2Y)
```

### CreateYBeginToYEndWithRelativeControlDirs

```csharp
public static CubicBezier CreateYBeginToYEndWithRelativeControlDirs(double yBegin, double yEnd, double controlDir1X, double controlDir1Y, double controlDir2X, double controlDir2Y)
```

### CreateYBeginToYEnd

```csharp
public static CubicBezier CreateYBeginToYEnd(double yBegin, double yEnd, double controlPoint1X, double controlPoint1Y, double controlPoint2X, double controlPoint2Y)
```

### Sample

```csharp
public double Sample(double x)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)