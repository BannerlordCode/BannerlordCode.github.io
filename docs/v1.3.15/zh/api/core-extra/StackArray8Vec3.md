<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StackArray8Vec3`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StackArray8Vec3

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** `public struct StackArray8Vec3`
**领域:** core-extra

## 概述

`StackArray8Vec3` 位于 `TaleWorlds.Library`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `X` | `public float X { get; }` |
| `Y` | `public float Y { get; }` |
| `Z` | `public float Z { get; }` |
| `this` | `public float this { get; }` |
| `Length` | `public float Length { get; }` |
| `LengthSquared` | `public float LengthSquared { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `IsValidXYZW` | `public bool IsValidXYZW { get; }` |
| `IsUnit` | `public bool IsUnit { get; }` |
| `IsNonZero` | `public bool IsNonZero { get; }` |
| `AsVec2` | `public Vec2 AsVec2 { get; set; }` |
| `ToARGB` | `public uint ToARGB { get; }` |
| `RotationZ` | `public float RotationZ { get; }` |
| `RotationX` | `public float RotationX { get; }` |
| `this` | `public Vec3 this { get; }` |

## 主要方法

### Abs
`public static Vec3 Abs(Vec3 vec)`

**用途 / Purpose:** 处理 `abs` 相关逻辑。

### Vector3
`public static explicit operator Vector3(Vec3 vec3)`

**用途 / Purpose:** 处理 `vector3` 相关逻辑。

### DotProduct
`public static float DotProduct(Vec3 v1, Vec3 v2)`

**用途 / Purpose:** 处理 `dot product` 相关逻辑。

### Lerp
`public static Vec3 Lerp(Vec3 v1, Vec3 v2, float alpha)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

### Slerp
`public static Vec3 Slerp(Vec3 start, Vec3 end, float percent)`

**用途 / Purpose:** 处理 `slerp` 相关逻辑。

### Vec3Max
`public static Vec3 Vec3Max(Vec3 v1, Vec3 v2)`

**用途 / Purpose:** 处理 `vec3 max` 相关逻辑。

### Vec3Min
`public static Vec3 Vec3Min(Vec3 v1, Vec3 v2)`

**用途 / Purpose:** 处理 `vec3 min` 相关逻辑。

### CrossProduct
`public static Vec3 CrossProduct(Vec3 va, Vec3 vb)`

**用途 / Purpose:** 处理 `cross product` 相关逻辑。

### ElementWiseProduct
`public static Vec3 ElementWiseProduct(Vec3 va, Vec3 vb)`

**用途 / Purpose:** 处理 `element wise product` 相关逻辑。

### ElementWiseDivision
`public static Vec3 ElementWiseDivision(Vec3 va, Vec3 vb)`

**用途 / Purpose:** 处理 `element wise division` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### NormalizedCopy
`public Vec3 NormalizedCopy()`

**用途 / Purpose:** 处理 `normalized copy` 相关逻辑。

### Normalize
`public float Normalize()`

**用途 / Purpose:** 处理 `normalize` 相关逻辑。

### ClampMagnitude
`public void ClampMagnitude(float min, float max)`

**用途 / Purpose:** 处理 `clamp magnitude` 相关逻辑。

### ClampedCopy
`public Vec3 ClampedCopy(float min, float max)`

**用途 / Purpose:** 处理 `clamped copy` 相关逻辑。

### ClampedCopy
`public Vec3 ClampedCopy(float min, float max, out bool valueClamped)`

**用途 / Purpose:** 处理 `clamped copy` 相关逻辑。

### NormalizeWithoutChangingZ
`public void NormalizeWithoutChangingZ()`

**用途 / Purpose:** 处理 `normalize without changing z` 相关逻辑。

### CrossProductWithUp
`public Vec3 CrossProductWithUp()`

**用途 / Purpose:** 处理 `cross product with up` 相关逻辑。

### CrossProductWithUpAsLeftParameter
`public Vec3 CrossProductWithUpAsLeftParameter()`

**用途 / Purpose:** 处理 `cross product with up as left parameter` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
StackArray8Vec3.Abs(vec);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
