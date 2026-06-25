---
title: "MBMath"
description: "MBMath 的自动生成类参考。"
---
# MBMath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class MBMath`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/MBMath.cs`

## 概述

`MBMath` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ToRadians
`public static float ToRadians(this float f)`

**用途 / Purpose:** 处理与 「to radians」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.ToRadians(f);
```

### ToDegrees
`public static float ToDegrees(this float f)`

**用途 / Purpose:** 处理与 「to degrees」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.ToDegrees(f);
```

### ApproximatelyEqualsTo
`public static bool ApproximatelyEqualsTo(this float f, float comparedValue, float epsilon = 1E-05f)`

**用途 / Purpose:** 处理与 「approximately equals to」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.ApproximatelyEqualsTo(f, 0, 0);
```

### ApproximatelyEquals
`public static bool ApproximatelyEquals(float first, float second, float epsilon = 1E-05f)`

**用途 / Purpose:** 处理与 「approximately equals」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.ApproximatelyEquals(0, 0, 0);
```

### IsValidValue
`public static bool IsValidValue(float f)`

**用途 / Purpose:** 判断当前对象是否处于 「valid value」 状态或条件。

```csharp
// 静态调用，不需要实例
MBMath.IsValidValue(0);
```

### ClampIndex
`public static int ClampIndex(int value, int minValue, int maxValue)`

**用途 / Purpose:** 处理与 「clamp index」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.ClampIndex(0, 0, 0);
```

### ClampInt
`public static int ClampInt(int value, int minValue, int maxValue)`

**用途 / Purpose:** 处理与 「clamp int」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.ClampInt(0, 0, 0);
```

### ClampFloat
`public static float ClampFloat(float value, float minValue, float maxValue)`

**用途 / Purpose:** 处理与 「clamp float」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.ClampFloat(0, 0, 0);
```

### ClampUnit
`public static void ClampUnit(ref float value)`

**用途 / Purpose:** 处理与 「clamp unit」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.ClampUnit(value);
```

### GetNumberOfBitsToRepresentNumber
`public static int GetNumberOfBitsToRepresentNumber(uint value)`

**用途 / Purpose:** 读取并返回当前对象中 「number of bits to represent number」 的结果。

```csharp
// 静态调用，不需要实例
MBMath.GetNumberOfBitsToRepresentNumber(0);
```

### GetNumberOfBitsToRepresentNumber
`public static int GetNumberOfBitsToRepresentNumber(ulong value)`

**用途 / Purpose:** 读取并返回当前对象中 「number of bits to represent number」 的结果。

```csharp
// 静态调用，不需要实例
MBMath.GetNumberOfBitsToRepresentNumber(0);
```

### Lerp
`public static float Lerp(float valueFrom, float valueTo, float amount, float minimumDifference = 1E-05f)`

**用途 / Purpose:** 处理与 「lerp」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.Lerp(0, 0, 0, 0);
```

### LerpFPSIndependent
`public static float LerpFPSIndependent(float valueFrom, float valueTo, float amount)`

**用途 / Purpose:** 处理与 「lerp fps independent」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.LerpFPSIndependent(0, 0, 0);
```

### LinearExtrapolation
`public static float LinearExtrapolation(float valueFrom, float valueTo, float amount)`

**用途 / Purpose:** 处理与 「linear extrapolation」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.LinearExtrapolation(0, 0, 0);
```

### Lerp
`public static Vec3 Lerp(Vec3 vecFrom, Vec3 vecTo, float amount, float minimumDifference)`

**用途 / Purpose:** 处理与 「lerp」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.Lerp(vecFrom, vecTo, 0, 0);
```

### Lerp
`public static Vec2 Lerp(Vec2 vecFrom, Vec2 vecTo, float amount, float minimumDifference)`

**用途 / Purpose:** 处理与 「lerp」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.Lerp(vecFrom, vecTo, 0, 0);
```

### Map
`public static float Map(float input, float inputMinimum, float inputMaximum, float outputMinimum, float outputMaximum)`

**用途 / Purpose:** 处理与 「map」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.Map(0, 0, 0, 0, 0);
```

### Lerp
`public static Mat3 Lerp(ref Mat3 matFrom, ref Mat3 matTo, float amount, float minimumDifference)`

**用途 / Purpose:** 处理与 「lerp」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.Lerp(matFrom, matTo, 0, 0);
```

### LerpRadians
`public static float LerpRadians(float valueFrom, float valueTo, float amount, float minChange, float maxChange)`

**用途 / Purpose:** 处理与 「lerp radians」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.LerpRadians(0, 0, 0, 0, 0);
```

### SplitLerp
`public static float SplitLerp(float value1, float value2, float value3, float cutOff, float amount, float minimumDifference)`

**用途 / Purpose:** 将「lerp」拆分为多个部分或子项。

```csharp
// 静态调用，不需要实例
MBMath.SplitLerp(0, 0, 0, 0, 0, 0);
```

### InverseLerp
`public static float InverseLerp(float valueFrom, float valueTo, float value)`

