---
title: "MBMath"
description: "Auto-generated class reference for MBMath."
---
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

**Purpose:** **Purpose:** Executes the ToRadians logic.

```csharp
// Static call; no instance required
MBMath.ToRadians(f);
```

### ToDegrees
`public static float ToDegrees(this float f)`

**Purpose:** **Purpose:** Executes the ToDegrees logic.

```csharp
// Static call; no instance required
MBMath.ToDegrees(f);
```

### ApproximatelyEqualsTo
`public static bool ApproximatelyEqualsTo(this float f, float comparedValue, float epsilon = 1E-05f)`

**Purpose:** **Purpose:** Executes the ApproximatelyEqualsTo logic.

```csharp
// Static call; no instance required
MBMath.ApproximatelyEqualsTo(f, 0, 0);
```

### ApproximatelyEquals
`public static bool ApproximatelyEquals(float first, float second, float epsilon = 1E-05f)`

**Purpose:** **Purpose:** Executes the ApproximatelyEquals logic.

```csharp
// Static call; no instance required
MBMath.ApproximatelyEquals(0, 0, 0);
```

### IsValidValue
`public static bool IsValidValue(float f)`

**Purpose:** **Purpose:** Determines whether the this instance is in the valid value state or condition.

```csharp
// Static call; no instance required
MBMath.IsValidValue(0);
```

### ClampIndex
`public static int ClampIndex(int value, int minValue, int maxValue)`

**Purpose:** **Purpose:** Executes the ClampIndex logic.

```csharp
// Static call; no instance required
MBMath.ClampIndex(0, 0, 0);
```

### ClampInt
`public static int ClampInt(int value, int minValue, int maxValue)`

**Purpose:** **Purpose:** Executes the ClampInt logic.

```csharp
// Static call; no instance required
MBMath.ClampInt(0, 0, 0);
```

### ClampFloat
`public static float ClampFloat(float value, float minValue, float maxValue)`

**Purpose:** **Purpose:** Executes the ClampFloat logic.

```csharp
// Static call; no instance required
MBMath.ClampFloat(0, 0, 0);
```

### ClampUnit
`public static void ClampUnit(ref float value)`

**Purpose:** **Purpose:** Executes the ClampUnit logic.

```csharp
// Static call; no instance required
MBMath.ClampUnit(value);
```

### GetNumberOfBitsToRepresentNumber
`public static int GetNumberOfBitsToRepresentNumber(uint value)`

**Purpose:** **Purpose:** Reads and returns the number of bits to represent number value held by the this instance.

```csharp
// Static call; no instance required
MBMath.GetNumberOfBitsToRepresentNumber(0);
```

### GetNumberOfBitsToRepresentNumber
`public static int GetNumberOfBitsToRepresentNumber(ulong value)`

**Purpose:** **Purpose:** Reads and returns the number of bits to represent number value held by the this instance.

```csharp
// Static call; no instance required
MBMath.GetNumberOfBitsToRepresentNumber(0);
```

### Lerp
`public static float Lerp(float valueFrom, float valueTo, float amount, float minimumDifference = 1E-05f)`

**Purpose:** **Purpose:** Executes the Lerp logic.

```csharp
// Static call; no instance required
MBMath.Lerp(0, 0, 0, 0);
```

### LinearExtrapolation
`public static float LinearExtrapolation(float valueFrom, float valueTo, float amount)`

**Purpose:** **Purpose:** Executes the LinearExtrapolation logic.

```csharp
// Static call; no instance required
MBMath.LinearExtrapolation(0, 0, 0);
```

### Lerp
`public static Vec3 Lerp(Vec3 vecFrom, Vec3 vecTo, float amount, float minimumDifference)`

**Purpose:** **Purpose:** Executes the Lerp logic.

```csharp
// Static call; no instance required
MBMath.Lerp(vecFrom, vecTo, 0, 0);
```

### Lerp
`public static Vec2 Lerp(Vec2 vecFrom, Vec2 vecTo, float amount, float minimumDifference)`

**Purpose:** **Purpose:** Executes the Lerp logic.

```csharp
// Static call; no instance required
MBMath.Lerp(vecFrom, vecTo, 0, 0);
```

### Map
`public static float Map(float input, float inputMinimum, float inputMaximum, float outputMinimum, float outputMaximum)`

