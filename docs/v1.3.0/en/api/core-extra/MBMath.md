<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBMath`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBMath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class MBMath`
**Base:** none
**File:** `TaleWorlds.Library/MBMath.cs`

## Overview

`MBMath` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToRadians
`public static float ToRadians(this float f)`

**Purpose:** Handles logic related to `to radians`.

### ToDegrees
`public static float ToDegrees(this float f)`

**Purpose:** Handles logic related to `to degrees`.

### ApproximatelyEqualsTo
`public static bool ApproximatelyEqualsTo(this float f, float comparedValue, float epsilon = 1E-05f)`

**Purpose:** Handles logic related to `approximately equals to`.

### ApproximatelyEquals
`public static bool ApproximatelyEquals(float first, float second, float epsilon = 1E-05f)`

**Purpose:** Handles logic related to `approximately equals`.

### IsValidValue
`public static bool IsValidValue(float f)`

**Purpose:** Handles logic related to `is valid value`.

### ClampIndex
`public static int ClampIndex(int value, int minValue, int maxValue)`

**Purpose:** Handles logic related to `clamp index`.

### ClampInt
`public static int ClampInt(int value, int minValue, int maxValue)`

**Purpose:** Handles logic related to `clamp int`.

### ClampFloat
`public static float ClampFloat(float value, float minValue, float maxValue)`

**Purpose:** Handles logic related to `clamp float`.

### ClampUnit
`public static void ClampUnit(ref float value)`

**Purpose:** Handles logic related to `clamp unit`.

### GetNumberOfBitsToRepresentNumber
`public static int GetNumberOfBitsToRepresentNumber(uint value)`

**Purpose:** Gets the current value of `number of bits to represent number`.

### GetNumberOfBitsToRepresentNumber
`public static int GetNumberOfBitsToRepresentNumber(ulong value)`

**Purpose:** Gets the current value of `number of bits to represent number`.

### Lerp
`public static float Lerp(float valueFrom, float valueTo, float amount, float minimumDifference = 1E-05f)`

**Purpose:** Handles logic related to `lerp`.

### LinearExtrapolation
`public static float LinearExtrapolation(float valueFrom, float valueTo, float amount)`

**Purpose:** Handles logic related to `linear extrapolation`.

### Lerp
`public static Vec3 Lerp(Vec3 vecFrom, Vec3 vecTo, float amount, float minimumDifference)`

**Purpose:** Handles logic related to `lerp`.

### Lerp
`public static Vec2 Lerp(Vec2 vecFrom, Vec2 vecTo, float amount, float minimumDifference)`

**Purpose:** Handles logic related to `lerp`.

### Map
`public static float Map(float input, float inputMinimum, float inputMaximum, float outputMinimum, float outputMaximum)`

**Purpose:** Handles logic related to `map`.

### Lerp
`public static Mat3 Lerp(ref Mat3 matFrom, ref Mat3 matTo, float amount, float minimumDifference)`

**Purpose:** Handles logic related to `lerp`.

### LerpRadians
`public static float LerpRadians(float valueFrom, float valueTo, float amount, float minChange, float maxChange)`

**Purpose:** Handles logic related to `lerp radians`.

### SplitLerp
`public static float SplitLerp(float value1, float value2, float value3, float cutOff, float amount, float minimumDifference)`

**Purpose:** Handles logic related to `split lerp`.

### InverseLerp
`public static float InverseLerp(float valueFrom, float valueTo, float value)`

**Purpose:** Handles logic related to `inverse lerp`.

### SmoothStep
`public static float SmoothStep(float edge0, float edge1, float value)`

**Purpose:** Handles logic related to `smooth step`.

### BilinearLerp
`public static float BilinearLerp(float topLeft, float topRight, float botLeft, float botRight, float x, float y)`

**Purpose:** Handles logic related to `bilinear lerp`.

### GetSmallestDifferenceBetweenTwoAngles
`public static float GetSmallestDifferenceBetweenTwoAngles(float fromAngle, float toAngle)`

**Purpose:** Gets the current value of `smallest difference between two angles`.

### ClampAngle
`public static float ClampAngle(float angle, float restrictionCenter, float restrictionRange)`

**Purpose:** Handles logic related to `clamp angle`.

### WrapAngle
`public static float WrapAngle(float angle)`

**Purpose:** Handles logic related to `wrap angle`.

### WrapAngleSafe
`public static float WrapAngleSafe(float angle)`

**Purpose:** Handles logic related to `wrap angle safe`.

### IsBetween
`public static bool IsBetween(float numberToCheck, float bottom, float top)`

**Purpose:** Handles logic related to `is between`.

### IsBetween
`public static bool IsBetween(int value, int minValue, int maxValue)`

**Purpose:** Handles logic related to `is between`.

### IsBetweenInclusive
`public static bool IsBetweenInclusive(float numberToCheck, float bottom, float top)`

**Purpose:** Handles logic related to `is between inclusive`.

### ColorFromRGBA
`public static uint ColorFromRGBA(float red, float green, float blue, float alpha)`

**Purpose:** Handles logic related to `color from r g b a`.

### HSBtoRGB
`public static Color HSBtoRGB(float hue, float saturation, float brightness, float outputAlpha)`