**用途 / Purpose:** 处理与 「inverse lerp」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.InverseLerp(0, 0, 0);
```

### SmoothStep
`public static float SmoothStep(float edge0, float edge1, float value)`

**用途 / Purpose:** 处理与 「smooth step」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.SmoothStep(0, 0, 0);
```

### BilinearLerp
`public static float BilinearLerp(float topLeft, float topRight, float botLeft, float botRight, float x, float y)`

**用途 / Purpose:** 处理与 「bilinear lerp」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.BilinearLerp(0, 0, 0, 0, 0, 0);
```

### GetSmallestDifferenceBetweenTwoAngles
`public static float GetSmallestDifferenceBetweenTwoAngles(float fromAngle, float toAngle)`

**用途 / Purpose:** 读取并返回当前对象中 「smallest difference between two angles」 的结果。

```csharp
// 静态调用，不需要实例
MBMath.GetSmallestDifferenceBetweenTwoAngles(0, 0);
```

### ClampAngle
`public static float ClampAngle(float angle, float restrictionCenter, float restrictionRange)`

**用途 / Purpose:** 处理与 「clamp angle」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.ClampAngle(0, 0, 0);
```

### WrapAngle
`public static float WrapAngle(float angle)`

**用途 / Purpose:** 处理与 「wrap angle」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.WrapAngle(0);
```

### WrapAngleSafe
`public static float WrapAngleSafe(float angle)`

**用途 / Purpose:** 处理与 「wrap angle safe」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.WrapAngleSafe(0);
```

### IsBetween
`public static bool IsBetween(float numberToCheck, float bottom, float top)`

**用途 / Purpose:** 判断当前对象是否处于 「between」 状态或条件。

```csharp
// 静态调用，不需要实例
MBMath.IsBetween(0, 0, 0);
```

### IsBetween
`public static bool IsBetween(int value, int minValue, int maxValue)`

**用途 / Purpose:** 判断当前对象是否处于 「between」 状态或条件。

```csharp
// 静态调用，不需要实例
MBMath.IsBetween(0, 0, 0);
```

### IsBetweenInclusive
`public static bool IsBetweenInclusive(float numberToCheck, float bottom, float top)`

**用途 / Purpose:** 判断当前对象是否处于 「between inclusive」 状态或条件。

```csharp
// 静态调用，不需要实例
MBMath.IsBetweenInclusive(0, 0, 0);
```

### ColorFromRGBA
`public static uint ColorFromRGBA(float red, float green, float blue, float alpha)`

**用途 / Purpose:** 处理与 「color from rgba」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.ColorFromRGBA(0, 0, 0, 0);
```

### HSBtoRGB
`public static Color HSBtoRGB(float hue, float saturation, float brightness, float outputAlpha)`

**用途 / Purpose:** 处理与 「hs bto rgb」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.HSBtoRGB(0, 0, 0, 0);
```

### RGBtoHSB
`public static Vec3 RGBtoHSB(Color rgb)`

**用途 / Purpose:** 处理与 「rg bto hsb」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.RGBtoHSB(rgb);
```

### GammaCorrectRGB
`public static Vec3 GammaCorrectRGB(float gamma, Vec3 rgb)`

**用途 / Purpose:** 处理与 「gamma correct rgb」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.GammaCorrectRGB(0, rgb);
```

### GetSignedDistanceOfPointToLineSegment
`public static float GetSignedDistanceOfPointToLineSegment(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, in Vec2 point)`

**用途 / Purpose:** 读取并返回当前对象中 「signed distance of point to line segment」 的结果。

```csharp
// 静态调用，不需要实例
MBMath.GetSignedDistanceOfPointToLineSegment(lineSegmentBegin, lineSegmentEnd, point);
```

### GetDistanceSquareOfPointToLineSegment
`public static float GetDistanceSquareOfPointToLineSegment(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, Vec2 point)`

**用途 / Purpose:** 读取并返回当前对象中 「distance square of point to line segment」 的结果。

```csharp
// 静态调用，不需要实例
MBMath.GetDistanceSquareOfPointToLineSegment(lineSegmentBegin, lineSegmentEnd, point);
```

### ProjectPointOntoLine
`public static Vec2 ProjectPointOntoLine(Vec2 point, Vec2 lineStart, Vec2 lineEnd)`

**用途 / Purpose:** 处理与 「project point onto line」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.ProjectPointOntoLine(point, lineStart, lineEnd);
```

### ClampToAxisAlignedRectangle
`public static Vec2 ClampToAxisAlignedRectangle(Vec2 point, Vec2 lineStart, Vec2 lineEnd)`

**用途 / Purpose:** 处理与 「clamp to axis aligned rectangle」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.ClampToAxisAlignedRectangle(point, lineStart, lineEnd);
```

### GetRayPlaneIntersectionPoint
`public static bool GetRayPlaneIntersectionPoint(in Vec3 planeNormal, in Vec3 planeCenter, in Vec3 rayOrigin, in Vec3 rayDirection, out float t)`

**用途 / Purpose:** 读取并返回当前对象中 「ray plane intersection point」 的结果。

```csharp
// 静态调用，不需要实例
MBMath.GetRayPlaneIntersectionPoint(planeNormal, planeCenter, rayOrigin, rayDirection, t);
```

