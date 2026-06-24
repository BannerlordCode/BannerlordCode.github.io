<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBMath`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBMath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class MBMath`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/MBMath.cs`

## 概述

`MBMath` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ToRadians
`public static float ToRadians(this float f)`

**用途 / Purpose:** 处理 `to radians` 相关逻辑。

### ToDegrees
`public static float ToDegrees(this float f)`

**用途 / Purpose:** 处理 `to degrees` 相关逻辑。

### ApproximatelyEqualsTo
`public static bool ApproximatelyEqualsTo(this float f, float comparedValue, float epsilon = 1E-05f)`

**用途 / Purpose:** 处理 `approximately equals to` 相关逻辑。

### ApproximatelyEquals
`public static bool ApproximatelyEquals(float first, float second, float epsilon = 1E-05f)`

**用途 / Purpose:** 处理 `approximately equals` 相关逻辑。

### IsValidValue
`public static bool IsValidValue(float f)`

**用途 / Purpose:** 处理 `is valid value` 相关逻辑。

### ClampIndex
`public static int ClampIndex(int value, int minValue, int maxValue)`

**用途 / Purpose:** 处理 `clamp index` 相关逻辑。

### ClampInt
`public static int ClampInt(int value, int minValue, int maxValue)`

**用途 / Purpose:** 处理 `clamp int` 相关逻辑。

### ClampFloat
`public static float ClampFloat(float value, float minValue, float maxValue)`

**用途 / Purpose:** 处理 `clamp float` 相关逻辑。

### ClampUnit
`public static void ClampUnit(ref float value)`

**用途 / Purpose:** 处理 `clamp unit` 相关逻辑。

### GetNumberOfBitsToRepresentNumber
`public static int GetNumberOfBitsToRepresentNumber(uint value)`

**用途 / Purpose:** 获取 `number of bits to represent number` 的当前值。

### GetNumberOfBitsToRepresentNumber
`public static int GetNumberOfBitsToRepresentNumber(ulong value)`

**用途 / Purpose:** 获取 `number of bits to represent number` 的当前值。

### Lerp
`public static float Lerp(float valueFrom, float valueTo, float amount, float minimumDifference = 1E-05f)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

### LerpFPSIndependent
`public static float LerpFPSIndependent(float valueFrom, float valueTo, float amount)`

**用途 / Purpose:** 处理 `lerp f p s independent` 相关逻辑。

### LinearExtrapolation
`public static float LinearExtrapolation(float valueFrom, float valueTo, float amount)`

**用途 / Purpose:** 处理 `linear extrapolation` 相关逻辑。

### Lerp
`public static Vec3 Lerp(Vec3 vecFrom, Vec3 vecTo, float amount, float minimumDifference)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

### Lerp
`public static Vec2 Lerp(Vec2 vecFrom, Vec2 vecTo, float amount, float minimumDifference)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

### Map
`public static float Map(float input, float inputMinimum, float inputMaximum, float outputMinimum, float outputMaximum)`

**用途 / Purpose:** 处理 `map` 相关逻辑。

