---
title: "Mat3"
description: "Mat3 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 调用 RotateAboutSide 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
mat3.RotateAboutSide(0);
```

### RotateAboutForward
`public void RotateAboutForward(float a)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RotateAboutForward 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
mat3.RotateAboutForward(0);
```

### RotateAboutUp
`public void RotateAboutUp(float a)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RotateAboutUp 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
mat3.RotateAboutUp(0);
```

### RotateAboutAnArbitraryVector
`public void RotateAboutAnArbitraryVector(in Vec3 v, float a)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RotateAboutAnArbitraryVector 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
mat3.RotateAboutAnArbitraryVector(v, 0);
```

### IsOrthonormal
`public bool IsOrthonormal()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 orthonormal 状态或条件。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.IsOrthonormal();
```

### IsLeftHanded
`public bool IsLeftHanded()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 left handed 状态或条件。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.IsLeftHanded();
```

### NearlyEquals
`public bool NearlyEquals(in Mat3 rhs, float epsilon = 1E-05f)`

**用途 / Purpose:** **用途 / Purpose:** 调用 NearlyEquals 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.NearlyEquals(rhs, 0);
```

### TransformToParent
`public Vec3 TransformToParent(in Vec3 v)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToParent 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.TransformToParent(v);
```

### TransformToLocal
`public Vec3 TransformToLocal(in Vec3 v)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToLocal 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.TransformToLocal(v);
```

### TransformToParent
`public Mat3 TransformToParent(in Mat3 m)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToParent 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.TransformToParent(m);
```

### TransformToLocal
`public Mat3 TransformToLocal(in Mat3 m)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToLocal 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.TransformToLocal(m);
```

### Orthonormalize
`public void Orthonormalize()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Orthonormalize 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
mat3.Orthonormalize();
```

### OrthonormalizeAccordingToForwardAndKeepUpAsZAxis
`public void OrthonormalizeAccordingToForwardAndKeepUpAsZAxis()`

**用途 / Purpose:** **用途 / Purpose:** 调用 OrthonormalizeAccordingToForwardAndKeepUpAsZAxis 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
mat3.OrthonormalizeAccordingToForwardAndKeepUpAsZAxis();
```

### GetUnitRotation
`public Mat3 GetUnitRotation(float removedScale)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 unit rotation 的结果。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.GetUnitRotation(0);
```

### MakeUnit
`public Vec3 MakeUnit()`

**用途 / Purpose:** **用途 / Purpose:** 调用 MakeUnit 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.MakeUnit();
```

### IsUnit
`public bool IsUnit()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 unit 状态或条件。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.IsUnit();
```

### ApplyScaleLocal
`public void ApplyScaleLocal(float scaleAmount)`

**用途 / Purpose:** **用途 / Purpose:** 将 scale local 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
mat3.ApplyScaleLocal(0);
```

### ApplyScaleLocal
`public void ApplyScaleLocal(in Vec3 scaleAmountXYZ)`

**用途 / Purpose:** **用途 / Purpose:** 将 scale local 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
mat3.ApplyScaleLocal(scaleAmountXYZ);
```

### HasScale
`public bool HasScale()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 scale。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.HasScale();
```

### GetScaleVector
`public Vec3 GetScaleVector()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 scale vector 的结果。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.GetScaleVector();
```

### GetScaleVectorSquared
`public Vec3 GetScaleVectorSquared()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 scale vector squared 的结果。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.GetScaleVectorSquared();
```

### ToQuaternion
`public void ToQuaternion(out Quaternion quat)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ToQuaternion 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
mat3.ToQuaternion(quat);
```

### ToQuaternion
`public Quaternion ToQuaternion()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ToQuaternion 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.ToQuaternion();
```

### Lerp
`public static Mat3 Lerp(in Mat3 m1, in Mat3 m2, float alpha)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Lerp 对应的操作。

```csharp
// 静态调用，不需要实例
Mat3.Lerp(m1, m2, 0);
```

### LerpNonOrthogonal
`public static Mat3 LerpNonOrthogonal(in Mat3 m1, in Mat3 m2, float alpha)`

**用途 / Purpose:** **用途 / Purpose:** 调用 LerpNonOrthogonal 对应的操作。

```csharp
// 静态调用，不需要实例
Mat3.LerpNonOrthogonal(m1, m2, 0);
```

### CreateMat3WithForward
`public static Mat3 CreateMat3WithForward(in Vec3 direction)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 mat3 with forward 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Mat3.CreateMat3WithForward(direction);
```

### CreateDiagonalMat3
`public static Mat3 CreateDiagonalMat3(in Vec3 diagonalData)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 diagonal mat3 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Mat3.CreateDiagonalMat3(diagonalData);
```

### GetEulerAngles
`public Vec3 GetEulerAngles()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 euler angles 的结果。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.GetEulerAngles();
```

### Transpose
`public Mat3 Transpose()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Transpose 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.Transpose();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.ToString();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.GetHashCode();
```

### IsIdentity
`public bool IsIdentity()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 identity 状态或条件。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.IsIdentity();
```

### IsZero
`public bool IsZero()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 zero 状态或条件。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.IsZero();
```

### IsUniformScaled
`public bool IsUniformScaled()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 uniform scaled 状态或条件。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
var result = mat3.IsUniformScaled();
```

### ApplyEulerAngles
`public void ApplyEulerAngles(in Vec3 eulerAngles)`

**用途 / Purpose:** **用途 / Purpose:** 将 euler angles 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 Mat3 实例
Mat3 mat3 = ...;
mat3.ApplyEulerAngles(eulerAngles);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Mat3 mat3 = ...;
mat3.RotateAboutSide(0);
```

## 参见

- [本区域目录](../)