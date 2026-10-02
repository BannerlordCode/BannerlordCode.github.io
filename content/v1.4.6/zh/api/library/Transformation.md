---
title: "Transformation"
description: "Transformation：TaleWorlds.Library 的 public 结构体；公开成员 16 个（方法 13、属性 2、字段 0）。源文件 TaleWorlds.Library/Transformation.cs。"
---
# Transformation

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Transformation`
**File:** `TaleWorlds.Library/Transformation.cs`

## 概述

Transformation 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Transformation.cs。它是一个 public 结构体，继承链为 Transformation。public/protected 成员共 16 个：13 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Transformation 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 Transformation。成员构成以方法为主（方法 13/16，属性 2/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Transformation.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Identity` | `public static Transformation Identity` | 属性 |
| `Transformation` | `public Transformation(Vec3 origin, Mat3 rotation, Vec3 scale)` | 构造函数 |
| `AsMatrixFrame` | `public MatrixFrame AsMatrixFrame` | 属性 |
| `CreateFromMatrixFrame` | `public static Transformation CreateFromMatrixFrame(MatrixFrame matrixFrame)` | 方法 |
| `CreateFromRotation` | `public static Transformation CreateFromRotation(Mat3 rotation)` | 方法 |
| `TransformToParent` | `public Vec3 TransformToParent(Vec3 v)` | 方法 |
| `TransformToParent` | `public Transformation TransformToParent(Transformation t)` | 方法 |
| `TransformToLocal` | `public Vec3 TransformToLocal(Vec3 v)` | 方法 |
| `TransformToLocal` | `public Transformation TransformToLocal(Transformation t)` | 方法 |
| `Rotate` | `public void Rotate(float radian, Vec3 axis)` | 方法 |
| `operator` | `public static bool operator` | 运算符 |
| `ApplyScale` | `public void ApplyScale(Vec3 vec3)` | 方法 |
| `!` | `public static bool operator !` | 运算符 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
