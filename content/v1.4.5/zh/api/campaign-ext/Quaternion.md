---
title: "Quaternion"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Quaternion`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Quaternion

**Namespace:** System.Numerics
**Module:** System.Numerics
**Type:** `public struct Quaternion : IEquatable<Quaternion>`
**Base:** `IEquatable<Quaternion>`
**File:** `Bannerlord.Source/bin/System.Numerics.Vectors/System.Numerics/Quaternion.cs`

## 概述

`Quaternion` 位于 `System.Numerics`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `System.Numerics` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsIdentity` | `public bool IsIdentity { get; }` |

## 主要方法

### Length
`public float Length()`

**用途 / Purpose:** 处理 `length` 相关逻辑。

### LengthSquared
`public float LengthSquared()`

**用途 / Purpose:** 处理 `length squared` 相关逻辑。

### Normalize
`public static Quaternion Normalize(Quaternion value)`

**用途 / Purpose:** 处理 `normalize` 相关逻辑。

### Conjugate
`public static Quaternion Conjugate(Quaternion value)`

**用途 / Purpose:** 处理 `conjugate` 相关逻辑。

### Inverse
`public static Quaternion Inverse(Quaternion value)`

**用途 / Purpose:** 处理 `inverse` 相关逻辑。

### CreateFromAxisAngle
`public static Quaternion CreateFromAxisAngle(Vector3 axis, float angle)`

**用途 / Purpose:** 创建一个 `from axis angle` 实例或对象。

### CreateFromYawPitchRoll
`public static Quaternion CreateFromYawPitchRoll(float yaw, float pitch, float roll)`

**用途 / Purpose:** 创建一个 `from yaw pitch roll` 实例或对象。

### CreateFromRotationMatrix
`public static Quaternion CreateFromRotationMatrix(Matrix4x4 matrix)`

**用途 / Purpose:** 创建一个 `from rotation matrix` 实例或对象。

### Dot
`public static float Dot(Quaternion quaternion1, Quaternion quaternion2)`

**用途 / Purpose:** 处理 `dot` 相关逻辑。

### Slerp
`public static Quaternion Slerp(Quaternion quaternion1, Quaternion quaternion2, float amount)`

**用途 / Purpose:** 处理 `slerp` 相关逻辑。

### Lerp
`public static Quaternion Lerp(Quaternion quaternion1, Quaternion quaternion2, float amount)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

### Concatenate
`public static Quaternion Concatenate(Quaternion value1, Quaternion value2)`

**用途 / Purpose:** 处理 `concatenate` 相关逻辑。

### Negate
`public static Quaternion Negate(Quaternion value)`

**用途 / Purpose:** 处理 `negate` 相关逻辑。

### Add
`public static Quaternion Add(Quaternion value1, Quaternion value2)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Subtract
`public static Quaternion Subtract(Quaternion value1, Quaternion value2)`

**用途 / Purpose:** 处理 `subtract` 相关逻辑。

### Multiply
`public static Quaternion Multiply(Quaternion value1, Quaternion value2)`

**用途 / Purpose:** 处理 `multiply` 相关逻辑。

### Multiply
`public static Quaternion Multiply(Quaternion value1, float value2)`

**用途 / Purpose:** 处理 `multiply` 相关逻辑。

### Divide
`public static Quaternion Divide(Quaternion value1, Quaternion value2)`

**用途 / Purpose:** 处理 `divide` 相关逻辑。

### Equals
`public bool Equals(Quaternion other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

## 使用示例

```csharp
var value = new Quaternion();
value.Length();
```

## 参见

- [完整类目录](../catalog)