**Purpose:** **Purpose:** Executes the Map logic.

```csharp
// Static call; no instance required
MBMath.Map(0, 0, 0, 0, 0);
```

### Lerp
`public static Mat3 Lerp(ref Mat3 matFrom, ref Mat3 matTo, float amount, float minimumDifference)`

**Purpose:** **Purpose:** Executes the Lerp logic.

```csharp
// Static call; no instance required
MBMath.Lerp(matFrom, matTo, 0, 0);
```

### LerpRadians
`public static float LerpRadians(float valueFrom, float valueTo, float amount, float minChange, float maxChange)`

**Purpose:** **Purpose:** Executes the LerpRadians logic.

```csharp
// Static call; no instance required
MBMath.LerpRadians(0, 0, 0, 0, 0);
```

### SplitLerp
`public static float SplitLerp(float value1, float value2, float value3, float cutOff, float amount, float minimumDifference)`

**Purpose:** **Purpose:** Splits lerp into multiple parts or sub-items.

```csharp
// Static call; no instance required
MBMath.SplitLerp(0, 0, 0, 0, 0, 0);
```

### InverseLerp
`public static float InverseLerp(float valueFrom, float valueTo, float value)`

**Purpose:** **Purpose:** Executes the InverseLerp logic.

```csharp
// Static call; no instance required
MBMath.InverseLerp(0, 0, 0);
```

### SmoothStep
`public static float SmoothStep(float edge0, float edge1, float value)`

**Purpose:** **Purpose:** Executes the SmoothStep logic.

```csharp
// Static call; no instance required
MBMath.SmoothStep(0, 0, 0);
```

### BilinearLerp
`public static float BilinearLerp(float topLeft, float topRight, float botLeft, float botRight, float x, float y)`

**Purpose:** **Purpose:** Executes the BilinearLerp logic.

```csharp
// Static call; no instance required
MBMath.BilinearLerp(0, 0, 0, 0, 0, 0);
```

### GetSmallestDifferenceBetweenTwoAngles
`public static float GetSmallestDifferenceBetweenTwoAngles(float fromAngle, float toAngle)`

**Purpose:** **Purpose:** Reads and returns the smallest difference between two angles value held by the this instance.

```csharp
// Static call; no instance required
MBMath.GetSmallestDifferenceBetweenTwoAngles(0, 0);
```

### ClampAngle
`public static float ClampAngle(float angle, float restrictionCenter, float restrictionRange)`

**Purpose:** **Purpose:** Executes the ClampAngle logic.

```csharp
// Static call; no instance required
MBMath.ClampAngle(0, 0, 0);
```

### WrapAngle
`public static float WrapAngle(float angle)`

**Purpose:** **Purpose:** Executes the WrapAngle logic.

```csharp
// Static call; no instance required
MBMath.WrapAngle(0);
```

### WrapAngleSafe
`public static float WrapAngleSafe(float angle)`

**Purpose:** **Purpose:** Executes the WrapAngleSafe logic.

```csharp
// Static call; no instance required
MBMath.WrapAngleSafe(0);
```

### IsBetween
`public static bool IsBetween(float numberToCheck, float bottom, float top)`

**Purpose:** **Purpose:** Determines whether the this instance is in the between state or condition.

```csharp
// Static call; no instance required
MBMath.IsBetween(0, 0, 0);
```

### IsBetween
`public static bool IsBetween(int value, int minValue, int maxValue)`

**Purpose:** **Purpose:** Determines whether the this instance is in the between state or condition.

```csharp
// Static call; no instance required
MBMath.IsBetween(0, 0, 0);
```

### IsBetweenInclusive
`public static bool IsBetweenInclusive(float numberToCheck, float bottom, float top)`

**Purpose:** **Purpose:** Determines whether the this instance is in the between inclusive state or condition.

```csharp
// Static call; no instance required
MBMath.IsBetweenInclusive(0, 0, 0);
```

### ColorFromRGBA
`public static uint ColorFromRGBA(float red, float green, float blue, float alpha)`

**Purpose:** **Purpose:** Executes the ColorFromRGBA logic.

```csharp
// Static call; no instance required
MBMath.ColorFromRGBA(0, 0, 0, 0);
```

### HSBtoRGB
`public static Color HSBtoRGB(float hue, float saturation, float brightness, float outputAlpha)`