### Lerp
`public static Mat3 Lerp(ref Mat3 matFrom, ref Mat3 matTo, float amount, float minimumDifference)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

### LerpRadians
`public static float LerpRadians(float valueFrom, float valueTo, float amount, float minChange, float maxChange)`

**用途 / Purpose:** 处理 `lerp radians` 相关逻辑。

### SplitLerp
`public static float SplitLerp(float value1, float value2, float value3, float cutOff, float amount, float minimumDifference)`

**用途 / Purpose:** 处理 `split lerp` 相关逻辑。

### InverseLerp
`public static float InverseLerp(float valueFrom, float valueTo, float value)`

**用途 / Purpose:** 处理 `inverse lerp` 相关逻辑。

### SmoothStep
`public static float SmoothStep(float edge0, float edge1, float value)`

**用途 / Purpose:** 处理 `smooth step` 相关逻辑。

### BilinearLerp
`public static float BilinearLerp(float topLeft, float topRight, float botLeft, float botRight, float x, float y)`

**用途 / Purpose:** 处理 `bilinear lerp` 相关逻辑。

### GetSmallestDifferenceBetweenTwoAngles
`public static float GetSmallestDifferenceBetweenTwoAngles(float fromAngle, float toAngle)`

**用途 / Purpose:** 获取 `smallest difference between two angles` 的当前值。

### ClampAngle
`public static float ClampAngle(float angle, float restrictionCenter, float restrictionRange)`

**用途 / Purpose:** 处理 `clamp angle` 相关逻辑。

### WrapAngle
`public static float WrapAngle(float angle)`

**用途 / Purpose:** 处理 `wrap angle` 相关逻辑。

### WrapAngleSafe
`public static float WrapAngleSafe(float angle)`

**用途 / Purpose:** 处理 `wrap angle safe` 相关逻辑。

### IsBetween
`public static bool IsBetween(float numberToCheck, float bottom, float top)`

**用途 / Purpose:** 处理 `is between` 相关逻辑。

### IsBetween
`public static bool IsBetween(int value, int minValue, int maxValue)`

**用途 / Purpose:** 处理 `is between` 相关逻辑。

### IsBetweenInclusive
`public static bool IsBetweenInclusive(float numberToCheck, float bottom, float top)`

**用途 / Purpose:** 处理 `is between inclusive` 相关逻辑。

### ColorFromRGBA
`public static uint ColorFromRGBA(float red, float green, float blue, float alpha)`

**用途 / Purpose:** 处理 `color from r g b a` 相关逻辑。

### HSBtoRGB
`public static Color HSBtoRGB(float hue, float saturation, float brightness, float outputAlpha)`

**用途 / Purpose:** 处理 `h s bto r g b` 相关逻辑。

### RGBtoHSB
`public static Vec3 RGBtoHSB(Color rgb)`

**用途 / Purpose:** 处理 `r g bto h s b` 相关逻辑。

### GammaCorrectRGB
`public static Vec3 GammaCorrectRGB(float gamma, Vec3 rgb)`

**用途 / Purpose:** 处理 `gamma correct r g b` 相关逻辑。

### GetSignedDistanceOfPointToLineSegment
`public static float GetSignedDistanceOfPointToLineSegment(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, in Vec2 point)`

**用途 / Purpose:** 获取 `signed distance of point to line segment` 的当前值。

### GetDistanceSquareOfPointToLineSegment
`public static float GetDistanceSquareOfPointToLineSegment(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, Vec2 point)`

**用途 / Purpose:** 获取 `distance square of point to line segment` 的当前值。

### ProjectPointOntoLine
`public static Vec2 ProjectPointOntoLine(Vec2 point, Vec2 lineStart, Vec2 lineEnd)`

**用途 / Purpose:** 处理 `project point onto line` 相关逻辑。

### ClampToAxisAlignedRectangle
`public static Vec2 ClampToAxisAlignedRectangle(Vec2 point, Vec2 lineStart, Vec2 lineEnd)`

**用途 / Purpose:** 处理 `clamp to axis aligned rectangle` 相关逻辑。

### GetRayPlaneIntersectionPoint
`public static bool GetRayPlaneIntersectionPoint(in Vec3 planeNormal, in Vec3 planeCenter, in Vec3 rayOrigin, in Vec3 rayDirection, out float t)`

**用途 / Purpose:** 获取 `ray plane intersection point` 的当前值。

### PointLiesAheadOfPlane
`public static bool PointLiesAheadOfPlane(in Vec3 planeNormal, in Vec3 planeCenter, in Vec3 point)`

**用途 / Purpose:** 处理 `point lies ahead of plane` 相关逻辑。

### GetClosestPointOnLineSegmentToPoint
`public static Vec2 GetClosestPointOnLineSegmentToPoint(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, in Vec2 point)`

**用途 / Purpose:** 获取 `closest point on line segment to point` 的当前值。

### GetClosestPointOnLineSegmentToPoint
`public static Vec3 GetClosestPointOnLineSegmentToPoint(in Vec3 lineSegmentBegin, in Vec3 lineSegmentEnd, in Vec3 point)`

**用途 / Purpose:** 获取 `closest point on line segment to point` 的当前值。

### CheckLineToLineSegmentIntersection
`public static bool CheckLineToLineSegmentIntersection(Vec2 lineOrigin, Vec2 lineDirection, Vec2 segmentA, Vec2 segmentB, out float t, out Vec2 intersect)`

**用途 / Purpose:** 处理 `check line to line segment intersection` 相关逻辑。

### IntersectLineSegmentWithTriangle
`public static bool IntersectLineSegmentWithTriangle(in Vec3 segStart, in Vec3 segEnd, in Vec3 triA, in Vec3 triB, in Vec3 triC)`

**用途 / Purpose:** 处理 `intersect line segment with triangle` 相关逻辑。

### IntersectLineSegmentWithBoundingBox
`public static bool IntersectLineSegmentWithBoundingBox(in Vec3 start, in Vec3 end, in Vec3 min, in Vec3 max)`

**用途 / Purpose:** 处理 `intersect line segment with bounding box` 相关逻辑。

### CheckLineSegmentToLineSegmentIntersection
`public static bool CheckLineSegmentToLineSegmentIntersection(Vec2 segment1Start, Vec2 segment1End, Vec2 segment2Start, Vec2 segment2End)`

**用途 / Purpose:** 处理 `check line segment to line segment intersection` 相关逻辑。

### CheckPointInsidePolygon
`public static bool CheckPointInsidePolygon(in Vec2 v0, in Vec2 v1, in Vec2 v2, in Vec2 v3, in Vec2 point)`

**用途 / Purpose:** 处理 `check point inside polygon` 相关逻辑。

### CheckPolygonIntersection
`public static bool CheckPolygonIntersection(Vec2 polygon1, Vec2 polygon2)`

**用途 / Purpose:** 处理 `check polygon intersection` 相关逻辑。

### CheckPolygonLineSegmentIntersection
`public static bool CheckPolygonLineSegmentIntersection(MBList<Vec2> polygon, Vec2 segmentStart, Vec2 segmentEnd)`

**用途 / Purpose:** 处理 `check polygon line segment intersection` 相关逻辑。

### IntersectRayWithPolygon
`public static bool IntersectRayWithPolygon(Vec2 rayOrigin, Vec2 rayDir, MBList<Vec2> polygon, out Vec2 intersectionPoint)`

**用途 / Purpose:** 处理 `intersect ray with polygon` 相关逻辑。

### ToOrdinal
`public static string ToOrdinal(int number)`

**用途 / Purpose:** 处理 `to ordinal` 相关逻辑。

### FindPlaneLineIntersectionPointWithNormal
`public static Vec3 FindPlaneLineIntersectionPointWithNormal(Vec3 planeP1, Vec3 planeNormal, Vec3 mouseP1, Vec3 mouseP2, out bool exceptionZero)`

**用途 / Purpose:** 处理 `find plane line intersection point with normal` 相关逻辑。

## 使用示例

```csharp
MBMath.ToRadians(f);
```

## 参见

- [完整类目录](../catalog)