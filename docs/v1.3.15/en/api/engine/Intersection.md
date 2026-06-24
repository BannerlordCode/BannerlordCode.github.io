<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Intersection`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Intersection

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct Intersection`
**Area:** engine

## Overview

`Intersection` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DoSegmentsIntersect
`public static bool DoSegmentsIntersect(Vec2 line1Start, Vec2 line1Direction, Vec2 line2Start, Vec2 line2Direction, ref Vec2 intersectionPoint)`

**Purpose:** Handles logic related to `do segments intersect`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Intersection.DoSegmentsIntersect(line1Start, line1Direction, line2Start, line2Direction, intersectionPoint);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
