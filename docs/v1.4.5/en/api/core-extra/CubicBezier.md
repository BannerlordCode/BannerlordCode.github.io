<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CubicBezier`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CubicBezier

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class CubicBezier`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/CubicBezier.cs`

## Overview

`CubicBezier` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
CubicBezier.CreateEase(0, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)