**Purpose:** Handles logic related to `h s bto r g b`.

### RGBtoHSB
`public static Vec3 RGBtoHSB(Color rgb)`

**Purpose:** Handles logic related to `r g bto h s b`.

### GammaCorrectRGB
`public static Vec3 GammaCorrectRGB(float gamma, Vec3 rgb)`

**Purpose:** Handles logic related to `gamma correct r g b`.

### GetSignedDistanceOfPointToLineSegment
`public static float GetSignedDistanceOfPointToLineSegment(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, in Vec2 point)`

**Purpose:** Gets the current value of `signed distance of point to line segment`.

### GetDistanceSquareOfPointToLineSegment
`public static float GetDistanceSquareOfPointToLineSegment(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, Vec2 point)`

**Purpose:** Gets the current value of `distance square of point to line segment`.

### ProjectPointOntoLine
`public static Vec2 ProjectPointOntoLine(Vec2 point, Vec2 lineStart, Vec2 lineEnd)`

**Purpose:** Handles logic related to `project point onto line`.

### ClampToAxisAlignedRectangle
`public static Vec2 ClampToAxisAlignedRectangle(Vec2 point, Vec2 lineStart, Vec2 lineEnd)`

**Purpose:** Handles logic related to `clamp to axis aligned rectangle`.

### GetRayPlaneIntersectionPoint
`public static bool GetRayPlaneIntersectionPoint(in Vec3 planeNormal, in Vec3 planeCenter, in Vec3 rayOrigin, in Vec3 rayDirection, out float t)`

**Purpose:** Gets the current value of `ray plane intersection point`.

### PointLiesAheadOfPlane
`public static bool PointLiesAheadOfPlane(in Vec3 planeNormal, in Vec3 planeCenter, in Vec3 point)`

**Purpose:** Handles logic related to `point lies ahead of plane`.

### GetClosestPointOnLineSegmentToPoint
`public static Vec2 GetClosestPointOnLineSegmentToPoint(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, in Vec2 point)`

**Purpose:** Gets the current value of `closest point on line segment to point`.

### GetClosestPointOnLineSegmentToPoint
`public static Vec3 GetClosestPointOnLineSegmentToPoint(in Vec3 lineSegmentBegin, in Vec3 lineSegmentEnd, in Vec3 point)`

**Purpose:** Gets the current value of `closest point on line segment to point`.

### CheckLineToLineSegmentIntersection
`public static bool CheckLineToLineSegmentIntersection(Vec2 lineOrigin, Vec2 lineDirection, Vec2 segmentA, Vec2 segmentB, out float t, out Vec2 intersect)`

**Purpose:** Handles logic related to `check line to line segment intersection`.

### IntersectLineSegmentWithTriangle
`public static bool IntersectLineSegmentWithTriangle(in Vec3 segStart, in Vec3 segEnd, in Vec3 triA, in Vec3 triB, in Vec3 triC)`

**Purpose:** Handles logic related to `intersect line segment with triangle`.

### IntersectLineSegmentWithBoundingBox
`public static bool IntersectLineSegmentWithBoundingBox(in Vec3 start, in Vec3 end, in Vec3 min, in Vec3 max)`

**Purpose:** Handles logic related to `intersect line segment with bounding box`.

### CheckLineSegmentToLineSegmentIntersection
`public static bool CheckLineSegmentToLineSegmentIntersection(Vec2 segment1Start, Vec2 segment1End, Vec2 segment2Start, Vec2 segment2End)`

**Purpose:** Handles logic related to `check line segment to line segment intersection`.

### CheckPointInsidePolygon
`public static bool CheckPointInsidePolygon(in Vec2 v0, in Vec2 v1, in Vec2 v2, in Vec2 v3, in Vec2 point)`

**Purpose:** Handles logic related to `check point inside polygon`.

### CheckPolygonIntersection
`public static bool CheckPolygonIntersection(Vec2 polygon1, Vec2 polygon2)`

**Purpose:** Handles logic related to `check polygon intersection`.

### CheckPolygonLineSegmentIntersection
`public static bool CheckPolygonLineSegmentIntersection(MBList<Vec2> polygon, Vec2 segmentStart, Vec2 segmentEnd)`

**Purpose:** Handles logic related to `check polygon line segment intersection`.

### IntersectRayWithPolygon
`public static bool IntersectRayWithPolygon(Vec2 rayOrigin, Vec2 rayDir, List<Vec2> polygon, out Vec2 intersectionPoint)`

**Purpose:** Handles logic related to `intersect ray with polygon`.

### ToOrdinal
`public static string ToOrdinal(int number)`

**Purpose:** Handles logic related to `to ordinal`.

### FindPlaneLineIntersectionPointWithNormal
`public static Vec3 FindPlaneLineIntersectionPointWithNormal(Vec3 planeP1, Vec3 planeNormal, Vec3 mouseP1, Vec3 mouseP2, out bool exceptionZero)`

**Purpose:** Handles logic related to `find plane line intersection point with normal`.

## Usage Example

```csharp
MBMath.ToRadians(f);
```

## See Also

- [Complete Class Catalog](../catalog)