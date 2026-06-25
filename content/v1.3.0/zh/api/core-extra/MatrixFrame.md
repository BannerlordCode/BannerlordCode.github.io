---
title: "MatrixFrame"
description: "MatrixFrame 的自动生成类参考。"
---
# MatrixFrame

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct MatrixFrame`
**Base:** 无
**File:** `TaleWorlds.Library/MatrixFrame.cs`

## 概述

`MatrixFrame` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Identity` | `public static MatrixFrame Identity { get; }` |
| `Zero` | `public static MatrixFrame Zero { get; }` |
| `IsIdentity` | `public bool IsIdentity { get; }` |
| `IsZero` | `public bool IsZero { get; }` |
| `this` | `public Vec3 this { get; }` |
| `this` | `public float this { get; }` |

## 主要方法

### TransformToParent
`public Vec3 TransformToParent(in Vec3 v)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToParent 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToParent(v);
```

### TransformToParent
`public Vec2 TransformToParent(in Vec2 v)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToParent 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToParent(v);
```

### TransformToLocal
`public Vec3 TransformToLocal(in Vec3 v)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToLocal 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToLocal(v);
```

### TransformToLocalNonUnit
`public Vec3 TransformToLocalNonUnit(in Vec3 v)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToLocalNonUnit 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToLocalNonUnit(v);
```

### NearlyEquals
`public bool NearlyEquals(MatrixFrame rhs, float epsilon = 1E-05f)`

**用途 / Purpose:** **用途 / Purpose:** 调用 NearlyEquals 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.NearlyEquals(rhs, 0);
```

### TransformToLocalNonOrthogonal
`public Vec3 TransformToLocalNonOrthogonal(in Vec3 v)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToLocalNonOrthogonal 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToLocalNonOrthogonal(v);
```

### TransformToLocalNonOrthogonal
`public MatrixFrame TransformToLocalNonOrthogonal(in MatrixFrame frame)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToLocalNonOrthogonal 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToLocalNonOrthogonal(frame);
```

### Lerp
`public static MatrixFrame Lerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Lerp 对应的操作。

```csharp
// 静态调用，不需要实例
MatrixFrame.Lerp(m1, m2, 0);
```

### LerpNonOrthogonal
`public static MatrixFrame LerpNonOrthogonal(in MatrixFrame m1, in MatrixFrame m2, float alpha)`

**用途 / Purpose:** **用途 / Purpose:** 调用 LerpNonOrthogonal 对应的操作。

```csharp
// 静态调用，不需要实例
MatrixFrame.LerpNonOrthogonal(m1, m2, 0);
```

### Slerp
`public static MatrixFrame Slerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Slerp 对应的操作。

```csharp
// 静态调用，不需要实例
MatrixFrame.Slerp(m1, m2, 0);
```

### TransformToParent
`public MatrixFrame TransformToParent(in MatrixFrame m)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToParent 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToParent(m);
```

### TransformToLocal
`public MatrixFrame TransformToLocal(in MatrixFrame m)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToLocal 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToLocal(m);
```

### TransformToParentWithW
`public Vec3 TransformToParentWithW(Vec3 _s)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransformToParentWithW 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToParentWithW(_s);
```

### GetUnitRotFrame
`public MatrixFrame GetUnitRotFrame(float removedScale)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 unit rot frame 的结果。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.GetUnitRotFrame(0);
```

### InverseFast
`public MatrixFrame InverseFast()`

**用途 / Purpose:** **用途 / Purpose:** 调用 InverseFast 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.InverseFast();
```

### Inverse
`public MatrixFrame Inverse()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Inverse 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.Inverse();
```

### Determinant4X4
`public float Determinant4X4()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Determinant4X4 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.Determinant4X4();
```

### Rotate
`public void Rotate(float radian, in Vec3 axis)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Rotate 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
matrixFrame.Rotate(0, axis);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.ToString();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.GetHashCode();
```

### Strafe
`public MatrixFrame Strafe(float a)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Strafe 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.Strafe(0);
```

### Advance
`public MatrixFrame Advance(float a)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Advance 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.Advance(0);
```

### Elevate
`public MatrixFrame Elevate(float a)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Elevate 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.Elevate(0);
```

### Scale
`public void Scale(in Vec3 scalingVector)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Scale 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
matrixFrame.Scale(scalingVector);
```

### GetScale
`public Vec3 GetScale()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 scale 的结果。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
var result = matrixFrame.GetScale();
```

### CreateLookAt
`public static MatrixFrame CreateLookAt(in Vec3 position, in Vec3 target, in Vec3 upVector)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 look at 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MatrixFrame.CreateLookAt(position, target, upVector);
```

### CenterFrameOfTwoPoints
`public static MatrixFrame CenterFrameOfTwoPoints(in Vec3 p1, in Vec3 p2, Vec3 upVector)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CenterFrameOfTwoPoints 对应的操作。

```csharp
// 静态调用，不需要实例
MatrixFrame.CenterFrameOfTwoPoints(p1, p2, upVector);
```

### Fill
`public void Fill()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Fill 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatrixFrame 实例
MatrixFrame matrixFrame = ...;
matrixFrame.Fill();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MatrixFrame matrixFrame = ...;
matrixFrame.TransformToParent(v);
```

## 参见

- [本区域目录](../)