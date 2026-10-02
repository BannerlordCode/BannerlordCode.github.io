---
title: "Quaternion"
description: "Quaternion：TaleWorlds.Library 的 public 结构体；公开成员 39 个（方法 35、属性 3、字段 0）。源文件 TaleWorlds.Library/Quaternion.cs。"
---
# Quaternion

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Quaternion`
**File:** `TaleWorlds.Library/Quaternion.cs`

## 概述

Quaternion 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Quaternion.cs。它是一个 public 结构体，继承链为 Quaternion。public/protected 成员共 39 个：35 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Quaternion 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 Quaternion。成员构成以方法为主（方法 35/39，属性 3/39），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Quaternion.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Quaternion` | `public Quaternion(float x, float y, float z, float w)` | 构造函数 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `+` | `public static Quaternion operator +(Quaternion a, Quaternion b)` | 运算符 |
| `-` | `public static Quaternion operator -(Quaternion a, Quaternion b)` | 运算符 |
| `*` | `public static Quaternion operator *(Quaternion a, float b)` | 运算符 |
| `*` | `public static Quaternion operator *(float s, Quaternion v)` | 运算符 |
| `*` | `public static Quaternion operator *(Quaternion a, Quaternion b)` | 运算符 |
| `/` | `public static Quaternion operator /(Quaternion v, float s)` | 运算符 |
| `this[...]` | `public float this[int i]` | 索引器 |
| `Normalize` | `public float Normalize()` | 方法 |
| `SafeNormalize` | `public float SafeNormalize()` | 方法 |
| `NormalizeWeighted` | `public float NormalizeWeighted()` | 方法 |
| `SetToRotationX` | `public void SetToRotationX(float angle)` | 方法 |
| `SetToRotationY` | `public void SetToRotationY(float angle)` | 方法 |
| `SetToRotationZ` | `public void SetToRotationZ(float angle)` | 方法 |
| `Flip` | `public void Flip()` | 方法 |
| `IsIdentity` | `public bool IsIdentity` | 属性 |
| `IsUnit` | `public bool IsUnit` | 属性 |
| `Identity` | `public static Quaternion Identity` | 属性 |
| `TransformToParent` | `public Quaternion TransformToParent(Quaternion q)` | 方法 |
| `TransformToLocal` | `public Quaternion TransformToLocal(Quaternion q)` | 方法 |
| `TransformToLocalWithoutNormalize` | `public Quaternion TransformToLocalWithoutNormalize(Quaternion q)` | 方法 |
| `Slerp` | `public static Quaternion Slerp(Quaternion from, Quaternion to, float t)` | 方法 |
| `Lerp` | `public static Quaternion Lerp(Quaternion from, Quaternion to, float t)` | 方法 |
| `Mat3FromQuaternion` | `public static Mat3 Mat3FromQuaternion(Quaternion quat)` | 方法 |
| `QuaternionFromEulerAngles` | `public static Quaternion QuaternionFromEulerAngles(float yaw, float pitch, float roll)` | 方法 |
| `QuaternionFromMat3` | `public static Quaternion QuaternionFromMat3(Mat3 m)` | 方法 |
| `AxisAngleFromQuaternion` | `public static void AxisAngleFromQuaternion(out Vec3 axis, out float angle, Quaternion quat)` | 方法 |
| `QuaternionFromAxisAngle` | `public static Quaternion QuaternionFromAxisAngle(Vec3 axis, float angle)` | 方法 |
| `EulerAngleFromQuaternion` | `public static Vec3 EulerAngleFromQuaternion(Quaternion quat)` | 方法 |
| `FindShortestArcAsQuaternion` | `public static Quaternion FindShortestArcAsQuaternion(Vec3 v0, Vec3 v1)` | 方法 |
| `Dotp4` | `public float Dotp4(Quaternion q2)` | 方法 |
| `ToMat3` | `public Mat3 ToMat3()` | 方法 |
| `InverseDirection` | `public bool InverseDirection(Quaternion q2)` | 方法 |
| `Conjugate` | `public Quaternion Conjugate()` | 方法 |
| `Inverse` | `public Quaternion Inverse()` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
