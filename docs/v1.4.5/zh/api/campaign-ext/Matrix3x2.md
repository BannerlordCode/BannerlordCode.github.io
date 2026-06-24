<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Matrix3x2`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Matrix3x2

**命名空间:** System.Numerics
**模块:** System.Numerics
**类型:** `public struct Matrix3x2 : IEquatable<Matrix3x2>`
**Base:** `IEquatable<Matrix3x2>`
**领域:** campaign-ext

## 概述

`Matrix3x2` 位于 `System.Numerics`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `System.Numerics` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsIdentity` | `public bool IsIdentity { get; }` |
| `Translation` | `public Vector2 Translation { get; set; }` |

## 主要方法

### CreateTranslation
`public static Matrix3x2 CreateTranslation(Vector2 position)`

**用途 / Purpose:** 创建一个 `translation` 实例或对象。

### CreateTranslation
`public static Matrix3x2 CreateTranslation(float xPosition, float yPosition)`

**用途 / Purpose:** 创建一个 `translation` 实例或对象。

### CreateScale
`public static Matrix3x2 CreateScale(float xScale, float yScale)`

**用途 / Purpose:** 创建一个 `scale` 实例或对象。

### CreateScale
`public static Matrix3x2 CreateScale(float xScale, float yScale, Vector2 centerPoint)`

**用途 / Purpose:** 创建一个 `scale` 实例或对象。

### CreateScale
`public static Matrix3x2 CreateScale(Vector2 scales)`

**用途 / Purpose:** 创建一个 `scale` 实例或对象。

### CreateScale
`public static Matrix3x2 CreateScale(Vector2 scales, Vector2 centerPoint)`

**用途 / Purpose:** 创建一个 `scale` 实例或对象。

### CreateScale
`public static Matrix3x2 CreateScale(float scale)`

**用途 / Purpose:** 创建一个 `scale` 实例或对象。

### CreateScale
`public static Matrix3x2 CreateScale(float scale, Vector2 centerPoint)`

**用途 / Purpose:** 创建一个 `scale` 实例或对象。

### CreateSkew
`public static Matrix3x2 CreateSkew(float radiansX, float radiansY)`

**用途 / Purpose:** 创建一个 `skew` 实例或对象。

### CreateSkew
`public static Matrix3x2 CreateSkew(float radiansX, float radiansY, Vector2 centerPoint)`

**用途 / Purpose:** 创建一个 `skew` 实例或对象。

### CreateRotation
`public static Matrix3x2 CreateRotation(float radians)`

**用途 / Purpose:** 创建一个 `rotation` 实例或对象。

### CreateRotation
`public static Matrix3x2 CreateRotation(float radians, Vector2 centerPoint)`

**用途 / Purpose:** 创建一个 `rotation` 实例或对象。

### GetDeterminant
`public float GetDeterminant()`

**用途 / Purpose:** 获取 `determinant` 的当前值。

### Invert
`public static bool Invert(Matrix3x2 matrix, out Matrix3x2 result)`

**用途 / Purpose:** 处理 `invert` 相关逻辑。

### Lerp
`public static Matrix3x2 Lerp(Matrix3x2 matrix1, Matrix3x2 matrix2, float amount)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

### Negate
`public static Matrix3x2 Negate(Matrix3x2 value)`

**用途 / Purpose:** 处理 `negate` 相关逻辑。

### Add
`public static Matrix3x2 Add(Matrix3x2 value1, Matrix3x2 value2)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Subtract
`public static Matrix3x2 Subtract(Matrix3x2 value1, Matrix3x2 value2)`

**用途 / Purpose:** 处理 `subtract` 相关逻辑。

### Multiply
`public static Matrix3x2 Multiply(Matrix3x2 value1, Matrix3x2 value2)`

**用途 / Purpose:** 处理 `multiply` 相关逻辑。

### Multiply
`public static Matrix3x2 Multiply(Matrix3x2 value1, float value2)`

**用途 / Purpose:** 处理 `multiply` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
Matrix3x2.CreateTranslation(position);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
