---
title: "MatrixFrame"
description: "MatrixFrame：TaleWorlds.Library 的 public 结构体；公开成员 43 个（方法 36、属性 4、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/MatrixFrame.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MatrixFrame

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct MatrixFrame`
**File:** `TaleWorlds.Library/MatrixFrame.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

MatrixFrame 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/MatrixFrame.cs。它是一个 public 结构体，继承链为 MatrixFrame。public/protected 成员共 43 个：36 方法、4 属性、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MatrixFrame 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 MatrixFrame。成员构成以方法为主（方法 36/43，属性 4/43），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/MatrixFrame.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MatrixFrame` | `public MatrixFrame(in Mat3 rot, in Vec3 o)` | 构造函数 |
| `MatrixFrame` | `public MatrixFrame(float _11, float _12, float _13, float _21, float _22, float _23, float _31, float _32, float _33, float _41, float _42, float _43)` | 构造函数 |
| `MatrixFrame` | `public MatrixFrame(float _11, float _12, float _13, float _14, float _21, float _22, float _23, float _24, float _31, float _32, float _33, float _34, float _41, float _42, float _43, float _44)` | 构造函数 |
| `TransformToParent` | `public Vec3 TransformToParent(in Vec3 v)` | 方法 |
| `TransformToParentDouble` | `public Vec3 TransformToParentDouble(in Vec3 v)` | 方法 |
| `TransformToParent` | `public Vec2 TransformToParent(in Vec2 v)` | 方法 |
| `TransformToLocal` | `public Vec3 TransformToLocal(in Vec3 v)` | 方法 |
| `TransformToLocalNonUnit` | `public Vec3 TransformToLocalNonUnit(in Vec3 v)` | 方法 |
| `NearlyEquals` | `public bool NearlyEquals(MatrixFrame rhs, float epsilon = 1E-05f)` | 方法 |
| `TransformToLocalNonOrthogonal` | `public Vec3 TransformToLocalNonOrthogonal(in Vec3 v)` | 方法 |
| `TransformToLocalNonOrthogonal` | `public MatrixFrame TransformToLocalNonOrthogonal(in MatrixFrame frame)` | 方法 |
| `Lerp` | `public static MatrixFrame Lerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)` | 方法 |
| `LerpNonOrthogonal` | `public static MatrixFrame LerpNonOrthogonal(in MatrixFrame m1, in MatrixFrame m2, float alpha)` | 方法 |
| `Slerp` | `public static MatrixFrame Slerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)` | 方法 |
| `TransformToParent` | `public MatrixFrame TransformToParent(in MatrixFrame m)` | 方法 |
| `TransformToLocal` | `public MatrixFrame TransformToLocal(in MatrixFrame m)` | 方法 |
| `TransformToParentWithW` | `public Vec3 TransformToParentWithW(Vec3 _s)` | 方法 |
| `GetUnitRotFrame` | `public MatrixFrame GetUnitRotFrame(float removedScale)` | 方法 |
| `Identity` | `public static MatrixFrame Identity` | 属性 |
| `Zero` | `public static MatrixFrame Zero` | 属性 |
| `InverseFast` | `public MatrixFrame InverseFast()` | 方法 |
| `Inverse` | `public MatrixFrame Inverse()` | 方法 |
| `Determinant4X4` | `public float Determinant4X4()` | 方法 |
| `Rotate` | `public void Rotate(float radian, in Vec3 axis)` | 方法 |
| `*` | `public static MatrixFrame operator *(in MatrixFrame m1, in MatrixFrame m2)` | 运算符 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `ToString` | `public override string ToString()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `Strafe` | `public MatrixFrame Strafe(float a)` | 方法 |
| `Advance` | `public MatrixFrame Advance(float a)` | 方法 |
| `Elevate` | `public MatrixFrame Elevate(float a)` | 方法 |
| `Scale` | `public void Scale(in Vec3 scalingVector)` | 方法 |
| `GetScale` | `public Vec3 GetScale()` | 方法 |
| `IsIdentity` | `public bool IsIdentity` | 属性 |
| `IsZero` | `public bool IsZero` | 属性 |
| `this[...]` | `public Vec3 this[int i]` | 索引器 |
| `this[...]` | `public float this[int i, int j]` | 索引器 |
| `CreateLookAt` | `public static MatrixFrame CreateLookAt(in Vec3 position, in Vec3 target, in Vec3 upVector)` | 方法 |
| `CenterFrameOfTwoPoints` | `public static MatrixFrame CenterFrameOfTwoPoints(in Vec3 p1, in Vec3 p2, Vec3 upVector)` | 方法 |
| `Fill` | `public void Fill()` | 方法 |
| `Filled` | `public MatrixFrame Filled()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
