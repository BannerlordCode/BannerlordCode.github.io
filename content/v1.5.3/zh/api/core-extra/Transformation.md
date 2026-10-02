---
title: "Transformation"
description: "Transformation 的自动生成类参考。"
---
# Transformation

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Transformation `
**Base:** System.Object
**Source:** TaleWorlds.Library/Transformation.cs

## 概述

`Transformation` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/Transformation.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateFromMatrixFrame
`public static Transformation CreateFromMatrixFrame(MatrixFrame matrixFrame) `

### CreateFromRotation
`public static Transformation CreateFromRotation(Mat3 rotation) `

### TransformToParent
`public Vec3 TransformToParent(Vec3 v) `
`public Transformation TransformToParent(Transformation t) `

### TransformToLocal
`public Vec3 TransformToLocal(Vec3 v) `
`public Transformation TransformToLocal(Transformation t) `

### Rotate
`public void Rotate(float radian,Vec3 axis) `

### ApplyScale
`public void ApplyScale(Vec3 vec3) `

### Equals
`public override bool Equals(object obj) `

### GetHashCode
`public override int GetHashCode() `

### ToString
`public override string ToString() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
