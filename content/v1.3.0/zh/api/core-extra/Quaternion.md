---
title: "Quaternion"
description: "Quaternion 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 Quaternion 实例
Quaternion quaternion = ...;
var result = quaternion.GetHashCode();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 Quaternion 实例
Quaternion quaternion = ...;
var result = quaternion.Equals(obj);
```

### Normalize
`public float Normalize()`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象规范化为标准形式或范围。

```csharp
// 先通过子系统 API 拿到 Quaternion 实例
Quaternion quaternion = ...;
var result = quaternion.Normalize();
```

### SafeNormalize
`public float SafeNormalize()`

**用途 / Purpose:** **用途 / Purpose:** 调用 SafeNormalize 对应的操作。

```csharp
// 先通过子系统 API 拿到 Quaternion 实例
Quaternion quaternion = ...;
var result = quaternion.SafeNormalize();
```

### NormalizeWeighted
`public float NormalizeWeighted()`

**用途 / Purpose:** **用途 / Purpose:** 将weighted规范化到标准形式或范围内。

```csharp
// 先通过子系统 API 拿到 Quaternion 实例
Quaternion quaternion = ...;
var result = quaternion.NormalizeWeighted();
```

### SetToRotationX
`public void SetToRotationX(float angle)`

**用途 / Purpose:** **用途 / Purpose:** 为 to rotation x 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Quaternion 实例
Quaternion quaternion = ...;
quaternion.SetToRotationX(0);
```

### SetToRotationY
`public void SetToRotationY(float angle)`

**用途 / Purpose:** **用途 / Purpose:** 为 to rotation y 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Quaternion 实例
Quaternion quaternion = ...;
quaternion.SetToRotationY(0);
```

### SetToRotationZ
`public void SetToRotationZ(float angle)`

**用途 / Purpose:** **用途 / Purpose:** 为 to rotation z 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Quaternion 实例
Quaternion quaternion = ...;
quaternion.SetToRotationZ(0);
```

### Flip
`public void Flip()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Flip 对应的操作。

```csharp
// 先通过子系统 API 拿到 Quaternion 实例
Quaternion quaternion = ...;
quaternion.Flip();
```

### TransformToParent
`public Quaternion TransformToParent(Quaternion q)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToParent 对应的操作。

```csharp
// 先通过子系统 API 拿到 Quaternion 实例
Quaternion quaternion = ...;
var result = quaternion.TransformToParent(q);
```

### TransformToLocal
`public Quaternion TransformToLocal(Quaternion q)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToLocal 对应的操作。

```csharp
// 先通过子系统 API 拿到 Quaternion 实例
Quaternion quaternion = ...;
var result = quaternion.TransformToLocal(q);
```

### TransformToLocalWithoutNormalize
`public Quaternion TransformToLocalWithoutNormalize(Quaternion q)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToLocalWithoutNormalize 对应的操作。

```csharp
// 先通过子系统 API 拿到 Quaternion 实例
Quaternion quaternion = ...;
var result = quaternion.TransformToLocalWithoutNormalize(q);
```

### Slerp
`public static Quaternion Slerp(Quaternion from, Quaternion to, float t)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Slerp 对应的操作。

```csharp
// 静态调用，不需要实例
Quaternion.Slerp(from, to, 0);
```

### Lerp
`public static Quaternion Lerp(Quaternion from, Quaternion to, float t)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Lerp 对应的操作。

```csharp
// 静态调用，不需要实例
Quaternion.Lerp(from, to, 0);
```

### Mat3FromQuaternion
`public static Mat3 Mat3FromQuaternion(Quaternion quat)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Mat3FromQuaternion 对应的操作。

```csharp
// 静态调用，不需要实例
Quaternion.Mat3FromQuaternion(quat);
```

### QuaternionFromEulerAngles
`public static Quaternion QuaternionFromEulerAngles(float yaw, float pitch, float roll)`

**用途 / Purpose:** **用途 / Purpose:** 调用 QuaternionFromEulerAngles 对应的操作。

```csharp
// 静态调用，不需要实例
Quaternion.QuaternionFromEulerAngles(0, 0, 0);
```

### QuaternionFromMat3
`public static Quaternion QuaternionFromMat3(Mat3 m)`

**用途 / Purpose:** **用途 / Purpose:** 调用 QuaternionFromMat3 对应的操作。

```csharp
// 静态调用，不需要实例
Quaternion.QuaternionFromMat3(m);
```

### AxisAngleFromQuaternion
`public static void AxisAngleFromQuaternion(out Vec3 axis, out float angle, Quaternion quat)`

**用途 / Purpose:** **用途 / Purpose:** 调用 AxisAngleFromQuaternion 对应的操作。

```csharp
// 静态调用，不需要实例
Quaternion.AxisAngleFromQuaternion(axis, angle, quat);
```

### QuaternionFromAxisAngle
`public static Quaternion QuaternionFromAxisAngle(Vec3 axis, float angle)`

**用途 / Purpose:** **用途 / Purpose:** 调用 QuaternionFromAxisAngle 对应的操作。

```csharp
// 静态调用，不需要实例
Quaternion.QuaternionFromAxisAngle(axis, 0);
```

### EulerAngleFromQuaternion
`public static Vec3 EulerAngleFromQuaternion(Quaternion quat)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EulerAngleFromQuaternion 对应的操作。

```csharp
// 静态调用，不需要实例
Quaternion.EulerAngleFromQuaternion(quat);
```

### FindShortestArcAsQuaternion
`public static Quaternion FindShortestArcAsQuaternion(Vec3 v0, Vec3 v1)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的shortest arc as quaternion。

```csharp
// 静态调用，不需要实例
Quaternion.FindShortestArcAsQuaternion(v0, v1);
```

### Dotp4
`public float Dotp4(Quaternion q2)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Dotp4 对应的操作。

```csharp
// 先通过子系统 API 拿到 Quaternion 实例
Quaternion quaternion = ...;
var result = quaternion.Dotp4(q2);
```

### ToMat3
`public Mat3 ToMat3()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ToMat3 对应的操作。

```csharp
// 先通过子系统 API 拿到 Quaternion 实例
Quaternion quaternion = ...;
var result = quaternion.ToMat3();
```

### InverseDirection
`public bool InverseDirection(Quaternion q2)`

**用途 / Purpose:** **用途 / Purpose:** 调用 InverseDirection 对应的操作。

```csharp
// 先通过子系统 API 拿到 Quaternion 实例
Quaternion quaternion = ...;
var result = quaternion.InverseDirection(q2);
```

### Conjugate
`public Quaternion Conjugate()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Conjugate 对应的操作。

```csharp
// 先通过子系统 API 拿到 Quaternion 实例
Quaternion quaternion = ...;
var result = quaternion.Conjugate();
```

### Inverse
`public Quaternion Inverse()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Inverse 对应的操作。

```csharp
// 先通过子系统 API 拿到 Quaternion 实例
Quaternion quaternion = ...;
var result = quaternion.Inverse();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Quaternion quaternion = ...;
quaternion.GetHashCode();
```

## 参见

- [本区域目录](../)