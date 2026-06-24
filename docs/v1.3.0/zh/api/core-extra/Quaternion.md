<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Quaternion`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Quaternion

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Quaternion`
**Base:** 无
**File:** `TaleWorlds.Library/Quaternion.cs`

## 概述

`Quaternion` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public float this { get; }` |
| `IsIdentity` | `public bool IsIdentity { get; }` |
| `IsUnit` | `public bool IsUnit { get; }` |
| `Identity` | `public static Quaternion Identity { get; }` |

## 主要方法

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### Normalize
`public float Normalize()`

**用途 / Purpose:** 处理 `normalize` 相关逻辑。

### SafeNormalize
`public float SafeNormalize()`

**用途 / Purpose:** 处理 `safe normalize` 相关逻辑。

### NormalizeWeighted
`public float NormalizeWeighted()`

**用途 / Purpose:** 处理 `normalize weighted` 相关逻辑。

### SetToRotationX
`public void SetToRotationX(float angle)`

**用途 / Purpose:** 设置 `to rotation x` 的值或状态。

### SetToRotationY
`public void SetToRotationY(float angle)`

**用途 / Purpose:** 设置 `to rotation y` 的值或状态。

### SetToRotationZ
`public void SetToRotationZ(float angle)`

**用途 / Purpose:** 设置 `to rotation z` 的值或状态。

### Flip
`public void Flip()`

**用途 / Purpose:** 处理 `flip` 相关逻辑。

### TransformToParent
`public Quaternion TransformToParent(Quaternion q)`

**用途 / Purpose:** 处理 `transform to parent` 相关逻辑。

### TransformToLocal
`public Quaternion TransformToLocal(Quaternion q)`

**用途 / Purpose:** 处理 `transform to local` 相关逻辑。

### TransformToLocalWithoutNormalize
`public Quaternion TransformToLocalWithoutNormalize(Quaternion q)`

**用途 / Purpose:** 处理 `transform to local without normalize` 相关逻辑。

### Slerp
`public static Quaternion Slerp(Quaternion from, Quaternion to, float t)`

**用途 / Purpose:** 处理 `slerp` 相关逻辑。

### Lerp
`public static Quaternion Lerp(Quaternion from, Quaternion to, float t)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

### Mat3FromQuaternion
`public static Mat3 Mat3FromQuaternion(Quaternion quat)`

**用途 / Purpose:** 处理 `mat3 from quaternion` 相关逻辑。

### QuaternionFromEulerAngles
`public static Quaternion QuaternionFromEulerAngles(float yaw, float pitch, float roll)`

**用途 / Purpose:** 处理 `quaternion from euler angles` 相关逻辑。

### QuaternionFromMat3
`public static Quaternion QuaternionFromMat3(Mat3 m)`

**用途 / Purpose:** 处理 `quaternion from mat3` 相关逻辑。

### AxisAngleFromQuaternion
`public static void AxisAngleFromQuaternion(out Vec3 axis, out float angle, Quaternion quat)`

**用途 / Purpose:** 处理 `axis angle from quaternion` 相关逻辑。

### QuaternionFromAxisAngle
`public static Quaternion QuaternionFromAxisAngle(Vec3 axis, float angle)`

**用途 / Purpose:** 处理 `quaternion from axis angle` 相关逻辑。

### EulerAngleFromQuaternion
`public static Vec3 EulerAngleFromQuaternion(Quaternion quat)`

**用途 / Purpose:** 处理 `euler angle from quaternion` 相关逻辑。

### FindShortestArcAsQuaternion
`public static Quaternion FindShortestArcAsQuaternion(Vec3 v0, Vec3 v1)`

**用途 / Purpose:** 处理 `find shortest arc as quaternion` 相关逻辑。

### Dotp4
`public float Dotp4(Quaternion q2)`

**用途 / Purpose:** 处理 `dotp4` 相关逻辑。

### ToMat3
`public Mat3 ToMat3()`

**用途 / Purpose:** 处理 `to mat3` 相关逻辑。

### InverseDirection
`public bool InverseDirection(Quaternion q2)`

**用途 / Purpose:** 处理 `inverse direction` 相关逻辑。

### Conjugate
`public Quaternion Conjugate()`

**用途 / Purpose:** 处理 `conjugate` 相关逻辑。

### Inverse
`public Quaternion Inverse()`

**用途 / Purpose:** 处理 `inverse` 相关逻辑。

## 使用示例

```csharp
var value = new Quaternion();
value.GetHashCode();
```

## 参见

- [完整类目录](../catalog)