<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Vec2`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Vec2

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Vec2`
**Base:** 无
**File:** `TaleWorlds.Library/Vec2.cs`

## 概述

`Vec2` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `X` | `public float X { get; }` |
| `Y` | `public float Y { get; }` |
| `Length` | `public float Length { get; }` |
| `LengthSquared` | `public float LengthSquared { get; }` |
| `RotationInRadians` | `public float RotationInRadians { get; }` |
| `IsValid` | `public bool IsValid { get; }` |

## 主要方法

### ToVec3
`public Vec3 ToVec3(float z = 0f)`

**用途 / Purpose:** 处理 `to vec3` 相关逻辑。

### Vector2
`public static explicit operator Vector2(Vec2 vec2)`

**用途 / Purpose:** 处理 `vector2` 相关逻辑。

### Vec2
`public static implicit operator Vec2(Vector2 vec2)`

**用途 / Purpose:** 处理 `vec2` 相关逻辑。

### Normalize
`public float Normalize()`

**用途 / Purpose:** 处理 `normalize` 相关逻辑。

### Normalized
`public Vec2 Normalized()`

**用途 / Purpose:** 处理 `normalized` 相关逻辑。

### ClampMagnitude
`public void ClampMagnitude(float min, float max)`

**用途 / Purpose:** 处理 `clamp magnitude` 相关逻辑。

### GetWindingOrder
`public static WindingOrder GetWindingOrder(Vec2 first, Vec2 second, Vec2 third)`

**用途 / Purpose:** 获取 `winding order` 的当前值。

### CCW
`public static float CCW(Vec2 va, Vec2 vb)`

**用途 / Purpose:** 处理 `c c w` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### IsUnit
`public bool IsUnit()`

**用途 / Purpose:** 处理 `is unit` 相关逻辑。

### IsNonZero
`public bool IsNonZero()`

**用途 / Purpose:** 处理 `is non zero` 相关逻辑。

### NearlyEquals
`public bool NearlyEquals(Vec2 v, float epsilon = 1E-05f)`

**用途 / Purpose:** 处理 `nearly equals` 相关逻辑。

### RotateCCW
`public void RotateCCW(float angleInRadians)`

**用途 / Purpose:** 处理 `rotate c c w` 相关逻辑。

### DotProduct
`public float DotProduct(Vec2 v)`

**用途 / Purpose:** 处理 `dot product` 相关逻辑。

### DotProduct
`public static float DotProduct(Vec2 va, Vec2 vb)`

**用途 / Purpose:** 处理 `dot product` 相关逻辑。

### ElementWiseProduct
`public static Vec2 ElementWiseProduct(Vec2 va, Vec2 vb)`

**用途 / Purpose:** 处理 `element wise product` 相关逻辑。

### FromRotation
`public static Vec2 FromRotation(float rotation)`

**用途 / Purpose:** 处理 `from rotation` 相关逻辑。

### TransformToLocalUnitF
`public Vec2 TransformToLocalUnitF(Vec2 a)`

**用途 / Purpose:** 处理 `transform to local unit f` 相关逻辑。

### TransformToParentUnitF
`public Vec2 TransformToParentUnitF(Vec2 a)`

**用途 / Purpose:** 处理 `transform to parent unit f` 相关逻辑。

### TransformToLocalUnitFLeftHanded
`public Vec2 TransformToLocalUnitFLeftHanded(Vec2 a)`

**用途 / Purpose:** 处理 `transform to local unit f left handed` 相关逻辑。

### TransformToParentUnitFLeftHanded
`public Vec2 TransformToParentUnitFLeftHanded(Vec2 a)`

**用途 / Purpose:** 处理 `transform to parent unit f left handed` 相关逻辑。

### RightVec
`public Vec2 RightVec()`

**用途 / Purpose:** 处理 `right vec` 相关逻辑。

### LeftVec
`public Vec2 LeftVec()`

**用途 / Purpose:** 处理 `left vec` 相关逻辑。

### Max
`public static Vec2 Max(Vec2 v1, Vec2 v2)`

**用途 / Purpose:** 处理 `max` 相关逻辑。

### Max
`public static Vec2 Max(Vec2 v1, float f)`

**用途 / Purpose:** 处理 `max` 相关逻辑。

### Min
`public static Vec2 Min(Vec2 v1, Vec2 v2)`

**用途 / Purpose:** 处理 `min` 相关逻辑。

### Min
`public static Vec2 Min(Vec2 v1, float f)`

**用途 / Purpose:** 处理 `min` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### DistanceSquared
`public float DistanceSquared(Vec2 v)`

**用途 / Purpose:** 处理 `distance squared` 相关逻辑。

### Distance
`public float Distance(Vec2 v)`

**用途 / Purpose:** 处理 `distance` 相关逻辑。

### DistanceToLine
`public static float DistanceToLine(Vec2 line1, Vec2 line2, Vec2 point)`

**用途 / Purpose:** 处理 `distance to line` 相关逻辑。

### DistanceToLineSegmentSquared
`public static float DistanceToLineSegmentSquared(Vec2 line1, Vec2 line2, Vec2 point)`

**用途 / Purpose:** 处理 `distance to line segment squared` 相关逻辑。

### DistanceToLineSegment
`public float DistanceToLineSegment(Vec2 v, Vec2 w, out Vec2 closestPointOnLineSegment)`

**用途 / Purpose:** 处理 `distance to line segment` 相关逻辑。

### DistanceSquaredToLineSegment
`public float DistanceSquaredToLineSegment(Vec2 v, Vec2 w, out Vec2 closestPointOnLineSegment)`

**用途 / Purpose:** 处理 `distance squared to line segment` 相关逻辑。

### Abs
`public static Vec2 Abs(Vec2 vec)`

**用途 / Purpose:** 处理 `abs` 相关逻辑。

### Lerp
`public static Vec2 Lerp(Vec2 v1, Vec2 v2, float alpha)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

### Slerp
`public static Vec2 Slerp(Vec2 start, Vec2 end, float percent)`

**用途 / Purpose:** 处理 `slerp` 相关逻辑。

### AngleBetween
`public float AngleBetween(Vec2 vector2)`

**用途 / Purpose:** 处理 `angle between` 相关逻辑。

### Determinant
`public static float Determinant(in Vec2 vec1, in Vec2 vec2)`

**用途 / Purpose:** 处理 `determinant` 相关逻辑。

## 使用示例

```csharp
var value = new Vec2();
value.ToVec3(0);
```

## 参见

- [完整类目录](../catalog)