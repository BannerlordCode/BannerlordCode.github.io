<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CubicBezier`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CubicBezier

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class CubicBezier`
**Area:** core-extra

## Overview

`CubicBezier` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateEase
`public static CubicBezier CreateEase(double controlPoint1X, double controlPoint1Y, double controlPoint2X, double controlPoint2Y)`

**Purpose:** Creates a new `ease` instance or object.

### CreateYBeginToYEndWithRelativeControlDirs
`public static CubicBezier CreateYBeginToYEndWithRelativeControlDirs(double yBegin, double yEnd, double controlDir1X, double controlDir1Y, double controlDir2X, double controlDir2Y)`

**Purpose:** Creates a new `y begin to y end with relative control dirs` instance or object.

### CreateYBeginToYEnd
`public static CubicBezier CreateYBeginToYEnd(double yBegin, double yEnd, double controlPoint1X, double controlPoint1Y, double controlPoint2X, double controlPoint2Y)`

**Purpose:** Creates a new `y begin to y end` instance or object.

### Sample
`public double Sample(double x)`

**Purpose:** Handles logic related to `sample`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
CubicBezier.CreateEase(0, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