**Purpose:** **Purpose:** Executes the HSBtoRGB logic.

```csharp
// Static call; no instance required
MBMath.HSBtoRGB(0, 0, 0, 0);
```

### RGBtoHSB
`public static Vec3 RGBtoHSB(Color rgb)`

**Purpose:** **Purpose:** Executes the RGBtoHSB logic.

```csharp
// Static call; no instance required
MBMath.RGBtoHSB(rgb);
```

### GammaCorrectRGB
`public static Vec3 GammaCorrectRGB(float gamma, Vec3 rgb)`

**Purpose:** **Purpose:** Executes the GammaCorrectRGB logic.

```csharp
// Static call; no instance required
MBMath.GammaCorrectRGB(0, rgb);
```

### GetSignedDistanceOfPointToLineSegment
`public static float GetSignedDistanceOfPointToLineSegment(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, in Vec2 point)`

**Purpose:** **Purpose:** Reads and returns the signed distance of point to line segment value held by the this instance.

```csharp
// Static call; no instance required
MBMath.GetSignedDistanceOfPointToLineSegment(lineSegmentBegin, lineSegmentEnd, point);
```

### GetDistanceSquareOfPointToLineSegment
`public static float GetDistanceSquareOfPointToLineSegment(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, Vec2 point)`

**Purpose:** **Purpose:** Reads and returns the distance square of point to line segment value held by the this instance.

```csharp
// Static call; no instance required
MBMath.GetDistanceSquareOfPointToLineSegment(lineSegmentBegin, lineSegmentEnd, point);
```

### ProjectPointOntoLine
`public static Vec2 ProjectPointOntoLine(Vec2 point, Vec2 lineStart, Vec2 lineEnd)`

**Purpose:** **Purpose:** Executes the ProjectPointOntoLine logic.

```csharp
// Static call; no instance required
MBMath.ProjectPointOntoLine(point, lineStart, lineEnd);
```

### ClampToAxisAlignedRectangle
`public static Vec2 ClampToAxisAlignedRectangle(Vec2 point, Vec2 lineStart, Vec2 lineEnd)`

**Purpose:** **Purpose:** Executes the ClampToAxisAlignedRectangle logic.

```csharp
// Static call; no instance required
MBMath.ClampToAxisAlignedRectangle(point, lineStart, lineEnd);
```

### GetRayPlaneIntersectionPoint
`public static bool GetRayPlaneIntersectionPoint(in Vec3 planeNormal, in Vec3 planeCenter, in Vec3 rayOrigin, in Vec3 rayDirection, out float t)`

**Purpose:** **Purpose:** Reads and returns the ray plane intersection point value held by the this instance.

```csharp
// Static call; no instance required
MBMath.GetRayPlaneIntersectionPoint(planeNormal, planeCenter, rayOrigin, rayDirection, t);
```

### PointLiesAheadOfPlane
`public static bool PointLiesAheadOfPlane(in Vec3 planeNormal, in Vec3 planeCenter, in Vec3 point)`

**Purpose:** **Purpose:** Executes the PointLiesAheadOfPlane logic.

```csharp
// Static call; no instance required
MBMath.PointLiesAheadOfPlane(planeNormal, planeCenter, point);
```

### GetClosestPointOnLineSegmentToPoint
`public static Vec2 GetClosestPointOnLineSegmentToPoint(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, in Vec2 point)`

**Purpose:** **Purpose:** Reads and returns the closest point on line segment to point value held by the this instance.

```csharp
// Static call; no instance required
MBMath.GetClosestPointOnLineSegmentToPoint(lineSegmentBegin, lineSegmentEnd, point);
```

### GetClosestPointOnLineSegmentToPoint
`public static Vec3 GetClosestPointOnLineSegmentToPoint(in Vec3 lineSegmentBegin, in Vec3 lineSegmentEnd, in Vec3 point)`

**Purpose:** **Purpose:** Reads and returns the closest point on line segment to point value held by the this instance.

```csharp
// Static call; no instance required
MBMath.GetClosestPointOnLineSegmentToPoint(lineSegmentBegin, lineSegmentEnd, point);
```

### CheckLineToLineSegmentIntersection
`public static bool CheckLineToLineSegmentIntersection(Vec2 lineOrigin, Vec2 lineDirection, Vec2 segmentA, Vec2 segmentB, out float t, out Vec2 intersect)`