### PointLiesAheadOfPlane
`public static bool PointLiesAheadOfPlane(in Vec3 planeNormal, in Vec3 planeCenter, in Vec3 point)`

**用途 / Purpose:** 处理与 「point lies ahead of plane」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.PointLiesAheadOfPlane(planeNormal, planeCenter, point);
```

### GetClosestPointOnLineSegmentToPoint
`public static Vec2 GetClosestPointOnLineSegmentToPoint(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, in Vec2 point)`

**用途 / Purpose:** 读取并返回当前对象中 「closest point on line segment to point」 的结果。

```csharp
// 静态调用，不需要实例
MBMath.GetClosestPointOnLineSegmentToPoint(lineSegmentBegin, lineSegmentEnd, point);
```

### GetClosestPointOnLineSegmentToPoint
`public static Vec3 GetClosestPointOnLineSegmentToPoint(in Vec3 lineSegmentBegin, in Vec3 lineSegmentEnd, in Vec3 point)`

**用途 / Purpose:** 读取并返回当前对象中 「closest point on line segment to point」 的结果。

```csharp
// 静态调用，不需要实例
MBMath.GetClosestPointOnLineSegmentToPoint(lineSegmentBegin, lineSegmentEnd, point);
```

### CheckLineToLineSegmentIntersection
`public static bool CheckLineToLineSegmentIntersection(Vec2 lineOrigin, Vec2 lineDirection, Vec2 segmentA, Vec2 segmentB, out float t, out Vec2 intersect)`

**用途 / Purpose:** 检查「line to line segment intersection」在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
MBMath.CheckLineToLineSegmentIntersection(lineOrigin, lineDirection, segmentA, segmentB, t, intersect);
```

### IntersectLineSegmentWithTriangle
`public static bool IntersectLineSegmentWithTriangle(in Vec3 segStart, in Vec3 segEnd, in Vec3 triA, in Vec3 triB, in Vec3 triC)`

**用途 / Purpose:** 处理与 「intersect line segment with triangle」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.IntersectLineSegmentWithTriangle(segStart, segEnd, triA, triB, triC);
```

### IntersectLineSegmentWithBoundingBox
`public static bool IntersectLineSegmentWithBoundingBox(in Vec3 start, in Vec3 end, in Vec3 min, in Vec3 max)`

**用途 / Purpose:** 处理与 「intersect line segment with bounding box」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.IntersectLineSegmentWithBoundingBox(start, end, min, max);
```

### CheckLineSegmentToLineSegmentIntersection
`public static bool CheckLineSegmentToLineSegmentIntersection(Vec2 segment1Start, Vec2 segment1End, Vec2 segment2Start, Vec2 segment2End)`

**用途 / Purpose:** 检查「line segment to line segment intersection」在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
MBMath.CheckLineSegmentToLineSegmentIntersection(segment1Start, segment1End, segment2Start, segment2End);
```

### CheckPointInsidePolygon
`public static bool CheckPointInsidePolygon(in Vec2 v0, in Vec2 v1, in Vec2 v2, in Vec2 v3, in Vec2 point)`

**用途 / Purpose:** 检查「point inside polygon」在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
MBMath.CheckPointInsidePolygon(v0, v1, v2, v3, point);
```

### CheckPolygonIntersection
`public static bool CheckPolygonIntersection(Vec2 polygon1, Vec2 polygon2)`

**用途 / Purpose:** 检查「polygon intersection」在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
MBMath.CheckPolygonIntersection(polygon1, polygon2);
```

### CheckPolygonLineSegmentIntersection
`public static bool CheckPolygonLineSegmentIntersection(MBList<Vec2> polygon, Vec2 segmentStart, Vec2 segmentEnd)`

**用途 / Purpose:** 检查「polygon line segment intersection」在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
MBMath.CheckPolygonLineSegmentIntersection(polygon, segmentStart, segmentEnd);
```

### IntersectRayWithPolygon
`public static bool IntersectRayWithPolygon(Vec2 rayOrigin, Vec2 rayDir, MBList<Vec2> polygon, out Vec2 intersectionPoint)`

**用途 / Purpose:** 处理与 「intersect ray with polygon」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.IntersectRayWithPolygon(rayOrigin, rayDir, polygon, intersectionPoint);
```

### ToOrdinal
`public static string ToOrdinal(int number)`

**用途 / Purpose:** 处理与 「to ordinal」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBMath.ToOrdinal(0);
```

### FindPlaneLineIntersectionPointWithNormal
`public static Vec3 FindPlaneLineIntersectionPointWithNormal(Vec3 planeP1, Vec3 planeNormal, Vec3 mouseP1, Vec3 mouseP2, out bool exceptionZero)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「plane line intersection point with normal」。

```csharp
// 静态调用，不需要实例
MBMath.FindPlaneLineIntersectionPointWithNormal(planeP1, planeNormal, mouseP1, mouseP2, exceptionZero);
```

## 使用示例

```csharp
MBMath.ToRadians(f);
```

## 参见

- [本区域目录](../)