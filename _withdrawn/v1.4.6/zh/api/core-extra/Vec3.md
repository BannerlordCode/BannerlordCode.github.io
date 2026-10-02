---
title: "Vec3"
description: "Vec3：TaleWorlds.Library 的 public 结构体；公开成员 69 个（方法 44、属性 14、字段 6）。canonical 桶 core-extra。源文件 TaleWorlds.Library/Vec3.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Vec3

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Vec3`
**File:** `TaleWorlds.Library/Vec3.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

Vec3 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Vec3.cs。它是一个 public 结构体，继承链为 Vec3。public/protected 成员共 69 个：44 方法、14 属性、6 字段、4 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Vec3 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 Vec3。成员构成以方法为主（方法 44/69，属性 14/69），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Vec3.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `X` | `public float X` | 属性 |
| `Y` | `public float Y` | 属性 |
| `Z` | `public float Z` | 属性 |
| `Vec3` | `public Vec3(float x = 0f, float y = 0f, float z = 0f, float w = -1f)` | 构造函数 |
| `Vec3` | `public Vec3(Vec3 c, float w = -1f)` | 构造函数 |
| `Vec3` | `public Vec3(Vec2 xy, float z = 0f, float w = -1f)` | 构造函数 |
| `Vec3` | `public Vec3(Vector3 vector3)` | 构造函数 |
| `Abs` | `public static Vec3 Abs(Vec3 vec)` | 方法 |
| `Vector3` | `public static explicit operator Vector3(Vec3 vec3)` | 运算符 |
| `this[...]` | `public float this[int i]` | 索引器 |
| `DotProduct` | `public static float DotProduct(Vec3 v1, Vec3 v2)` | 方法 |
| `Lerp` | `public static Vec3 Lerp(Vec3 v1, Vec3 v2, float alpha)` | 方法 |
| `Slerp` | `public static Vec3 Slerp(Vec3 start, Vec3 end, float percent)` | 方法 |
| `Vec3Max` | `public static Vec3 Vec3Max(Vec3 v1, Vec3 v2)` | 方法 |
| `Vec3Min` | `public static Vec3 Vec3Min(Vec3 v1, Vec3 v2)` | 方法 |
| `CrossProduct` | `public static Vec3 CrossProduct(Vec3 va, Vec3 vb)` | 方法 |
| `ElementWiseProduct` | `public static Vec3 ElementWiseProduct(Vec3 va, Vec3 vb)` | 方法 |
| `ElementWiseDivision` | `public static Vec3 ElementWiseDivision(Vec3 va, Vec3 vb)` | 方法 |
| `-` | `public static Vec3 operator -(Vec3 v)` | 运算符 |
| `+` | `public static Vec3 operator +(Vec3 v1, Vec3 v2)` | 运算符 |
| `-` | `public static Vec3 operator -(Vec3 v1, Vec3 v2)` | 运算符 |
| `*` | `public static Vec3 operator *(Vec3 v, float f)` | 运算符 |
| `*` | `public static Vec3 operator *(float f, Vec3 v)` | 运算符 |
| `*` | `public static Vec3 operator *(Vec3 v, MatrixFrame frame)` | 运算符 |
| `/` | `public static Vec3 operator /(Vec3 v, float f)` | 运算符 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `Length` | `public float Length` | 属性 |
| `LengthSquared` | `public float LengthSquared` | 属性 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `IsValid` | `public bool IsValid` | 属性 |
| `IsValidXYZW` | `public bool IsValidXYZW` | 属性 |
| `IsUnit` | `public bool IsUnit` | 属性 |
| `IsNonZero` | `public bool IsNonZero` | 属性 |
| `NormalizedCopy` | `public Vec3 NormalizedCopy()` | 方法 |
| `Normalize` | `public float Normalize()` | 方法 |
| `ClampMagnitude` | `public void ClampMagnitude(float min, float max)` | 方法 |
| `ClampedCopy` | `public Vec3 ClampedCopy(float min, float max)` | 方法 |
| `ClampedCopy` | `public Vec3 ClampedCopy(float min, float max, out bool valueClamped)` | 方法 |
| `NormalizeWithoutChangingZ` | `public void NormalizeWithoutChangingZ()` | 方法 |
| `CrossProductWithUp` | `public Vec3 CrossProductWithUp()` | 方法 |
| `CrossProductWithUpAsLeftParameter` | `public Vec3 CrossProductWithUpAsLeftParameter()` | 方法 |
| `NearlyEquals` | `public bool NearlyEquals(in Vec3 v, float epsilon = 1E-05f)` | 方法 |
| `RotateAboutX` | `public void RotateAboutX(float a)` | 方法 |
| `RotateAboutY` | `public void RotateAboutY(float a)` | 方法 |
| `RotateAboutZ` | `public void RotateAboutZ(float a)` | 方法 |
| `RotateAboutAnArbitraryVector` | `public Vec3 RotateAboutAnArbitraryVector(Vec3 vec, float a)` | 方法 |
| `Reflect` | `public Vec3 Reflect(Vec3 normal)` | 方法 |
| `ProjectOnUnitVector` | `public Vec3 ProjectOnUnitVector(Vec3 ov)` | 方法 |
| `DistanceSquared` | `public float DistanceSquared(Vec3 v)` | 方法 |
| `Distance` | `public float Distance(Vec3 v)` | 方法 |
| `RotateVectorToXYPlane` | `public Vec3 RotateVectorToXYPlane()` | 方法 |
| `AngleBetweenTwoVectors` | `public static float AngleBetweenTwoVectors(Vec3 v1, Vec3 v2)` | 方法 |
| `AsVec2` | `public Vec2 AsVec2` | 属性 |
| `ToString` | `public override string ToString()` | 方法 |
| `ToString` | `public string ToString(string format)` | 方法 |
| `ToARGB` | `public uint ToARGB` | 属性 |
| `RotationZ` | `public float RotationZ` | 属性 |
| `RotationX` | `public float RotationX` | 属性 |
| `Parse` | `public static Vec3 Parse(string input)` | 方法 |
| `Side` | `public static readonly Vec3 Side` | 字段 |
| `Forward` | `public static readonly Vec3 Forward` | 字段 |
| `Up` | `public static readonly Vec3 Up` | 字段 |
| `One` | `public static readonly Vec3 One` | 字段 |
| `Zero` | `public static readonly Vec3 Zero` | 字段 |
| `Invalid` | `public static readonly Vec3 Invalid` | 字段 |
| `StackArray8Vec3` | `public struct StackArray8Vec3` | 属性 |
| `StackArray8Vec3` | `public struct StackArray8Vec3` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
