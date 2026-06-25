---
title: "Vector2"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Vector2`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Vector2

**Namespace:** System.Numerics
**Module:** System.Numerics
**Type:** `public struct Vector2 : IEquatable<Vector2>, IFormattable`
**Base:** `IEquatable<Vector2>`
**File:** `Bannerlord.Source/bin/System.Numerics.Vectors/System.Numerics/Vector2.cs`

## 概述

`Vector2` 位于 `System.Numerics`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `System.Numerics` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public string ToString(string format)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public string ToString(string format, IFormatProvider formatProvider)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Length
`public float Length()`

**用途 / Purpose:** 处理 `length` 相关逻辑。

### LengthSquared
`public float LengthSquared()`

**用途 / Purpose:** 处理 `length squared` 相关逻辑。

### Distance
`public static float Distance(Vector2 value1, Vector2 value2)`

**用途 / Purpose:** 处理 `distance` 相关逻辑。

### DistanceSquared
`public static float DistanceSquared(Vector2 value1, Vector2 value2)`

**用途 / Purpose:** 处理 `distance squared` 相关逻辑。

### Normalize
`public static Vector2 Normalize(Vector2 value)`

**用途 / Purpose:** 处理 `normalize` 相关逻辑。

### Reflect
`public static Vector2 Reflect(Vector2 vector, Vector2 normal)`

**用途 / Purpose:** 处理 `reflect` 相关逻辑。

### Clamp
`public static Vector2 Clamp(Vector2 value1, Vector2 min, Vector2 max)`

**用途 / Purpose:** 处理 `clamp` 相关逻辑。

### Lerp
`public static Vector2 Lerp(Vector2 value1, Vector2 value2, float amount)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

### Transform
`public static Vector2 Transform(Vector2 position, Matrix3x2 matrix)`

**用途 / Purpose:** 处理 `transform` 相关逻辑。

### Transform
`public static Vector2 Transform(Vector2 position, Matrix4x4 matrix)`

**用途 / Purpose:** 处理 `transform` 相关逻辑。

### TransformNormal
`public static Vector2 TransformNormal(Vector2 normal, Matrix3x2 matrix)`

**用途 / Purpose:** 处理 `transform normal` 相关逻辑。

### TransformNormal
`public static Vector2 TransformNormal(Vector2 normal, Matrix4x4 matrix)`

**用途 / Purpose:** 处理 `transform normal` 相关逻辑。

### Transform
`public static Vector2 Transform(Vector2 value, Quaternion rotation)`

**用途 / Purpose:** 处理 `transform` 相关逻辑。

### Add
`public static Vector2 Add(Vector2 left, Vector2 right)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Subtract
`public static Vector2 Subtract(Vector2 left, Vector2 right)`

**用途 / Purpose:** 处理 `subtract` 相关逻辑。

### Multiply
`public static Vector2 Multiply(Vector2 left, Vector2 right)`

**用途 / Purpose:** 处理 `multiply` 相关逻辑。

### Multiply
`public static Vector2 Multiply(Vector2 left, float right)`

**用途 / Purpose:** 处理 `multiply` 相关逻辑。

### Multiply
`public static Vector2 Multiply(float left, Vector2 right)`

**用途 / Purpose:** 处理 `multiply` 相关逻辑。

### Divide
`public static Vector2 Divide(Vector2 left, Vector2 right)`

**用途 / Purpose:** 处理 `divide` 相关逻辑。

### Divide
`public static Vector2 Divide(Vector2 left, float divisor)`

**用途 / Purpose:** 处理 `divide` 相关逻辑。

### Negate
`public static Vector2 Negate(Vector2 value)`

**用途 / Purpose:** 处理 `negate` 相关逻辑。

### CopyTo
`public void CopyTo(float array)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### CopyTo
`public void CopyTo(float array, int index)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### Equals
`public bool Equals(Vector2 other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### Dot
`public static float Dot(Vector2 value1, Vector2 value2)`

**用途 / Purpose:** 处理 `dot` 相关逻辑。

### Min
`public static Vector2 Min(Vector2 value1, Vector2 value2)`

**用途 / Purpose:** 处理 `min` 相关逻辑。

### Max
`public static Vector2 Max(Vector2 value1, Vector2 value2)`

**用途 / Purpose:** 处理 `max` 相关逻辑。

### Abs
`public static Vector2 Abs(Vector2 value)`

**用途 / Purpose:** 处理 `abs` 相关逻辑。

### SquareRoot
`public static Vector2 SquareRoot(Vector2 value)`

**用途 / Purpose:** 处理 `square root` 相关逻辑。

## 使用示例

```csharp
var value = new Vector2();
value.GetHashCode();
```

## 参见

- [完整类目录](../catalog)