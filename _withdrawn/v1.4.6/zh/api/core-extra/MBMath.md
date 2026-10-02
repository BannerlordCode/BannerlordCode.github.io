---
title: "MBMath"
description: "MBMath：TaleWorlds.Library 的 public 类；公开成员 67 个（方法 60、属性 0、字段 7）。canonical 桶 core-extra。源文件 TaleWorlds.Library/MBMath.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBMath

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class MBMath`
**File:** `TaleWorlds.Library/MBMath.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

MBMath 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/MBMath.cs。它是一个 public 类，继承链为 MBMath。public/protected 成员共 67 个：60 方法、7 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBMath 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 MBMath。成员构成以方法为主（方法 60/67，属性 0/67），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/MBMath.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ToRadians` | `public static float ToRadians(this float f)` | 方法 |
| `ToDegrees` | `public static float ToDegrees(this float f)` | 方法 |
| `ApproximatelyEqualsTo` | `public static bool ApproximatelyEqualsTo(this float f, float comparedValue, float epsilon = 1E-05f)` | 方法 |
| `ApproximatelyEquals` | `public static bool ApproximatelyEquals(float first, float second, float epsilon = 1E-05f)` | 方法 |
| `IsValidValue` | `public static bool IsValidValue(float f)` | 方法 |
| `ClampIndex` | `public static int ClampIndex(int value, int minValue, int maxValue)` | 方法 |
| `ClampInt` | `public static int ClampInt(int value, int minValue, int maxValue)` | 方法 |
| `ClampFloat` | `public static float ClampFloat(float value, float minValue, float maxValue)` | 方法 |
| `ClampUnit` | `public static void ClampUnit(ref float value)` | 方法 |
| `GetNumberOfBitsToRepresentNumber` | `public static int GetNumberOfBitsToRepresentNumber(uint value)` | 方法 |
| `int>>DistributeShares` | `public static IEnumerable<ValueTuple<T, int>>DistributeShares<T>(int totalAward, IEnumerable<T>stakeHolders, Func<T, int>shareFunction)` | 方法 |
| `GetNumberOfBitsToRepresentNumber` | `public static int GetNumberOfBitsToRepresentNumber(ulong value)` | 方法 |
| `Lerp` | `public static float Lerp(float valueFrom, float valueTo, float amount, float minimumDifference = 1E-05f)` | 方法 |
| `LerpFPSIndependent` | `public static float LerpFPSIndependent(float valueFrom, float valueTo, float amount)` | 方法 |
| `LinearExtrapolation` | `public static float LinearExtrapolation(float valueFrom, float valueTo, float amount)` | 方法 |
| `Lerp` | `public static Vec3 Lerp(Vec3 vecFrom, Vec3 vecTo, float amount, float minimumDifference)` | 方法 |
| `Lerp` | `public static Vec2 Lerp(Vec2 vecFrom, Vec2 vecTo, float amount, float minimumDifference)` | 方法 |
| `Map` | `public static float Map(float input, float inputMinimum, float inputMaximum, float outputMinimum, float outputMaximum)` | 方法 |
| `Lerp` | `public static Mat3 Lerp(ref Mat3 matFrom, ref Mat3 matTo, float amount, float minimumDifference)` | 方法 |
| `LerpRadians` | `public static float LerpRadians(float valueFrom, float valueTo, float amount, float minChange, float maxChange)` | 方法 |
| `SplitLerp` | `public static float SplitLerp(float value1, float value2, float value3, float cutOff, float amount, float minimumDifference)` | 方法 |
| `InverseLerp` | `public static float InverseLerp(float valueFrom, float valueTo, float value)` | 方法 |
| `SmoothStep` | `public static float SmoothStep(float edge0, float edge1, float value)` | 方法 |
| `BilinearLerp` | `public static float BilinearLerp(float topLeft, float topRight, float botLeft, float botRight, float x, float y)` | 方法 |
| `GetSmallestDifferenceBetweenTwoAngles` | `public static float GetSmallestDifferenceBetweenTwoAngles(float fromAngle, float toAngle)` | 方法 |
| `ClampAngle` | `public static float ClampAngle(float angle, float restrictionCenter, float restrictionRange)` | 方法 |
| `WrapAngle` | `public static float WrapAngle(float angle)` | 方法 |
| `WrapAngleSafe` | `public static float WrapAngleSafe(float angle)` | 方法 |
| `IsBetween` | `public static bool IsBetween(float numberToCheck, float bottom, float top)` | 方法 |
| `IsBetween` | `public static bool IsBetween(int value, int minValue, int maxValue)` | 方法 |
| `IsBetweenInclusive` | `public static bool IsBetweenInclusive(float numberToCheck, float bottom, float top)` | 方法 |
| `ColorFromRGBA` | `public static uint ColorFromRGBA(float red, float green, float blue, float alpha)` | 方法 |
| `HSBtoRGB` | `public static Color HSBtoRGB(float hue, float saturation, float brightness, float outputAlpha)` | 方法 |
| `RGBtoHSB` | `public static Vec3 RGBtoHSB(Color rgb)` | 方法 |
| `GammaCorrectRGB` | `public static Vec3 GammaCorrectRGB(float gamma, Vec3 rgb)` | 方法 |
| `GetSignedDistanceOfPointToLineSegment` | `public static float GetSignedDistanceOfPointToLineSegment(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, in Vec2 point)` | 方法 |
| `GetDistanceSquareOfPointToLineSegment` | `public static float GetDistanceSquareOfPointToLineSegment(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, Vec2 point)` | 方法 |
| `ProjectPointOntoLine` | `public static Vec2 ProjectPointOntoLine(Vec2 point, Vec2 lineStart, Vec2 lineEnd)` | 方法 |
| `ClampToAxisAlignedRectangle` | `public static Vec2 ClampToAxisAlignedRectangle(Vec2 point, Vec2 lineStart, Vec2 lineEnd)` | 方法 |
| `GetRayPlaneIntersectionPoint` | `public static bool GetRayPlaneIntersectionPoint(in Vec3 planeNormal, in Vec3 planeCenter, in Vec3 rayOrigin, in Vec3 rayDirection, out float t)` | 方法 |
| `PointLiesAheadOfPlane` | `public static bool PointLiesAheadOfPlane(in Vec3 planeNormal, in Vec3 planeCenter, in Vec3 point)` | 方法 |
| `GetClosestPointOnLineSegmentToPoint` | `public static Vec2 GetClosestPointOnLineSegmentToPoint(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, in Vec2 point)` | 方法 |
| `GetClosestPointOnLineSegmentToPoint` | `public static Vec3 GetClosestPointOnLineSegmentToPoint(in Vec3 lineSegmentBegin, in Vec3 lineSegmentEnd, in Vec3 point)` | 方法 |
| `CheckLineToLineSegmentIntersection` | `public static bool CheckLineToLineSegmentIntersection(Vec2 lineOrigin, Vec2 lineDirection, Vec2 segmentA, Vec2 segmentB, out float t, out Vec2 intersect)` | 方法 |
| `IntersectLineSegmentWithTriangle` | `public static bool IntersectLineSegmentWithTriangle(in Vec3 segStart, in Vec3 segEnd, in Vec3 triA, in Vec3 triB, in Vec3 triC)` | 方法 |
| `IntersectLineSegmentWithBoundingBox` | `public static bool IntersectLineSegmentWithBoundingBox(in Vec3 start, in Vec3 end, in Vec3 min, in Vec3 max)` | 方法 |
| `CheckLineSegmentToLineSegmentIntersection` | `public static bool CheckLineSegmentToLineSegmentIntersection(Vec2 segment1Start, Vec2 segment1End, Vec2 segment2Start, Vec2 segment2End)` | 方法 |
| `CheckPointInsidePolygon` | `public static bool CheckPointInsidePolygon(in Vec2 v0, in Vec2 v1, in Vec2 v2, in Vec2 v3, in Vec2 point)` | 方法 |
| `CheckPolygonIntersection` | `public static bool CheckPolygonIntersection(Vec2[]polygon1, Vec2[]polygon2)` | 方法 |
| `CheckPolygonLineSegmentIntersection` | `public static bool CheckPolygonLineSegmentIntersection(MBList<Vec2>polygon, Vec2 segmentStart, Vec2 segmentEnd)` | 方法 |
| `IntersectRayWithPolygon` | `public static bool IntersectRayWithPolygon(Vec2 rayOrigin, Vec2 rayDir, MBList<Vec2>polygon, out Vec2 intersectionPoint)` | 方法 |
| `ToOrdinal` | `public static string ToOrdinal(int number)` | 方法 |
| `IndexOfMax` | `public static int IndexOfMax<T>(MBReadOnlyList<T>array, Func<T, int>func)` | 方法 |
| `MaxElement` | `public static T MaxElement<T>(IEnumerable<T>collection, Func<T, float>func)` | 方法 |
| `T>MaxElements2` | `public static ValueTuple<T, T>MaxElements2<T>(IEnumerable<T>collection, Func<T, float>func)` | 方法 |
| `T>MaxElements3` | `public static ValueTuple<T, T, T>MaxElements3<T>(IEnumerable<T>collection, Func<T, float>func)` | 方法 |
| `T>MaxElements4` | `public static ValueTuple<T, T, T, T>MaxElements4<T>(IEnumerable<T>collection, Func<T, float>func)` | 方法 |
| `T>MaxElements5` | `public static ValueTuple<T, T, T, T, T>MaxElements5<T>(IEnumerable<T>collection, Func<T, float>func)` | 方法 |
| `IList` | `public static IList<T>TopologySort<T>(IEnumerable<T>source, Func<T, IEnumerable<T>>getDependencies)` | 方法 |
| `FindPlaneLineIntersectionPointWithNormal` | `public static Vec3 FindPlaneLineIntersectionPointWithNormal(Vec3 planeP1, Vec3 planeNormal, Vec3 mouseP1, Vec3 mouseP2, out bool exceptionZero)` | 方法 |
| `TwoPI` | `public const float TwoPI` | 字段 |
| `PI` | `public const float PI` | 字段 |
| `HalfPI` | `public const float HalfPI` | 字段 |
| `E` | `public const float E` | 字段 |
| `DegreesToRadians` | `public const float DegreesToRadians` | 字段 |
| `RadiansToDegrees` | `public const float RadiansToDegrees` | 字段 |
| `Epsilon` | `public const float Epsilon` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