**Purpose:** **Purpose:** Verifies whether line to line segment intersection holds true for the this instance.

```csharp
// Static call; no instance required
MBMath.CheckLineToLineSegmentIntersection(lineOrigin, lineDirection, segmentA, segmentB, t, intersect);
```

### IntersectLineSegmentWithTriangle
`public static bool IntersectLineSegmentWithTriangle(in Vec3 segStart, in Vec3 segEnd, in Vec3 triA, in Vec3 triB, in Vec3 triC)`

**Purpose:** **Purpose:** Executes the IntersectLineSegmentWithTriangle logic.

```csharp
// Static call; no instance required
MBMath.IntersectLineSegmentWithTriangle(segStart, segEnd, triA, triB, triC);
```

### IntersectLineSegmentWithBoundingBox
`public static bool IntersectLineSegmentWithBoundingBox(in Vec3 start, in Vec3 end, in Vec3 min, in Vec3 max)`

**Purpose:** **Purpose:** Executes the IntersectLineSegmentWithBoundingBox logic.

```csharp
// Static call; no instance required
MBMath.IntersectLineSegmentWithBoundingBox(start, end, min, max);
```

### CheckLineSegmentToLineSegmentIntersection
`public static bool CheckLineSegmentToLineSegmentIntersection(Vec2 segment1Start, Vec2 segment1End, Vec2 segment2Start, Vec2 segment2End)`

**Purpose:** **Purpose:** Verifies whether line segment to line segment intersection holds true for the this instance.

```csharp
// Static call; no instance required
MBMath.CheckLineSegmentToLineSegmentIntersection(segment1Start, segment1End, segment2Start, segment2End);
```

### CheckPointInsidePolygon
`public static bool CheckPointInsidePolygon(in Vec2 v0, in Vec2 v1, in Vec2 v2, in Vec2 v3, in Vec2 point)`

**Purpose:** **Purpose:** Verifies whether point inside polygon holds true for the this instance.

```csharp
// Static call; no instance required
MBMath.CheckPointInsidePolygon(v0, v1, v2, v3, point);
```

### CheckPolygonIntersection
`public static bool CheckPolygonIntersection(Vec2 polygon1, Vec2 polygon2)`

**Purpose:** **Purpose:** Verifies whether polygon intersection holds true for the this instance.

```csharp
// Static call; no instance required
MBMath.CheckPolygonIntersection(polygon1, polygon2);
```

### CheckPolygonLineSegmentIntersection
`public static bool CheckPolygonLineSegmentIntersection(MBList<Vec2> polygon, Vec2 segmentStart, Vec2 segmentEnd)`

**Purpose:** **Purpose:** Verifies whether polygon line segment intersection holds true for the this instance.

```csharp
// Static call; no instance required
MBMath.CheckPolygonLineSegmentIntersection(polygon, segmentStart, segmentEnd);
```

### IntersectRayWithPolygon
`public static bool IntersectRayWithPolygon(Vec2 rayOrigin, Vec2 rayDir, MBList<Vec2> polygon, out Vec2 intersectionPoint)`

**Purpose:** **Purpose:** Executes the IntersectRayWithPolygon logic.

```csharp
// Static call; no instance required
MBMath.IntersectRayWithPolygon(rayOrigin, rayDir, polygon, intersectionPoint);
```

### ToOrdinal
`public static string ToOrdinal(int number)`

**Purpose:** **Purpose:** Executes the ToOrdinal logic.

```csharp
// Static call; no instance required
MBMath.ToOrdinal(0);
```

### FindPlaneLineIntersectionPointWithNormal
`public static Vec3 FindPlaneLineIntersectionPointWithNormal(Vec3 planeP1, Vec3 planeNormal, Vec3 mouseP1, Vec3 mouseP2, out bool exceptionZero)`

**Purpose:** **Purpose:** Looks up the matching plane line intersection point with normal in the current collection or scope.

```csharp
// Static call; no instance required
MBMath.FindPlaneLineIntersectionPointWithNormal(planeP1, planeNormal, mouseP1, mouseP2, exceptionZero);
```

## Usage Example

```csharp
MBMath.ToRadians(f);
```

## See Also

- [Area Index](../)