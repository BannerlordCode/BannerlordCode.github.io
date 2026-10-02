---
title: "Mat3"
description: "Mat3：TaleWorlds.Library 的 public 结构体；公开成员 47 个（方法 44、属性 1、字段 0）。源文件 TaleWorlds.Library/Mat3.cs。"
---
# Mat3

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Mat3`
**File:** `TaleWorlds.Library/Mat3.cs`

## 概述

Mat3 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Mat3.cs。它是一个 public 结构体，继承链为 Mat3。public/protected 成员共 47 个：44 方法、1 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Mat3 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 Mat3。成员构成以方法为主（方法 44/47，属性 1/47），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Mat3.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Mat3` | `public Mat3(in Vec3 s, in Vec3 f, in Vec3 u)` | 构造函数 |
| `Mat3` | `public Mat3(float sx, float sy, float sz, float fx, float fy, float fz, float ux, float uy, float uz)` | 构造函数 |
| `this[...]` | `public Vec3 this[int i]` | 索引器 |
| `RotateAboutSide` | `public void RotateAboutSide(float a)` | 方法 |
| `RotateAboutForward` | `public void RotateAboutForward(float a)` | 方法 |
| `RotateAboutUp` | `public void RotateAboutUp(float a)` | 方法 |
| `RotateAboutAnArbitraryVector` | `public void RotateAboutAnArbitraryVector(in Vec3 v, float a)` | 方法 |
| `IsOrthonormal` | `public bool IsOrthonormal()` | 方法 |
| `IsLeftHanded` | `public bool IsLeftHanded()` | 方法 |
| `NearlyEquals` | `public bool NearlyEquals(in Mat3 rhs, float epsilon = 1E-05f)` | 方法 |
| `TransformToParent` | `public Vec3 TransformToParent(in Vec3 v)` | 方法 |
| `TransformToParent` | `public Vec2 TransformToParent(in Vec2 v)` | 方法 |
| `TransformToLocal` | `public Vec3 TransformToLocal(in Vec3 v)` | 方法 |
| `TransformToLocal` | `public Vec2 TransformToLocal(in Vec2 v)` | 方法 |
| `TransformToParent` | `public Mat3 TransformToParent(in Mat3 m)` | 方法 |
| `TransformToLocal` | `public Mat3 TransformToLocal(in Mat3 m)` | 方法 |
| `Orthonormalize` | `public void Orthonormalize()` | 方法 |
| `OrthonormalizeAccordingToForwardAndKeepUpAsZAxis` | `public void OrthonormalizeAccordingToForwardAndKeepUpAsZAxis()` | 方法 |
| `GetUnitRotation` | `public Mat3 GetUnitRotation(float removedScale)` | 方法 |
| `MakeUnit` | `public Vec3 MakeUnit()` | 方法 |
| `IsUnit` | `public bool IsUnit()` | 方法 |
| `ApplyScaleLocal` | `public void ApplyScaleLocal(float scaleAmount)` | 方法 |
| `ApplyScaleLocal` | `public void ApplyScaleLocal(in Vec3 scaleAmountXYZ)` | 方法 |
| `HasScale` | `public bool HasScale()` | 方法 |
| `GetScaleVector` | `public Vec3 GetScaleVector()` | 方法 |
| `GetScaleVectorSquared` | `public Vec3 GetScaleVectorSquared()` | 方法 |
| `ToQuaternion` | `public void ToQuaternion(out Quaternion quat)` | 方法 |
| `ToQuaternion` | `public Quaternion ToQuaternion()` | 方法 |
| `Lerp` | `public static Mat3 Lerp(in Mat3 m1, in Mat3 m2, float alpha)` | 方法 |
| `LerpNonOrthogonal` | `public static Mat3 LerpNonOrthogonal(in Mat3 m1, in Mat3 m2, float alpha)` | 方法 |
| `Slerp` | `public static Mat3 Slerp(in Mat3 m1, in Mat3 m2, float alpha)` | 方法 |
| `SlerpFPSIndependent` | `public static Mat3 SlerpFPSIndependent(in Mat3 m1, in Mat3 m2, float alpha)` | 方法 |
| `CreateMat3WithForward` | `public static Mat3 CreateMat3WithForward(in Vec3 direction)` | 方法 |
| `CreateDiagonalMat3` | `public static Mat3 CreateDiagonalMat3(in Vec3 diagonalData)` | 方法 |
| `GetEulerAngles` | `public Vec3 GetEulerAngles()` | 方法 |
| `Transpose` | `public Mat3 Transpose()` | 方法 |
| `Identity` | `public static Mat3 Identity` | 属性 |
| `*` | `public static Mat3 operator *(in Mat3 v, float a)` | 运算符 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `ToString` | `public override string ToString()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `IsIdentity` | `public bool IsIdentity()` | 方法 |
| `IsZero` | `public bool IsZero()` | 方法 |
| `IsUniformScaled` | `public bool IsUniformScaled()` | 方法 |
| `ApplyEulerAngles` | `public void ApplyEulerAngles(in Vec3 eulerAngles)` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
