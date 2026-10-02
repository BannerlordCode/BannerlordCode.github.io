---
title: "MBMath"
description: "MBMath: a public class in TaleWorlds.Library; 67 exposed members (60 methods, 0 properties, 7 fields). Source: TaleWorlds.Library/MBMath.cs."
---
# MBMath

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class MBMath`
**File:** `TaleWorlds.Library/MBMath.cs`

## Overview

MBMath lives in the TaleWorlds.Library module, source file TaleWorlds.Library/MBMath.cs. It is a public class; the inheritance chain is MBMath. It exposes 67 public/protected members: 60 methods, 7 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBMath is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain MBMath. The surface is method-led (methods 60/67, properties 0/67), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/MBMath.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ToRadians` | `public static float ToRadians(this float f)` | method |
| `ToDegrees` | `public static float ToDegrees(this float f)` | method |
| `ApproximatelyEqualsTo` | `public static bool ApproximatelyEqualsTo(this float f, float comparedValue, float epsilon = 1E-05f)` | method |
| `ApproximatelyEquals` | `public static bool ApproximatelyEquals(float first, float second, float epsilon = 1E-05f)` | method |
| `IsValidValue` | `public static bool IsValidValue(float f)` | method |
| `ClampIndex` | `public static int ClampIndex(int value, int minValue, int maxValue)` | method |
| `ClampInt` | `public static int ClampInt(int value, int minValue, int maxValue)` | method |
| `ClampFloat` | `public static float ClampFloat(float value, float minValue, float maxValue)` | method |
| `ClampUnit` | `public static void ClampUnit(ref float value)` | method |
| `GetNumberOfBitsToRepresentNumber` | `public static int GetNumberOfBitsToRepresentNumber(uint value)` | method |
| `int>>DistributeShares` | `public static IEnumerable<ValueTuple<T, int>>DistributeShares<T>(int totalAward, IEnumerable<T>stakeHolders, Func<T, int>shareFunction)` | method |
| `GetNumberOfBitsToRepresentNumber` | `public static int GetNumberOfBitsToRepresentNumber(ulong value)` | method |
| `Lerp` | `public static float Lerp(float valueFrom, float valueTo, float amount, float minimumDifference = 1E-05f)` | method |
| `LerpFPSIndependent` | `public static float LerpFPSIndependent(float valueFrom, float valueTo, float amount)` | method |
| `LinearExtrapolation` | `public static float LinearExtrapolation(float valueFrom, float valueTo, float amount)` | method |
| `Lerp` | `public static Vec3 Lerp(Vec3 vecFrom, Vec3 vecTo, float amount, float minimumDifference)` | method |
| `Lerp` | `public static Vec2 Lerp(Vec2 vecFrom, Vec2 vecTo, float amount, float minimumDifference)` | method |
| `Map` | `public static float Map(float input, float inputMinimum, float inputMaximum, float outputMinimum, float outputMaximum)` | method |
| `Lerp` | `public static Mat3 Lerp(ref Mat3 matFrom, ref Mat3 matTo, float amount, float minimumDifference)` | method |
| `LerpRadians` | `public static float LerpRadians(float valueFrom, float valueTo, float amount, float minChange, float maxChange)` | method |
| `SplitLerp` | `public static float SplitLerp(float value1, float value2, float value3, float cutOff, float amount, float minimumDifference)` | method |
| `InverseLerp` | `public static float InverseLerp(float valueFrom, float valueTo, float value)` | method |
| `SmoothStep` | `public static float SmoothStep(float edge0, float edge1, float value)` | method |
| `BilinearLerp` | `public static float BilinearLerp(float topLeft, float topRight, float botLeft, float botRight, float x, float y)` | method |
| `GetSmallestDifferenceBetweenTwoAngles` | `public static float GetSmallestDifferenceBetweenTwoAngles(float fromAngle, float toAngle)` | method |
| `ClampAngle` | `public static float ClampAngle(float angle, float restrictionCenter, float restrictionRange)` | method |
| `WrapAngle` | `public static float WrapAngle(float angle)` | method |
| `WrapAngleSafe` | `public static float WrapAngleSafe(float angle)` | method |
| `IsBetween` | `public static bool IsBetween(float numberToCheck, float bottom, float top)` | method |
| `IsBetween` | `public static bool IsBetween(int value, int minValue, int maxValue)` | method |
| `IsBetweenInclusive` | `public static bool IsBetweenInclusive(float numberToCheck, float bottom, float top)` | method |
| `ColorFromRGBA` | `public static uint ColorFromRGBA(float red, float green, float blue, float alpha)` | method |
| `HSBtoRGB` | `public static Color HSBtoRGB(float hue, float saturation, float brightness, float outputAlpha)` | method |
| `RGBtoHSB` | `public static Vec3 RGBtoHSB(Color rgb)` | method |
| `GammaCorrectRGB` | `public static Vec3 GammaCorrectRGB(float gamma, Vec3 rgb)` | method |
| `GetSignedDistanceOfPointToLineSegment` | `public static float GetSignedDistanceOfPointToLineSegment(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, in Vec2 point)` | method |
| `GetDistanceSquareOfPointToLineSegment` | `public static float GetDistanceSquareOfPointToLineSegment(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, Vec2 point)` | method |
| `ProjectPointOntoLine` | `public static Vec2 ProjectPointOntoLine(Vec2 point, Vec2 lineStart, Vec2 lineEnd)` | method |
| `ClampToAxisAlignedRectangle` | `public static Vec2 ClampToAxisAlignedRectangle(Vec2 point, Vec2 lineStart, Vec2 lineEnd)` | method |
| `GetRayPlaneIntersectionPoint` | `public static bool GetRayPlaneIntersectionPoint(in Vec3 planeNormal, in Vec3 planeCenter, in Vec3 rayOrigin, in Vec3 rayDirection, out float t)` | method |
| `PointLiesAheadOfPlane` | `public static bool PointLiesAheadOfPlane(in Vec3 planeNormal, in Vec3 planeCenter, in Vec3 point)` | method |
| `GetClosestPointOnLineSegmentToPoint` | `public static Vec2 GetClosestPointOnLineSegmentToPoint(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, in Vec2 point)` | method |
| `GetClosestPointOnLineSegmentToPoint` | `public static Vec3 GetClosestPointOnLineSegmentToPoint(in Vec3 lineSegmentBegin, in Vec3 lineSegmentEnd, in Vec3 point)` | method |
| `CheckLineToLineSegmentIntersection` | `public static bool CheckLineToLineSegmentIntersection(Vec2 lineOrigin, Vec2 lineDirection, Vec2 segmentA, Vec2 segmentB, out float t, out Vec2 intersect)` | method |
| `IntersectLineSegmentWithTriangle` | `public static bool IntersectLineSegmentWithTriangle(in Vec3 segStart, in Vec3 segEnd, in Vec3 triA, in Vec3 triB, in Vec3 triC)` | method |
| `IntersectLineSegmentWithBoundingBox` | `public static bool IntersectLineSegmentWithBoundingBox(in Vec3 start, in Vec3 end, in Vec3 min, in Vec3 max)` | method |
| `CheckLineSegmentToLineSegmentIntersection` | `public static bool CheckLineSegmentToLineSegmentIntersection(Vec2 segment1Start, Vec2 segment1End, Vec2 segment2Start, Vec2 segment2End)` | method |
| `CheckPointInsidePolygon` | `public static bool CheckPointInsidePolygon(in Vec2 v0, in Vec2 v1, in Vec2 v2, in Vec2 v3, in Vec2 point)` | method |
| `CheckPolygonIntersection` | `public static bool CheckPolygonIntersection(Vec2[]polygon1, Vec2[]polygon2)` | method |
| `CheckPolygonLineSegmentIntersection` | `public static bool CheckPolygonLineSegmentIntersection(MBList<Vec2>polygon, Vec2 segmentStart, Vec2 segmentEnd)` | method |
| `IntersectRayWithPolygon` | `public static bool IntersectRayWithPolygon(Vec2 rayOrigin, Vec2 rayDir, MBList<Vec2>polygon, out Vec2 intersectionPoint)` | method |
| `ToOrdinal` | `public static string ToOrdinal(int number)` | method |
| `IndexOfMax` | `public static int IndexOfMax<T>(MBReadOnlyList<T>array, Func<T, int>func)` | method |
| `MaxElement` | `public static T MaxElement<T>(IEnumerable<T>collection, Func<T, float>func)` | method |
| `T>MaxElements2` | `public static ValueTuple<T, T>MaxElements2<T>(IEnumerable<T>collection, Func<T, float>func)` | method |
| `T>MaxElements3` | `public static ValueTuple<T, T, T>MaxElements3<T>(IEnumerable<T>collection, Func<T, float>func)` | method |
| `T>MaxElements4` | `public static ValueTuple<T, T, T, T>MaxElements4<T>(IEnumerable<T>collection, Func<T, float>func)` | method |
| `T>MaxElements5` | `public static ValueTuple<T, T, T, T, T>MaxElements5<T>(IEnumerable<T>collection, Func<T, float>func)` | method |
| `IList` | `public static IList<T>TopologySort<T>(IEnumerable<T>source, Func<T, IEnumerable<T>>getDependencies)` | method |
| `FindPlaneLineIntersectionPointWithNormal` | `public static Vec3 FindPlaneLineIntersectionPointWithNormal(Vec3 planeP1, Vec3 planeNormal, Vec3 mouseP1, Vec3 mouseP2, out bool exceptionZero)` | method |
| `TwoPI` | `public const float TwoPI` | field |
| `PI` | `public const float PI` | field |
| `HalfPI` | `public const float HalfPI` | field |
| `E` | `public const float E` | field |
| `DegreesToRadians` | `public const float DegreesToRadians` | field |
| `RadiansToDegrees` | `public const float RadiansToDegrees` | field |
| `Epsilon` | `public const float Epsilon` | field |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
