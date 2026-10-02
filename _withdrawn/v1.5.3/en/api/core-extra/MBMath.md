---
title: "MBMath"
description: "Auto-generated class reference for MBMath."
---
# MBMath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class MBMath `
**Base:** System.Object
**Source:** TaleWorlds.Library/MBMath.cs

## Overview

Auto-generated stub for `MBMath`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### ToRadians
`public static float ToRadians(this float f)`

### ToDegrees
`public static float ToDegrees(this float f)`

### ApproximatelyEqualsTo
`public static bool ApproximatelyEqualsTo(this float f,float comparedValue,float epsilon = 1E-05f)`

### ApproximatelyEquals
`public static bool ApproximatelyEquals(float first,float second,float epsilon = 1E-05f)`

### IsValidValue
`public static bool IsValidValue(float f)`

### ClampIndex
`public static int ClampIndex(int value,int minValue,int maxValue)`

### ClampInt
`public static int ClampInt(int value,int minValue,int maxValue)`

### ClampFloat
`public static float ClampFloat(float value,float minValue,float maxValue)`

### ClampUnit
`public static void ClampUnit(ref float value)`

### GetNumberOfBitsToRepresentNumber
`public static int GetNumberOfBitsToRepresentNumber(uint value)`

### Lerp
`public static float Lerp(float valueFrom,float valueTo,float amount,float minimumDifference = 1E-05f)`

### LerpFPSIndependent
`public static float LerpFPSIndependent(float valueFrom,float valueTo,float amount)`

### LinearExtrapolation
`public static float LinearExtrapolation(float valueFrom,float valueTo,float amount)`

### Map
`public static float Map(float input,float inputMinimum,float inputMaximum,float outputMinimum,float outputMaximum)`

### LerpRadians
`public static float LerpRadians(float valueFrom,float valueTo,float amount,float minChange,float maxChange)`

### SplitLerp
`public static float SplitLerp(float value1,float value2,float value3,float cutOff,float amount,float minimumDifference)`

### InverseLerp
`public static float InverseLerp(float valueFrom,float valueTo,float value)`

### SmoothStep
`public static float SmoothStep(float edge0,float edge1,float value)`

### BilinearLerp
`public static float BilinearLerp(float topLeft,float topRight,float botLeft,float botRight,float x,float y)`

### GetSmallestDifferenceBetweenTwoAngles
`public static float GetSmallestDifferenceBetweenTwoAngles(float fromAngle,float toAngle)`

### ClampAngle
`public static float ClampAngle(float angle,float restrictionCenter,float restrictionRange)`

### WrapAngle
`public static float WrapAngle(float angle)`

### WrapAngleSafe
`public static float WrapAngleSafe(float angle)`

### IsBetween
`public static bool IsBetween(float numberToCheck,float bottom,float top)`

### IsBetweenInclusive
`public static bool IsBetweenInclusive(float numberToCheck,float bottom,float top)`

### ColorFromRGBA
`public static uint ColorFromRGBA(float red,float green,float blue,float alpha)`

### HSBtoRGB
`public static Color HSBtoRGB(float hue,float saturation,float brightness,float outputAlpha)`

### RGBtoHSB
`public static Vec3 RGBtoHSB(Color rgb)`

### GammaCorrectRGB
`public static Vec3 GammaCorrectRGB(float gamma,Vec3 rgb)`

### GetSignedDistanceOfPointToLineSegment
`public static float GetSignedDistanceOfPointToLineSegment(in Vec2 lineSegmentBegin,in Vec2 lineSegmentEnd,in Vec2 point)`

### GetDistanceSquareOfPointToLineSegment
`public static float GetDistanceSquareOfPointToLineSegment(in Vec2 lineSegmentBegin,in Vec2 lineSegmentEnd,Vec2 point)`

### ProjectPointOntoLine
`public static Vec2 ProjectPointOntoLine(Vec2 point,Vec2 lineStart,Vec2 lineEnd)`

### ClampToAxisAlignedRectangle
`public static Vec2 ClampToAxisAlignedRectangle(Vec2 point,Vec2 lineStart,Vec2 lineEnd)`

### GetRayPlaneIntersectionPoint
`public static bool GetRayPlaneIntersectionPoint(in Vec3 planeNormal,in Vec3 planeCenter,in Vec3 rayOrigin,in Vec3 rayDirection,out float t)`

### PointLiesAheadOfPlane
`public static bool PointLiesAheadOfPlane(in Vec3 planeNormal,in Vec3 planeCenter,in Vec3 point)`

### GetClosestPointOnLineSegmentToPoint
`public static Vec2 GetClosestPointOnLineSegmentToPoint(in Vec2 lineSegmentBegin,in Vec2 lineSegmentEnd,in Vec2 point)`

### CheckLineToLineSegmentIntersection
`public static bool CheckLineToLineSegmentIntersection(Vec2 lineOrigin,Vec2 lineDirection,Vec2 segmentA,Vec2 segmentB,out float t,out Vec2 intersect)`

### IntersectLineSegmentWithTriangle
`public static bool IntersectLineSegmentWithTriangle(in Vec3 segStart,in Vec3 segEnd,in Vec3 triA,in Vec3 triB,in Vec3 triC)`

### IntersectLineSegmentWithBoundingBox
`public static bool IntersectLineSegmentWithBoundingBox(in Vec3 start,in Vec3 end,in Vec3 min,in Vec3 max)`

### CheckLineSegmentToLineSegmentIntersection
`public static bool CheckLineSegmentToLineSegmentIntersection(Vec2 segment1Start,Vec2 segment1End,Vec2 segment2Start,Vec2 segment2End)`

### CheckPointInsidePolygon
`public static bool CheckPointInsidePolygon(in Vec2 v0,in Vec2 v1,in Vec2 v2,in Vec2 v3,in Vec2 point)`

### CheckPolygonIntersection
`public static bool CheckPolygonIntersection(Vec2[] polygon1,Vec2[] polygon2)`

### CheckPolygonLineSegmentIntersection
`public static bool CheckPolygonLineSegmentIntersection(MBList<Vec2> polygon,Vec2 segmentStart,Vec2 segmentEnd)`

### IntersectRayWithPolygon
`public static bool IntersectRayWithPolygon(Vec2 rayOrigin,Vec2 rayDir,MBList<Vec2> polygon,out Vec2 intersectionPoint)`

### ToOrdinal
`public static string ToOrdinal(int number)`

### FindPlaneLineIntersectionPointWithNormal
`public static Vec3 FindPlaneLineIntersectionPointWithNormal(Vec3 planeP1,Vec3 planeNormal,Vec3 mouseP1,Vec3 mouseP2,out bool exceptionZero)`

## See Also

- [Section index](../)
