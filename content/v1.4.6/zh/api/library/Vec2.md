---
title: "Vec2"
description: "Vec2：TaleWorlds.Library 的 public 结构体；公开成员 63 个（方法 49、属性 6、字段 5）。源文件 TaleWorlds.Library/Vec2.cs。"
---
# Vec2

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Vec2`
**File:** `TaleWorlds.Library/Vec2.cs`

## 概述

Vec2 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Vec2.cs。它是一个 public 结构体，继承链为 Vec2。public/protected 成员共 63 个：49 方法、6 属性、5 字段、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Vec2 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 Vec2。成员构成以方法为主（方法 49/63，属性 6/63），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Vec2.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `X` | `public float X` | 属性 |
| `Y` | `public float Y` | 属性 |
| `Vec2` | `public Vec2(float a, float b)` | 构造函数 |
| `Vec2` | `public Vec2(Vec2 v)` | 构造函数 |
| `Vec2` | `public Vec2(Vector2 v)` | 构造函数 |
| `ToVec3` | `public Vec3 ToVec3(float z = 0f)` | 方法 |
| `Vector2` | `public static explicit operator Vector2(Vec2 vec2)` | 运算符 |
| `Vec2` | `public static implicit operator Vec2(Vector2 vec2)` | 运算符 |
| `Normalize` | `public float Normalize()` | 方法 |
| `Normalized` | `public Vec2 Normalized()` | 方法 |
| `ClampMagnitude` | `public void ClampMagnitude(float min, float max)` | 方法 |
| `GetWindingOrder` | `public static WindingOrder GetWindingOrder(Vec2 first, Vec2 second, Vec2 third)` | 方法 |
| `CCW` | `public static float CCW(Vec2 va, Vec2 vb)` | 方法 |
| `Length` | `public float Length` | 属性 |
| `LengthSquared` | `public float LengthSquared` | 属性 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `-` | `public static Vec2 operator -(Vec2 v)` | 运算符 |
| `+` | `public static Vec2 operator +(Vec2 v1, Vec2 v2)` | 运算符 |
| `-` | `public static Vec2 operator -(Vec2 v1, Vec2 v2)` | 运算符 |
| `*` | `public static Vec2 operator *(Vec2 v, float f)` | 运算符 |
| `*` | `public static Vec2 operator *(float f, Vec2 v)` | 运算符 |
| `/` | `public static Vec2 operator /(float f, Vec2 v)` | 运算符 |
| `/` | `public static Vec2 operator /(Vec2 v, float f)` | 运算符 |
| `IsUnit` | `public bool IsUnit()` | 方法 |
| `IsNonZero` | `public bool IsNonZero()` | 方法 |
| `NearlyEquals` | `public bool NearlyEquals(Vec2 v, float epsilon = 1E-05f)` | 方法 |
| `RotateCCW` | `public void RotateCCW(float angleInRadians)` | 方法 |
| `DotProduct` | `public float DotProduct(Vec2 v)` | 方法 |
| `DotProduct` | `public static float DotProduct(Vec2 va, Vec2 vb)` | 方法 |
| `ElementWiseProduct` | `public static Vec2 ElementWiseProduct(Vec2 va, Vec2 vb)` | 方法 |
| `RotationInRadians` | `public float RotationInRadians` | 属性 |
| `FromRotation` | `public static Vec2 FromRotation(float rotation)` | 方法 |
| `TransformToLocalUnitF` | `public Vec2 TransformToLocalUnitF(Vec2 a)` | 方法 |
| `TransformToParentUnitF` | `public Vec2 TransformToParentUnitF(Vec2 a)` | 方法 |
| `TransformToLocalUnitFLeftHanded` | `public Vec2 TransformToLocalUnitFLeftHanded(Vec2 a)` | 方法 |
| `TransformToParentUnitFLeftHanded` | `public Vec2 TransformToParentUnitFLeftHanded(Vec2 a)` | 方法 |
| `RightVec` | `public Vec2 RightVec()` | 方法 |
| `LeftVec` | `public Vec2 LeftVec()` | 方法 |
| `Max` | `public static Vec2 Max(Vec2 v1, Vec2 v2)` | 方法 |
| `Max` | `public static Vec2 Max(Vec2 v1, float f)` | 方法 |
| `Min` | `public static Vec2 Min(Vec2 v1, Vec2 v2)` | 方法 |
| `Min` | `public static Vec2 Min(Vec2 v1, float f)` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |
| `DistanceSquared` | `public float DistanceSquared(Vec2 v)` | 方法 |
| `Distance` | `public float Distance(Vec2 v)` | 方法 |
| `DistanceToLine` | `public static float DistanceToLine(Vec2 line1, Vec2 line2, Vec2 point)` | 方法 |
| `DistanceToLineSegmentSquared` | `public static float DistanceToLineSegmentSquared(Vec2 line1, Vec2 line2, Vec2 point)` | 方法 |
| `DistanceToLineSegment` | `public float DistanceToLineSegment(Vec2 v, Vec2 w, out Vec2 closestPointOnLineSegment)` | 方法 |
| `DistanceSquaredToLineSegment` | `public float DistanceSquaredToLineSegment(Vec2 v, Vec2 w, out Vec2 closestPointOnLineSegment)` | 方法 |
| `Abs` | `public static Vec2 Abs(Vec2 vec)` | 方法 |
| `Lerp` | `public static Vec2 Lerp(Vec2 v1, Vec2 v2, float alpha)` | 方法 |
| `Slerp` | `public static Vec2 Slerp(Vec2 start, Vec2 end, float percent)` | 方法 |
| `AngleBetween` | `public float AngleBetween(Vec2 vector2)` | 方法 |
| `IsValid` | `public bool IsValid` | 属性 |
| `Determinant` | `public static float Determinant(in Vec2 vec1, in Vec2 vec2)` | 方法 |
| `Side` | `public static readonly Vec2 Side` | 字段 |
| `Forward` | `public static readonly Vec2 Forward` | 字段 |
| `One` | `public static readonly Vec2 One` | 字段 |
| `Zero` | `public static readonly Vec2 Zero` | 字段 |
| `Invalid` | `public static readonly Vec2 Invalid` | 字段 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
