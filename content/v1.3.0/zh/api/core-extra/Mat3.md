---
title: "Mat3"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Mat3`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Mat3

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Mat3`
**Base:** 无
**File:** `TaleWorlds.Library/Mat3.cs`

## 概述

`Mat3` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public Vec3 this { get; set; }` |
| `Identity` | `public static Mat3 Identity { get; }` |

## 主要方法

### RotateAboutSide
`public void RotateAboutSide(float a)`

**用途 / Purpose:** 处理 `rotate about side` 相关逻辑。

### RotateAboutForward
`public void RotateAboutForward(float a)`

**用途 / Purpose:** 处理 `rotate about forward` 相关逻辑。

### RotateAboutUp
`public void RotateAboutUp(float a)`

**用途 / Purpose:** 处理 `rotate about up` 相关逻辑。

### RotateAboutAnArbitraryVector
`public void RotateAboutAnArbitraryVector(in Vec3 v, float a)`

**用途 / Purpose:** 处理 `rotate about an arbitrary vector` 相关逻辑。

### IsOrthonormal
`public bool IsOrthonormal()`

**用途 / Purpose:** 处理 `is orthonormal` 相关逻辑。

### IsLeftHanded
`public bool IsLeftHanded()`

**用途 / Purpose:** 处理 `is left handed` 相关逻辑。

### NearlyEquals
`public bool NearlyEquals(in Mat3 rhs, float epsilon = 1E-05f)`

**用途 / Purpose:** 处理 `nearly equals` 相关逻辑。

### TransformToParent
`public Vec3 TransformToParent(in Vec3 v)`

**用途 / Purpose:** 处理 `transform to parent` 相关逻辑。

### TransformToLocal
`public Vec3 TransformToLocal(in Vec3 v)`

**用途 / Purpose:** 处理 `transform to local` 相关逻辑。

### TransformToParent
`public Mat3 TransformToParent(in Mat3 m)`

**用途 / Purpose:** 处理 `transform to parent` 相关逻辑。

### TransformToLocal
`public Mat3 TransformToLocal(in Mat3 m)`

**用途 / Purpose:** 处理 `transform to local` 相关逻辑。

### Orthonormalize
`public void Orthonormalize()`

**用途 / Purpose:** 处理 `orthonormalize` 相关逻辑。

### OrthonormalizeAccordingToForwardAndKeepUpAsZAxis
`public void OrthonormalizeAccordingToForwardAndKeepUpAsZAxis()`

**用途 / Purpose:** 处理 `orthonormalize according to forward and keep up as z axis` 相关逻辑。

### GetUnitRotation
`public Mat3 GetUnitRotation(float removedScale)`

**用途 / Purpose:** 获取 `unit rotation` 的当前值。

### MakeUnit
`public Vec3 MakeUnit()`

**用途 / Purpose:** 处理 `make unit` 相关逻辑。

### IsUnit
`public bool IsUnit()`

**用途 / Purpose:** 处理 `is unit` 相关逻辑。

### ApplyScaleLocal
`public void ApplyScaleLocal(float scaleAmount)`

**用途 / Purpose:** 将 `scale local` 应用到当前对象。

### ApplyScaleLocal
`public void ApplyScaleLocal(in Vec3 scaleAmountXYZ)`

**用途 / Purpose:** 将 `scale local` 应用到当前对象。

### HasScale
`public bool HasScale()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `scale`。

### GetScaleVector
`public Vec3 GetScaleVector()`

**用途 / Purpose:** 获取 `scale vector` 的当前值。

### GetScaleVectorSquared
`public Vec3 GetScaleVectorSquared()`

**用途 / Purpose:** 获取 `scale vector squared` 的当前值。

### ToQuaternion
`public void ToQuaternion(out Quaternion quat)`

**用途 / Purpose:** 处理 `to quaternion` 相关逻辑。

### ToQuaternion
`public Quaternion ToQuaternion()`

**用途 / Purpose:** 处理 `to quaternion` 相关逻辑。

### Lerp
`public static Mat3 Lerp(in Mat3 m1, in Mat3 m2, float alpha)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

### LerpNonOrthogonal
`public static Mat3 LerpNonOrthogonal(in Mat3 m1, in Mat3 m2, float alpha)`

**用途 / Purpose:** 处理 `lerp non orthogonal` 相关逻辑。

### CreateMat3WithForward
`public static Mat3 CreateMat3WithForward(in Vec3 direction)`

**用途 / Purpose:** 创建一个 `mat3 with forward` 实例或对象。

### CreateDiagonalMat3
`public static Mat3 CreateDiagonalMat3(in Vec3 diagonalData)`

**用途 / Purpose:** 创建一个 `diagonal mat3` 实例或对象。

### GetEulerAngles
`public Vec3 GetEulerAngles()`

**用途 / Purpose:** 获取 `euler angles` 的当前值。

### Transpose
`public Mat3 Transpose()`

**用途 / Purpose:** 处理 `transpose` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### IsIdentity
`public bool IsIdentity()`

**用途 / Purpose:** 处理 `is identity` 相关逻辑。

### IsZero
`public bool IsZero()`

**用途 / Purpose:** 处理 `is zero` 相关逻辑。

### IsUniformScaled
`public bool IsUniformScaled()`

**用途 / Purpose:** 处理 `is uniform scaled` 相关逻辑。

### ApplyEulerAngles
`public void ApplyEulerAngles(in Vec3 eulerAngles)`

**用途 / Purpose:** 将 `euler angles` 应用到当前对象。

## 使用示例

```csharp
var value = new Mat3();
value.RotateAboutSide(0);
```

## 参见

- [完整类目录](../catalog)