---
title: "Vec2"
description: "Vec2 的自动生成类参考。"
---
# Vec2

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Vec2`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/Vec2.cs`

## 概述

`Vec2` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## 主要方法

### ToVec3
`public Vec3 ToVec3(float z = 0f)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ToVec3 对应的操作。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.ToVec3(0);
```

### Vector2
`public static explicit operator Vector2(Vec2 vec2)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Vector2 对应的操作。

```csharp
// 静态调用，不需要实例
Vec2.Vector2(vec2);
```

### Vec2
`public static implicit operator Vec2(Vector2 vec2)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Vec2 对应的操作。

```csharp
// 静态调用，不需要实例
Vec2.Vec2(vec2);
```

### Normalize
`public float Normalize()`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象规范化为标准形式或范围。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.Normalize();
```

### Normalized
`public Vec2 Normalized()`

**用途 / Purpose:** **用途 / Purpose:** 将d规范化到标准形式或范围内。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.Normalized();
```

### ClampMagnitude
`public void ClampMagnitude(float min, float max)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ClampMagnitude 对应的操作。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
vec2.ClampMagnitude(0, 0);
```

### GetWindingOrder
`public static WindingOrder GetWindingOrder(Vec2 first, Vec2 second, Vec2 third)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 winding order 的结果。

```csharp
// 静态调用，不需要实例
Vec2.GetWindingOrder(first, second, third);
```

### CCW
`public static float CCW(Vec2 va, Vec2 vb)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CCW 对应的操作。

```csharp
// 静态调用，不需要实例
Vec2.CCW(va, vb);
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.GetHashCode();
```

### IsUnit
`public bool IsUnit()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 unit 状态或条件。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.IsUnit();
```

### IsNonZero
`public bool IsNonZero()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 non zero 状态或条件。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.IsNonZero();
```

### NearlyEquals
`public bool NearlyEquals(Vec2 v, float epsilon = 1E-05f)`

**用途 / Purpose:** **用途 / Purpose:** 调用 NearlyEquals 对应的操作。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.NearlyEquals(v, 0);
```

### RotateCCW
`public void RotateCCW(float angleInRadians)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RotateCCW 对应的操作。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
vec2.RotateCCW(0);
```

### DotProduct
`public float DotProduct(Vec2 v)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DotProduct 对应的操作。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.DotProduct(v);
```

### DotProduct
`public static float DotProduct(Vec2 va, Vec2 vb)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DotProduct 对应的操作。

```csharp
// 静态调用，不需要实例
Vec2.DotProduct(va, vb);
```

### ElementWiseProduct
`public static Vec2 ElementWiseProduct(Vec2 va, Vec2 vb)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ElementWiseProduct 对应的操作。

```csharp
// 静态调用，不需要实例
Vec2.ElementWiseProduct(va, vb);
```

### FromRotation
`public static Vec2 FromRotation(float rotation)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FromRotation 对应的操作。

```csharp
// 静态调用，不需要实例
Vec2.FromRotation(0);
```

### TransformToLocalUnitF
`public Vec2 TransformToLocalUnitF(Vec2 a)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToLocalUnitF 对应的操作。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.TransformToLocalUnitF(a);
```

### TransformToParentUnitF
`public Vec2 TransformToParentUnitF(Vec2 a)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToParentUnitF 对应的操作。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.TransformToParentUnitF(a);
```

### TransformToLocalUnitFLeftHanded
`public Vec2 TransformToLocalUnitFLeftHanded(Vec2 a)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToLocalUnitFLeftHanded 对应的操作。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.TransformToLocalUnitFLeftHanded(a);
```

### TransformToParentUnitFLeftHanded
`public Vec2 TransformToParentUnitFLeftHanded(Vec2 a)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToParentUnitFLeftHanded 对应的操作。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.TransformToParentUnitFLeftHanded(a);
```

### RightVec
`public Vec2 RightVec()`

**用途 / Purpose:** **用途 / Purpose:** 调用 RightVec 对应的操作。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.RightVec();
```

### LeftVec
`public Vec2 LeftVec()`

**用途 / Purpose:** **用途 / Purpose:** 调用 LeftVec 对应的操作。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.LeftVec();
```

### Max
`public static Vec2 Max(Vec2 v1, Vec2 v2)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Max 对应的操作。

```csharp
// 静态调用，不需要实例
Vec2.Max(v1, v2);
```

### Max
`public static Vec2 Max(Vec2 v1, float f)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Max 对应的操作。

```csharp
// 静态调用，不需要实例
Vec2.Max(v1, 0);
```

### Min
`public static Vec2 Min(Vec2 v1, Vec2 v2)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Min 对应的操作。

```csharp
// 静态调用，不需要实例
Vec2.Min(v1, v2);
```

### Min
`public static Vec2 Min(Vec2 v1, float f)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Min 对应的操作。

```csharp
// 静态调用，不需要实例
Vec2.Min(v1, 0);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.ToString();
```

### DistanceSquared
`public float DistanceSquared(Vec2 v)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DistanceSquared 对应的操作。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.DistanceSquared(v);
```

### Distance
`public float Distance(Vec2 v)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Distance 对应的操作。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.Distance(v);
```

### DistanceToLine
`public static float DistanceToLine(Vec2 line1, Vec2 line2, Vec2 point)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DistanceToLine 对应的操作。

```csharp
// 静态调用，不需要实例
Vec2.DistanceToLine(line1, line2, point);
```

### DistanceToLineSegmentSquared
`public static float DistanceToLineSegmentSquared(Vec2 line1, Vec2 line2, Vec2 point)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DistanceToLineSegmentSquared 对应的操作。

```csharp
// 静态调用，不需要实例
Vec2.DistanceToLineSegmentSquared(line1, line2, point);
```

### DistanceToLineSegment
`public float DistanceToLineSegment(Vec2 v, Vec2 w, out Vec2 closestPointOnLineSegment)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DistanceToLineSegment 对应的操作。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.DistanceToLineSegment(v, w, closestPointOnLineSegment);
```

### DistanceSquaredToLineSegment
`public float DistanceSquaredToLineSegment(Vec2 v, Vec2 w, out Vec2 closestPointOnLineSegment)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DistanceSquaredToLineSegment 对应的操作。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.DistanceSquaredToLineSegment(v, w, closestPointOnLineSegment);
```

### Abs
`public static Vec2 Abs(Vec2 vec)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Abs 对应的操作。

```csharp
// 静态调用，不需要实例
Vec2.Abs(vec);
```

### Lerp
`public static Vec2 Lerp(Vec2 v1, Vec2 v2, float alpha)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Lerp 对应的操作。

```csharp
// 静态调用，不需要实例
Vec2.Lerp(v1, v2, 0);
```

### Slerp
`public static Vec2 Slerp(Vec2 start, Vec2 end, float percent)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Slerp 对应的操作。

```csharp
// 静态调用，不需要实例
Vec2.Slerp(start, end, 0);
```

### AngleBetween
`public float AngleBetween(Vec2 vector2)`

**用途 / Purpose:** **用途 / Purpose:** 调用 AngleBetween 对应的操作。

```csharp
// 先通过子系统 API 拿到 Vec2 实例
Vec2 vec2 = ...;
var result = vec2.AngleBetween(vector2);
```

### Determinant
`public static float Determinant(in Vec2 vec1, in Vec2 vec2)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Determinant 对应的操作。

```csharp
// 静态调用，不需要实例
Vec2.Determinant(vec1, vec2);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Vec2 vec2 = ...;
vec2.ToVec3(0);
```

## 参见

- [本区域目录](../)