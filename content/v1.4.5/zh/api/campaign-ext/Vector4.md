---
title: "Vector4"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Vector4`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Vector4

**Namespace:** System.Numerics
**Module:** System.Numerics
**Type:** `public struct Vector4 : IEquatable<Vector4>, IFormattable`
**Base:** `IEquatable<Vector4>`
**File:** `Bannerlord.Source/bin/System.Numerics.Vectors/System.Numerics/Vector4.cs`

## 概述

`Vector4` 位于 `System.Numerics`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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
`public static float Distance(Vector4 value1, Vector4 value2)`

**用途 / Purpose:** 处理 `distance` 相关逻辑。

### DistanceSquared
`public static float DistanceSquared(Vector4 value1, Vector4 value2)`

**用途 / Purpose:** 处理 `distance squared` 相关逻辑。

### Normalize
`public static Vector4 Normalize(Vector4 vector)`

**用途 / Purpose:** 处理 `normalize` 相关逻辑。

### Clamp
`public static Vector4 Clamp(Vector4 value1, Vector4 min, Vector4 max)`

**用途 / Purpose:** 处理 `clamp` 相关逻辑。

### Lerp
`public static Vector4 Lerp(Vector4 value1, Vector4 value2, float amount)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

### Transform
`public static Vector4 Transform(Vector2 position, Matrix4x4 matrix)`

**用途 / Purpose:** 处理 `transform` 相关逻辑。

### Transform
`public static Vector4 Transform(Vector3 position, Matrix4x4 matrix)`

**用途 / Purpose:** 处理 `transform` 相关逻辑。

### Transform
`public static Vector4 Transform(Vector4 vector, Matrix4x4 matrix)`

**用途 / Purpose:** 处理 `transform` 相关逻辑。

### Transform
`public static Vector4 Transform(Vector2 value, Quaternion rotation)`

**用途 / Purpose:** 处理 `transform` 相关逻辑。

### Transform
`public static Vector4 Transform(Vector3 value, Quaternion rotation)`

**用途 / Purpose:** 处理 `transform` 相关逻辑。

### Transform
`public static Vector4 Transform(Vector4 value, Quaternion rotation)`

**用途 / Purpose:** 处理 `transform` 相关逻辑。

### Add
`public static Vector4 Add(Vector4 left, Vector4 right)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Subtract
`public static Vector4 Subtract(Vector4 left, Vector4 right)`

**用途 / Purpose:** 处理 `subtract` 相关逻辑。

### Multiply
`public static Vector4 Multiply(Vector4 left, Vector4 right)`

**用途 / Purpose:** 处理 `multiply` 相关逻辑。

### Multiply
`public static Vector4 Multiply(Vector4 left, float right)`

**用途 / Purpose:** 处理 `multiply` 相关逻辑。

### Multiply
`public static Vector4 Multiply(float left, Vector4 right)`

**用途 / Purpose:** 处理 `multiply` 相关逻辑。

### Divide
`public static Vector4 Divide(Vector4 left, Vector4 right)`

**用途 / Purpose:** 处理 `divide` 相关逻辑。

### Divide
`public static Vector4 Divide(Vector4 left, float divisor)`

**用途 / Purpose:** 处理 `divide` 相关逻辑。

### Negate
`public static Vector4 Negate(Vector4 value)`

**用途 / Purpose:** 处理 `negate` 相关逻辑。

### CopyTo
`public void CopyTo(float array)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### CopyTo
`public void CopyTo(float array, int index)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### Equals
`public bool Equals(Vector4 other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### Dot
`public static float Dot(Vector4 vector1, Vector4 vector2)`

**用途 / Purpose:** 处理 `dot` 相关逻辑。

### Min
`public static Vector4 Min(Vector4 value1, Vector4 value2)`

**用途 / Purpose:** 处理 `min` 相关逻辑。

### Max
`public static Vector4 Max(Vector4 value1, Vector4 value2)`

**用途 / Purpose:** 处理 `max` 相关逻辑。

### Abs
`public static Vector4 Abs(Vector4 value)`

**用途 / Purpose:** 处理 `abs` 相关逻辑。

### SquareRoot
`public static Vector4 SquareRoot(Vector4 value)`

**用途 / Purpose:** 处理 `square root` 相关逻辑。

## 使用示例

```csharp
var value = new Vector4();
value.GetHashCode();
```

## 参见

- [完整类目录](../catalog)