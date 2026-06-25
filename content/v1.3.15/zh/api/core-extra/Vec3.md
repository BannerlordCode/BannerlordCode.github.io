---
title: "Vec3"
description: "Vec3 的自动生成类参考。"
---
# Vec3

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Vec3`
**Base:** 无
**File:** `TaleWorlds.Library/Vec3.cs`

## 概述

`Vec3` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

**用途 / Purpose:** 处理与 「abs」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Vec3.Abs(vec);
```

### Vector3
`public static explicit operator Vector3(Vec3 vec3)`

**用途 / Purpose:** 处理与 「vector3」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Vec3.Vector3(vec3);
```

### DotProduct
`public static float DotProduct(Vec3 v1, Vec3 v2)`

**用途 / Purpose:** 处理与 「dot product」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Vec3.DotProduct(v1, v2);
```

### Lerp
`public static Vec3 Lerp(Vec3 v1, Vec3 v2, float alpha)`

**用途 / Purpose:** 处理与 「lerp」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Vec3.Lerp(v1, v2, 0);
```

### Slerp
`public static Vec3 Slerp(Vec3 start, Vec3 end, float percent)`

**用途 / Purpose:** 处理与 「slerp」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Vec3.Slerp(start, end, 0);
```

### Vec3Max
`public static Vec3 Vec3Max(Vec3 v1, Vec3 v2)`

**用途 / Purpose:** 处理与 「vec3max」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Vec3.Vec3Max(v1, v2);
```

### Vec3Min
`public static Vec3 Vec3Min(Vec3 v1, Vec3 v2)`

**用途 / Purpose:** 处理与 「vec3min」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Vec3.Vec3Min(v1, v2);
```

### CrossProduct
`public static Vec3 CrossProduct(Vec3 va, Vec3 vb)`

**用途 / Purpose:** 处理与 「cross product」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Vec3.CrossProduct(va, vb);
```

### ElementWiseProduct
`public static Vec3 ElementWiseProduct(Vec3 va, Vec3 vb)`

**用途 / Purpose:** 处理与 「element wise product」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Vec3.ElementWiseProduct(va, vb);
```

### ElementWiseDivision
`public static Vec3 ElementWiseDivision(Vec3 va, Vec3 vb)`

**用途 / Purpose:** 处理与 「element wise division」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Vec3.ElementWiseDivision(va, vb);
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
var result = vec3.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
var result = vec3.GetHashCode();
```

### NormalizedCopy
`public Vec3 NormalizedCopy()`

**用途 / Purpose:** 将「d copy」规范化到标准形式或范围内。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
var result = vec3.NormalizedCopy();
```

### Normalize
`public float Normalize()`

**用途 / Purpose:** 将当前对象规范化为标准形式或范围。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
var result = vec3.Normalize();
```

### ClampMagnitude
`public void ClampMagnitude(float min, float max)`

**用途 / Purpose:** 处理与 「clamp magnitude」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
vec3.ClampMagnitude(0, 0);
```

### ClampedCopy
`public Vec3 ClampedCopy(float min, float max)`

**用途 / Purpose:** 处理与 「clamped copy」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
var result = vec3.ClampedCopy(0, 0);
```

### ClampedCopy
`public Vec3 ClampedCopy(float min, float max, out bool valueClamped)`

**用途 / Purpose:** 处理与 「clamped copy」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
var result = vec3.ClampedCopy(0, 0, valueClamped);
```

### NormalizeWithoutChangingZ
`public void NormalizeWithoutChangingZ()`

**用途 / Purpose:** 将「without changing z」规范化到标准形式或范围内。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
vec3.NormalizeWithoutChangingZ();
```

### CrossProductWithUp
`public Vec3 CrossProductWithUp()`

**用途 / Purpose:** 处理与 「cross product with up」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
var result = vec3.CrossProductWithUp();
```

### CrossProductWithUpAsLeftParameter
`public Vec3 CrossProductWithUpAsLeftParameter()`

**用途 / Purpose:** 处理与 「cross product with up as left parameter」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
var result = vec3.CrossProductWithUpAsLeftParameter();
```

### NearlyEquals
`public bool NearlyEquals(in Vec3 v, float epsilon = 1E-05f)`

**用途 / Purpose:** 处理与 「nearly equals」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
var result = vec3.NearlyEquals(v, 0);
```

### RotateAboutX
`public void RotateAboutX(float a)`

**用途 / Purpose:** 处理与 「rotate about x」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
vec3.RotateAboutX(0);
```

### RotateAboutY
`public void RotateAboutY(float a)`

**用途 / Purpose:** 处理与 「rotate about y」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
vec3.RotateAboutY(0);
```

### RotateAboutZ
`public void RotateAboutZ(float a)`

**用途 / Purpose:** 处理与 「rotate about z」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
vec3.RotateAboutZ(0);
```

### RotateAboutAnArbitraryVector
`public Vec3 RotateAboutAnArbitraryVector(Vec3 vec, float a)`

**用途 / Purpose:** 处理与 「rotate about an arbitrary vector」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
var result = vec3.RotateAboutAnArbitraryVector(vec, 0);
```

### Reflect
`public Vec3 Reflect(Vec3 normal)`

**用途 / Purpose:** 处理与 「reflect」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
var result = vec3.Reflect(normal);
```

### ProjectOnUnitVector
`public Vec3 ProjectOnUnitVector(Vec3 ov)`

**用途 / Purpose:** 处理与 「project on unit vector」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
var result = vec3.ProjectOnUnitVector(ov);
```

### DistanceSquared
`public float DistanceSquared(Vec3 v)`

**用途 / Purpose:** 处理与 「distance squared」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
var result = vec3.DistanceSquared(v);
```

### Distance
`public float Distance(Vec3 v)`

**用途 / Purpose:** 处理与 「distance」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
var result = vec3.Distance(v);
```

### RotateVectorToXYPlane
`public Vec3 RotateVectorToXYPlane()`

**用途 / Purpose:** 处理与 「rotate vector to xy plane」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
var result = vec3.RotateVectorToXYPlane();
```

### AngleBetweenTwoVectors
`public static float AngleBetweenTwoVectors(Vec3 v1, Vec3 v2)`

**用途 / Purpose:** 处理与 「angle between two vectors」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Vec3.AngleBetweenTwoVectors(v1, v2);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
var result = vec3.ToString();
```

### ToString
`public string ToString(string format)`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Vec3 实例
Vec3 vec3 = ...;
var result = vec3.ToString("example");
```

### Parse
`public static Vec3 Parse(string input)`

**用途 / Purpose:** 将外部输入解析为当前系统可识别的「parse」。

```csharp
// 静态调用，不需要实例
Vec3.Parse("example");
```

## 使用示例

```csharp
Vec3.Abs(vec);
```

## 参见

- [本区域目录](../)